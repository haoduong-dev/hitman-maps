

var dbItem = TAFFY();
var dbMarker = TAFFY();
var isEditMode = false;
var isEditing = false;


L.IconEx = L.Icon.extend({
    options: {
        iconSize:     [32, 32],
        iconAnchor:   [16, 16],
        popupAnchor:  [-2, -15]
    }
});

L.PopupEx = L.Popup.extend({
	_initLayout: function () {
		L.Popup.prototype._initLayout.call(this);

		var wrapper = this._wrapper;

		var editContentNode = this._editContentNode = L.DomUtil.create('div','popup-edit-content', wrapper);
		L.DomEvent.disableScrollPropagation(this._editContentNode);

		var itemContainer = L.DomUtil.create('div', 'popup-item-container', editContentNode);
        var iconContainer = L.DomUtil.create('div', 'popup-icon-container', editContentNode);
		var titleContainer = L.DomUtil.create('div', 'popup-title-container', editContentNode);
		var descriptionContainer = L.DomUtil.create('div', 'popup-description-container', editContentNode);
		var buttonContainer = L.DomUtil.create('div', 'popup-button-container', editContentNode);

		var itemLabel = L.DomUtil.create('div', 'marker-item-label', itemContainer);
		itemLabel.innerHTML = 'Item:';
		var itemInput = this._itemInput = L.DomUtil.create('select', 'marker-item-select', itemContainer);

        var option;
        dbItem().each(function(record) {
            var iconName = record.icon;
            if (!iconName) {
                iconName = record.item;
            }
            option = new Option(record.name, record.item);
            option.setAttribute('data-imagesrc', 'img/icons/' + iconName + '.png');
            itemInput.add(option);
        });

        var iconLabel = L.DomUtil.create('div', 'marker-icon-label', iconContainer);
        iconLabel.innerHTML = 'Icon:';
        var iconInput = this._iconInput = L.DomUtil.create('select', 'marker-icon-select', iconContainer);
        iconInput.add(new Option('', ''));
        option = new Option('Sabotage', 'sabotage');
        option.setAttribute('data-imagesrc', 'img/icons/sabotage.png');
        iconInput.add(option);
        option = new Option('Distraction', 'distraction');
        option.setAttribute('data-imagesrc', 'img/icons/distraction.png');
        iconInput.add(option);
        option = new Option('Red Point', 'point_red');
        option.setAttribute('data-imagesrc', 'img/icons/point_red.png');
        iconInput.add(option);

		var titleLabel = L.DomUtil.create('div', 'marker-title-label', titleContainer);
		titleLabel.innerHTML = 'Title:';
		var titleInput = this._titleInput = L.DomUtil.create('input', 'marker-title-text', titleContainer);
		titleInput.size = 37;

		var descriptionLabel = L.DomUtil.create('div', 'marker-description-label', descriptionContainer);
		descriptionLabel.innerHTML = 'Description:';
		var descriptionInput = this._descriptionInput = L.DomUtil.create('textarea', 'marker-description-text', descriptionContainer);
		descriptionInput.style.height = '100px';
		descriptionInput.style.width = '290px';

		var saveButton = L.DomUtil.create('button', 'popup-save-button', buttonContainer);
		saveButton.innerHTML = 'Save';
		L.DomEvent.disableClickPropagation(saveButton);
		L.DomEvent.on(saveButton, 'click', this._onSaveButtonClick, this);

		var cancelButton = L.DomUtil.create('button', 'popup-cancel-button', buttonContainer);
		cancelButton.innerHTML = 'Cancel';
		L.DomEvent.disableClickPropagation(cancelButton);
		L.DomEvent.on(cancelButton, 'click', this._onCancelButtonClick, this);

		var deleteButton = this._deleteButton = L.DomUtil.create('button', 'popup-delete-button', buttonContainer);
		deleteButton.innerHTML = 'Delete';
		L.DomEvent.disableClickPropagation(deleteButton);
		L.DomEvent.on(deleteButton, 'click', this._onDeleteButtonClick, this);
	},

	_updateContent: function () {
		var marker = this._source;

		if (isEditMode) {
			this._itemInput.value = marker._item;
            this._iconInput.value = marker._iconName;
			this._titleInput.value = marker._title;
			this._descriptionInput.value = marker._description;
		} else {
			this._contentNode.innerHTML = marker._description;
		}

		this.fire('contentupdate');
	},

	_updateLayout: function () {
		if (isEditMode) {
			$(this._contentNode).hide();
			$(this._editContentNode).show();

			if (this._source._id) {
				$(this._deleteButton).show();
			} else {
				$(this._deleteButton).hide();
			}

            $(".marker-item-select").ddslick({
                height: 200
            });
            $(".marker-icon-select").ddslick({
                height: 100
            });
		} else {
			$(this._editContentNode).hide();
			$(this._contentNode).show();
		}

		L.Popup.prototype._updateLayout.call(this);
	},

	_onSaveButtonClick: function (e) {
		var marker = this._source;

        $(".marker-item-select").ddslick('destroy');
        $(".marker-icon-select").ddslick('destroy');

		// Update DB
		if (marker._id) {
			// Process for existed record
			dbMarker(marker._id).update({
                x: marker.getLatLng().lng,
                y: marker.getLatLng().lat,
				item: this._itemInput.value,
                icon: this._iconInput.value,
				title: this._titleInput.value,
				description: this._descriptionInput.value
			});
		} else {
			// Process for new record
			var addedRecord = dbMarker.insert({
				level: parseInt(marker._level, 10),
                x: marker.getLatLng().lng,
                y: marker.getLatLng().lat,
				item: this._itemInput.value,
                icon: this._iconInput.value,
				title: this._titleInput.value,
				description: this._descriptionInput.value
			}).first();

			// Update marker id
			marker._id = addedRecord.___id;
		}

		// Update marker: internal var
		marker._item = this._itemInput.value;
        marker._iconName = this._iconInput.value;
		marker._title = this._titleInput.value;
		marker._description = this._descriptionInput.value;

		// Update marker: icon and alt
        var iconName = marker._item;
        if (marker._iconName) {
            iconName = marker._iconName;
        }
        marker.setIcon(new L.IconEx({iconUrl: "img/icons/" + iconName + ".png"}));
		marker._icon.alt = 'level' + marker._level + marker._item;

		// Update marker: label
		if (marker._title) {
			marker.bindLabel(marker._title);
		} else {
			marker.unbindLabel();
		}

		// close popup
		this._onCloseButtonClick(e);
	},

	_onCancelButtonClick: function (e) {
		this._onCloseButtonClick(e);
	},

	_onDeleteButtonClick: function () {
		var marker = this._source;

		// Update DB
		dbMarker(marker._id).remove();

		// Remove marker from map
		this._map.removeLayer(marker);
	},

	onAdd: function (map) {
		L.Popup.prototype.onAdd.call(this, map);

		if (isEditMode) {
			isEditing = true;

            this._source.dragging.enable();
		}
	},

	onRemove: function (map) {
		L.Popup.prototype.onRemove.call(this, map);

		if (isEditMode) {
			isEditing = false;

            this._source.dragging.disable();

			// Process for new record
			if (!this._source._id) {
				// Remove marker from map
				map.removeLayer(this._source);
			}
		}
	}
});

