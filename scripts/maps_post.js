
// Count all markers
function cont_markers() {
    $(".marker-count").each(function() {
        var a = $(this).parent().attr("id").substr(6, 7),
            b = 0;
        $(".marker-category li").not(".hide").each(function() {
            for (var c = $(this).attr("id").substr(2), d = 0; d < allMarkersArr.length; d++)
				allMarkersArr[d].indexOf("level" + a + c) > -1 && b++
        }), 
		0 == b ? $(this).hide() : $(this).text(b).show()
    })
}

// Main processing: wait until parsing all CSV data
function processMap() {
	if (isCsvLoaded) {
		
		var allMarkers = L.layerGroup(
			arrMarkers
		);

		// Current map
		window.openedMap = $(".leaflet-map").attr("id");

		// Current level of map
		window.openedMapID = $(".change-level.active").attr("id").substr(6, 7);

		// window.openedMapMarkers = "level" + openedMapID + "markers", 

		// SideBar show/hide
		$("#sidebar-hide").click(function() {
			$("#sidebar").hasClass("hidden") ? ($("#sidebar").removeClass("hidden"), $(this).removeClass("hidden"), $("#level-change").removeClass("hidden")) : ($("#sidebar").addClass("hidden"), $(this).addClass("hidden"), $("#level-change").addClass("hidden"))
		});

		// Load icons for all category items
		$(".marker-category li").each(function() {
			var a = $(this).attr("id").substr(2);
			$(this).css("background", "url('img/icons/" + a + ".png') no-repeat left")
		});

		window[openedMap].addLayer(allMarkers);

		window.allMarkersArr = $(".leaflet-marker-icon").map(function() {
			return $(this).prop("alt").split(" ")[0]
		}).get(), 

		// SearchBar dropdown: select
		$("#searchbar").chosen({
			allow_single_deselect: !0
		}), 

		// SearchBar dropdown: input
		$("#searchbar").change(function() {
			var a = $("#searchbar").val(),
				d = ($("#searchbar option:selected").text(), $("#searchbar option:selected").attr("label"), $(".change-level.active").attr("id").substr(6, 7));
			$(".leaflet-marker-icon").removeClass("search-item"), 
			$(".change-level .marker-count").removeClass("search"), 
			$("[title='" + a + "']").each(function() {
				var b = ($(this).attr("alt"), $(this).attr("alt").substr(6)),
					c = $(this).attr("alt").substring(5, 6);
				$("#level-" + c + " .marker-count").addClass("search"), 
				$(this).addClass("search-item"), 
				$("#m-" + b).removeClass("hide"), 
				$("[alt='level" + d + b + "']").show()
			}), 
			cont_markers()
		}), 

		$("path").each(function() {
			var a = $(this).attr("class").split(" ")[0];
			$(this).attr("alt", a)
		}), 

		// --- Init GUI SideBar --- start
		$("#m-weapons, #m-other").addClass("collapsed"), 

		// Hide all markers and paths on map
		$(".leaflet-marker-icon, path").hide(), 

		// Show all markers and paths of current level on map
		$("[alt*='level" + openedMapID + "']").show(), 

		$("#m-stairsupdown, #m-container, #m-conceal").addClass("hide"), 

		$("[alt*='conceal'], [alt*='container']").hide(), 

		$("#m-other h1, #m-other li").addClass("hide"), 

		$("#m-other li").each(function() {
			var a = $(".change-level.active").attr("id").substr(6, 7),
				b = $(this).attr("id").substr(2),
				c = "level" + a + b;
			$("[alt='" + c + "']").hide()
		}), 
		// --- Init GUI SideBar --- end

		// Count all markers
		cont_markers(), 

		// Level x button
		$(".change-level").click(function() {
			var a = $(".change-level.active").attr("id").substr(6, 7),
				b = $(this).attr("id").substr(6, 7);
			if ($("#disguises").hasClass("base")) {
				var e = "mapLevel" + a + "base",
					f = "mapLevel" + b + "base";
				window[openedMap].removeLayer(window[e]), 
				window[openedMap].addLayer(window[f])
			} else {
				var g = $("#disguises").attr("class"),
					e = "mapLevel" + a + g,
					f = "mapLevel" + b + g;
				window[openedMap].removeLayer(window[e]), 
				window[openedMap].addLayer(window[f])
			}
			$(".leaflet-marker-icon, path").hide(), 
			$(".marker-category li").not(".hide").each(function() {
				var a = $(this).attr("id").substr(2),
					c = "level" + b + a;
				$("[alt*='" + c + "']").show()
			});
			var h = $("#searchbar option:selected").text();
			$("[title='" + h + "']").addClass("search-item"), 
			$(".change-level").removeClass("active"), 
			$(this).addClass("active")
		}), 

		// HIDE ALL button
		$("#all-hide").click(function() {
			$(".leaflet-marker-icon, path").hide(), 
			$(".marker-category li, .marker-category h1").each(function() {
				$(this).addClass("hide")
			}), 
			cont_markers()
		}), 

		// SHOW ALL button
		$("#all-show").click(function() {
			var a = $(".change-level.active").attr("id").substr(6, 7);
			$("[alt*='level" + a + "']").show(), 
			$(".marker-category li, .marker-category h1").each(function() {
				$(this).removeClass("hide")
			}), 
			cont_markers()
		}), 

		// Category: click
		$(".marker-category h1").each(function() {
			$(this).click(function() {
				$(this).parent().hasClass("collapsed") ? $(this).parent().removeClass("collapsed") : $(this).parent().addClass("collapsed")
			})
		}), 

		// Sub-Category open/close: click
		$(".marker-sub-toggle").each(function() {
			$(this).click(function() {
				var a = $(this).prev().attr("id"),
					b = "#" + a + "-sub";
				$(b).hasClass("show") ? ($(this).removeClass("collapse"), $(b).removeClass("show")) : ($(this).addClass("collapse"), $(b).addClass("show"))
			})
		}), 

		// Category show/hide: click
		$(".marker-category .eye").each(function() {
			$(this).click(function() {
				$(this).parent().find("h1").hasClass("hide") ? ($(this).parent().find("h1").removeClass("hide"), $(this).parent().find("li").each(function() {
					var a = $(".change-level.active").attr("id").substr(6, 7),
						b = $(this).attr("id").substr(2),
						c = "level" + a + b;
					$(this).removeClass("hide"), 
					$("[alt='" + c + "']").show()
				})) : ($(this).parent().find("h1").addClass("hide"), $(this).parent().find("li").each(function() {
					var a = $(".change-level.active").attr("id").substr(6, 7),
						b = $(this).attr("id").substr(2),
						c = "level" + a + b;
					$(this).addClass("hide"), 
					$("[alt='" + c + "']").hide()
				})), 
				cont_markers()
			})
		}), 

		// Sub-Category: click
		$(".marker-sub").each(function() {
			$(this).click(function() {
				$(this).parent().find(".marker-category-sub li").each($(this).hasClass("hide") ? function() {
					var a = $(".change-level.active").attr("id").substr(6, 7),
						b = $(this).attr("id").substr(2),
						c = "level" + a + b;
					$(this).removeClass("hide"), 
					$("[alt='" + c + "']").show()
				} : function() {
					var a = $(".change-level.active").attr("id").substr(6, 7),
						b = $(this).attr("id").substr(2),
						c = "level" + a + b;
					$(this).addClass("hide"),
					$("[alt='" + c + "']").hide()
				}), 
				cont_markers()
			})
		}), 

		// Category item: click
		$(".marker-category li").each(function() {
			$(this).click(function() {
				var a = $(".change-level.active").attr("id").substr(6, 7),
					b = $(this).attr("id").substr(2),
					c = "level" + a + b;
				$(this).hasClass("hide") ? ($(this).removeClass("hide"), $("[alt='" + c + "']").show()) : ($(this).addClass("hide"), $("[alt='" + c + "']").hide()), 
				cont_markers()
			})
		}), 

		// DISGUISES dropdown: click
		$("#disguises span").click(function() {
			$("#disguises-dropdown").hasClass("show") ? ($("#disguises-dropdown").removeClass("show"), $("#disguises").removeClass("active")) : ($("#disguises-dropdown").addClass("show"), $("#disguises").addClass("active"))
		}), 

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
		}), 

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
				a.indexOf("None") >= 0 ? ($("#disguises span").text("Disguises"), window[openedMap].removeLayer(window[f]), window[openedMap].addLayer(window[d])) : ($("#disguises span").text(a), window[openedMap].removeLayer(window[f]), window[openedMap].addLayer(window[g])), 
				$("#disguises").removeClass(), 
				$("#disguises").addClass(b), 
				$("#disguises-dropdown").removeClass("show")
			})
		});
	} else {
	   setTimeout(processMap, 100);
	}
}

