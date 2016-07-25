
var MAX_GROUP = 5;
var MAX_P = 8;

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
		var groupsContainer = L.DomUtil.create('div', 'popup-groups-container', editContentNode);
		var markerContainer = L.DomUtil.create('div', 'popup-marker-container', editContentNode);
		var descriptionContainer = L.DomUtil.create('div', 'popup-desc-container', editContentNode);
		var buttonContainer = L.DomUtil.create('div', 'popup-button-container', editContentNode);

		L.DomUtil.create('span', 'popup-groups-label', groupsContainer).innerHTML = 'Groups:';
		this._groupInputs = [];
		this._groupNews = [];
		for (var i = 0; i < MAX_GROUP; i++) {
			var groupInput = this._groupInputs[i] = L.DomUtil.create('select', 'popup-group-select', groupsContainer);
			$(groupInput).hide();
			groupInput.id = i;
			groupInput.add(new Option('', 0));
			groupInput.add(new Option('(add new...)', -1));
			L.DomEvent.on(groupInput, 'change', this._onGroupChanged, this);

			var groupNew = this._groupNews[i] = L.DomUtil.create('input', 'popup-group-input', groupsContainer);
			$(groupNew).hide();
			groupNew.size = 10;
			groupNew.id = i;
			L.DomEvent.on(groupNew, 'keyup', this._onGroupNewKeyUp, this);
			L.DomEvent.on(groupNew, 'change', this._onGroupNewChanged, this);
		}

        // var option;
		// dbItem.data.forEach(function(rec) {
        //     var iconName = rec.icon;
        //     if (!iconName) {
        //         iconName = rec.item;
        //     }
        //     option = new Option(rec.name, rec.item);
        //     option.setAttribute('data-imagesrc', 'img/icons/' + iconName + '.png');
        //     itemInput.add(option);
        // });

		L.DomUtil.create('span', 'popup-marker-label', markerContainer).innerHTML = 'Marker:';

		L.DomUtil.create('span', 'popup-marker-x-label', markerContainer).innerHTML = '&nbsp;&nbsp;x:';
		this._xValue = L.DomUtil.create('span', 'popup-marker-x-text', markerContainer);
		L.DomUtil.create('span', 'popup-marker-y-label', markerContainer).innerHTML = '&nbsp;&nbsp;y:';
		this._yValue = L.DomUtil.create('span', 'popup-marker-y-text', markerContainer);

        L.DomUtil.create('span', 'popup-marker-qty-label', markerContainer).innerHTML = '<br>&nbsp;&nbsp;Quantity:';
        this._qtyInput = L.DomUtil.create('input', 'popup-marker-qty-text', markerContainer);
		this._qtyInput.size = 2;

		L.DomUtil.create('span', 'popup-marker-icon-label', markerContainer).innerHTML = '&nbsp;&nbsp;Red point:';
		this._iconCheck = L.DomUtil.create('input', 'popup-marker-icon-check', markerContainer);
		this._iconCheck.type = 'checkbox';

		L.DomUtil.create('span', 'popup-desc-label', descriptionContainer).innerHTML = 'Popup:';
		L.DomUtil.create('span', 'popup-br', descriptionContainer).innerHTML = '<br>';
		L.DomUtil.create('span', 'popup-indent ion-ios-circle-outline', descriptionContainer);
		L.DomUtil.create('span', 'popup-desc-item-label', descriptionContainer).innerHTML = 'Show:';
		this._descCheck = L.DomUtil.create('input', 'popup-desc-item-check', descriptionContainer);
		this._descCheck.type = 'checkbox';

		// var descriptionInput = this._descriptionInput = L.DomUtil.create('input', 'marker-description-text', descriptionContainer);
		// descriptionInput.style.height = '100px';
		// descriptionInput.style.width = '290px';

		L.DomUtil.create('span', 'popup-br', descriptionContainer).innerHTML = '<br>';
		L.DomUtil.create('span', 'popup-indent ion-ios-circle-outline', descriptionContainer);
		L.DomUtil.create('span', 'popup-desc-item-label', descriptionContainer).innerHTML = 'img:';
        this._imgInput = L.DomUtil.create('input', 'popup-desc-item-text', descriptionContainer);

		L.DomUtil.create('span', 'popup-br', descriptionContainer).innerHTML = '<br>';
		L.DomUtil.create('span', 'popup-indent ion-ios-circle-outline', descriptionContainer);
		L.DomUtil.create('span', 'popup-desc-item-label', descriptionContainer).innerHTML = 'h2:';
        this._h2Input = L.DomUtil.create('input', 'popup-desc-item-text', descriptionContainer);

		L.DomUtil.create('span', 'popup-br', descriptionContainer).innerHTML = '<br>';
		L.DomUtil.create('span', 'popup-indent ion-ios-circle-outline', descriptionContainer);
        L.DomUtil.create('span', 'popup-desc-item-label', descriptionContainer).innerHTML = 'h1:';
        this._h1Input = L.DomUtil.create('input', 'popup-desc-item-text', descriptionContainer);

		this._descPContainer = L.DomUtil.create('div', 'popup-desc-p-container', descriptionContainer);
		this._descNewPContainer = L.DomUtil.create('div', 'popup-desc-new-p-container', descriptionContainer);

		// TODO (low priority) check unique keys in marker_<map> collection: level, x, y

		var saveButton = L.DomUtil.create('button', 'popup-save-button', buttonContainer);
		saveButton.innerHTML = 'Save';
		L.DomEvent.disableClickPropagation(saveButton);
		L.DomEvent.on(saveButton, 'click', this._onSaveButtonClick, this);
        L.DomUtil.create('span', '', buttonContainer).innerHTML = '&nbsp;&nbsp;';

		var cancelButton = L.DomUtil.create('button', 'popup-cancel-button', buttonContainer);
		cancelButton.innerHTML = 'Cancel';
		L.DomEvent.disableClickPropagation(cancelButton);
		L.DomEvent.on(cancelButton, 'click', this._onCancelButtonClick, this);
		L.DomUtil.create('span', '', buttonContainer).innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

		var deleteButton = this._deleteButton = L.DomUtil.create('button', 'popup-delete-button', buttonContainer);
		deleteButton.innerHTML = 'Delete';
		L.DomEvent.disableClickPropagation(deleteButton);
		L.DomEvent.on(deleteButton, 'click', this._onDeleteButtonClick, this);
	},

	// TODO onchange for Groups select
	// when change 1 Group, lock prev Group
	// click Done button when finished all Group (cannot go back to edit Group, cancel to do again)
	// when change 1 Group to Add new..., change to text box, save new Group
	_onGroupChanged: function (e) {
		var groupInputs = this._groupInputs;
		var groupNews = this._groupNews;
		var changedGroupInput = e.target;
		var changedGroupInputId = parseInt(changedGroupInput.id, 10);
		var groupId = parseInt(changedGroupInput.value, 10);

		if (groupId === -1) {
			$(groupInputs[changedGroupInputId]).hide();
			$(groupNews[changedGroupInputId]).show();
			groupNews[changedGroupInputId].focus();
		}

		for (var i = changedGroupInputId + 1; i < MAX_GROUP; i++) {
			if (groupId === -1) {
			// if ((groupId === -1) && (i === changedGroupInputId + 1)) {
				$(groupNews[i]).hide();
			}

			$(groupInputs[i]).empty();
			groupInputs[i].add(new Option('', 0));
			groupInputs[i].add(new Option('(add new...)', -1));

			if ((groupId > 0) && (i === (changedGroupInputId + 1))) {
				var groupList = collGroup.chain().find({'parent-id': groupId}).simplesort('$loki').data();
				groupList.forEach(function (rec) {
					var option = new Option(rec['text'], rec['$loki']);
					groupInputs[i].add(option);
				});
				$(groupInputs[i]).show();
			} else {
				$(groupInputs[i]).hide();
			}
		}
	},

	_onGroupNewKeyUp: function (e) {
		var changedGroupNew = e.target;
		var changedGroupNewId = parseInt(changedGroupNew.id, 10);

		if (changedGroupNew.value.length == 0) {
			var groupInput = this._groupInputs[changedGroupNewId];
			var groupNew = this._groupNews[changedGroupNewId];
			$(groupNew).hide();
			groupInput.value = 0;
			$(groupInput).show();
			groupInput.focus();
		}
	},

	_onGroupNewChanged: function (e) {
	},

	_onPPlusClicked: function () {
		var count = this._descPContainer.childElementCount;
		var pContainer = L.DomUtil.create('div', 'popup-p-container', this._descPContainer);
		var pMinusButtons = L.DomUtil.create('span', 'popup-p-button ion-minus', pContainer);
		L.DomEvent.on(pMinusButtons, 'click', this._onPMinusClicked, this);
		L.DomUtil.create('span', 'popup-p-label', pContainer).innerHTML = 'p:';
		var pId = L.DomUtil.create('select', 'popup-p-select', pContainer);
		var pText = L.DomUtil.create('input', 'popup-p-text', pContainer);
		pText.size = 18;
		var option;
		collP.data.forEach(function(rec) {
			option = new Option(rec['class'], rec['$loki']);
			pId.add(option);
		});

		$('.popup-p-text').on('focus', function(){
			var findPId = parseInt($(this).prev()[0].value, 10);
			console.log(findPId);
			$(this).autocomplete({
				source: function(request, response) {
					var filteredArray = $.map(collDescP.chain().find({'p-id': findPId}).data(), function(item) {
						if (item['text'].toLowerCase().startsWith(request.term.toLowerCase())) {
							return item['text'];
						} else {
							return null;
						}
					});
					response(filteredArray);
				},
			});
		});

		if (count >= (MAX_P - 1)) {
			$(this._descNewPContainer).empty();
		}
	},

	_onPMinusClicked: function (e) {
		var count = this._descPContainer.childElementCount;
		$(e.target.parentNode).remove();
		if (count == MAX_P) {
			var pPlusButton = L.DomUtil.create('span', 'popup-p-button ion-plus', this._descNewPContainer);
			L.DomEvent.on(pPlusButton, 'click', this._onPPlusClicked, this);
			L.DomUtil.create('span', 'popup-p-label', this._descNewPContainer).innerHTML = 'p';
		}
	},

	_updateContent: function () {
		var marker = this._source;

		if (isEditMode) {
			var groupInputs = this._groupInputs;
			for (var i = 0; i <= marker._groupIds.length; i++) {
				var findGroupId;
				if (i == 0) {
					findGroupId = 0;
				} else if (i == marker._groupIds.length) {
					findGroupId = marker._groupIds[0];
				} else {
					findGroupId = marker._groupIds[marker._groupIds.length - i];
				}

				var groupList = collGroup.chain().find({'parent-id': findGroupId}).simplesort('$loki').data();
				groupList.forEach(function(rec) {
					var option = new Option(rec['text'], rec['$loki']);
					groupInputs[i].add(option);
				});

				if (i < marker._groupIds.length) {
					groupInputs[i].value = marker._groupIds[marker._groupIds.length - i - 1];
				}

				$(groupInputs[i]).show();
			}

			this._qtyInput.value = marker._quantity;
			this._iconCheck.checked = marker._iconId;
			this._descCheck.checked = marker._desc;
			this._xValue.innerHTML = marker.getLatLng().lng;
			this._yValue.innerHTML = marker.getLatLng().lat;

			this._imgInput.value = marker._descImg;
			this._h2Input.placeholder = marker._texts[1];
			this._h2Input.value = marker._descH2;
			this._h1Input.placeholder = marker._texts[0];
			this._h1Input.value = marker._descH1;

			$(this._descPContainer).empty();
			$(this._descNewPContainer).empty();

			for (i = 0; i < marker._descPIds.length; i++) {
				var pContainer = L.DomUtil.create('div', 'popup-p-container', this._descPContainer);
				var pMinusButton = L.DomUtil.create('span', 'popup-p-button ion-minus', pContainer);
				L.DomEvent.on(pMinusButton, 'click', this._onPMinusClicked, this);
				L.DomUtil.create('span', 'popup-p-label', pContainer).innerHTML = 'p:';
				var pId = L.DomUtil.create('select', 'popup-p-select', pContainer);
				var pText = L.DomUtil.create('input', 'popup-p-text', pContainer);
				pText.size = 18;
				var option;
				collP.data.forEach(function(rec) {
					option = new Option(rec['class'], rec['$loki']);
					pId.add(option);
				});

				pId.value = marker._descPIds[i];
				pText.value = marker._descPTexts[i];

				$('.popup-p-text').on('focus', function(){
					var findPId = parseInt($(this).prev()[0].value, 10);
					$(this).autocomplete({
						source: function(request, response) {
							var filteredArray = $.map(collDescP.chain().find({'p-id': findPId}).data(), function(item) {
								if (item['text'].toLowerCase().startsWith(request.term.toLowerCase())) {
									return item['text'];
								} else {
									return null;
								}
							});
							response(filteredArray);
						},
					});
				});
			}

			if (i < MAX_P) {
				var pPlusButton = L.DomUtil.create('span', 'popup-p-button ion-plus', this._descNewPContainer);
				L.DomEvent.on(pPlusButton, 'click', this._onPPlusClicked, this);
				L.DomUtil.create('span', 'popup-p-label', this._descNewPContainer).innerHTML = 'p';
			}
		} else {
			var descImg = "";
			var descH2 = "";
			var descH1 = "";
			var ps = "";

			if (marker._descImg) {
				descImg = "<img src='img/map_" + mapName + "/screenshots/" + marker._descImg + "'>";
			}

			if (marker._descH2) {
				descH2 = marker._descH2;
			} else {
				descH2 = marker._texts[1];
			}
			descH2 = "<h2>" + descH2 + "</h2>";

			if (marker._descH1) {
				descH1 = marker._descH1;
			} else {
				descH1 = marker._texts[0];
			}
			descH1 = "<h1>" + descH1 + "</h1>";

			for (i = 0; i < marker._descPIds.length; i++) {
				ps += "<p class='" + collP.get(marker._descPIds[i])['class'] + "'>" + marker._descPTexts[i] + "</p>";
			}

			this._contentNode.innerHTML = descImg + descH2 + descH1 + ps;
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

            // $(".marker-item-select").ddslick({
            //     height: 200
            // });
            // $(".marker-icon-select").ddslick({
            //     height: 100
            // });
		} else {
			$(this._editContentNode).hide();
			$(this._contentNode).show();
		}

		L.Popup.prototype._updateLayout.call(this);
	},

	_onSaveButtonClick: function (e) {
		var marker = this._source;

        // $(".marker-item-select").ddslick('destroy');
        // $(".marker-icon-select").ddslick('destroy');

		// Update DB
		if (marker._id) {
			// Process for existed record
			var updMarker = dbMarker.get(marker._id, false);
			updMarker.x = marker.getLatLng().lng;
			updMarker.y = marker.getLatLng().lat;
			updMarker.item = this._itemInput.value;
			updMarker.icon = this._iconInput.value;
			updMarker.title = this._titleInput.value;
			updMarker.description = this._descriptionInput.value;
			dbMarker.update(updMarker);
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
			});

			// Update marker id
			marker._id = addedRecord.$loki;
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
		// TODO reset values

		this._onCloseButtonClick(e);
	},

	_onDeleteButtonClick: function () {
		var marker = this._source;

		// Update DB
		dbMarker.remove(dbMarker.get(marker._id, false));

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
	initialize: function (id, level, x, y, groupId, iconId, quantity, options) {
		L.Marker.prototype.initialize.call(this, L.latLng(y, x), options);

		this._id = id;
		this._level = level;
		this._groupId = groupId;
		this._iconId = iconId;
		this._quantity = quantity;

		var iconName;
		var mainGroupName = '';
		this._groupIds = [];
		this._texts = [];
		this._desc = -1;
		this._descImg = '';
		this._descH2 = '';
		this._descH1 = '';
		this._descPIds = [];
		this._descPTexts = [];
		this._label = '';
		var group;

		var lGroupId = this._groupId;
		var lGroup;
		var lMainGroup;
		var lIsIconNameGot = false;

		for (var i = 0; ; i++) {
			if (!lIsIconNameGot) {
				lMainGroup = collMainGroup.findOne({'group-id': lGroupId});
				if (lMainGroup) {
					if (mainGroupName === '') {
						mainGroupName = lMainGroup.name;
						iconName = mainGroupName;
					}
					if (lMainGroup.name && lMainGroup.icon) {
						iconName = lMainGroup.name;
						lIsIconNameGot = true;
					}
				}
			}

			lGroup = collGroup.get(lGroupId);
			if (lGroup == null) {
				break;
			}

			this._groupIds[i] = lGroup['$loki'];
			this._texts[i] = lGroup['text'];

			if (i == 0) {
				group = lGroup;
				this._desc = lGroup['desc'];
				this._descImg = lGroup['desc-img'];
				this._descH2 = lGroup['desc-h2'];
				this._descH1 = lGroup['desc-h1'];
			}

			lGroupId = lGroup['parent-id'];
			if (lGroupId == 0) {
				break;
			}
		}
		if (!group) {
			// ERROR
		}

		var joinDescP = collGroupDescP.eqJoin([group], 'group-id', '$loki');
		var idx = 0;
		for (i = 0; i < joinDescP.data().length; i++) {
			if (Object.keys(joinDescP.data()[i].right).length) {
				var descP = collDescP.get(joinDescP.data()[i].left['$loki']);
				// var p = collP.get(descP['p-id']);
				this._descPIds[idx] = descP['p-id'];
				this._descPTexts[idx] = descP['text'];
				idx++;
			}
		}

		if (this._iconId === 1) {
			iconName = 'point_red';
		}

		this.options.icon = new L.IconEx({iconUrl: 'img/icons/' + iconName + '.png'});
		this.options.alt = 'level' + this._level + mainGroupName;
		this.options.title = this._texts[1] + ': ' + this._texts[0];

		this._label = this._texts[0];
		if (this._label) {
			if (this._quantity) {
				this._label += ' (x' + this._quantity + ')';
			}
			this.bindLabel(this._label);
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
		// prevent open popup
		if (!isEditMode && !this._desc) {
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
			// counter = counter + dbMarker.chain().find({'$and': [
			// 		{level: tarLevel},
			// 		{item: tarItem}
			// ]}).count();
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
	if (_NEW_DATA_) {
		// if (isTblItemLoaded && isTblMarkerMapLoaded) {
		if (isPLoaded && isDescPLoaded && isGroupLoaded && isGroupDescPLoaded && isMainGroupLoaded && isMapMarkerLoaded ) {
			console.log(db);
		    isDataLoaded = true;
		}
	}
	if (isDataLoaded) {
        // Current map
        window.openedMap = $(".leaflet-map").attr("id");

		// dbMarker.data.forEach(function(rec) {
        //     allMarkers.addLayer(new L.MarkerEx(rec.$loki, rec.level, rec.x, rec.y, rec.item, rec.icon, rec.title, rec.description));
        // });
		collMapMarker.data.forEach(function(rec) {
			allMarkers.addLayer(new L.MarkerEx(rec['$loki'], rec['level'], rec['x'], rec['y'], rec['group-id'], rec['icon-id'], rec['quantity']));
		});

        window[openedMap].addLayer(allMarkers);

		// Current level of map
		window.openedMapID = $(".change-level.active").attr("id").substr(6, 7);

		// Loading
		// $(window).load(function() {
		// 	$(".loading-block").fadeOut("slow");
		// 	$("body").css("display", "block");
		// });

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

		// Sidebar icons
		$(".marker-category li").each(function() {
			var itemId = $(this).attr('id').substr(2);
			if (!itemId.startsWith("sab-") && !itemId.startsWith("dis-")) {
				$(this).css("background", "url('img/icons/" + itemId + ".png') no-repeat left");
			}
		});

		// SearchBar dropdown: select
		$("#searchbar").chosen({
			allow_single_deselect: true
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
	var blobDb = new Blob([db.serialize()]);
	//noinspection JSUnresolvedFunction,JSUnresolvedVariable
	$("#download-db").attr('href', window.URL.createObjectURL(blobDb));
	$("#download-db").attr('download', 'local_map_' + mapName + '.json');
});

/*--------------------------------------------------------------------------------*/

var _NEW_DATA_ = true;

var db = new loki('hmm', {autosave: true, autoload: true});
// var dbItem;
// var dbMarker;
var collP;
var collDescP;
var collGroup;
var collGroupDescP;
var collMainGroup;
var collMapMarker;

var isPLoaded = false;
var isDescPLoaded = false;
var isGroupLoaded = false;
var isGroupDescPLoaded = false;
var isMainGroupLoaded = false;
var isMapMarkerLoaded = false;
var isDataLoaded = false;

var isEditMode = false;
var isEditing = false;

if (_NEW_DATA_) {
	// dbItem = db.addCollection('item');
	// dbMarker = db.addCollection('marker_' + mapName);
	collP = db.addCollection('p');
	collDescP = db.addCollection('desc-p');
	collGroup = db.addCollection('group');
	collGroupDescP = db.addCollection('group-desc-p');
	collMainGroup = db.addCollection('main-group');
	collMapMarker = db.addCollection('marker_' + mapName);
}

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

if (_NEW_DATA_) {
	// var isTblItemLoaded = false;
	// var isTblMarkerMapLoaded = false;

	// Load DB master table [item]
	// $.get("data/item.json", function(data) {
	// 	dbItem.insert(JSON.parse(data));
	//
	// 	// dbItem.data = JSON.parse(data);
	//
	// 	isTblItemLoaded = true;
	// }, 'text');

	// Load DB table [marker_<map>]
	// $.get("data/marker_" + mapName + ".json", function(data) {
	// 	dbMarker.insert(JSON.parse(data));
	//
	// 	// dbMarker.data = JSON.parse(data);
	//
	// 	isTblMarkerMapLoaded = true;
	// }, 'text');

	$.get("data/p.json", function(data) {
		collP.insert(JSON.parse(data));
		isPLoaded = true;
	}, 'text');

	$.get("data/desc-p.json", function(data) {
		collDescP.insert(JSON.parse(data));
		isDescPLoaded = true;
	}, 'text');

	$.get("data/group.json", function(data) {
		collGroup.insert(JSON.parse(data));
		isGroupLoaded = true;
	}, 'text');

	$.get("data/group-desc-p.json", function(data) {
		collGroupDescP.insert(JSON.parse(data));
		isGroupDescPLoaded = true;
	}, 'text');

	$.get("data/main-group.json", function(data) {
		collMainGroup.insert(JSON.parse(data));
		isMainGroupLoaded = true;
	}, 'text');

	$.get("data/marker_" + mapName + ".json", function(data) {
		collMapMarker.insert(JSON.parse(data));
		isMapMarkerLoaded = true;
	}, 'text');
} else {
	// Load whole database from remote server
	$.get("data/map_" + mapName + ".json", function(data) {
		db.loadJSON(data, null);

		// dbItem = db.getCollection('item');
		// dbMarker = db.getCollection('marker_' + mapName);

		isDataLoaded = true;
	}, 'text');
}

processMap();