L.Handler.MarkerDragEx = L.Handler.MarkerDrag.extend({
    _onDragStart: function () {
        this._marker
            .fire('movestart')
            .fire('dragstart');
    }
});

L.MarkerEx = L.Marker.extend({
	initialize: function (id, level, x, y, item, icon, title, description, options) {
		L.Marker.prototype.initialize.call(this, L.latLng(y, x), options);

		this._id = id;
		this._level = level;
		this._item = item;
        this._iconName = icon;
		this._title = title;
		this._description = description;

        var iconName = this._item;
        if (this._iconName) {
            iconName = this._iconName;
        }

		this.options.icon = new L.IconEx({iconUrl: "img/icons/" + iconName + ".png"});
		this.options.alt = 'level' + this._level + this._item;

		if (title) {
			this.bindLabel(title);
		}

		this.bindPopup(new L.PopupEx());
	},

    onAdd: function (map) {
        this._map = map;

        map.on('viewreset', this.update, this);

        this._initIcon();
        this.update();
        this.fire('add');

        if (map.options.zoomAnimation && map.options.markerZoomAnimation) {
            map.on('zoomanim', this._animateZoom, this);
        }
    },

    _initInteraction: function () {

        if (!this.options.clickable) { return; }

        // TODO refactor into something shared with Map/Path/etc. to DRY it up

        var icon = this._icon,
            events = ['dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu'];

        L.DomUtil.addClass(icon, 'leaflet-clickable');
        L.DomEvent.on(icon, 'click', this._onMouseClick, this);
        L.DomEvent.on(icon, 'keypress', this._onKeyPress, this);

        for (var i = 0; i < events.length; i++) {
            L.DomEvent.on(icon, events[i], this._fireMouseEvent, this);
        }

        if (L.Handler.MarkerDragEx) {
            this.dragging = new L.Handler.MarkerDragEx(this);

            if (this.options.draggable) {
                this.dragging.enable();
            }
        }
    },

	openPopup: function () {
		// prevent open popup when _description is empty
		if (!isEditMode && !this._description) {
			return;
		}

		L.Marker.prototype.openPopup.call(this);
	}
});

