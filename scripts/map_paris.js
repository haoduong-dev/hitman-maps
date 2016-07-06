var mapparis = L.map('mapparis').setView([63.074865690586634, -29.53125], 4);

var tileLevels = L.layerGroup([
	mapLevel0base = L.tileLayer(urlMainRef + 'img/map_paris/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
	mapLevel1base = L.tileLayer(urlMainRef + 'img/map_paris/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }).addTo(mapparis),
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

mapparis.zoomControl.setPosition('topright');
mapparis.setMaxBounds([[-40.71, -215.50],[86.34, 144.66]]);

// Active map
$("#level-1").addClass("active");

var iconPointRed = new baseIcon({iconUrl: 'img/icons/point_red.png'}),

	iconExit = new baseIcon({iconUrl: 'img/icons/exit.png'}),
	iconEnter = new baseIcon({iconUrl: 'img/icons/enter.png'}),
	iconIcaStash = new baseIcon({iconUrl: 'img/icons/icastash.png'}),
	iconStairsUp = new baseIcon({iconUrl: 'img/icons/stairsup.png'}),
	iconStairsDown = new baseIcon({iconUrl: 'img/icons/stairsdown.png'}),
	iconStairsUpDown = new baseIcon({iconUrl: 'img/icons/stairsupdown.png'}),
	iconWayUp = new baseIcon({iconUrl: 'img/icons/waysup.png'}),
	iconWayDown = new baseIcon({iconUrl: 'img/icons/waysdown.png'}),
	iconWayUpDown = new baseIcon({iconUrl: 'img/icons/waysupdown.png'}),
	iconWayIn = new baseIcon({iconUrl: 'img/icons/waysin.png'}),

    iconFirearm = new baseIcon({iconUrl: 'img/icons/firearm.png'}),
    iconAmmo = new baseIcon({iconUrl: 'img/icons/ammo.png'}),
    iconExplosive = new baseIcon({iconUrl: 'img/icons/explosive.png'}),
    iconPoisons = new baseIcon({iconUrl: 'img/icons/weapoison.png'}),
    iconCoin = new baseIcon({iconUrl: 'img/icons/coin.png'}),

    iconBattleAxe = new baseIcon({iconUrl: 'img/icons/battleaxe.png'}),
    iconBust = new baseIcon({iconUrl: 'img/icons/bust.png'}),
    iconBrick = new baseIcon({iconUrl: 'img/icons/brick.png'}),
    iconCleaver = new baseIcon({iconUrl: 'img/icons/cleaver.png'}),
    iconCrowbar = new baseIcon({iconUrl: 'img/icons/crowbar.png'}),
    iconFireAxe = new baseIcon({iconUrl: 'img/icons/fireaxe.png'}),
    iconExtinguisher = new baseIcon({iconUrl: 'img/icons/extinguisher.png'}),
    iconFirePoker = new baseIcon({iconUrl: 'img/icons/firepoker.png'}),
    iconHammer = new baseIcon({iconUrl: 'img/icons/hammer.png'}),
    iconHatchet = new baseIcon({iconUrl: 'img/icons/hatchet.png'}),
    iconGolfClub = new baseIcon({iconUrl: 'img/icons/golfclub.png'}),
    iconKnife = new baseIcon({iconUrl: 'img/icons/knife.png'}),
    iconPipe = new baseIcon({iconUrl: 'img/icons/pipe.png'}),
    iconOpener = new baseIcon({iconUrl: 'img/icons/opener.png'}),
    iconBaton = new baseIcon({iconUrl: 'img/icons/baton.png'}),
    iconSaber = new baseIcon({iconUrl: 'img/icons/saber.png'}),
    iconScissors = new baseIcon({iconUrl: 'img/icons/scissors.png'}),
    iconScrewdriver = new baseIcon({iconUrl: 'img/icons/screwdriver.png'}),
    iconWrench = new baseIcon({iconUrl: 'img/icons/wrench.png'}),

    iconContainer = new baseIcon({iconUrl: 'img/icons/container.png'}),
    iconConceal = new baseIcon({iconUrl: 'img/icons/conceal.png'}),
    iconDisguise = new baseIcon({iconUrl: 'img/icons/disguise.png'}),
    iconBlend = new baseIcon({iconUrl: 'img/icons/blend.png'}),
    iconSabotage = new baseIcon({iconUrl: 'img/icons/sabotage.png'}),
    iconPoison = new baseIcon({iconUrl: 'img/icons/poison.png'}),
    iconDistraction = new baseIcon({iconUrl: 'img/icons/distraction.png'}),
    iconAlarm = new baseIcon({iconUrl: 'img/icons/alarm.png'}),
    iconIntel = new baseIcon({iconUrl: 'img/icons/intel.png'}),
    iconItem = new baseIcon({iconUrl: 'img/icons/item.png'}),
    iconLocation = new baseIcon({iconUrl: 'img/icons/location.png'}),
    iconInteraction = new baseIcon({iconUrl: 'img/icons/interaction.png'}),
    iconSeccheck = new baseIcon({iconUrl: 'img/icons/seccheck.png'}),
    iconEvidence = new baseIcon({iconUrl: 'img/icons/evidence.png'}),
    iconLocked = new baseIcon({iconUrl: 'img/icons/locked.png'}),
    iconCamera = new baseIcon({iconUrl: 'img/icons/camera.png'}),
	iconIntel = new baseIcon({iconUrl: 'img/icons/intel.png'});
	
	
var allMarkers = L.layerGroup([
	createMarker(0, "enter", -42.4, 57.68, "Starting Location: Undercover in Kitchen", "<img src='img/map_paris/screenshots/lvl0_enter1.jpg'><h2>Starting Location</h2><h1>Undercover in Kitchen</h1>"),
	createMarker(0, "enter", -9.4, 65.29, "Starting Location: Undercover in Locker Room", "<img src='img/map_paris/screenshots/lvl0_enter2.jpg'><h2>Starting Location</h2><h1>Undercover in Locker Room</h1>"),
]);
