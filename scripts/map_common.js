

// Basic marker
var baseIcon = L.Icon.extend({
    options: {
		iconSize:     [32, 32],
		iconAnchor:   [16, 16],
		popupAnchor:  [-2, -15]
    }
});


// NOTE: set "" or null to ignore param
function createMarker(level, item, x, y, label, popup) {
	sAlt = "level" + level + item;
	sIconUrl = "img/icons/" + item + ".png";
	
	lMarker = L.marker([y, x], {icon: new baseIcon({iconUrl: sIconUrl}), alt: sAlt});
	if (label) {
		lMarker.bindLabel(label);
	}
	if (popup) {
		lMarker.bindPopup(popup);
	}
	
	return lMarker;
}

















































var urlMainRef = "http://www.hitmanmaps.com/";