L.Draw.MarkerEx = L.Draw.Marker.extend({
	options: {
		icon: L.divIcon({iconSize: [0, 0]})
	},

	addHooks: function () {
		if (isEditMode) {
			isEditing = true;
		}

		L.Draw.Marker.prototype.addHooks.call(this);
	},

	removeHooks: function () {
		if (isEditMode) {
			isEditing = false;
		}

		L.Draw.Marker.prototype.removeHooks.call(this);
	},

	_fireCreatedEvent: function () {
		var level = $(".change-level.active").attr("id").substr(6, 7);
		var item = "blank";

		var marker = new L.MarkerEx(0, level, this._marker.getLatLng().lng, this._marker.getLatLng().lat, item, '', '', '');
		L.Draw.Feature.prototype._fireCreatedEvent.call(this, marker);

		marker.openPopup();
	}
});

L.setOptions(L.Draw.MarkerEx.prototype, {
	subToolbar: new L.Toolbar({ actions: [L.Draw.Cancel] })
});


// Count all markers
function cont_markers() {
    $(".marker-count").each(function() {
        var tarLevel = parseInt($(this).parent().attr("id").substr(6, 7), 10);
        var counter = 0;
        $(".marker-category li").not(".hide").each(function() {
            var tarItem = $(this).attr("id").substr(2);
            counter = counter + dbMarker({level:tarLevel, item:tarItem}).count();
        });
		if (0 == counter) {
            $(this).hide();
        } else {
            $(this).text(counter).show();
        }
    });
}