/*--------------------------------------------------------------------------------*/

var drawnItems = new L.FeatureGroup().addTo(lmap);

var editActions = [
// 	L.Edit.Popup.Edit,
	L.Edit.Popup.Delete,
// 	L.ToolbarAction.extendOptions({
// 		toolbarIcon: { 
// 			className: 'leaflet-color-picker', 
// 			html: '<span class="fa fa-eyedropper"></span>' 
// 		},
// 		subToolbar: new L.Toolbar({ actions: [
// 			L.ColorPicker.extendOptions({ color: '#db1d0f' }),
// 			L.ColorPicker.extendOptions({ color: '#025100' }),
// 			L.ColorPicker.extendOptions({ color: '#ffff00' }),
// 			L.ColorPicker.extendOptions({ color: '#0000ff' })
// 		]})
// 	})
];

new L.DrawToolbar.Control({ 
	position: 'topright',
	className: 'leaflet-draw-toolbar',
	actions: [
// 		L.Draw.Polygon,
// 		L.Draw.Polyline,
		L.Draw.MarkerEx,
// 		L.Draw.Rectangle,
// 		L.Draw.Circle
	],
}).addTo(lmap);

lmap.on('draw:created', function(evt) {
	var	type = evt.layerType,
		layer = evt.layer;

	drawnItems.addLayer(layer);
	// layer.isEdit = false;
	// var editPopup;

	// layer.on('click', function(event) {
	// 	if (layer.isEdit) {
	// 		if (editPopup) {
	// 			lmap.removeLayer(editPopup);
	// 		}
	// 	} else {
	// 		editPopup = new L.EditToolbar.Popup(event.latlng, {
	// 			className: 'leaflet-draw-toolbar',
	// 			actions: editActions
	// 		});
	// 		editPopup.addTo(lmap, layer);
	// 	}
    //
	// 	layer.isEdit = !layer.isEdit;
	// });
});

// Parse CSV data
Papa.parse(dataUrl, {
	download: true,
	header: true,
	complete: processCsvData
});

processMap();
