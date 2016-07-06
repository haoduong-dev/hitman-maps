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

window.openedMap = $(".leaflet-map").attr("id"), 

window.openedMapID = $(".change-level.active").attr("id").substr(6, 7), 

// window.openedMapMarkers = "level" + openedMapID + "markers", 

$("#sidebar-hide").click(function() {
    $("#sidebar").hasClass("hidden") ? ($("#sidebar").removeClass("hidden"), $(this).removeClass("hidden"), $("#level-change").removeClass("hidden")) : ($("#sidebar").addClass("hidden"), $(this).addClass("hidden"), $("#level-change").addClass("hidden"))
}), 

$(".marker-category li").each(function() {
    var a = $(this).attr("id").substr(2);
    $(this).css("background", "url('img/icons/" + a + ".png') no-repeat left")
}), 

window[openedMap].addLayer(allMarkers), 

window.allMarkersArr = $(".leaflet-marker-icon").map(function() {
    return $(this).prop("alt").split(" ")[0]
}).get(), 

$("#searchbar").chosen({
    allow_single_deselect: !0
}), 

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

$("#m-weapons, #m-other").addClass("collapsed"), 

$(".leaflet-marker-icon, path").hide(), 

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

cont_markers(), 

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

$("#all-hide").click(function() {
    $(".leaflet-marker-icon, path").hide(), 
	$(".marker-category li, .marker-category h1").each(function() {
        $(this).addClass("hide")
    }), 
	cont_markers()
}), 

$("#all-show").click(function() {
    var a = $(".change-level.active").attr("id").substr(6, 7);
    $("[alt*='level" + a + "']").show(), 
	$(".marker-category li, .marker-category h1").each(function() {
        $(this).removeClass("hide")
    }), 
	cont_markers()
}), 

$(".marker-category h1").each(function() {
    $(this).click(function() {
        $(this).parent().hasClass("collapsed") ? $(this).parent().removeClass("collapsed") : $(this).parent().addClass("collapsed")
    })
}), 

$(".marker-sub-toggle").each(function() {
    $(this).click(function() {
        var a = $(this).prev().attr("id"),
            b = "#" + a + "-sub";
        $(b).hasClass("show") ? ($(this).removeClass("collapse"), $(b).removeClass("show")) : ($(this).addClass("collapse"), $(b).addClass("show"))
    })
}), 

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
            $(this).addClass("hide"), $("[alt='" + c + "']").hide()
        }), 
		cont_markers()
    })
}), 

$(".marker-category li").each(function() {
    $(this).click(function() {
        var a = $(".change-level.active").attr("id").substr(6, 7),
            b = $(this).attr("id").substr(2),
            c = "level" + a + b;
        $(this).hasClass("hide") ? ($(this).removeClass("hide"), $("[alt='" + c + "']").show()) : ($(this).addClass("hide"), $("[alt='" + c + "']").hide()), 
		cont_markers()
    })
}), 

$("#disguises span").click(function() {
    $("#disguises-dropdown").hasClass("show") ? ($("#disguises-dropdown").removeClass("show"), $("#disguises").removeClass("active")) : ($("#disguises-dropdown").addClass("show"), $("#disguises").addClass("active"))
}), 

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