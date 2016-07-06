
var urlMainRef = "http://www.hitmanmaps.com/";

var lmap = L.map('lmap').setView([63.074865690586634, -29.53125], 4);

var tileLevels = L.layerGroup([
	mapLevel0base = L.tileLayer(urlMainRef + 'img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel1base = L.tileLayer(urlMainRef + 'img/map_paris/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2base = L.tileLayer(urlMainRef + 'img/map_paris/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel3base = L.tileLayer(urlMainRef + 'img/map_paris/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0suit = L.tileLayer(urlMainRef + 'img/map_paris/lvl_0/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1suit = L.tileLayer(urlMainRef + 'img/map_paris/lvl_1/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2suit = L.tileLayer(urlMainRef + 'img/map_paris/lvl_2/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3suit = L.tileLayer(urlMainRef + 'img/map_paris/lvl_3/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0chef = L.tileLayer(urlMainRef + 'img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1chef = L.tileLayer(urlMainRef + 'img/map_paris/lvl_1/chef/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2chef = L.tileLayer(urlMainRef + 'img/map_paris/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3chef = L.tileLayer(urlMainRef + 'img/map_paris/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0palace = L.tileLayer(urlMainRef + 'img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1palace = L.tileLayer(urlMainRef + 'img/map_paris/lvl_1/palace_crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2palace = L.tileLayer(urlMainRef + 'img/map_paris/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3palace = L.tileLayer(urlMainRef + 'img/map_paris/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0stylist = L.tileLayer(urlMainRef + 'img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1stylist = L.tileLayer(urlMainRef + 'img/map_paris/lvl_1/stylist/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2stylist = L.tileLayer(urlMainRef + 'img/map_paris/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3stylist = L.tileLayer(urlMainRef + 'img/map_paris/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0crew = L.tileLayer(urlMainRef + 'img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1crew = L.tileLayer(urlMainRef + 'img/map_paris/lvl_1/palace_crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2crew = L.tileLayer(urlMainRef + 'img/map_paris/lvl_2/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3crew = L.tileLayer(urlMainRef + 'img/map_paris/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0security = L.tileLayer(urlMainRef + 'img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1security = L.tileLayer(urlMainRef + 'img/map_paris/lvl_1/palace_crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2security = L.tileLayer(urlMainRef + 'img/map_paris/lvl_2/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3security = L.tileLayer(urlMainRef + 'img/map_paris/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0auction = L.tileLayer(urlMainRef + 'img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1auction = L.tileLayer(urlMainRef + 'img/map_paris/lvl_1/palace_crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2auction = L.tileLayer(urlMainRef + 'img/map_paris/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3auction = L.tileLayer(urlMainRef + 'img/map_paris/lvl_3/auct/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0cicada = L.tileLayer(urlMainRef + 'img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel1cicada = L.tileLayer(urlMainRef + 'img/map_paris/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2cicada = L.tileLayer(urlMainRef + 'img/map_paris/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel3cicada = L.tileLayer(urlMainRef + 'img/map_paris/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0helmut = L.tileLayer(urlMainRef + 'img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel1helmut = L.tileLayer(urlMainRef + 'img/map_paris/lvl_1/vip/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2helmut = L.tileLayer(urlMainRef + 'img/map_paris/lvl_2/crew/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel3helmut = L.tileLayer(urlMainRef + 'img/map_paris/lvl_3/vip/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0sheikh = L.tileLayer(urlMainRef + 'img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel1sheikh = L.tileLayer(urlMainRef + 'img/map_paris/lvl_1/vip/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2sheikh = L.tileLayer(urlMainRef + 'img/map_paris/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel3sheikh = L.tileLayer(urlMainRef + 'img/map_paris/lvl_3/vip/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

	mapLevel0vampire = L.tileLayer(urlMainRef + 'img/map_paris/lvl_0/suit/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel1vampire = L.tileLayer(urlMainRef + 'img/map_paris/lvl_1/guest/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel2vampire = L.tileLayer(urlMainRef + 'img/map_paris/lvl_2/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel3vampire = L.tileLayer(urlMainRef + 'img/map_paris/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 })
]);

mapLevel1base.addTo(lmap);

lmap.zoomControl.setPosition('topright');
lmap.setMaxBounds([[-40.71, -215.50],[86.34, 144.66]]);

// Active map
$("#level-1").addClass("active");

var mapName = "paris";

// limitations: add data follow old method for polyline, polygon
var allMarkers = L.layerGroup([

    L.polyline([[70.58, -27.42], [68.64, -20.69], [67.84, -10.89]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level1sab-chandelier"}),

    L.polyline(
        [[54.77, 10.50], [55.97, 10.50], [55.97, 4.43], [55.27, 4.43], [55.27, 1.75], [55.27, 1.75], [55.94, 1.75], [55.94, -4.21], [52.26, -4.21], [52.26, -16.52], [51.50, -16.52], [51.50, -19.29], [52.26, -19.29], [52.26, -29.61], [53.68, -29.70], [53.68, -46.45], [58.26, -46.45], [58.26, -48.60], [58.26, -48.60], [58.21, -48.60], [60.34, -48.60], [60.34, -50.66], [65.28, -50.66], [65.28, -48.60], [65.28, -48.60], [66.96, -48.60], [66.96, -46.49], [70.05, -46.49], [70.05, -29.70], [70.80, -29.70], [70.80, -19.40], [71.20, -19.40], [71.20, -16.65], [70.80, -16.65], [70.80, -4.20], [68.50, -4.20], [68.50, 1.53], [69.05, 1.53], [69.05, 4.35], [68.50, 4.35], [68.50, 10.41], [69.33, 10.41], [69.33, 21.00], [65.20, 21.00], [65.20, 10.63], [63.91, 10.63], [63.91, 12.08], [62.02, 12.08], [62.02, 10.63], [60.47, 10.63], [60.47, 21.04], [54.77, 21.04], [54.77, 13.44]],
        {color: '#fff', weight: 4, opacity: 0.75, smoothFactor: 1, className: "level2ledge"}).bindLabel("Ledge"),

    L.polygon([[65.9, -8.5], [66.25, -12.5], [64.5, -12.5]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level2camera"}).bindLabel("Security Camera"),
    L.polygon([[59.7, -8.5], [61.3, -12.5], [59.25, -12.5]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level2camera"}).bindLabel("Security Camera"),
    L.polygon([[66.31, -31.86], [64.75, -29.79], [64.75, -33.83]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level2camera"}).bindLabel("Security Camera")

]);
