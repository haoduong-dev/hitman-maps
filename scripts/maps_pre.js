

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
    console.log("ID:" + "(dummy)" + ", X:" + lMarker._latlng.lng + ", Y:" + lMarker._latlng.lat + ", LEVEL:" + level + ", ITEM:" + item + ", LABEL:" + lMarker.label._content + ", POPUP:" + lMarker._popup._content);
	
	return lMarker;
}



var arrMarkers = new Array();
var arrMarkersIdx = 0;
var isCsvLoaded = false;
var dataUrl = "";

function processCsvData(csvResult) {
	$.each(csvResult.data, function(index, value) {
		arrMarkers[arrMarkersIdx] = createMarker(value['LEVEL'], value['ITEM'], value['X'], value['Y'], value['LABEL'], value['POPUP']);
		arrMarkersIdx++;
	});
	isCsvLoaded = true;
}


L.PopupEx = L.Popup.extend({
	onAdd: function (map) {
		if (!this._container) {
			this._initLayout();
		}
		
		L.Popup.prototype.onAdd.call(this, map);
	},

	_initLayout: function () {
		L.Popup.prototype._initLayout.call(this);
		
		wrapper = this._wrapper;

        itemContainer = L.DomUtil.create('div', '', wrapper);
        titleContainer = L.DomUtil.create('div', '', wrapper);
        descriptionContainer = L.DomUtil.create('div', '', wrapper);
        buttonContainer = L.DomUtil.create('div', '', wrapper);

        itemLabel = L.DomUtil.create('span', '', itemContainer);
        itemLabel.innerHTML = 'Item:';
        itemInput = this._itemInput = L.DomUtil.create('select', '', itemContainer);
        itemInput.add(new Option('Enter', 'enter'));
        itemInput.add(new Option('Exit', 'exit'));
        itemInput.add(new Option('Alarm', 'alarm'));

        titleLabel = L.DomUtil.create('span', '', titleContainer);
        titleLabel.innerHTML = 'Label:';
        titleInput = this._titleInput = L.DomUtil.create('span', '', titleContainer);
        titleInput.innerHTML = 'label dummy';
        titleInput.setAttribute('contenteditable', true);

        descriptionLabel = L.DomUtil.create('span', '', descriptionContainer);
        descriptionLabel.innerHTML = 'Popup:';
        descriptionInput = this._descriptionInput = L.DomUtil.create('span', '', descriptionContainer);
        descriptionInput.innerHTML = 'popup dummy';
        descriptionInput.setAttribute('contenteditable', true);

		saveButton = this._saveButton = L.DomUtil.create('button', '', buttonContainer);
        saveButton.innerHTML = 'Save';
		L.DomEvent.disableClickPropagation(saveButton);
		L.DomEvent.on(saveButton, 'click', this._onCloseButtonClick, this);

		cancelButton = this._cancelButton = L.DomUtil.create('button', '', buttonContainer);
		cancelButton.innerHTML = 'Cancel';
		L.DomEvent.disableClickPropagation(cancelButton);
		L.DomEvent.on(cancelButton, 'click', this._onCloseButtonClick, this);

        deleteButton = this._deleteButton = L.DomUtil.create('button', '', buttonContainer);
        deleteButton.innerHTML = 'Delete';
        L.DomEvent.disableClickPropagation(deleteButton);
        L.DomEvent.on(deleteButton, 'click', this._onCloseButtonClick, this);
	}
});


L.Draw.MarkerEx = L.Draw.Marker.extend({
	options: {
		icon: L.divIcon({iconSize: [0, 0]})
	},
	
	// _onClick: function () {
	// 	openedMapID = $(".change-level.active").attr("id").substr(6, 7);
	// 	item = "exit";
	// 	sAlt = "level" + openedMapID + item;
	// 	sIconUrl = "img/icons/" + item + ".png";
	// 	popupContent = "<div>"+
	// 											"<label>Item:</label>"+
	// 											"<select id='item' name='item'>"+
	// 												"<option value='enter'>Enter</option>"+
	// 												"<option value='exit'>Exit</option>"+
	// 												"<option value='alarm'>Alarm</option>"+
	// 											"</select>"+
	// 									"</div>"+
	// 									"<div>"+
	// 											"<label>Label:</label>"+
	// 											"<input id='label' name='label'>"+
	// 									"</div>"+
	// 									"<div>"+
	// 											"<label>Popup:</label>"+
	// 											"<textarea id='popup' name='popup'></textarea>"+
	// 									"</div>";
	// 	popupEx = new L.PopupEx().setContent(popupContent);
	// 	self = this;
	//
	// 	this._latlng = this._marker.getLatLng();
	// 	marker = new L.Marker(this._marker.getLatLng(), { icon: new baseIcon({iconUrl: sIconUrl}), alt: sAlt}).bindPopup(popupEx).addTo(this._map).openPopup();
	// 	marker.on('popupclose', function(e) {
	// 		self._map.removeLayer(marker);
	//
	// 		self._fireCreatedEvent();
    //
	// 		self.disable();
	// 		if (self.options.repeatMode) {
	// 			self.enable();
	// 		}
	// 	});
	// },
	
	_fireCreatedEvent: function () {
		openedMapID = $(".change-level.active").attr("id").substr(6, 7);
		item = "blank";
		sAlt = "level" + openedMapID + item;
		sIconUrl = "img/icons/" + item + ".png";

		// popupContent = "test abc.";
		// var marker = new L.Marker(this._marker.getLatLng(), { icon: new baseIcon({iconUrl: sIconUrl}), alt: sAlt}).bindPopup(popupContent);

        popupEx = new L.PopupEx();
        var marker = new L.Marker(this._marker.getLatLng(), { icon: new baseIcon({iconUrl: sIconUrl}), alt: sAlt}).bindPopup(popupEx);

		L.Draw.Feature.prototype._fireCreatedEvent.call(this, marker);

        // for marker counter
        allMarkersArr[allMarkersArr.length] = sAlt;

		marker.openPopup();
	}
});

L.setOptions(L.Draw.MarkerEx.prototype, {
	subToolbar: new L.Toolbar({ actions: [L.Draw.Cancel] })
});


function setBlobUrl(content) {
  var blob = new Blob([ content ]);
 
  $("#save-local").attr("href", window.URL.createObjectURL(blob));
  $("#save-local").attr("download", "local_data.txt");
}

setBlobUrl("-12.5,23.1,exenter");



var urlMainRef = "http://www.hitmanmaps.com/";
