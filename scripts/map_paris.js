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
	mapLevel3vampire = L.tileLayer(urlMainRef + 'img/map_paris/lvl_3/closed/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
]);

mapLevel1base.addTo(lmap);
lmap.zoomControl.setPosition('topright');
lmap.setMaxBounds([[-40.71, -215.50],[86.34, 144.66]]);

// Active map
$("#level-1").addClass("active");
	
dataUrl = "data/map_paris.csv";
