
// Base icon
var baseIcon = L.Icon.extend({
    options: {
		iconSize:     [32, 32],
		iconAnchor:   [16, 16],
		popupAnchor:  [-2, -15]
    }
});

// NOTE: set "" or null to ignore param


var allMarkers = L.layerGroup();

// var arrMarkers = new Array();
// var arrMarkersIdx = 0;
var dataUrl = "";
var dbMarker = TAFFY();
var isEditMode = false;
var isEditing = false;

L.PopupEx = L.Popup.extend({
	_initLayout: function () {
		L.Popup.prototype._initLayout.call(this);

        // var contentNode = this._contentNode;
        var wrapper = this._wrapper;

        var editContentNode = this._editContentNode = L.DomUtil.create('div','', wrapper);
        L.DomEvent.disableScrollPropagation(this._editContentNode);

        var itemContainer = L.DomUtil.create('div', '', editContentNode);
        var titleContainer = L.DomUtil.create('div', '', editContentNode);
        var descriptionContainer = L.DomUtil.create('div', '', editContentNode);
        var buttonContainer = L.DomUtil.create('div', '', editContentNode);

        var itemLabel = L.DomUtil.create('div', '', itemContainer);
        itemLabel.innerHTML = 'Item:';
        var itemInput = this._itemInput = L.DomUtil.create('select', '', itemContainer);
        itemInput.add(new Option('note', 'blank'));
        itemInput.add(new Option('Alarm', 'alarm'));
        itemInput.add(new Option('Enter', 'enter'));
        itemInput.add(new Option('Exit', 'exit'));

        var titleLabel = L.DomUtil.create('div', '', titleContainer);
        titleLabel.innerHTML = 'Title:';
        var titleInput = this._titleInput = L.DomUtil.create('input', '', titleContainer);
        titleInput.size = 37;

        var descriptionLabel = L.DomUtil.create('div', '', descriptionContainer);
        descriptionLabel.innerHTML = 'Description:';
        var descriptionInput = this._descriptionInput = L.DomUtil.create('textarea', '', descriptionContainer);
        descriptionInput.style.height = '100px';
        descriptionInput.style.width = '290px';

        var saveButton = this._saveButton = L.DomUtil.create('button', '', buttonContainer);
        saveButton.innerHTML = 'Save';
        L.DomEvent.disableClickPropagation(saveButton);
        L.DomEvent.on(saveButton, 'click', this._onSaveButtonClick, this);

        var cancelButton = this._cancelButton = L.DomUtil.create('button', '', buttonContainer);
        cancelButton.innerHTML = 'Cancel';
        L.DomEvent.disableClickPropagation(cancelButton);
        L.DomEvent.on(cancelButton, 'click', this._onCancelButtonClick, this);

        var deleteButton = this._deleteButton = L.DomUtil.create('button', '', buttonContainer);
        deleteButton.innerHTML = 'Delete';
        L.DomEvent.disableClickPropagation(deleteButton);
        L.DomEvent.on(deleteButton, 'click', this._onDeleteButtonClick, this);
	},

    _updateContent: function () {
        var marker = this._source;

        if (isEditMode) {
            this._itemInput.value = marker._item;
            this._titleInput.value = marker._title;
            this._descriptionInput.value = marker._description;
        } else {
            // this._content = marker._description;
            this._contentNode.innerHTML = marker._description;
            // L.Popup.prototype._updateContent.call(this);
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
        } else {
            $(this._editContentNode).hide();
            $(this._contentNode).show();
        }

        L.Popup.prototype._updateLayout.call(this);
    },

    _onSaveButtonClick: function (e) {
        var marker = this._source;

        // Update DB
        if (marker._id) {
            // Process for existed record
            dbMarker(marker._id).update({
                item: this._itemInput.value,
                x: marker.getLatLng().lng,
                y: marker.getLatLng().lat,
                title: this._titleInput.value,
                description: this._descriptionInput.value
            });
        } else {
            // Process for new record
            var addedRecord = dbMarker.insert({
                level: parseInt(marker._level, 10),
                item: this._itemInput.value,
                x: marker.getLatLng().lng,
                y: marker.getLatLng().lat,
                title: this._titleInput.value,
                description: this._descriptionInput.value
            }).first();

            // Update marker id
            marker._id = addedRecord.___id;
        }

        // Update marker: internal var
        marker._item = this._itemInput.value;
        marker._title = this._titleInput.value;
        marker._description = this._descriptionInput.value;

        // Update marker: icon and alt
        marker.setIcon(new baseIcon({iconUrl: "img/icons/" + marker._item + ".png"}));
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

    _onDeleteButtonClick: function (e) {
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
        }
    },

    onRemove: function (map) {
        L.Popup.prototype.onRemove.call(this, map);

        if (isEditMode) {
            isEditing = false;

            // Process for new record
            if (!this._source._id) {
                // Remove marker from map
                map.removeLayer(this._source);
            }
        }
    }
});

L.MarkerEx = L.Marker.extend({
    initialize: function (id, level, item, x, y, title, description, options) {
        L.Marker.prototype.initialize.call(this, L.latLng(y, x), options);

        this._id = id;
        this._level = level;
        this._item = item;
        // x: lng
        // y: lat
        this._title = title;
        this._description = description;

        this.options.icon = new baseIcon({iconUrl: "img/icons/" + this._item + ".png"});
        this.options.alt = 'level' + this._level + this._item;

        if (title) {
            this.bindLabel(title);
        }

        this.bindPopup(new L.PopupEx());
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

        var marker = new L.MarkerEx(0, level, item, this._marker.getLatLng().lng, this._marker.getLatLng().lat, '', '');
		L.Draw.Feature.prototype._fireCreatedEvent.call(this, marker);

        // for marker counter
        // allMarkersArr[allMarkersArr.length] = "level" + level + item;

		marker.openPopup();
	}
});

L.setOptions(L.Draw.MarkerEx.prototype, {
	subToolbar: new L.Toolbar({ actions: [L.Draw.Cancel] })
});


$("#download-db").on("mousedown", function() {
    var blobDb = new Blob([dbMarker().stringify()]);
    $("#download-db").attr('href', window.URL.createObjectURL(blobDb));
    $("#download-db").attr("download", "db_marker.json");
});



var urlMainRef = "http://www.hitmanmaps.com/";