// Main processing: wait until finished loading data from remote server
function processMap() {
    if (isTblItemLoaded && isTblMarkerMapLoaded) {
        isDataLoaded = true;
    }
	if (isDataLoaded) {

        dbItem.store("hmm_item");

        // Current map
        window.openedMap = $(".leaflet-map").attr("id");

        dbMarker.store("hmm_marker_" + mapName);
        dbMarker().each(function(record) {
            allMarkers.addLayer(new L.MarkerEx(record.___id, record.level, record.x, record.y, record.item, record.icon, record.title, record.description));
        });
        window[openedMap].addLayer(allMarkers);


		// Current level of map
		window.openedMapID = $(".change-level.active").attr("id").substr(6, 7);

		// SideBar show/hide
		$("#sidebar-hide").click(function() {
			if ($("#sidebar").hasClass("hidden")) {
                $("#sidebar").removeClass("hidden");
                $(this).removeClass("hidden");
                $("#level-change").removeClass("hidden");
            } else {
                $("#sidebar").addClass("hidden");
                $(this).addClass("hidden");
                $("#level-change").addClass("hidden");
            }
		});

		// Load icons for all category items
		$(".marker-category li").each(function() {
			var a = $(this).attr("id").substr(2);
            if (!a.startsWith("sab-") && !a.startsWith("dis-")) {
                $(this).css("background", "url('img/icons/" + a + ".png') no-repeat left");
            }
		});


		// SearchBar dropdown: select
		$("#searchbar").chosen({
			allow_single_deselect: !0
		});

		// SearchBar dropdown: input
		$("#searchbar").change(function() {
			var a = $("#searchbar").val(),
				d = ($("#searchbar option:selected").text(), $("#searchbar option:selected").attr("label"), $(".change-level.active").attr("id").substr(6, 7));
			$(".leaflet-marker-icon").removeClass("search-item");
			$(".change-level .marker-count").removeClass("search");
			$("[title='" + a + "']").each(function() {
				var b = ($(this).attr("alt"), $(this).attr("alt").substr(6)),
					c = $(this).attr("alt").substring(5, 6);
				$("#level-" + c + " .marker-count").addClass("search");
				$(this).addClass("search-item");
				$("#m-" + b).removeClass("hide");
				$("[alt='level" + d + b + "']").show();
			});
			cont_markers();
		});

		$("path").each(function() {
			var a = $(this).attr("class").split(" ")[0];
			$(this).attr("alt", a)
		});

		// --- Init GUI SideBar --- start
		$("#m-weapons, #m-other").addClass("collapsed");

		// Hide all markers and paths on map
		$(".leaflet-marker-icon, path").hide();

		// Show all markers and paths of current level on map
		$("[alt*='level" + openedMapID + "']").show();

		$("#m-stairsupdown, #m-container, #m-conceal").addClass("hide");

		$("[alt*='conceal'], [alt*='container']").hide();

		$("#m-other h1, #m-other li").addClass("hide");

		$("#m-other li").each(function() {
			var a = $(".change-level.active").attr("id").substr(6, 7),
				b = $(this).attr("id").substr(2),
				c = "level" + a + b;
			$("[alt='" + c + "']").hide();
		});
		// --- Init GUI SideBar --- end

		// Count all markers
		cont_markers();

		// EDIT button (go to EDIT mode)
		$("#mode-edit").click(function() {
			if (!isEditing) {
				if (isEditMode) {
					// Switch to normal mode
					$(this).removeClass("active");

                    $(".edit").hide();
				} else {
					// Switch to EDIT mode
					$(this).addClass("active");

                    $(".edit").show();
				}

				isEditMode = !isEditMode;
			}
		});

		// Level x button
		$(".change-level").click(function() {
			var a = $(".change-level.active").attr("id").substr(6, 7),
				b = $(this).attr("id").substr(6, 7);
			if ($("#disguises").hasClass("base")) {
				var e = "mapLevel" + a + "base";
                var f = "mapLevel" + b + "base";
				window[openedMap].removeLayer(window[e]);
				window[openedMap].addLayer(window[f]);
			} else {
				var g = $("#disguises").attr("class"),
					e = "mapLevel" + a + g,
					f = "mapLevel" + b + g;
				window[openedMap].removeLayer(window[e]);
				window[openedMap].addLayer(window[f]);
			}
			$(".leaflet-marker-icon, path").hide();
			$(".marker-category li").not(".hide").each(function() {
				var a = $(this).attr("id").substr(2),
					c = "level" + b + a;
				$("[alt*='" + c + "']").show();
			});
			var h = $("#searchbar option:selected").text();
			$("[title='" + h + "']").addClass("search-item");
			$(".change-level").removeClass("active");
			$(this).addClass("active");
		});

		// HIDE ALL button
		$("#all-hide").click(function() {
			$(".leaflet-marker-icon, path").hide();
			$(".marker-category li, .marker-category h1").each(function() {
				$(this).addClass("hide");
			});
			cont_markers();
		});

		// SHOW ALL button
		$("#all-show").click(function() {
			var a = $(".change-level.active").attr("id").substr(6, 7);
			$("[alt*='level" + a + "']").show();
			$(".marker-category li, .marker-category h1").each(function() {
				$(this).removeClass("hide");
			});
			cont_markers();
		});

		// Category: click
		$(".marker-category h1").each(function() {
			$(this).click(function() {
				if ($(this).parent().hasClass("collapsed")) {
                    $(this).parent().removeClass("collapsed");
                } else {
                    $(this).parent().addClass("collapsed");
                }
			});
		});

		// Sub-Category open/close: click
		$(".marker-sub-toggle").each(function() {
			$(this).click(function() {
				var a = $(this).prev().attr("id"),
					b = "#" + a + "-sub";
				if ($(b).hasClass("show")) {
                    $(this).removeClass("collapse");
                    $(b).removeClass("show");
                } else {
                    $(this).addClass("collapse");
                    $(b).addClass("show");
                }
			});
		});

		// Category show/hide: click
		$(".marker-category .eye").each(function() {
			$(this).click(function() {
				$(this).parent().find("h1").hasClass("hide") ? ($(this).parent().find("h1").removeClass("hide"), $(this).parent().find("li").each(function() {
					var a = $(".change-level.active").attr("id").substr(6, 7),
						b = $(this).attr("id").substr(2),
						c = "level" + a + b;
					$(this).removeClass("hide");
					$("[alt='" + c + "']").show();
				})) : ($(this).parent().find("h1").addClass("hide"), $(this).parent().find("li").each(function() {
					var a = $(".change-level.active").attr("id").substr(6, 7),
						b = $(this).attr("id").substr(2),
						c = "level" + a + b;
					$(this).addClass("hide");
					$("[alt='" + c + "']").hide();
				}));
				cont_markers();
			});
		});

		// Sub-Category: click
		$(".marker-sub").each(function() {
			$(this).click(function() {
				$(this).parent().find(".marker-category-sub li").each($(this).hasClass("hide") ?
                    function() {
                        var a = $(".change-level.active").attr("id").substr(6, 7),
                            b = $(this).attr("id").substr(2),
                            c = "level" + a + b;
                        $(this).removeClass("hide");
                        $("[alt='" + c + "']").show();
                    } :
                    function() {
                        var a = $(".change-level.active").attr("id").substr(6, 7),
                            b = $(this).attr("id").substr(2),
                            c = "level" + a + b;
                        $(this).addClass("hide");
                        $("[alt='" + c + "']").hide();
                    }
                );
				cont_markers();
			})
		});

		// Category item: click
		$(".marker-category li").each(function() {
			$(this).click(function() {
				var a = $(".change-level.active").attr("id").substr(6, 7),
					b = $(this).attr("id").substr(2),
					c = "level" + a + b;
				if ($(this).hasClass("hide")) {
                    $(this).removeClass("hide");
                    $("[alt='" + c + "']").show();
                } else {
                    $(this).addClass("hide");
                    $("[alt='" + c + "']").hide();
                }
				cont_markers();
			})
		});

		// DISGUISES dropdown: click
		$("#disguises span").click(function() {
			if ($("#disguises-dropdown").hasClass("show")) {
                $("#disguises-dropdown").removeClass("show");
                $("#disguises").removeClass("active");
            } else {
                $("#disguises-dropdown").addClass("show");
                $("#disguises").addClass("active");
            }
		});

		// DISGUISES dropdown: scroll
		$("#disguises-dropdown").niceScroll({
			autohidemode: !1,
			cursorcolor: "#fff",
			cursoropacitymin: .25,
			cursoropacitymax: .75,
			cursorwidth: "5px",
			cursorborder: "none",
			cursorborderradius: "3px",
			railpadding: {
				top: 10,
				right: 10,
				left: 10,
				bottom: 10
			}
		});

		// DISGUISES dropdown: select item
		$(".disg-item").each(function() {
			$(this).click(function() {
				var a = $(this).text(),
					b = $(this).attr("id").substr(5),
					c = $(".change-level.active").attr("id").substr(6, 7),
					d = "mapLevel" + c + "base",
					e = $("#disguises").attr("class").split(" ")[0],
					f = "mapLevel" + c + e,
					g = "mapLevel" + c + b;
				if (a.indexOf("None") >= 0) {
                    $("#disguises span").text("Disguises");
                    window[openedMap].removeLayer(window[f]);
                    window[openedMap].addLayer(window[d]);
                } else {
                    $("#disguises span").text(a);
                    window[openedMap].removeLayer(window[f]);
                    window[openedMap].addLayer(window[g]);
                }
				$("#disguises").removeClass();
				$("#disguises").addClass(b);
				$("#disguises-dropdown").removeClass("show");
			})
		});
	} else {
	   setTimeout(processMap, 100);
	}
}


$("#download-db").on("mousedown", function() {
	var blobDb = new Blob([dbMarker().stringify()]);
	$("#download-db").attr('href', window.URL.createObjectURL(blobDb));
	$("#download-db").attr("download", "db_marker.json");
});

/*--------------------------------------------------------------------------------*/

var drawnItems = new L.FeatureGroup().addTo(lmap);


new L.DrawToolbar.Control({ 
	position: 'topright',
	className: 'leaflet-draw-toolbar edit',
	actions: [
// 		L.Draw.Polygon,
// 		L.Draw.Polyline,
		L.Draw.MarkerEx
// 		L.Draw.Rectangle,
// 		L.Draw.Circle
	]
}).addTo(lmap);

lmap.on('draw:created', function(evt) {
	var	layer = evt.layer;

	drawnItems.addLayer(layer);
});


var isDataLoaded = false;
var isTblItemLoaded = false;
var isTblMarkerMapLoaded = false;

// Load data from remote server

// Load DB master table [item]
$.get("data/item.json", function(data) {
    var db = TAFFY(data);
    localStorage.removeItem("taffy_hmm_item");
    db.store("hmm_item");

    isTblItemLoaded = true;
}, 'text');

// Load DB table [marker_<map>]
$.get("data/marker_" + mapName + ".json", function(data) {
    var db = TAFFY(data);
    localStorage.removeItem("taffy_hmm_marker_" + mapName);
    db.store("hmm_marker_" + mapName);

    isTblMarkerMapLoaded = true;
}, 'text');

processMap();
