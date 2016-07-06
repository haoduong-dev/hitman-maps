var mapsapienza = L.map('mapsapienza', {maxBoundsViscosity: 1}).setView([45.76, -73.38], 4);

var tileLevels = L.layerGroup([

    mapLevel0base = L.tileLayer('img/map_sapienza/lvl_0/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1base = L.tileLayer('img/map_sapienza/lvl_1/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2base = L.tileLayer('img/map_sapienza/lvl_2/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3base = L.tileLayer('img/map_sapienza/lvl_3/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }).addTo(mapsapienza),
    mapLevel4base = L.tileLayer('img/map_sapienza/lvl_4/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5base = L.tileLayer('img/map_sapienza/lvl_5/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6base = L.tileLayer('img/map_sapienza/lvl_6/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7base = L.tileLayer('img/map_sapienza/lvl_7/base/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0suit = mapLevel0store = mapLevel0detective = mapLevel0cyclist = mapLevel0perf = mapLevel0plague = mapLevel0bohem = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1suit = mapLevel1store = mapLevel1detective = mapLevel1cyclist = mapLevel1perf = mapLevel1plague = mapLevel1bohem = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2suit = mapLevel2store = mapLevel2detective = mapLevel2cyclist = mapLevel2perf = mapLevel2plague = mapLevel2bohem = L.tileLayer('img/map_sapienza/lvl_2/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3suit = mapLevel3store = mapLevel3detective = mapLevel3cyclist = mapLevel3perf = mapLevel3plague = mapLevel3bohem = L.tileLayer('img/map_sapienza/lvl_3/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4suit = mapLevel4store = mapLevel4detective = mapLevel4cyclist = mapLevel4perf = mapLevel4plague = mapLevel4bohem = L.tileLayer('img/map_sapienza/lvl_4/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5suit = mapLevel5store = mapLevel5detective = mapLevel5cyclist = mapLevel5perf = mapLevel5plague = mapLevel5bohem = L.tileLayer('img/map_sapienza/lvl_5/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6suit = mapLevel6store = mapLevel6detective = mapLevel6cyclist = mapLevel6perf = mapLevel6plague = mapLevel6bohem = L.tileLayer('img/map_sapienza/lvl_6/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7suit = mapLevel7store = mapLevel7detective = mapLevel7cyclist = mapLevel7perf = mapLevel7plague = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0gardener = L.tileLayer('img/map_sapienza/lvl_0/ruins/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1gardener = L.tileLayer('img/map_sapienza/lvl_1/gardener/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2gardener = L.tileLayer('img/map_sapienza/lvl_2/gardener/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3gardener = L.tileLayer('img/map_sapienza/lvl_3/gardener/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4gardener = L.tileLayer('img/map_sapienza/lvl_4/gardener/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5gardener = L.tileLayer('img/map_sapienza/lvl_5/gardener/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6gardener = L.tileLayer('img/map_sapienza/lvl_6/gardener/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7gardener = L.tileLayer('img/map_sapienza/lvl_7/ruins/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0plumber = L.tileLayer('img/map_sapienza/lvl_0/plumber/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1plumber = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2plumber = L.tileLayer('img/map_sapienza/lvl_2/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3plumber = L.tileLayer('img/map_sapienza/lvl_3/plumber/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4plumber = L.tileLayer('img/map_sapienza/lvl_4/plumber/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5plumber = L.tileLayer('img/map_sapienza/lvl_5/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6plumber = L.tileLayer('img/map_sapienza/lvl_6/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7plumber = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0delivery = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1delivery = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2delivery = L.tileLayer('img/map_sapienza/lvl_2/nolab/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3delivery = L.tileLayer('img/map_sapienza/lvl_3/delivery/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4delivery = L.tileLayer('img/map_sapienza/lvl_4/delivery/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5delivery = L.tileLayer('img/map_sapienza/lvl_5/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6delivery = L.tileLayer('img/map_sapienza/lvl_6/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7delivery = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0bodyguard = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1bodyguard = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2bodyguard = L.tileLayer('img/map_sapienza/lvl_2/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3bodyguard = L.tileLayer('img/map_sapienza/lvl_3/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4bodyguard = L.tileLayer('img/map_sapienza/lvl_4/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5bodyguard = L.tileLayer('img/map_sapienza/lvl_5/bodyguard/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6bodyguard = L.tileLayer('img/map_sapienza/lvl_6/bodyguard/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7bodyguard = L.tileLayer('img/map_sapienza/lvl_7/bodyguard/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0churchstaff = mapLevel0priest = L.tileLayer('img/map_sapienza/lvl_0/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1churchstaff = mapLevel1priest = L.tileLayer('img/map_sapienza/lvl_1/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2churchstaff = mapLevel2priest = L.tileLayer('img/map_sapienza/lvl_2/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3churchstaff = mapLevel3priest = L.tileLayer('img/map_sapienza/lvl_3/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4churchstaff = mapLevel4priest = L.tileLayer('img/map_sapienza/lvl_4/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5churchstaff = mapLevel5priest = L.tileLayer('img/map_sapienza/lvl_5/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6churchstaff = mapLevel6priest = L.tileLayer('img/map_sapienza/lvl_6/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7churchstaff = mapLevel7priest = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0waiter = L.tileLayer('img/map_sapienza/lvl_0/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1waiter = L.tileLayer('img/map_sapienza/lvl_1/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2waiter = L.tileLayer('img/map_sapienza/lvl_2/church/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3waiter = L.tileLayer('img/map_sapienza/lvl_3/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4waiter = L.tileLayer('img/map_sapienza/lvl_4/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5waiter = L.tileLayer('img/map_sapienza/lvl_5/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6waiter = L.tileLayer('img/map_sapienza/lvl_6/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7waiter = L.tileLayer('img/map_sapienza/lvl_7/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0kitchen = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1kitchen = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2kitchen = L.tileLayer('img/map_sapienza/lvl_2/nolab/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3kitchen = L.tileLayer('img/map_sapienza/lvl_3/kitchen/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4kitchen = L.tileLayer('img/map_sapienza/lvl_4/kitchen/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5kitchen = L.tileLayer('img/map_sapienza/lvl_5/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6kitchen = L.tileLayer('img/map_sapienza/lvl_6/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7kitchen = L.tileLayer('img/map_sapienza/lvl_7/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0chef = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1chef = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2chef = L.tileLayer('img/map_sapienza/lvl_2/nolab/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3chef = L.tileLayer('img/map_sapienza/lvl_3/kitchen/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4chef = L.tileLayer('img/map_sapienza/lvl_4/chef/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5chef = L.tileLayer('img/map_sapienza/lvl_5/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6chef = L.tileLayer('img/map_sapienza/lvl_6/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7chef = L.tileLayer('img/map_sapienza/lvl_7/cafe/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0mankeep = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1mankeep = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2mankeep = L.tileLayer('img/map_sapienza/lvl_2/nolab/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3mankeep = L.tileLayer('img/map_sapienza/lvl_3/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4mankeep = L.tileLayer('img/map_sapienza/lvl_4/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5mankeep = L.tileLayer('img/map_sapienza/lvl_5/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6mankeep = L.tileLayer('img/map_sapienza/lvl_6/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7mankeep = L.tileLayer('img/map_sapienza/lvl_7/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0manstaff = mapLevel0butler = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1manstaff = mapLevel1butler = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2manstaff = mapLevel2butler = L.tileLayer('img/map_sapienza/lvl_2/nolab/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3manstaff = mapLevel3butler = L.tileLayer('img/map_sapienza/lvl_3/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4manstaff = mapLevel4butler = L.tileLayer('img/map_sapienza/lvl_4/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5manstaff = mapLevel5butler = L.tileLayer('img/map_sapienza/lvl_5/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6manstaff = mapLevel6butler = L.tileLayer('img/map_sapienza/lvl_6/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7manstaff = mapLevel7butler = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0mansec = L.tileLayer('img/map_sapienza/lvl_0/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1mansec = L.tileLayer('img/map_sapienza/lvl_1/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2mansec = L.tileLayer('img/map_sapienza/lvl_2/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3mansec = L.tileLayer('img/map_sapienza/lvl_3/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4mansec = L.tileLayer('img/map_sapienza/lvl_4/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5mansec = L.tileLayer('img/map_sapienza/lvl_5/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6mansec = L.tileLayer('img/map_sapienza/lvl_6/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7mansec = L.tileLayer('img/map_sapienza/lvl_7/mansec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0labtec = L.tileLayer('img/map_sapienza/lvl_0/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1labtec = L.tileLayer('img/map_sapienza/lvl_1/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2labtec = L.tileLayer('img/map_sapienza/lvl_2/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3labtec = L.tileLayer('img/map_sapienza/lvl_3/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4labtec = L.tileLayer('img/map_sapienza/lvl_4/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5labtec = L.tileLayer('img/map_sapienza/lvl_5/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6labtec = L.tileLayer('img/map_sapienza/lvl_6/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7labtec = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0labsec = L.tileLayer('img/map_sapienza/lvl_0/labsec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1labsec = L.tileLayer('img/map_sapienza/lvl_1/labsec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2labsec = L.tileLayer('img/map_sapienza/lvl_2/labsec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3labsec = L.tileLayer('img/map_sapienza/lvl_3/labsec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4labsec = L.tileLayer('img/map_sapienza/lvl_4/labsec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5labsec = L.tileLayer('img/map_sapienza/lvl_5/labsec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6labsec = L.tileLayer('img/map_sapienza/lvl_6/ruins/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7labsec = L.tileLayer('img/map_sapienza/lvl_7/ruins/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0labhaz = L.tileLayer('img/map_sapienza/lvl_0/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1labhaz = L.tileLayer('img/map_sapienza/lvl_1/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2labhaz = L.tileLayer('img/map_sapienza/lvl_2/lab/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3labhaz = L.tileLayer('img/map_sapienza/lvl_3/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4labhaz = L.tileLayer('img/map_sapienza/lvl_4/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5labhaz = L.tileLayer('img/map_sapienza/lvl_5/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6labhaz = L.tileLayer('img/map_sapienza/lvl_6/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7labhaz = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0oscar = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1oscar = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2oscar = L.tileLayer('img/map_sapienza/lvl_2/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3oscar = L.tileLayer('img/map_sapienza/lvl_3/lafayette/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4oscar = L.tileLayer('img/map_sapienza/lvl_4/lafayette/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5oscar = L.tileLayer('img/map_sapienza/lvl_5/staff/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6oscar = L.tileLayer('img/map_sapienza/lvl_6/lafayette/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7oscar = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel0vargas = L.tileLayer('img/map_sapienza/lvl_0/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel1vargas = L.tileLayer('img/map_sapienza/lvl_1/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel2vargas = L.tileLayer('img/map_sapienza/lvl_2/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel3vargas = L.tileLayer('img/map_sapienza/lvl_3/labtec/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel4vargas = L.tileLayer('img/map_sapienza/lvl_4/vargas/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel5vargas = L.tileLayer('img/map_sapienza/lvl_5/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel6vargas = L.tileLayer('img/map_sapienza/lvl_6/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),
    mapLevel7vargas = L.tileLayer('img/map_sapienza/lvl_7/normal/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

    mapLevel7bohem = L.tileLayer('img/map_sapienza/lvl_7/bohemian/{z}/{x}/{y}.png', { noWrap: true, minZoom: 3, maxZoom: 5 }),

]);

mapsapienza.zoomControl.setPosition('topright');
mapsapienza.setMaxBounds([[-33.5, -264.3],[84.57, 15.292]]);

// Active map
$("#level-3").addClass("active");

// Basic marker
var baseIcon = L.Icon.extend({
    options: {
        iconSize:     [32, 32],
        iconAnchor:   [16, 16],
        popupAnchor:  [-2, -15]
    }
});

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
    iconBaseballBat = new baseIcon({iconUrl: 'img/icons/baseballbat.png'}),
    iconBust = new baseIcon({iconUrl: 'img/icons/bust.png'}),
    iconBrick = new baseIcon({iconUrl: 'img/icons/brick.png'}),
    iconCleaver = new baseIcon({iconUrl: 'img/icons/cleaver.png'}),
    iconCrowbar = new baseIcon({iconUrl: 'img/icons/crowbar.png'}),
    iconFireAxe = new baseIcon({iconUrl: 'img/icons/fireaxe.png'}),
    iconKnifeFold = new baseIcon({iconUrl: 'img/icons/foldingknife.png'}),
    iconCombatKnife = new baseIcon({iconUrl: 'img/icons/combatknife.png'}),
    iconCirKnife = new baseIcon({iconUrl: 'img/icons/knifecir.png'}),
    iconAmpKnife = new baseIcon({iconUrl: 'img/icons/knifeamp.png'}),
    iconExtinguisher = new baseIcon({iconUrl: 'img/icons/extinguisher.png'}),
    iconFirePoker = new baseIcon({iconUrl: 'img/icons/firepoker.png'}),
    iconHammer = new baseIcon({iconUrl: 'img/icons/hammer.png'}),
    iconHatchet = new baseIcon({iconUrl: 'img/icons/hatchet.png'}),
    iconGolfClub = new baseIcon({iconUrl: 'img/icons/golfclub.png'}),
    iconKnife = new baseIcon({iconUrl: 'img/icons/knife.png'}),
    iconKatana = new baseIcon({iconUrl: 'img/icons/katana.png'}),
    iconPipe = new baseIcon({iconUrl: 'img/icons/pipe.png'}),
    iconOpener = new baseIcon({iconUrl: 'img/icons/opener.png'}),
    iconOldAxe = new baseIcon({iconUrl: 'img/icons/oldaxe.png'}),
    iconToyTank = new baseIcon({iconUrl: 'img/icons/toytank.png'}),
    iconBaton = new baseIcon({iconUrl: 'img/icons/baton.png'}),
    iconSaber = new baseIcon({iconUrl: 'img/icons/saber.png'}),
    iconShovel = new baseIcon({iconUrl: 'img/icons/shovel.png'}),
    iconScissors = new baseIcon({iconUrl: 'img/icons/scissors.png'}),
    iconScrewdriver = new baseIcon({iconUrl: 'img/icons/screwdriver.png'}),
    iconSoda = new baseIcon({iconUrl: 'img/icons/sodacan.png'}),
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

/* ==================================================================================================================================================================
    Level 0
================================================================================================================================================================== */

var level0other = L.layerGroup([

    L.marker([73.60, -88.33], {icon: iconIcaStash, alt: "level0icastash", title: "Large Agency Pickup: Sewers"}).bindLabel("Large Agency Pickup: Sewers").bindPopup("<img src='img/map_sapienza/screenshots/ica_sewers.jpg'><h2>Large Agency Pickup</h2><h1>Sewers</h1>"),
    L.marker([30.41, -123.7], {icon: iconIcaStash, alt: "level0icastash", title: "Large Agency Pickup: Ether Field Lab"}).bindLabel("Large Agency Pickup: Ether Field Lab").bindPopup("<img src='img/map_sapienza/screenshots/ica_lab.jpg'><h2>Large Agency Pickup</h2><h1>Ether Field Lab</h1>"),
    
    L.marker([44.21, -109.3], {icon: iconEnter, alt: "level0enter"}).bindLabel("Starting Locaton: Undercover in Field Lab").bindPopup("<img src='img/map_sapienza/screenshots/enter_biolab.jpg'><h2>Starting Locaton</h2><h1>Undercover in Field Lab</h1><p class='note'>You will have Biolab Keycard from the start</p>"),
    L.marker([72.40, -125.6], {icon: iconEnter, alt: "level0enter"}).bindLabel("Starting Locaton: Harbor").bindPopup("<img src='img/map_sapienza/screenshots/enter_harbor.jpg'><h2>Starting Locaton</h2><h1>Harbor</h1>"),
    L.marker([-0.35, -159.0], {icon: iconEnter, alt: "level0enter"}).bindLabel("Starting Locaton: Sapienza Ruins").bindPopup("<img src='img/map_sapienza/screenshots/enter_ruins.jpg'><h2>Starting Locaton</h2><h1>Sapienza Ruins</h1>"),
    L.marker([72.55, -133.5], {icon: iconExit, alt: "level0exit"}).bindLabel("Exit Locaton: Harbor Boat").bindPopup("<img src='img/map_sapienza/screenshots/exit_harbor.jpg'><h2>Exit Locaton</h2><h1>Harbor Boat</h1>"),
    L.marker([-0.35, -160.3], {icon: iconExit, alt: "level0exit"}).bindLabel("Exit Locaton: Speedboat").bindPopup("<img src='img/map_sapienza/screenshots/exit_speedboat.jpg'><h2>Exit Locaton</h2><h1>Speedboat</h1>"),
    L.marker([30.75, -115.7], {icon: iconExit, alt: "level0exit"}).bindLabel("Exit Locaton: Seaplane").bindPopup("<img src='img/map_sapienza/screenshots/exit_plane.jpg'><h2>Exit Locaton</h2><h1>Seaplane</h1>"),
 
    L.marker([-0.96, -158.1], {icon: iconWayUp, alt: "level0waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([74.69, -121.0], {icon: iconWayUp, alt: "level0waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([42.65, -128.2], {icon: iconWayUp, alt: "level0waysupdown"}).bindLabel("Pipe: Level 0-2").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 0-2</h1>"),

    L.marker([51.59, -118.3], {icon: iconWayIn, alt: "level0waysin"}).bindLabel("Breach").bindPopup("<h2>Passage</h2><h1>Breach</h1><p class='req'>Requires Breaching Charge</p>"),
    L.marker([41.27, -91.84], {icon: iconWayIn, alt: "level0waysin"}).bindLabel("Drop Down").bindPopup("<h2>Passage</h2><h1>Drop Down</h1>"),

    L.marker([36.63, -132.2], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([43.38, -102.2], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([49.89, -124.8], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([55.62, -126.3], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([56.92, -105.9], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([63.33, -100.7], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([67.87, -106.5], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([68.67, -108.4], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([71.78, -110.6], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([73.45, -83.93], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([76.38, -89.73], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([77.24, -101.6], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([75.98, -119.2], {icon: iconStairsUp, alt: "level0stairsupdown"}),
    L.marker([80.22, -118.7], {icon: iconStairsUp, alt: "level0stairsupdown"}),

    new L.Polyline([[36.31, -112.8], [34.99, -112.8], [33.79, -111.1]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level0ledge"}).bindLabel("Ledge"),

]);

var level0weapons = L.layerGroup([

    L.marker([73.22, -96.63], {icon: iconCoin, alt: "level0coin"}).bindLabel("Coin (3)"),
    L.marker([59.24, -155.5], {icon: iconCoin, alt: "level0coin"}).bindLabel("Coin"),
    L.marker([45.79, -121.2], {icon: iconPoisons, alt: "level0weapoison"}).bindLabel("Emetic Rat Poison").bindPopup("<h2>Poison</h2><h1>Emetic Rat Poison</h1>"),
    L.marker([51.59, -115.1], {icon: iconPoisons, alt: "level0weapoison"}).bindLabel("Emetic Rat Poison").bindPopup("<h2>Poison</h2><h1>Emetic Rat Poison</h1>"),
    L.marker([36.42, -87.27], {icon: iconFirearm, alt: "level0firearm"}).bindLabel("Shotgun: Bartoli 12G").bindPopup("<h2>Shotgun</h2><h1>Bartoli 12G</h1>"),
    L.marker([41.14, -116.4], {icon: iconAmmo, alt: "level0ammo"}).bindLabel("Pistol Ammo").bindPopup("<h2>Ammo</h2><h1>Pistol Ammo</h1>"),
    L.marker([35.53, -87.67], {icon: iconAmmo, alt: "level0ammo"}).bindLabel("Shotgun Ammo").bindPopup("<h2>Ammo</h2><h1>Shotgun Ammo</h1>"),
    L.marker([48.28, -115.2], {icon: iconExplosive, alt: "level0explosive"}).bindLabel("Propane Flask").bindPopup("<h2>Explosive</h2><h1>Propane Flask</h1>"),
    L.marker([36.24, -88.50], {icon: iconExplosive, alt: "level0explosive"}).bindLabel("Remote Explosive").bindPopup("<h2>Explosive</h2><h1>Remote Explosive</h1>"),
    L.marker([39.97, -113.4], {icon: iconCombatKnife, alt: "level0combatknife"}).bindLabel("Combat Knife"),
    L.marker([32.13, -104.1], {icon: iconBrick, alt: "level0brick"}).bindLabel("Brick"),
    L.marker([42.55, -122.2], {icon: iconFireAxe, alt: "level0fireaxe"}).bindLabel("Fire Axe"),
    L.marker([46.49, -103.2], {icon: iconFireAxe, alt: "level0fireaxe"}).bindLabel("Fire Axe"),
    L.marker([77.30, -111.7], {icon: iconBrick, alt: "level0brick"}).bindLabel("Brick"),
    L.marker([69.36, -99.36], {icon: iconCrowbar, alt: "level0crowbar"}).bindLabel("Crowbar"),
    L.marker([40.31, -86.79], {icon: iconCrowbar, alt: "level0crowbar"}).bindLabel("Crowbar"),
    L.marker([74.18, -94.87], {icon: iconShovel, alt: "level0shovel"}).bindLabel("Shovel"),
    L.marker([40.11, -83.32], {icon: iconShovel, alt: "level0shovel"}).bindLabel("Shovel"),
    L.marker([59.19, -158.4], {icon: iconPipe, alt: "level0pipe"}).bindLabel("Lead Pipe"),
    L.marker([53.19, -112.0], {icon: iconScrewdriver, alt: "level0screwdriver"}).bindLabel("Screwdriver"),
    L.marker([30.67, -96.19], {icon: iconScrewdriver, alt: "level0screwdriver"}).bindLabel("Screwdriver"),
    L.marker([43.13, -96.94], {icon: iconScrewdriver, alt: "level0screwdriver"}).bindLabel("Screwdriver"),
    L.marker([43.89, -120.6], {icon: iconSoda, alt: "level0sodacan"}).bindLabel("Soda Can"),
    L.marker([44.68, -123.3], {icon: iconWrench, alt: "level0wrench"}).bindLabel("Wrench"),
    L.marker([28.92, -112.0], {icon: iconWrench, alt: "level0wrench"}).bindLabel("Wrench"),

]);

var level0poi = L.layerGroup([

    L.marker([50.90, -119.2], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([51.01, -126.0], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([31.95, -123.9], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([43.83, -123.3], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([44.11, -122.3], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([40.24, -122.4], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([41.17, -117.9], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([30.33, -109.7], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([41.83, -89.12], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([45.92, -89.69], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([49.95, -98.87], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([46.43, -105.5], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([34.05, -99.44], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([42.19, -104.1], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([45.70, -98.83], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),
    L.marker([44.37, -102.6], {icon: iconContainer, alt: "level0container"}).bindLabel("Hiding Spot"),

    L.marker([56.80, -116.9], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([55.02, -116.9], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([36.91, -93.99], {icon: iconConceal, alt: "level0conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([76.66, -113.4], {icon: iconDisguise, alt: "level0disguise", title: "Disguise: Priest"}).bindLabel("Disguise: Priest").bindPopup("<img src='img/map_sapienza/screenshots/disg_priest.jpg'><h2>Disguise</h2><h1>Priest</h1>"),
    L.marker([44.33, -100.0], {icon: iconDisguise, alt: "level0disguise", title: "Disguise: Hazmat Suit"}).bindLabel("Disguise: Hazmat Suit").bindPopup("<img src='img/map_sapienza/screenshots/disg_hazmat.jpg'><h2>Disguise</h2><h1>Hazmat Suit</h1>"),
    
    L.marker([58.67, -156.0], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([51.50, -141.9], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([35.35, -97.99], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),
    L.marker([44.46, -106.7], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),
    L.marker([43.00, -106.7], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),
    L.marker([44.46, -108.9], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),
    L.marker([43.00, -108.9], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),
    L.marker([38.89, -94.96], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),
    L.marker([35.42, -92.32], {icon: iconBlend, alt: "level0blend"}).bindLabel("Blend In as Lab Technician").bindPopup("<h2>Blend In</h2><h1>Lab Technician</h1>"),

    L.marker([32.95, -93.55], {icon: iconSabotage, alt: "level0sab-gasvalve"}).bindLabel("Gas Valve").bindPopup("<h2>Sabotage</h2><h1>Gas Valve</h1><p class='item-use'>Release Gas</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([49.18, -105.3], {icon: iconSabotage, alt: "level0sab-canister"}).bindLabel("Gas Canister").bindPopup("<h2>Sabotage</h2><h1>Gas Canister</h1><p class='item-use'>Loosen the Valve</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([47.30, -105.8], {icon: iconSabotage, alt: "level0sab-stalactite"}).bindLabel("Stalactite").bindPopup("<h2>Sabotage</h2><h1>Stalactite</h1>"),
    L.marker([36.84, -93.60], {icon: iconSabotage, alt: "level0sab-stalactite"}).bindLabel("Stalactite").bindPopup("<h2>Sabotage</h2><h1>Stalactite</h1>"),
    L.marker([32.28, -94.48], {icon: iconSabotage, alt: "level0sab-stalactite"}).bindLabel("Stalactite").bindPopup("<h2>Sabotage</h2><h1>Stalactite</h1>"),
    L.marker([34.74, -115.5], {icon: iconSabotage, alt: "level0sab-stalactite"}).bindLabel("Stalactite").bindPopup("<h2>Sabotage</h2><h1>Stalactite</h1>"),
    L.marker([41.21, -119.0], {icon: iconSabotage, alt: "level0sab-stalactite"}).bindLabel("Stalactite").bindPopup("<h2>Sabotage</h2><h1>Stalactite</h1>"),
    L.marker([43.42, -111.8], {icon: iconSabotage, alt: "level0sab-stalactite"}).bindLabel("Stalactite").bindPopup("<h2>Sabotage</h2><h1>Stalactite</h1>"),
    L.marker([41.07, -104.8], {icon: iconSabotage, alt: "level0sab-stalactite"}).bindLabel("Stalactite").bindPopup("<h2>Sabotage</h2><h1>Stalactite</h1>"),

    L.marker([76.81, -112.7], {icon: iconPoison, alt: "level0poison"}).bindLabel("Glass of Red Wine").bindPopup("<h2>Poison</h2><h1>Glass of Red Wine</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Priest</p>"),
    L.marker([41.73, -121.3], {icon: iconPoison, alt: "level0poison"}).bindLabel("Coffee Glass").bindPopup("<h2>Poison</h2><h1>Coffee Glass</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious in any disguise</p><p class='note'>Will poison Biolab Security member</p>"),
    L.marker([40.81, -121.3], {icon: iconPoison, alt: "level0poison"}).bindLabel("Coffee Glass (3)").bindPopup("<h2>Poison</h2><h1>Coffee Glass (3)</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious in any disguise</p><p class='note'>Will poison Lab Technician</p>"),
    L.marker([44.18, -118.5], {icon: iconPoison, alt: "level0poison"}).bindLabel("Water Bottle").bindPopup("<h2>Poison</h2><h1>Water Bottle</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious in any disguise</p><p class='note'>Will poison Lab Technician with Biolab Laptop Dongle</p>"),

    L.marker([75.71, -114.0], {icon: iconDistraction, alt: "level0dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([55.62, -110.5], {icon: iconDistraction, alt: "level0dis-sink"}).bindLabel("Sink (4)").bindPopup("<h2>Distraction</h2><h1>Sink (4)</h1><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([57.89, -114.3], {icon: iconDistraction, alt: "level0dis-sink"}).bindLabel("Sink (3)").bindPopup("<h2>Distraction</h2><h1>Sink (3)</h1><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([53.22, -110.9], {icon: iconDistraction, alt: "level0dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([56.70, -117.6], {icon: iconDistraction, alt: "level0dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([54.90, -117.6], {icon: iconDistraction, alt: "level0dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([29.57, -96.76], {icon: iconDistraction, alt: "level0dis-forklift"}).bindLabel("Forklift").bindPopup("<h2>Distraction</h2><h1>Forklift</h1><p class='item-use'>Start Alarm</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([39.74, -88.94], {icon: iconDistraction, alt: "level0dis-radio"}).bindLabel("Transistor Radio").bindPopup("<h2>Distraction</h2><h1>Transistor Radio</h1><p class='item-use'>Turn On/Off</p>"),

    L.marker([39.47, -90.21], {icon: iconAlarm, alt: "level0alarm"}).bindLabel("Fire Alarm").bindPopup("<h2>Alarm</h2><h1>Fire Alarm</h1><p class='item-use'>Trigger Fire Alarm</p><p class='susp'>Suspicious in any disguise</p>"),

    L.marker([37.78, -97.38], {icon: iconIntel, alt: "level0intel"}).bindLabel("Biolab Safety Protocol").bindPopup("<img src='img/map_sapienza/screenshots/intel_biosafe.jpg'><h2>Intel</h2><h1>Biolab Safety Protocol</h1><p class='note'>Reveals 'Hostile Environment' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>According to the safety protocol, the air inside the central lab unit is highly toxic, and entering requires a hazmat suit. However, the air recycling system on the control platform outside the lab can temporarily clear the toxins.</p>"),
    L.marker([73.70, -128.9], {icon: iconIntel, alt: "level0intel"}).bindLabel("The Love Affair").bindPopup("<img src='img/map_sapienza/screenshots/intel_affair.jpg'><h2>Intel</h2><h1>The Love Affair</h1><p class='ingame-desc'><b>In-game description:</b><br>Apparently, Francesca De Santis is having a love affair with Roberto Vargas, a former golf pro who works as Silvio Caruso's private coach. Although Vargas is a notorious ladies' man, it appears De Santis is the one holding back.</p>"),
    
    L.marker([59.68, -103.2], {icon: iconItem, alt: "level0item", title: "Item: Flower Bouquet"}).bindLabel("Flower Bouquet").bindPopup("<img src='img/map_sapienza/screenshots/item_bouquet.jpg'><h2>Item</h2><h1>Flower Bouquet</h1><p class='note'>Part of 'The Good Son' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>A fresh bouquet of flowers. The recipient is Silvio Caruso.</p>"),
    L.marker([44.37, -119.9], {icon: iconItem, alt: "level0item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup("<img src='img/map_sapienza/screenshots/item_keycardbio.jpg'><h2>Item</h2><h1>Biolab Keycard</h1><p class='ingame-desc'><b>In-game description:</b><br>An access keycard for the Ether biolab.</p>"),
    L.marker([37.47, -106.1], {icon: iconItem, alt: "level0item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup("<img src='img/map_sapienza/screenshots/item_keycardbio.jpg'><h2>Item</h2><h1>Biolab Keycard</h1><p class='ingame-desc'><b>In-game description:</b><br>An access keycard for the Ether biolab.</p>"),
    L.marker([44.40, -101.3], {icon: iconItem, alt: "level0item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup("<img src='img/map_sapienza/screenshots/item_keycardbio.jpg'><h2>Item</h2><h1>Biolab Keycard</h1><p class='ingame-desc'><b>In-game description:</b><br>An access keycard for the Ether biolab.</p>"),
    
    L.marker([57.25, -152.9], {icon: iconLocation, alt: "level0location", title: "Location: De Santis and Detective Meeting Spot"}).bindLabel("De Santis and Detective Meeting Spot").bindPopup("<img src='img/map_sapienza/screenshots/loc_pier.jpg'><h2>Location</h2><h1>De Santis and Detective Meeting Spot</h1>"),
    L.marker([51.59, -116.9], {icon: iconLocation, alt: "level0location", title: "Location: Biolab Entrance"}).bindLabel("Biolab Entrance").bindPopup("<img src='img/map_sapienza/screenshots/loc_biolabenter.jpg'><h2>Location</h2><h1>Biolab Entrance</h1>"),
    L.marker([22.02, -122.0], {icon: iconLocation, alt: "level0location", title: "Location: Biolab Entrance"}).bindLabel("Biolab Entrance").bindPopup("<img src='img/map_sapienza/screenshots/loc_biolabenter.jpg'><h2>Location</h2><h1>Biolab Entrance</h1>"),
    
    L.marker([42.58, -123.3], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Acid Container"}).bindLabel("Acid Container").bindPopup("<img src='img/map_sapienza/screenshots/inter_acid.jpg'><h2>Interaction</h2><h1>Acid Container</h1><p class='item-use'>Dump Body</p>"),
    L.marker([32.39, -106.0], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Acid Container"}).bindLabel("Acid Container").bindPopup("<img src='img/map_sapienza/screenshots/inter_acid.jpg'><h2>Interaction</h2><h1>Acid Container</h1><p class='item-use'>Dump Body</p>"),
    L.marker([27.17, -98.52], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Acid Container"}).bindLabel("Acid Container").bindPopup("<img src='img/map_sapienza/screenshots/inter_acid.jpg'><h2>Interaction</h2><h1>Acid Container</h1><p class='item-use'>Dump Body</p>"),
    L.marker([50.26, -104.9], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Acid Container"}).bindLabel("Acid Container").bindPopup("<img src='img/map_sapienza/screenshots/inter_acid.jpg'><h2>Interaction</h2><h1>Acid Container</h1><p class='item-use'>Dump Body</p>"),
    L.marker([38.37, -91.05], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Acid Container"}).bindLabel("Acid Container").bindPopup("<img src='img/map_sapienza/screenshots/inter_acid.jpg'><h2>Interaction</h2><h1>Acid Container</h1><p class='item-use'>Dump Body</p>"),
    L.marker([35.20, -91.14], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Acid Container"}).bindLabel("Acid Container").bindPopup("<img src='img/map_sapienza/screenshots/inter_acid.jpg'><h2>Interaction</h2><h1>Acid Container</h1><p class='item-use'>Dump Body</p>"),
    L.marker([36.77, -97.33], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Ventilation System"}).bindLabel("Ventilation System").bindPopup("<img src='img/map_sapienza/screenshots/inter_vent.jpg'><h2>Interaction</h2><h1>Ventilation System</h1><p class='item-use'>Turn On/Off</p>"),
    L.marker([33.76, -93.60], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Ventilation System"}).bindLabel("Ventilation System").bindPopup("<img src='img/map_sapienza/screenshots/inter_vent.jpg'><h2>Interaction</h2><h1>Ventilation System</h1><p class='item-use'>Turn On/Off</p>"),
    L.marker([39.67, -96.06], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Research Station"}).bindLabel("Research Station").bindPopup("<img src='img/map_sapienza/screenshots/inter_restat.jpg'><h2>Interaction</h2><h1>Research Station</h1><p class='item-use'>Sabotage Computer</p>"),
    L.marker([36.84, -92.68], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Virus Cabinet"}).bindLabel("Virus Cabinet").bindPopup("<img src='img/map_sapienza/screenshots/inter_virus.jpg'><h2>Interaction</h2><h1>Virus Cabinet</h1><p class='item-use'>Increase Temperature</p>"),
    L.marker([34.12, -91.18], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Rats"}).bindLabel("Rats").bindPopup("<img src='img/map_sapienza/screenshots/inter_mouse.jpg'><h2>Interaction</h2><h1>Rats</h1><p class='item-use'>Poison Rats</p><p class='req'>Requires Emetic Rat Poison</p>"),
    L.marker([33.72, -95.53], {icon: iconInteraction, alt: "level0interaction", title: "Interaction: Robot Arm"}).bindLabel("Robot Arm").bindPopup("<img src='img/map_sapienza/screenshots/inter_robotarm.jpg'><h2>Interaction</h2><h1>Robot Arm</h1><p class='item-use'>Manual Override</p>"),

    L.marker([21.65, -124.0], {icon: iconCamera, alt: "level0camera"}).bindLabel("Security Camera"),
    L.polygon([[21.65, -124.0], [19.64, -122.9], [19.64, -125.3]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),
    L.marker([39.70, -120.2], {icon: iconCamera, alt: "level0camera"}).bindLabel("Security Camera"),
    L.polygon([[39.70, -120.2], [36.10, -119.9], [36.52, -123.7]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),
    L.marker([44.11, -111.2], {icon: iconCamera, alt: "level0camera"}).bindLabel("Security Camera"),
    L.polygon([[44.11, -111.2], [43.29, -118.5], [45.85, -118.5]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),
    L.marker([41.31, -109.6], {icon: iconCamera, alt: "level0camera"}).bindLabel("Security Camera"),
    L.polygon([[41.31, -109.6], [37.37, -111.9], [37.37, -107.9]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),
    L.marker([49.03, -97.07], {icon: iconCamera, alt: "level0camera"}).bindLabel("Security Camera"),
    L.polygon([[49.03, -97.07], [46.37, -98.08], [47.78, -101.5]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level0camera"}).bindLabel("Security Camera"),
    
    L.marker([76.35, -111.2], {icon: iconEvidence, alt: "level0evidence", title: "Camera Recorder - Church"}).bindLabel("Camera Recorder").bindPopup("<h2>Evidence</h2><h1>Camera Recorder</h1><p class='item-use'>Destroy Evidence</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([43.77, -119.9], {icon: iconEvidence, alt: "level0evidence", title: "Camera Recorder - Biolab"}).bindLabel("Camera Recorder").bindPopup("<h2>Evidence</h2><h1>Camera Recorder</h1><p class='item-use'>Destroy Evidence</p><p class='susp'>Suspicious in any disguise</p>"),

    L.marker([74.10, -114.2], {icon: iconLocked, alt: "level0locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Church Key or Lockpick / Crowbar</p>"),
    L.marker([75.75, -115.9], {icon: iconLocked, alt: "level0locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Church Key or Lockpick / Crowbar</p>"),
    L.marker([74.16, -107.6], {icon: iconLocked, alt: "level0locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Sewer Key or Lockpick / Crowbar</p>"),
    L.marker([72.58, -99.44], {icon: iconLocked, alt: "level0locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Sewer Key or Lockpick / Crowbar</p>"),
    L.marker([58.24, -108.0], {icon: iconLocked, alt: "level0locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([44.99, -111.1], {icon: iconLocked, alt: "level0locked"}).bindLabel("Locked Keycard Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),
    L.marker([41.54, -106.2], {icon: iconLocked, alt: "level0locked"}).bindLabel("Locked Keycard Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),
    L.marker([46.13, -99.88], {icon: iconLocked, alt: "level0locked"}).bindLabel("Locked Keycard Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),

]);

/* ==================================================================================================================================================================
   Level 1
   ================================================================================================================================================================== */

var level1other = L.layerGroup([

    L.marker([73.66, -114.9], {icon: iconIcaStash, alt: "level1icastash", title: "Small Agency Pickup: Confessional Booth"}).bindLabel("Small Agency Pickup: Confessional Booth").bindPopup("<img src='img/map_sapienza/screenshots/ica_booth.jpg'><h2>Small Agency Pickup</h2><h1>ICA Confessional Booth</h1>"),
    L.marker([76.80, -104.4], {icon: iconEnter, alt: "level1enter"}).bindLabel("Starting Locaton: Church Morgue").bindPopup("<img src='img/map_sapienza/screenshots/enter_morgue.jpg'><h2>Starting Locaton</h2><h1>Church Morgue</h1>"),
  
    L.marker([-4.95, -153.0], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([25.56, -138.6], {icon: iconWayUp, alt: "level1waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([-0.96, -158.1], {icon: iconWayDown, alt: "level1waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([74.69, -121.0], {icon: iconWayDown, alt: "level1waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([79.51, -125.1], {icon: iconWayDown, alt: "level1waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
 
    L.marker([-3.16, -156.5], {icon: iconWayIn, alt: "level1waysin"}).bindLabel("Scale").bindPopup("<h2>Passage</h2><h1>Scale</h1>"),
    L.marker([76.58, -96.89], {icon: iconWayIn, alt: "level1waysin"}).bindLabel("Vault").bindPopup("<h2>Passage</h2><h1>Vault</h1>"),
    L.marker([76.81, -125.9], {icon: iconWayIn, alt: "level1waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([75.19, -121.4], {icon: iconWayIn, alt: "level1waysin"}).bindLabel("Scale").bindPopup("<h2>Passage</h2><h1>Scale</h1>"),

    L.marker([45.58, -113.3], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([49.83, -129.4], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([54.57, -125.1], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([55.55, -108.0], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([40.64, -132.8], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([62.26, -84.19], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([66.87, -83.45], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([76.27, -120.5], {icon: iconStairsUp, alt: "level1stairsupdown"}),
    L.marker([73.21, -83.93], {icon: iconStairsUpDown, alt: "level1stairsupdown"}),
    L.marker([41.37, -123.3], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([43.29, -101.7], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([49.83, -123.0], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([55.60, -125.0], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([57.32, -106.5], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([76.29, -90.00], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([76.70, -99.31], {icon: iconStairsDown, alt: "level1stairsupdown"}),
    L.marker([76.83, -118.3], {icon: iconStairsDown, alt: "level1stairsupdown"}),

]);

var level1weapons = L.layerGroup([

    L.marker([70.05, -84.41], {icon: iconBaseballBat, alt: "level1baseballbat"}).bindLabel("Baseball Bat"),
    L.marker([69.38, -84.55], {icon: iconExtinguisher, alt: "level1extinguisher"}).bindLabel("Fire Extinguisher"),
    L.marker([74.61, -87.53], {icon: iconCoin, alt: "level1coin"}).bindLabel("Coin (3)"),
    L.marker([73.26, -113.3], {icon: iconCoin, alt: "level1coin"}).bindLabel("Coin"),
    L.marker([26.19, -140.4], {icon: iconCoin, alt: "level1coin"}).bindLabel("Coin"),
    L.marker([76.54, -121.2], {icon: iconBrick, alt: "level1brick"}).bindLabel("Brick"),
    L.marker([75.02, -119.6], {icon: iconBrick, alt: "level1brick"}).bindLabel("Brick (2)"),
    L.marker([80.79, -115.8], {icon: iconBrick, alt: "level1brick"}).bindLabel("Brick"),
    L.marker([45.05, -108.6], {icon: iconHammer, alt: "level1hammer"}).bindLabel("Hammer"),
    L.marker([73.31, -73.38], {icon: iconPipe, alt: "level1pipe"}).bindLabel("Lead Pipe"),
    L.marker([73.12, -74.04], {icon: iconSoda, alt: "level1sodacan"}).bindLabel("Soda Can"),
    L.marker([75.73, -102.0], {icon: iconKnife, alt: "level1knife"}).bindLabel("Knife"),
    L.marker([76.99, -124.2], {icon: iconOldAxe, alt: "level1oldaxe"}).bindLabel("Old Axe"),
    L.marker([70.52, -83.18], {icon: iconScissors, alt: "level1scissors"}).bindLabel("Scissors"),
    L.marker([76.47, -114.3], {icon: iconScissors, alt: "level1scissors"}).bindLabel("Scissors"),
    L.marker([77.19, -125.2], {icon: iconScrewdriver, alt: "level1screwdriver"}).bindLabel("Screwdriver"),
    L.marker([80.11, -112.8], {icon: iconShovel, alt: "level1shovel"}).bindLabel("Shovel"),
    L.marker([78.85, -121.7], {icon: iconShovel, alt: "level1shovel"}).bindLabel("Shovel"),
    L.marker([77.03, -126.1], {icon: iconShovel, alt: "level1shovel"}).bindLabel("Shovel"),
    L.marker([71.74, -69.34], {icon: iconWrench, alt: "level1wrench"}).bindLabel("Wrench"),

]);

var level1poi = L.layerGroup([

    L.marker([73.00, -74.83], {icon: iconContainer, alt: "level1container"}).bindLabel("Hiding Spot"),
    L.marker([75.87, -85.73], {icon: iconContainer, alt: "level1container"}).bindLabel("Hiding Spot"),
    L.marker([76.02, -103.8], {icon: iconContainer, alt: "level1container"}).bindLabel("Hiding Spot"),
    L.marker([30.14, -136.3], {icon: iconContainer, alt: "level1container"}).bindLabel("Hiding Spot"),
    L.marker([45.73, -98.65], {icon: iconContainer, alt: "level1container"}).bindLabel("Hiding Spot"),
    L.marker([40.07, -121.1], {icon: iconContainer, alt: "level1container"}).bindLabel("Hiding Spot"),

    L.marker([76.01, -87.62], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([75.55, -85.95], {icon: iconConceal, alt: "level1conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([75.87, -103.1], {icon: iconDisguise, alt: "level1disguise", title: "Disguise: Lab Technician"}).bindLabel("Disguise: Lab Technician").bindPopup("<img src='img/map_sapienza/screenshots/disg_labstaff.jpg'><h2>Disguise</h2><h1>Lab Technician</h1>"),

    L.marker([69.68, -80.72], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([69.34, -81.47], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([65.29, -98.56], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([71.24, -90.92], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([70.71, -111.3], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([72.67, -94.74], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([76.50, -100.4], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([76.67, -103.8], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([77.36, -122.1], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([76.75, -122.2], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In as a Gardener").bindPopup("<h2>Blend In</h2><h1>Gardener</h1>"),
    L.marker([78.31, -130.7], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([73.44, -105.6], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([73.46, -113.7], {icon: iconBlend, alt: "level1blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),

    L.marker([75.25, -88.76], {icon: iconDistraction, alt: "level1dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([75.44, -89.60], {icon: iconDistraction, alt: "level1dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([76.20, -86.79], {icon: iconDistraction, alt: "level1dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([75.72, -85.25], {icon: iconDistraction, alt: "level1dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([75.69, -102.5], {icon: iconDistraction, alt: "level1dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([76.19, -100.0], {icon: iconDistraction, alt: "level1dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([76.07, -114.8], {icon: iconDistraction, alt: "level1dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([78.75, -122.9], {icon: iconDistraction, alt: "level1dis-radio"}).bindLabel("Radio").bindPopup("<h2>Distraction</h2><h1>Radio</h1><p class='item-use'>Turn On/Off</p>"),
    L.marker([28.22, -134.4], {icon: iconDistraction, alt: "level1dis-power"}).bindLabel("Power").bindPopup("<h2>Distraction</h2><h1>Power</h1><p class='item-use'>Turn On/Off</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([44.18, -100.4], {icon: iconDistraction, alt: "level1dis-generator"}).bindLabel("Generator").bindPopup("<h2>Distraction</h2><h1>Generator</h1><p class='item-use'>Turn On/Off</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([77.30, -124.6], {icon: iconDistraction, alt: "level1dis-faucet"}).bindLabel("Faucet").bindPopup("<h2>Distraction</h2><h1>Faucet</h1><p class='item-use'>Turn On/Off</p>"),
    L.marker([79.22, -134.8], {icon: iconDistraction, alt: "level1dis-faucet"}).bindLabel("Faucet").bindPopup("<h2>Distraction</h2><h1>Faucet</h1><p class='item-use'>Turn On/Off</p>"),

    L.marker([67.87, -86.04], {icon: iconSabotage, alt: "level1sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([69.06, -84.15], {icon: iconSabotage, alt: "level1sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([71.73, -79.58], {icon: iconSabotage, alt: "level1sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([69.13, -78.48], {icon: iconSabotage, alt: "level1sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([74.24, -76.64], {icon: iconSabotage, alt: "level1sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([73.86, -77.65], {icon: iconSabotage, alt: "level1sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([66.23, -86.87], {icon: iconSabotage, alt: "level1sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([63.27, -87.71], {icon: iconSabotage, alt: "level1sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([61.75, -91.05], {icon: iconSabotage, alt: "level1sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([64.20, -100.5], {icon: iconSabotage, alt: "level1sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([67.40, -96.76], {icon: iconSabotage, alt: "level1sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([71.46, -96.72], {icon: iconSabotage, alt: "level1sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([69.70, -104.1], {icon: iconSabotage, alt: "level1sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([77.33, -127.9], {icon: iconSabotage, alt: "level1sab-tractor"}).bindLabel("Garden Tractor").bindPopup("<h2>Sabotage</h2><h1>Garden Tractor</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([75.09, -113.4], {icon: iconSabotage, alt: "level1sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1><p class='note'>Not connected to any Winch</p>"),
    L.marker([76.26, -118.2], {icon: iconSabotage, alt: "level1sab-bell"}).bindLabel("Church Bell").bindPopup("<h2>Sabotage</h2><h1>Church Bell</h1><p class='note'>Winch is on the 6th level</p>"),

    L.marker([72.95, -71.85], {icon: iconPoison, alt: "level1poison"}).bindLabel("Water Bottle").bindPopup("<h2>Poison</h2><h1>Water Bottle</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Tourist</p>"),
    L.marker([65.20, -90.48], {icon: iconPoison, alt: "level1poison"}).bindLabel("Water Bottle").bindPopup("<h2>Poison</h2><h1>Water Bottle</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Street Performer</p>"),
    L.marker([79.44, -134.3], {icon: iconPoison, alt: "level1poison"}).bindLabel("Water Bottle").bindPopup("<h2>Poison</h2><h1>Water Bottle</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Tourist</p>"),
    L.marker([69.96, -85.56], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of White Wine").bindPopup("<h2>Poison</h2><h1>Glass of White Wine</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([69.51, -86.66], {icon: iconPoison, alt: "level1poison"}).bindLabel("Glass of White Wine").bindPopup("<h2>Poison</h2><h1>Glass of White Wine</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),

    L.marker([70.12, -83.05], {icon: iconIntel, alt: "level1intel"}).bindLabel("The Private Detective").bindPopup("<img src='img/map_sapienza/screenshots/intel_detective.jpg'><h2>Intel</h2><h1>The Private Detective</h1><p class='ingame-desc'><b>In-game description:</b><br>According to the hairdresser, Sal Falcone, a private investigator from Milan, is in town to meet Francesca De Santis. This Falcone character has apparently performed services for Silvio Caruso in the past. Whatever they were, the case appears to have taken him all around the country. Question is, does Falcone still work for Caruso, or does De Santis have an agenda of her own?</p>"),
    L.marker([73.87, -115.4], {icon: iconIntel, alt: "level1intel"}).bindLabel("The Accident at the Lab").bindPopup("<img src='img/map_sapienza/screenshots/intel_confession.jpg'><h2>Intel</h2><h1>The Accident at the Lab</h1><p class='ingame-desc'><b>In-game description:</b><br>According to the scientist in the confession booth, an accident at the Ether lab has claimed the life of a male scientist. His body is currently stored at the town morgue. The female scientist, who appears to be somehow responsible for the accident, plans to visit the morgue to pay her respects.</p>"),
    L.marker([42.77, -119.8], {icon: iconIntel, alt: "level1intel"}).bindLabel("Biolab Safety Protocol").bindPopup("<img src='img/map_sapienza/screenshots/intel_biosec.jpg'><h2>Intel</h2><h1>Biolab Safety Protocol</h1><p class='ingame-desc'><b>In-game description:</b><br>A clipboard with the lab's safety protocol. To prevent a disastrous outbreak, a kill switch has been installed. One push of a key, and the virus instantly overheats and dies. However, the laptop that controls the kill switch requires an access dongle, and the scientist who holds this dongle has left a note that reads 'gone to church.'</p>"),

    L.marker([76.04, -102.3], {icon: iconItem, alt: "level1item", title: "Item: Biolab Laptop Dongle"}).bindLabel("Biolab Laptop Dongle").bindPopup("<img src='img/map_sapienza/screenshots/item_dongle.jpg'><h2>Item</h2><h1>Biolab Laptop Dongle</h1><p class='item-desc'>Dongle is carried by a redhead lab technician lady. She will mourn her colleague in morgue for some time, then will go back to the lab.</p><p class='ingame-desc'><b>In-game description:</b><br>A laptop access dongle. Must be importatnt.</p>"),
    L.marker([76.94, -103.4], {icon: iconItem, alt: "level1item", title: "Item: Flower Bouquet"}).bindLabel("Flower Bouquet").bindPopup("<img src='img/map_sapienza/screenshots/item_bouquet.jpg'><h2>Item</h2><h1>Flower Bouquet</h1><p class='note'>Part of 'The Good Son' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>A fresh bouquet of flowers. The recipient is Silvio Caruso.</p>"),
    L.marker([78.23, -108.4], {icon: iconItem, alt: "level1item", title: "Item: Flower Bouquet"}).bindLabel("Flower Bouquet").bindPopup("<img src='img/map_sapienza/screenshots/item_bouquet.jpg'><h2>Item</h2><h1>Flower Bouquet</h1><p class='note'>Part of 'The Good Son' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>A fresh bouquet of flowers. The recipient is Silvio Caruso.</p>"),
    L.marker([79.23, -118.3], {icon: iconItem, alt: "level1item", title: "Item: Flower Bouquet"}).bindLabel("Flower Bouquet").bindPopup("<img src='img/map_sapienza/screenshots/item_bouquet.jpg'><h2>Item</h2><h1>Flower Bouquet</h1><p class='note'>Part of 'The Good Son' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>A fresh bouquet of flowers. The recipient is Silvio Caruso.</p>"),
    L.marker([76.73, -115.4], {icon: iconItem, alt: "level1item", title: "Item: Church Key"}).bindLabel("Church Key").bindPopup("<img src='img/map_sapienza/screenshots/item_keychurch.jpg'><h2>Item</h2><h1>Church Key</h1><p class='ingame-desc'><b>In-game description:</b><br>A master key to Sapienza's town church.</p>"),

    L.marker([65.27, -93.25], {icon: iconLocation, alt: "level1location", title: "Location: Street Performer"}).bindLabel("Street Performer").bindPopup("<img src='img/map_sapienza/screenshots/loc_streetperf.jpg'><h2>Location</h2><h1>Street Performer</h1>"),
    L.marker([29.11, -135.3], {icon: iconLocation, alt: "level1location", title: "Location: Biolab Entrance"}).bindLabel("Biolab Entrance").bindPopup("<img src='img/map_sapienza/screenshots/loc_biolabenter.jpg'><h2>Location</h2><h1>Biolab Entrance</h1>"),

    L.marker([41.83, -119.8], {icon: iconInteraction, alt: "level1interaction", title: "Interaction: Biolab Laptop"}).bindLabel("Biolab Laptop").bindPopup("<img src='img/map_sapienza/screenshots/inter_laptop.jpg'><h2>Interaction</h2><h1>Biolab Laptop</h1><p class='item-use'>Destroy Virus</p><p class='req'>Requires Biolab Laptop Dongle</p>"),

    L.marker([76.42, -111.0], {icon: iconCamera, alt: "level1camera"}).bindLabel("Security Camera"),
    L.polygon([[76.42, -111.0], [77.35, -111.1], [76.43, -106.7]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([76.67, -120.2], {icon: iconCamera, alt: "level1camera"}).bindLabel("Security Camera"),
    L.polygon([[76.67, -120.2], [78.16, -121.3], [77.34, -125.2], [76.97, -123.4], [76.38, -126.2]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),
    L.marker([27.48, -137.2], {icon: iconCamera, alt: "level1camera"}).bindLabel("Security Camera"),
    L.polygon([[27.48, -137.2], [27.91, -139.9], [29.80, -138.2]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level1camera"}).bindLabel("Security Camera"),

    L.marker([73.32, -72.20], {icon: iconLocked, alt: "level1locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([72.56, -72.33], {icon: iconLocked, alt: "level1locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([75.75, -89.34], {icon: iconLocked, alt: "level1locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([75.88, -100.6], {icon: iconLocked, alt: "level1locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Church Key or Lockpick / Crowbar</p>"),
    L.marker([76.37, -106.1], {icon: iconLocked, alt: "level1locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Church Key or Lockpick / Crowbar</p>"),
    L.marker([76.81, -124.4], {icon: iconLocked, alt: "level1locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Church Key or Lockpick / Crowbar</p>"),
    L.marker([28.61, -136.7], {icon: iconLocked, alt: "level1locked"}).bindLabel("Locked Keycard Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),

]);

/* ==================================================================================================================================================================
   Level 2
   ================================================================================================================================================================== */

var level2other = L.layerGroup([

    L.marker([61.48, -84.50], {icon: iconWayUp, alt: "level2waysupdown"}).bindLabel("Pipe: Level 2-4").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 2-4</h1>"),
    L.marker([-4.95, -153.0], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([25.56, -138.6], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([42.65, -128.2], {icon: iconWayDown, alt: "level2waysupdown"}).bindLabel("Pipe: Level 0-2").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 0-2</h1>"),

    L.marker([4.959, -156.4], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([6.577, -152.9], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([44.52, -90.83], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([44.90, -107.0], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([51.99, -118.0], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([57.61, -91.36], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([66.19, -78.44], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([63.15, -62.22], {icon: iconStairsUp, alt: "level2stairsupdown"}),
    L.marker([62.65, -83.80], {icon: iconStairsUpDown, alt: "level2stairsupdown"}),
    L.marker([73.20, -83.93], {icon: iconStairsUpDown, alt: "level2stairsupdown"}),
    L.marker([76.28, -118.3], {icon: iconStairsUpDown, alt: "level2stairsupdown"}),
    L.marker([54.52, -125.9], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([55.52, -107.1], {icon: iconStairsDown, alt: "level2stairsupdown"}),
    L.marker([67.47, -82.83], {icon: iconStairsDown, alt: "level2stairsupdown"}),

]);

var level2weapons = L.layerGroup([

    L.marker([67.11, -52.47], {icon: iconCoin, alt: "level2coin"}).bindLabel("Coin"),
    L.marker([70.42, -51.98], {icon: iconCoin, alt: "level2coin"}).bindLabel("Coin"),
    L.marker([53.90, -111.4], {icon: iconCoin, alt: "level2coin"}).bindLabel("Coin"),
    L.marker([49.97, -132.7], {icon: iconCoin, alt: "level2coin"}).bindLabel("Coin"),
    L.marker([53.19, -103.1], {icon: iconPoisons, alt: "level2weapoison"}).bindLabel("Emetic Rat Poison").bindPopup("<h2>Poison</h2><h1>Emetic Rat Poison</h1>"),
    L.marker([44.96, -132.2], {icon: iconFirearm, alt: "level2firearm"}).bindLabel("Pistol: Bartoli 75R").bindPopup("<h2>Pistol</h2><h1>Bartoli 75R</h1>"),
    L.marker([44.40, -131.8], {icon: iconAmmo, alt: "level2ammo"}).bindLabel("Pistol Ammo").bindPopup("<h2>Ammo</h2><h1>Pistol Ammo</h1>"),
    L.marker([53.69, -106.6], {icon: iconBaseballBat, alt: "level2baseballbat"}).bindLabel("Baseball Bat"),
    L.marker([65.76, -56.29], {icon: iconKnifeFold, alt: "level2foldingknife"}).bindLabel("Folding Knife"),
    L.marker([61.14, -100.2], {icon: iconKnifeFold, alt: "level2foldingknife"}).bindLabel("Folding Knife"),
    L.marker([28.92, -133.3], {icon: iconHammer, alt: "level2hammer"}).bindLabel("Hammer"),
    L.marker([66.28, -57.87], {icon: iconSoda, alt: "level2sodacan"}).bindLabel("Soda Can"),
    L.marker([56.96, -119.0], {icon: iconSoda, alt: "level2sodacan"}).bindLabel("Soda Can"),
    L.marker([66.03, -66.57], {icon: iconShovel, alt: "level2shovel"}).bindLabel("Shovel"),
    L.marker([29.72, -134.4], {icon: iconShovel, alt: "level2shovel"}).bindLabel("Shovel"),
    L.marker([24.12, -135.8], {icon: iconShovel, alt: "level2shovel"}).bindLabel("Shovel"),
    L.marker([53.22, -112.4], {icon: iconScissors, alt: "level2scissors"}).bindLabel("Scissors"),
    L.marker([28.14, -132.3], {icon: iconScrewdriver, alt: "level2screwdriver"}).bindLabel("Screwdriver"),
    L.marker([65.89, -80.90], {icon: iconKnife, alt: "level2knife"}).bindLabel("Knife"),
    L.marker([55.00, -100.3], {icon: iconKnife, alt: "level2knife"}).bindLabel("Knife"),
    L.marker([61.16, -101.5], {icon: iconBaton, alt: "level2baton"}).bindLabel("Police Baton"),
    L.marker([62.61, -60.42], {icon: iconWrench, alt: "level2wrench"}).bindLabel("Wrench"),

]);

var level2poi = L.layerGroup([

    L.marker([62.59, -61.47], {icon: iconContainer, alt: "level2container"}).bindLabel("Hiding Spot"),
    L.marker([68.94, -60.73], {icon: iconContainer, alt: "level2container"}).bindLabel("Hiding Spot"),
    L.marker([69.94, -61.61], {icon: iconContainer, alt: "level2container"}).bindLabel("Hiding Spot"),
    L.marker([72.91, -57.52], {icon: iconContainer, alt: "level2container"}).bindLabel("Hiding Spot"),
    L.marker([67.62, -85.12], {icon: iconContainer, alt: "level2container"}).bindLabel("Hiding Spot"),
    L.marker([65.83, -83.40], {icon: iconContainer, alt: "level2container"}).bindLabel("Hiding Spot"),
    L.marker([27.13, -131.6], {icon: iconContainer, alt: "level2container"}).bindLabel("Hiding Spot"),
    L.marker([46.70, -134.5], {icon: iconContainer, alt: "level2container"}).bindLabel("Hiding Spot"),
    L.marker([54.52, -103.4], {icon: iconContainer, alt: "level2container"}).bindLabel("Hiding Spot"),

    L.marker([64.77, -82.44], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([53.33, -120.6], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([55.07, -101.3], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([56.21, -102.3], {icon: iconConceal, alt: "level2conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([66.23, -65.65], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Delivery Man"}).bindLabel("Disguise: Delivery Man").bindPopup("<img src='img/map_sapienza/screenshots/disg_delivery.jpg'><h2>Disguise</h2><h1>Delivery Man</h1>"),
    L.marker([65.67, -85.38], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Church Staff"}).bindLabel("Disguise: Church Staff").bindPopup("<img src='img/map_sapienza/screenshots/disg_church.jpg'><h2>Disguise</h2><h1>Church Staff</h1>"),
    L.marker([52.56, -116.4], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Mansion Security"}).bindLabel("Disguise: Mansion Security").bindPopup("<img src='img/map_sapienza/screenshots/disg_mansec.jpg'><h2>Disguise</h2><h1>Mansion Security</h1>"),
    L.marker([53.82, -108.3], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Store Clerk"}).bindLabel("Disguise: Store Clerk").bindPopup("<img src='img/map_sapienza/screenshots/disg_store.jpg'><h2>Disguise</h2><h1>Store Clerk</h1>"),
    L.marker([53.01, -105.5], {icon: iconDisguise, alt: "level2disguise", title: "Disguise: Kitchen Assistant"}).bindLabel("Disguise: Kitchen Assistant").bindPopup("<img src='img/map_sapienza/screenshots/disg_kitchenass.jpg'><h2>Disguise</h2><h1>Kitchen Assistant</h1>"),

    L.marker([68.22, -52.51], {icon: iconBlend, alt: "level2blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),

    L.marker([67.77, -55.45], {icon: iconDistraction, alt: "level2dis-radio"}).bindLabel("Transistor Radio").bindPopup("<h2>Distraction</h2><h1>Transistor Radio</h1><p class='item-use'>Turn On/Off</p>"),
    L.marker([64.73, -80.72], {icon: iconDistraction, alt: "level2dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([52.74, -120.3], {icon: iconDistraction, alt: "level2dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([54.23, -103.4], {icon: iconDistraction, alt: "level2dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([54.26, -98.87], {icon: iconDistraction, alt: "level2dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),

    L.marker([65.03, -52.07], {icon: iconSabotage, alt: "level2sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([67.60, -53.87], {icon: iconSabotage, alt: "level2sab-scooter"}).bindLabel("Scooter (2)").bindPopup("<h2>Sabotage</h2><h1>Scooter (2)</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([68.46, -52.07], {icon: iconSabotage, alt: "level2sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([68.65, -58.79], {icon: iconSabotage, alt: "level2sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([68.98, -63.14], {icon: iconSabotage, alt: "level2sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([72.67, -60.95], {icon: iconSabotage, alt: "level2sab-scooter"}).bindLabel("Scooter (2)").bindPopup("<h2>Sabotage</h2><h1>Scooter (2)</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([72.93, -56.03], {icon: iconSabotage, alt: "level2sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([70.75, -54.00], {icon: iconSabotage, alt: "level2sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([67.44, -69.21], {icon: iconSabotage, alt: "level2sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([63.05, -70.09], {icon: iconSabotage, alt: "level2sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([65.33, -71.76], {icon: iconSabotage, alt: "level2sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([67.50, -57.78], {icon: iconSabotage, alt: "level2sab-gasvalve"}).bindLabel("Gas Valve").bindPopup("<h2>Sabotage</h2><h1>Gas Valve</h1><p class='item-use'>Release Gas</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([55.30, -115.3], {icon: iconSabotage, alt: "level2sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1><p class='note'>Not connected to any Winch</p>"),

    L.marker([65.47, -80.90], {icon: iconPoison, alt: "level2poison"}).bindLabel("Glass of Red Wine").bindPopup("<h2>Poison</h2><h1>Glass of Red Wine</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Church Staff member</p>"),
    L.marker([60.95, -111.2], {icon: iconPoison, alt: "level2poison"}).bindLabel("Water Bottle").bindPopup("<h2>Poison</h2><h1>Water Bottle</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Tourist</p>"),
    L.marker([60.78, -100.9], {icon: iconPoison, alt: "level2poison"}).bindLabel("Coffee Glass (3)").bindPopup("<h2>Poison</h2><h1>Coffee Glass (3)</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Bodyguard</p>"),

    L.marker([-0.61, -153.4], {icon: iconItem, alt: "level2item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup("<img src='img/map_sapienza/screenshots/item_cannonball.jpg'><h2>Item</h2><h1>Cannonball</h1><p class='ingame-desc'><b>In-game description:</b><br>An antique cannonball.</p>"),
    L.marker([16.46, -152.7], {icon: iconItem, alt: "level2item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup("<img src='img/map_sapienza/screenshots/item_cannonball.jpg'><h2>Item</h2><h1>Cannonball</h1><p class='ingame-desc'><b>In-game description:</b><br>An antique cannonball.</p>"),
    L.marker([3.864, -150.1], {icon: iconItem, alt: "level2item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup("<img src='img/map_sapienza/screenshots/item_cannonball.jpg'><h2>Item</h2><h1>Cannonball</h1><p class='ingame-desc'><b>In-game description:</b><br>An antique cannonball.</p>"),
    L.marker([-2.10, -155.2], {icon: iconItem, alt: "level2item", title: "Item: Cannabis Joint"}).bindLabel("Cannabis Joint").bindPopup("<img src='img/map_sapienza/screenshots/item_cannabis.jpg'><h2>Item</h2><h1>Cannabis Joint</h1><p class='ingame-desc'><b>In-game description:</b><br>A joint belonging to the apartment's bohemian owner. Potent stuff, it's useful to cause sleepiness and increased appetite.</p>"),
    L.marker([12.94, -151.1], {icon: iconItem, alt: "level2item", title: "Item: Castle Key"}).bindLabel("Castle Key").bindPopup("<img src='img/map_sapienza/screenshots/item_keycastle.jpg'><h2>Item</h2><h1>Castle Key</h1><p class='ingame-desc'><b>In-game description:</b><br>A key to the castle ruins off the coast from Villa Caruso.</p>"),
    L.marker([66.68, -67.06], {icon: iconItem, alt: "level2item", title: "Item: Flower Bouquet"}).bindLabel("Flower Bouquet").bindPopup("<img src='img/map_sapienza/screenshots/item_bouquet.jpg'><h2>Item</h2><h1>Flower Bouquet</h1><p class='note'>Part of 'The Good Son' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>A fresh bouquet of flowers. The recipient is Silvio Caruso.</p>"),
    L.marker([66.35, -81.82], {icon: iconItem, alt: "level2item", title: "Item: Church Key"}).bindLabel("Church Key").bindPopup("<img src='img/map_sapienza/screenshots/item_keychurch.jpg'><h2>Item</h2><h1>Church Key</h1><p class='ingame-desc'><b>In-game description:</b><br>A master key to Sapienza's town church.</p>"),
    L.marker([75.98, -115.4], {icon: iconItem, alt: "level2item", title: "Item: Sewer Key"}).bindLabel("Sewer Key").bindPopup("<img src='img/map_sapienza/screenshots/item_keysewer.jpg'><h2>Item</h2><h1>Sewer Key</h1><p class='ingame-desc'><b>In-game description:</b><br>An access key for the town's sewer system.</p>"),
    L.marker([45.79, -131.0], {icon: iconItem, alt: "level2item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup("<img src='img/map_sapienza/screenshots/item_keycardbio.jpg'><h2>Item</h2><h1>Biolab Keycard</h1><p class='ingame-desc'><b>In-game description:</b><br>An access keycard for the Ether biolab.</p>"),

    L.marker([28.49, -135.8], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Grave Flowers"}).bindLabel("Grave Flowers").bindPopup("<img src='img/map_sapienza/screenshots/inter_grave.jpg'><h2>Interaction</h2><h1>Grave Flowers</h1><p class='item-use'>Place Flowers</p>"),
    L.marker([22.59, -130.7], {icon: iconInteraction, alt: "level2interaction", title: "Interaction: Shredder"}).bindLabel("Shredder").bindPopup("<img src='img/map_sapienza/screenshots/inter_shredder.jpg'><h2>Interaction</h2><h1>Shredder</h1><p class='item-use'>Shred</p>"),

    L.marker([67.95, -53.17], {icon: iconLocation, alt: "level2location", title: "Location: Private Detective"}).bindLabel("Private Detective").bindPopup("<img src='img/map_sapienza/screenshots/loc_detective.jpg'><h2>Location</h2><h1>Private Detective</h1>"),
    L.marker([37.23, -133.9], {icon: iconLocation, alt: "level2location", title: "Location: Biolab Entrance"}).bindLabel("Biolab Entrance").bindPopup("<img src='img/map_sapienza/screenshots/loc_biolabenter.jpg'><h2>Location</h2><h1>Biolab Entrance</h1>"),
    L.marker([45.08, -134.0], {icon: iconLocation, alt: "level2location", title: "Location: Silvio Caruso Safe Room"}).bindLabel("Silvio Caruso Safe Room").bindPopup("<h2>Location</h2><h1>Silvio Caruso Safe Room</h1>"),

    L.marker([63.84, -59.72], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key or Lockpick / Crowbar</p>"),
    L.marker([14.56, -139.9], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Castle Key or Lockpick / Crowbar</p>"),
    L.marker([15.62, -151.6], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Castle Key or Lockpick / Crowbar</p>"),
    L.marker([65.23, -56.51], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([67.15, -67.28], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([65.83, -68.51], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([66.63, -85.38], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Apartment Key or Lockpick / Crowbar</p><p class='note'>You can also just ring the bell</p>"),
    L.marker([66.28, -80.63], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Apartment Key or Lockpick / Crowbar</p>"),
    L.marker([54.82, -120.4], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([57.89, -116.1], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([58.21, -101.3], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([53.61, -110.1], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([53.80, -105.0], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([58.07, -93.60], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Keycard Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Mansion Keycard</p>"),
    L.marker([37.40, -136.0], {icon: iconLocked, alt: "level2locked"}).bindLabel("Locked Keycard Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),

]);

/* ==================================================================================================================================================================
   Level 3
   ================================================================================================================================================================== */

var level3other = L.layerGroup([

    L.marker([35.13, -98.92], {icon: iconIcaStash, alt: "level3icastash", title: "Small Agency Pickup: Mansion Garage"}).bindLabel("Small Agency Pickup: Mansion Garage").bindPopup("<img src='img/map_sapienza/screenshots/ica_garage.jpg'><h2>Small Agency Pickup</h2><h1>Mansion Garage</h1>"),
    L.marker([48.83, -42.27], {icon: iconIcaStash, alt: "level3icastash", title: "Large Agency Pickup: Cafe Basement"}).bindLabel("Large Agency Pickup: Cafe Basement").bindPopup("<img src='img/map_sapienza/screenshots/ica_cafe.jpg'><h2>Large Agency Pickup</h2><h1>Cafe Basement</h1>"),

    L.marker([43.42, -57.70], {icon: iconEnter, alt: "level3enter"}).bindLabel("Starting Locaton: Main Square").bindPopup("<img src='img/map_sapienza/screenshots/enter_main.jpg'><h2>Starting Locaton</h2><h1>Main Square</h1>"),
    L.marker([35.56, -69.34], {icon: iconExit, alt: "level3exit"}).bindLabel("Exit Locaton: Car").bindPopup("<img src='img/map_sapienza/screenshots/exit_car.jpg'><h2>Exit Locaton</h2><h1>Car</h1>"),

    L.marker([29.72, -72.29], {icon: iconWayUp, alt: "level3waysupdown"}).bindLabel("Hang on the Ledge").bindPopup("<h2>Way Up</h2><h1>Hang on the Ledge</h1>"),
    L.marker([52.72, -41.08], {icon: iconWayUp, alt: "level3waysupdown"}).bindLabel("Pipe: Level 3-5").bindPopup("<h2>Way Up</h2><h1>Pipe: Level 3-5</h1>"),
    L.marker([58.14, -82.17], {icon: iconWayUp, alt: "level3waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([62.02, -79.89], {icon: iconWayUp, alt: "level3waysupdown"}).bindLabel("Hang on the Ledge").bindPopup("<h2>Way Up</h2><h1>Hang on the Ledge</h1>"),
    L.marker([45.18, -79.10], {icon: iconWayDown, alt: "level3waysupdown"}).bindLabel("Climb Through").bindPopup("<h2>Way Down</h2><h1>Climb Through</h1>"),

    L.marker([7.928, -152.0], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([23.07, -112.4], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([26.39, -109.9], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([30.25, -103.9], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([31.87, -97.38], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([33.54, -102.8], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([31.95, -72.15], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([43.89, -85.78], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([43.26, -128.1], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([50.62, -108.3], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([53.48, -92.24], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([55.52, -114.0], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([56.38, -85.69], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([60.65, -75.89], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([39.13, -47.37], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([43.22, -36.73], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([46.95, -39.59], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([50.81, -48.42], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([54.95, -42.80], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([56.21, -44.69], {icon: iconStairsUp, alt: "level3stairsupdown"}),
    L.marker([76.28, -118.3], {icon: iconStairsUpDown, alt: "level3stairsupdown"}),
    L.marker([62.63, -83.75], {icon: iconStairsUpDown, alt: "level3stairsupdown"}),
    L.marker([0.790, -156.4], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([44.49, -90.79], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([45.27, -107.5], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([52.07, -118.0], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([67.05, -78.48], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([63.31, -61.78], {icon: iconStairsDown, alt: "level3stairsupdown"}),
    L.marker([73.42, -84.06], {icon: iconStairsDown, alt: "level3stairsupdown"}),

]);

var level3weapons = L.layerGroup([

    L.marker([64.30, -81.95], {icon: iconFirearm, alt: "level3firearm"}).bindLabel("Pistol: Bartoli 75R").bindPopup("<h2>Pistol</h2><h1>Bartoli 75R</h1>"),
    L.marker([63.87, -81.91], {icon: iconAmmo, alt: "level3ammo"}).bindLabel("Pistol Ammo").bindPopup("<h2>Ammo</h2><h1>Pistol Ammo</h1>"),
    L.marker([26.11, -115.5], {icon: iconPoisons, alt: "level3weapoison"}).bindLabel("Emetic Rat Poison").bindPopup("<h2>Poison</h2><h1>Emetic Rat Poison</h1>"),
    L.marker([58.49, -78.31], {icon: iconExplosive, alt: "level3explosive"}).bindLabel("Propane Flask").bindPopup("<h2>Explosive</h2><h1>Propane Flask</h1>"),
    L.marker([45.02, -47.06], {icon: iconCoin, alt: "level3coin"}).bindLabel("Coin x3"),
    L.marker([45.36, -77.03], {icon: iconCoin, alt: "level3coin"}).bindLabel("Coin x3"),
    L.marker([60.99, -39.19], {icon: iconBaseballBat, alt: "level3baseballbat"}).bindLabel("Baseball Bat"),
    L.marker([35.38, -61.83], {icon: iconBust, alt: "level3bust"}).bindLabel("Bust"),
    L.marker([62.20, -57.30], {icon: iconBust, alt: "level3bust"}).bindLabel("Bust"),
    L.marker([29.30, -76.64], {icon: iconBrick, alt: "level3brick"}).bindLabel("Brick"),
    L.marker([30.14, -78.79], {icon: iconBrick, alt: "level3brick"}).bindLabel("Brick"),
    L.marker([28.99, -81.43], {icon: iconBrick, alt: "level3brick"}).bindLabel("Brick"),
    L.marker([29.91, -83.23], {icon: iconBrick, alt: "level3brick"}).bindLabel("Brick"),
    L.marker([59.31, -78.39], {icon: iconCleaver, alt: "level3cleaver"}).bindLabel("Cleaver"),
    L.marker([44.11, -42.49], {icon: iconCrowbar, alt: "level3crowbar"}).bindLabel("Crowbar"),
    L.marker([39.50, -96.54], {icon: iconCrowbar, alt: "level3crowbar"}).bindLabel("Crowbar"),
    L.marker([50.06, -134.0], {icon: iconCrowbar, alt: "level3crowbar"}).bindLabel("Crowbar"),
    L.marker([39.50, -100.8], {icon: iconFireAxe, alt: "level3fireaxe"}).bindLabel("Fire Axe"),
    L.marker([55.72, -116.8], {icon: iconFireAxe, alt: "level3fireaxe"}).bindLabel("Fire Axe"),
    L.marker([37.75, -90.39], {icon: iconExtinguisher, alt: "level3extinguisher"}).bindLabel("Fire Extinguisher"),
    L.marker([59.15, -74.75], {icon: iconKnife, alt: "level3knife"}).bindLabel("Kitchen Knife"),
    L.marker([64.11, -80.11], {icon: iconCombatKnife, alt: "level3combatknife"}).bindLabel("Combat Knife"),
    L.marker([45.18, -89.95], {icon: iconPipe, alt: "level3pipe"}).bindLabel("Lead Pipe"),
    L.marker([72.71, -85.29], {icon: iconShovel, alt: "level3shovel"}).bindLabel("Shovel"),
    L.marker([60.80, -61.39], {icon: iconSoda, alt: "level3sodacan"}).bindLabel("Soda Can"),
    L.marker([33.02, -93.38], {icon: iconWrench, alt: "level3wrench"}).bindLabel("Wrench"),

]);

var level3poi = L.layerGroup([

    L.marker([33.54, -63.85], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([55.05, -79.18], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([45.95, -49.74], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([42.09, -49.13], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([41.14, -46.36], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([60.30, -39.41], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([56.14, -40.03], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([49.26, -40.29], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([48.66, -45.61], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([52.07, -46.97], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([53.98, -44.29], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot x2"),
    L.marker([56.92, -84.28], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([53.90, -74.26], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([34.52, -72.29], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([30.93, -72.02], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([38.34, -87.58], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([56.60, -87.05], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([54.59, -88.11], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([55.35, -99.09], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([55.30, -95.14], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([51.61, -102.7], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([49.06, -90.74], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([47.01, -106.1], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([42.90, -92.02], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([41.24, -87.45], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([39.43, -91.14], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([33.10, -98.34], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([38.99, -105.2], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([30.56, -106.5], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([33.54, -114.5], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([36.94, -113.8], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([29.15, -115.1], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),
    L.marker([55.50, -115.2], {icon: iconContainer, alt: "level3container"}).bindLabel("Hiding Spot"),

    L.marker([40.51, -46.66], {icon: iconConceal, alt: "level3conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([72.67, -83.36], {icon: iconConceal, alt: "level3conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([63.31, -79.10], {icon: iconConceal, alt: "level3conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([54.74, -85.29], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Mansion Staff"}).bindLabel("Disguise: Mansion Staff").bindPopup("<img src='img/map_sapienza/screenshots/disg_manstaff.jpg'><h2>Disguise</h2><h1>Mansion Staff</h1>"),
    L.marker([48.45, -106.8], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Housekeeper"}).bindLabel("Disguise: Housekeeper").bindPopup("<img src='img/map_sapienza/screenshots/disg_housekeeper.jpg'><h2>Disguise</h2><h1>Housekeeper</h1>"),
    L.marker([46.37, -90.08], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Gardener"}).bindLabel("Disguise: Gardener").bindPopup("<img src='img/map_sapienza/screenshots/disg_gardener.jpg'><h2>Disguise</h2><h1>Gardener</h1>"),
    L.marker([72.36, -85.34], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Gardener"}).bindLabel("Disguise: Gardener").bindPopup("<img src='img/map_sapienza/screenshots/disg_gardener.jpg'><h2>Disguise</h2><h1>Gardener</h1>"),
    L.marker([64.24, -76.50], {icon: iconDisguise, alt: "level3disguise", title: "Disguise: Mansion Security"}).bindLabel("Disguise: Mansion Security").bindPopup("<img src='img/map_sapienza/screenshots/disg_mansec.jpg'><h2>Disguise</h2><h1>Mansion Security</h1>"),

    L.marker([17.68, -69.52], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([42.58, -58.49], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([51.20, -61.17], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([54.05, -76.50], {icon: iconBlend, alt: "level3blend"}).bindLabel("Blend In as a Gardener").bindPopup("<h2>Blend In</h2><h1>Gardener</h1>"),

    L.marker([57.46, -77.25], {icon: iconSabotage, alt: "level3sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([60.75, -71.98], {icon: iconSabotage, alt: "level3sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([60.34, -43.02], {icon: iconSabotage, alt: "level3sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([57.39, -42.05], {icon: iconSabotage, alt: "level3sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([30.52, -81.25], {icon: iconSabotage, alt: "level3sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([29.95, -81.95], {icon: iconSabotage, alt: "level3sab-scooter"}).bindLabel("Scooter").bindPopup("<h2>Sabotage</h2><h1>Scooter</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),

    L.marker([44.21, -50.88], {icon: iconDistraction, alt: "level3dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([43.80, -49.57], {icon: iconDistraction, alt: "level3dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([44.77, -42.05], {icon: iconDistraction, alt: "level3dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([41.31, -47.37], {icon: iconDistraction, alt: "level3dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([40.27, -44.47], {icon: iconDistraction, alt: "level3dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([50.56, -41.79], {icon: iconDistraction, alt: "level3dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([55.92, -88.90], {icon: iconDistraction, alt: "level3dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([46.43, -91.49], {icon: iconDistraction, alt: "level3dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([44.11, -97.82], {icon: iconDistraction, alt: "level3dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([39.43, -92.72], {icon: iconDistraction, alt: "level3dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([72.68, -82.66], {icon: iconDistraction, alt: "level3dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([63.33, -77.78], {icon: iconDistraction, alt: "level3dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([34.30, -75.49], {icon: iconDistraction, alt: "level3dis-faucet"}).bindLabel("Faucet").bindPopup("<h2>Distraction</h2><h1>Faucet</h1><p class='item-use'>Turn On/Off</p>"),
    L.marker([31.69, -108.9], {icon: iconDistraction, alt: "level3dis-power"}).bindLabel("Power").bindPopup("<h2>Distraction</h2><h1>Power</h1><p class='item-use'>Turn On/Off</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([37.82, -98.70], {icon: iconDistraction, alt: "level3dis-generator"}).bindLabel("Generator").bindPopup("<h2>Distraction</h2><h1>Generator</h1><p class='item-use'>Turn On/Off</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([26.07, -114.6], {icon: iconDistraction, alt: "level3dis-vacuum"}).bindLabel("Vacuum Cleaner").bindPopup("<h2>Distraction</h2><h1>Vacuum Cleaner</h1><p class='item-use'>Turn On/Off</p>"),

    L.marker([47.98, -55.19], {icon: iconPoison, alt: "level3poison"}).bindLabel("Coffee Glass").bindPopup("<h2>Poison</h2><h1>Coffee Glass</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Tourist</p>"),
    L.marker([49.92, -55.72], {icon: iconPoison, alt: "level3poison"}).bindLabel("Coffee Glass").bindPopup("<h2>Poison</h2><h1>Coffee Glass</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Tourist</p>"),
    L.marker([50.28, -53.87], {icon: iconPoison, alt: "level3poison"}).bindLabel("Coffee Glass").bindPopup("<h2>Poison</h2><h1>Coffee Glass</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Tourist</p>"),

    L.marker([20.46, -70.70], {icon: iconItem, alt: "level3item", title: "Item: Flower Bouquet"}).bindLabel("Flower Bouquet").bindPopup("<img src='img/map_sapienza/screenshots/item_bouquet.jpg'><h2>Item</h2><h1>Flower Bouquet</h1><p class='note'>Part of 'The Good Son' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>A fresh bouquet of flowers. The recipient is Silvio Caruso.</p>"),
    L.marker([62.77, -63.54], {icon: iconItem, alt: "level3item", title: "Item: Shop Key"}).bindLabel("Shop Key").bindPopup("<img src='img/map_sapienza/screenshots/item_keyshop.jpg'><h2>Item</h2><h1>Shop Key</h1><p class='ingame-desc'><b>In-game description:</b><br>A key to a shop in town.</p>"),
    L.marker([56.89, -97.73], {icon: iconItem, alt: "level3item", title: "Item: Expired Can of Spaghetti Sauce"}).bindLabel("Expired Can of Spaghetti Sauce (3)").bindPopup("<img src='img/map_sapienza/screenshots/item_sauce.jpg'><h2>Item</h2><h1>Expired Can of Spaghetti Sauce</h1><p class='ingame-desc'><b>In-game description:</b><br>An expired can of spaghetti sauce. Looks like ot was brought while Isabella Caruso was still alive. It appears the legend of her family recipe is somewhat exaggerated.</p>"),
    L.marker([33.65, -110.4], {icon: iconItem, alt: "level3item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup("<img src='img/map_sapienza/screenshots/item_keycardbio.jpg'><h2>Item</h2><h1>Biolab Keycard</h1><p class='ingame-desc'><b>In-game description:</b><br>An access keycard for the Ether biolab.</p>"),
    L.marker([56.02, -90.87], {icon: iconItem, alt: "level3item", title: "Item: Mansion Keycard"}).bindLabel("Mansion Keycard").bindPopup("<img src='img/map_sapienza/screenshots/item_keycardman.jpg'><h2>Item</h2><h1>Mansion Keycard</h1><p class='ingame-desc'><b>In-game description:</b><br>An access keycard for Villa Caruso's two service entrances.</p>"),
    L.marker([5.965, -146.3], {icon: iconItem, alt: "level3item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup("<img src='img/map_sapienza/screenshots/item_cannonball.jpg'><h2>Item</h2><h1>Cannonball</h1><p class='ingame-desc'><b>In-game description:</b><br>An antique cannonball.</p>"),
    L.marker([13.23, -140.3], {icon: iconItem, alt: "level3item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup("<img src='img/map_sapienza/screenshots/item_cannonball.jpg'><h2>Item</h2><h1>Cannonball</h1><p class='ingame-desc'><b>In-game description:</b><br>An antique cannonball.</p>"),
    L.marker([13.02, -143.4], {icon: iconItem, alt: "level3item", title: "Item: Bag of Gunpowder"}).bindLabel("Bag of Gunpowder").bindPopup("<img src='img/map_sapienza/screenshots/item_gunpowder.jpg'><h2>Item</h2><h1>Bag of Gunpowder</h1><p class='ingame-desc'><b>In-game description:</b><br>A bag containing gunpowder used to arm the antique canon.</p>"),
    L.marker([8.754, -156.6], {icon: iconItem, alt: "level3item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup("<img src='img/map_sapienza/screenshots/item_cannonball.jpg'><h2>Item</h2><h1>Cannonball</h1><p class='ingame-desc'><b>In-game description:</b><br>An antique cannonball.</p>"),
    L.marker([8.276, -157.5], {icon: iconItem, alt: "level3item", title: "Item: Bag of Gunpowder"}).bindLabel("Bag of Gunpowder").bindPopup("<img src='img/map_sapienza/screenshots/item_gunpowder.jpg'><h2>Item</h2><h1>Bag of Gunpowder</h1><p class='ingame-desc'><b>In-game description:</b><br>A bag containing gunpowder used to arm the antique canon.</p>"),
    L.marker([65.03, -78.96], {icon: iconItem, alt: "level3item", title: "Item: Mansion Keycard"}).bindLabel("Mansion Keycard").bindPopup("<img src='img/map_sapienza/screenshots/item_keycardman.jpg'><h2>Item</h2><h1>Mansion Keycard</h1><p class='ingame-desc'><b>In-game description:</b><br>An access keycard for Villa Caruso's two service entrances.</p>"),

    L.marker([17.18, -61.91], {icon: iconLocation, alt: "level3location", title: "Location: Injured Cyclist"}).bindLabel("Injured Cyclist").bindPopup("<img src='img/map_sapienza/screenshots/loc_cyclist.jpg'><h2>Location</h2><h1>Injured Cyclist</h1>"),
    L.marker([43.42, -104.8], {icon: iconLocation, alt: "level3location", title: "Location: Biolab Entrance"}).bindLabel("Biolab Entrance").bindPopup("<img src='img/map_sapienza/screenshots/loc_biolabenter.jpg'><h2>Location</h2><h1>Biolab Entrance</h1>"),
    L.marker([54.18, -117.9], {icon: iconLocation, alt: "level3location", title: "Location: Biolab Entrance"}).bindLabel("Biolab Entrance").bindPopup("<img src='img/map_sapienza/screenshots/loc_biolabenter.jpg'><h2>Location</h2><h1>Biolab Entrance</h1>"),
    L.marker([33.61, -112.7], {icon: iconLocation, alt: "level3location", title: "Location: Francesca De Santis Safe Room"}).bindLabel("Francesca De Santis Safe Room").bindPopup("<h2>Location</h2><h1>Francesca De Santis Safe Room</h1>"),

    L.marker([22.95, -69.30], {icon: iconIntel, alt: "level3intel"}).bindLabel("The Death Anniversary").bindPopup("<img src='img/map_sapienza/screenshots/intel_florist.jpg'><h2>Intel</h2><h1>The Death Anniversary</h1><p class='note'>Reveals 'The Good Son' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>According to the flower delivery man, today is the anniversary of Isabella Caruso's death, and Silvio Caruso has ordered a fresh bouquet of flowers for her grave. Judging from the damage, however, the flower truck isn't going anywhere.</p>"),
    L.marker([56.41, -72.90], {icon: iconIntel, alt: "level3intel"}).bindLabel("The New Kitchen Hand").bindPopup("<img src='img/map_sapienza/screenshots/intel_kitchen.jpg'><h2>Intel</h2><h1>The New Kitchen Hand</h1><p class='note'>Reveals 'First Day on the Job' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>Apparently, Vila Caruso's chef has hired a new kitchen hand by staff recommendation, and the two have yet to meet. According to our research, the chef has also been trying for some time to replicate Isabella Caruso's famous home cooking but has so far been unsuccessfull.</p>"),

    L.marker([11.95, -140.0], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Antique Cannon"}).bindLabel("Antique Cannon").bindPopup("<img src='img/map_sapienza/screenshots/inter_cannon.jpg'><h2>Interaction</h2><h1>Antique Cannon</h1><p class='item-use'>Load/Use Cannon</p><p class='req'>Requires Gunpowder and Cannonball</p><p class='susp'>Suspicious in any disguise</p><p class='item-desc'>First load Gunpowder and Cannonball into the cannon, then fire.</p>"),
    L.marker([8.363, -159.1], {icon: iconInteraction, alt: "level3interaction", title: "Interaction: Antique Cannon"}).bindLabel("Antique Cannon").bindPopup("<img src='img/map_sapienza/screenshots/inter_cannon.jpg'><h2>Interaction</h2><h1>Antique Cannon</h1><p class='item-use'>Load/Use Cannon</p><p class='req'>Requires Gunpowder and Cannonball</p><p class='susp'>Suspicious in any disguise</p><p class='item-desc'>First load Gunpowder and Cannonball into the cannon, then fire.</p>"),

    L.marker([71.91, -85.56], {icon: iconItem, alt: "level3item"}).bindLabel("Mansion Keycard").bindPopup("<img src='img/map_sapienza/screenshots/item_keycardman.jpg'><h2>Item</h2><h1>Mansion Keycard</h1><p class='ingame-desc'><b>In-game description:</b><br>An access keycard for Villa Caruso's two service entrances.</p>"),
    L.marker([72.32, -86.35], {icon: iconItem, alt: "level3item"}).bindLabel("Apartment Key").bindPopup("<img src='img/map_sapienza/screenshots/item_keyapt.jpg'><h2>Item</h2><h1>Apartment Key</h1><p class='ingame-desc'><b>In-game description:</b><br>A key to an apartment in town.</p>"),

    L.marker([45.70, -71.67], {icon: iconSeccheck, alt: "level3seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Mansions Security</h1><p class='item-desc'>Will be frisked if disguised as Dr. Lafayette / Delivery Man / Gardener or anyone from Mansion and Kitchen Staff</p>"),
    L.marker([41.24, -104.1], {icon: iconSeccheck, alt: "level3seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Biolab Security</h1><p class='item-desc'>Will be frisked if disguised as Biolab Staff</p>"),

    L.marker([57.18, -43.98], {icon: iconCamera, alt: "level3camera"}).bindLabel("Security Camera"),
    L.polygon([[57.18, -43.98], [56.63, -40.86], [56.43, -43.81]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level3camera"}).bindLabel("Security Camera"),
    L.marker([25.83, -116.4], {icon: iconCamera, alt: "level3camera"}).bindLabel("Security Camera"),
    L.polygon([[25.83, -116.4], [24.24, -119.0], [27.09, -119.0]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level3camera"}).bindLabel("Security Camera"),
    L.marker([53.93, -84.63], {icon: iconCamera, alt: "level3camera"}).bindLabel("Security Camera"),
    L.polygon([[53.93, -84.63], [53.74, -81.21], [51.75, -84.63]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level3camera"}).bindLabel("Security Camera"),
    L.marker([31.05, -97.99], {icon: iconCamera, alt: "level3camera"}).bindLabel("Security Camera"),
    L.polygon([[31.05, -97.99], [29.87, -95.09], [32.21, -94.96]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level3camera"}).bindLabel("Security Camera"),

    L.marker([34.48, -64.37], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key or Lockpick / Crowbar</p>"),
    L.marker([35.96, -62.66], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key or Lockpick / Crowbar</p>"),
    L.marker([58.95, -60.11], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key or Lockpick / Crowbar</p>"),
    L.marker([59.40, -65.25], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Shop Key or Lockpick / Crowbar</p>"),
    L.marker([60.97, -41.92], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([59.75, -40.73], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([55.65, -48.47], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key or Lockpick / Crowbar</p>"),
    L.marker([56.34, -43.19], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key or Lockpick / Crowbar</p>"),
    L.marker([51.56, -41.22], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key or Lockpick / Crowbar</p>"),
    L.marker([54.16, -86.83], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Lockpick / Crowbar</p>"),
    L.marker([72.80, -86.44], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Apartment Key or Lockpick / Crowbar</p>"),
    L.marker([62.77, -78.48], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Apartment Key or Lockpick / Crowbar</p>"),
    L.marker([63.76, -84.90], {icon: iconLocked, alt: "level5locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Apartment Key or Lockpick / Crowbar</p><p class='note'>You can also just ring the bell</p>"),
    L.marker([57.11, -79.76], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Keycard Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Mansion Keycard</p>"),
    L.marker([58.17, -93.55], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Keycard Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Mansion Keycard</p>"),
    L.marker([42.19, -104.1], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Keycard Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),
    L.marker([55.07, -118.0], {icon: iconLocked, alt: "level3locked"}).bindLabel("Locked Keycard Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Biolab Keycard</p>"),
    
]);

/* ==================================================================================================================================================================
   Level 4
   ================================================================================================================================================================== */

var level4other = L.layerGroup([

    L.marker([62.00, -76.06], {icon: iconIcaStash, alt: "level4icastash", title: "Large Agency Pickup: ICA Safe House"}).bindLabel("Large Agency Pickup: ICA Safe House").bindPopup("<img src='img/map_sapienza/screenshots/ica_safehouse.jpg'><h2>Large Agency Pickup</h2><h1>ICA Safe House</h1>"),
    L.marker([57.18, -90.65], {icon: iconIcaStash, alt: "level4icastash", title: "Small Agency Pickup: Mansion Pantry"}).bindLabel("Small Agency Pickup: Mansion Pantry").bindPopup("<img src='img/map_sapienza/screenshots/ica_pantry.jpg'><h2>Small Agency Pickup</h2><h1>Mansion Pantry</h1>"),
    L.marker([8.841, -151.6], {icon: iconIcaStash, alt: "level4icastash", title: "Large Agency Pickup: Sapienza Ruins"}).bindLabel("Large Agency Pickup: Sapienza Ruins").bindPopup("<img src='img/map_sapienza/screenshots/ica_ruins.jpg'><h2>Large Agency Pickup</h2><h1>Sapienza Ruins</h1>"),
    
    L.marker([61.39, -70.31], {icon: iconEnter, alt: "level4enter"}).bindLabel("Starting Locaton: ICA Safe House").bindPopup("<img src='img/map_sapienza/screenshots/enter_house.jpg'><h2>Starting Locaton</h2><h1>ICA Safe House</h1>"),
    L.marker([55.10, -95.53], {icon: iconEnter, alt: "level4enter"}).bindLabel("Starting Locaton: Undercover in Mansion Kitchen").bindPopup("<img src='img/map_sapienza/screenshots/enter_kitchen.jpg'><h2>Starting Locaton</h2><h1>Undercover in Mansion Kitchen</h1>"),
    L.marker([30.14, -126.3], {icon: iconEnter, alt: "level4enter"}).bindLabel("Starting Locaton: Undercover in Mansion Garden").bindPopup("<img src='img/map_sapienza/screenshots/enter_garden.jpg'><h2>Starting Locaton</h2><h1>Undercover in Mansion Garden</h1>"),

    L.marker([59.53, -79.71], {icon: iconWayUp, alt: "level4waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([52.72, -41.08], {icon: iconWayUpDown, alt: "level4waysupdown"}).bindLabel("Pipe: Level 3-5").bindPopup("<h2>Way Up/Down</h2><h1>Pipe: Level 3-5</h1>"),
    L.marker([61.48, -84.50], {icon: iconWayDown, alt: "level4waysupdown"}).bindLabel("Pipe: Level 2-4").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 2-4</h1>"),
    L.marker([62.02, -79.89], {icon: iconWayDown, alt: "level4waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),
    L.marker([58.14, -82.17], {icon: iconWayDown, alt: "level4waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),
    L.marker([29.72, -72.29], {icon: iconWayDown, alt: "level4waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),

    L.marker([51.99, -41.26], {icon: iconWayIn, alt: "level4waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([51.72, -95.66], {icon: iconWayIn, alt: "level4waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([47.72, -109.0], {icon: iconWayIn, alt: "level4waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([39.06, -107.0], {icon: iconWayIn, alt: "level4waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([52.69, -112.4], {icon: iconWayIn, alt: "level4waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([54.00, -96.81], {icon: iconWayIn, alt: "level4waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([58.21, -90.30], {icon: iconWayIn, alt: "level4waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([29.99, -73.69], {icon: iconWayIn, alt: "level4waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),

    new L.Polyline([[51.17, -40.82], [52.74, -41.13]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level4ledge"}).bindLabel("Ledge"),
    new L.Polyline([[58.28, -91.05], [58.28, -84.59]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level4ledge"}).bindLabel("Ledge"),

    L.marker([7.928, -151.9], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([34.84, -104.5], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([39.67, -101.9], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([46.07, -101.9], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([45.55, -32.82], {icon: iconStairsUp, alt: "level4stairsupdown"}),
    L.marker([31.98, -73.87], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([55.97, -116.1], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([60.30, -76.33], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([55.20, -42.84], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([55.77, -46.27], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([76.28, -118.3], {icon: iconStairsUpDown, alt: "level4stairsupdown"}),
    L.marker([3.820, -157.2], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([28.69, -113.5], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([34.56, -100.9], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([34.95, -88.11], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([49.86, -108.3], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([57.61, -87.49], {icon: iconStairsDown, alt: "level4stairsupdown"}),
    L.marker([42.48, -34.76], {icon: iconStairsDown, alt: "level4stairsupdown"}),

]);

var level4weapons = L.layerGroup([

    L.marker([52.69, -42.05], {icon: iconPoisons, alt: "level4weapoison"}).bindLabel("Emetic Rat Poison").bindPopup("<h2>Poison</h2><h1>Emetic Rat Poison</h1>"),
    L.marker([31.46, -102.9], {icon: iconPoisons, alt: "level4weapoison"}).bindLabel("Emetic Rat Poison").bindPopup("<h2>Poison</h2><h1>Emetic Rat Poison</h1>"),
    L.marker([56.89, -92.19], {icon: iconPoisons, alt: "level4weapoison"}).bindLabel("Emetic Rat Poison").bindPopup("<h2>Poison</h2><h1>Emetic Rat Poison</h1>"),
    L.marker([62.41, -75.27], {icon: iconFirearm, alt: "level4firearm"}).bindLabel("Pistol: Bartoli 75R").bindPopup("<h2>Pistol</h2><h1>Bartoli 75R</h1>"),
    L.marker([27.17, -105.1], {icon: iconExplosive, alt: "level4explosive"}).bindLabel("Propane Flask").bindPopup("<h2>Explosive</h2><h1>Propane Flask</h1>"),
    L.marker([62.39, -74.00], {icon: iconAmmo, alt: "level4ammo"}).bindLabel("Pistol Ammo").bindPopup("<h2>Ammo</h2><h1>Pistol Ammo</h1>"),
    L.marker([44.84, -48.03], {icon: iconCoin, alt: "level4coin"}).bindLabel("Coin x3"),
    L.marker([48.86, -41.57], {icon: iconCoin, alt: "level4coin"}).bindLabel("Coin"),
    L.marker([54.41, -128.9], {icon: iconAmpKnife, alt: "level4knifeamp"}).bindLabel("Amputation Knife"),
    L.marker([55.50, -127.3], {icon: iconCirKnife, alt: "level4knifecir"}).bindLabel("Circumsision Knife"),
    L.marker([75.70, -118.3], {icon: iconCrowbar, alt: "level4crowbar"}).bindLabel("Crowbar"),
    L.marker([55.40, -112.0], {icon: iconCrowbar, alt: "level4crowbar"}).bindLabel("Crowbar"),
    L.marker([27.60, -110.9], {icon: iconCrowbar, alt: "level4crowbar"}).bindLabel("Crowbar"),
    L.marker([47.12, -105.0], {icon: iconExtinguisher, alt: "level4extinguisher"}).bindLabel("Fire Extinguisher"),
    L.marker([57.23, -91.40], {icon: iconExtinguisher, alt: "level4extinguisher"}).bindLabel("Fire Extinguisher"),
    L.marker([32.84, -98.74], {icon: iconFireAxe, alt: "level4fireaxe"}).bindLabel("Fire Axe"),
    L.marker([28.88, -105.8], {icon: iconHammer, alt: "level4hammer"}).bindLabel("Hammer"),
    L.marker([35.10, -99.97], {icon: iconFirePoker, alt: "level4firepoker"}).bindLabel("Fire Poker"),
    L.marker([50.06, -127.3], {icon: iconFirePoker, alt: "level4firepoker"}).bindLabel("Fire Poker"),
    L.marker([31.16, -122.9], {icon: iconGolfClub, alt: "level4golfclub"}).bindLabel("Golf Club"),
    L.marker([58.65, -81.56], {icon: iconBrick, alt: "level4brick"}).bindLabel("Brick"),
    L.marker([57.04, -99.44], {icon: iconBrick, alt: "level4brick"}).bindLabel("Brick"),
    L.marker([53.43, -44.34], {icon: iconKnife, alt: "level4knife"}).bindLabel("Kitchen Knife"),
    L.marker([62.02, -72.55], {icon: iconKnife, alt: "level4knife"}).bindLabel("Kitchen Knife"),
    L.marker([54.39, -92.98], {icon: iconKnife, alt: "level4knife"}).bindLabel("Kitchen Knife"),
    L.marker([24.64, -105.2], {icon: iconScrewdriver, alt: "level4screwdriver"}).bindLabel("Screwdriver"),
    L.marker([25.95, -105.2], {icon: iconWrench, alt: "level4wrench"}).bindLabel("Wrench"),
    L.marker([55.92, -112.8], {icon: iconShovel, alt: "level4shovel"}).bindLabel("Shovel"),
    L.marker([28.96, -108.4], {icon: iconShovel, alt: "level4shovel"}).bindLabel("Shovel"),
    L.marker([24.84, -111.3], {icon: iconShovel, alt: "level4shovel"}).bindLabel("Shovel"),

]);

var level4poi = L.layerGroup([

    L.marker([53.61, -42.05], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([38.58, -95.22], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([36.03, -104.1], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([49.66, -106.5], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([46.98, -105.8], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([52.13, -102.2], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([56.38, -107.1], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([56.12, -119.9], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([49.12, -109.5], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([32.76, -115.6], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([46.95, -128.7], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([50.09, -128.3], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([49.89, -119.4], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([36.91, -105.6], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([29.84, -109.4], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([32.06, -98.83], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([28.99, -110.9], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([24.44, -106.7], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([52.07, -113.0], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([51.80, -119.0], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([55.37, -120.7], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([56.17, -92.32], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([54.41, -91.53], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([57.84, -91.18], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),
    L.marker([54.62, -85.03], {icon: iconContainer, alt: "level4container"}).bindLabel("Hiding Spot"),

    L.marker([61.68, -77.25], {icon: iconConceal, alt: "level4conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([41.60, -106.0], {icon: iconConceal, alt: "level4conceal"}).bindLabel("Conceal Item: Waste Basket"),
    L.marker([56.87, -87.31], {icon: iconConceal, alt: "level4conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([55.55, -129.1], {icon: iconDisguise, alt: "level4disguise", title: "Disguise: Plague Doctor"}).bindLabel("Disguise: Plague Doctor").bindPopup("<img src='img/map_sapienza/screenshots/disg_plague.jpg'><h2>Disguise</h2><h1>Plague Doctor</h1>"),

    L.marker([42.52, -53.87], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In").bindPopup("<h2>Blend In</h2><h1>Any disguise</h1>"),
    L.marker([47.10, -48.16], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Waiter").bindPopup("<h2>Blend In</h2><h1>Waiter</h1>"),
    L.marker([45.12, -94.39], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Housekeeper / Mansion Staff").bindPopup("<h2>Blend In</h2><h1>Housekeeper / Mansion Staff</h1>"),
    L.marker([45.85, -110.1], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Housekeeper / Mansion Staff").bindPopup("<h2>Blend In</h2><h1>Housekeeper / Mansion Staff</h1>"),
    L.marker([40.34, -115.6], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Housekeeper / Mansion Staff").bindPopup("<h2>Blend In</h2><h1>Housekeeper / Mansion Staff</h1>"),
    L.marker([39.57, -129.4], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Gardener").bindPopup("<h2>Blend In</h2><h1>Gardener</h1>"),
    L.marker([29.80, -127.5], {icon: iconBlend, alt: "level4blend"}).bindLabel("Blend In as a Gardener").bindPopup("<h2>Blend In</h2><h1>Gardener</h1>"),

    L.marker([54.29, -44.20], {icon: iconDistraction, alt: "level4dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([61.68, -78.00], {icon: iconDistraction, alt: "level4dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([41.60, -107.2], {icon: iconDistraction, alt: "level4dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([52.02, -114.6], {icon: iconDistraction, alt: "level4dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([51.64, -128.8], {icon: iconDistraction, alt: "level4dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([57.93, -93.03], {icon: iconDistraction, alt: "level4dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([56.48, -86.87], {icon: iconDistraction, alt: "level4dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([35.02, -93.20], {icon: iconDistraction, alt: "level4dis-piano"}).bindLabel("Piano").bindPopup("<h2>Distraction</h2><h1>Piano</h1><p class='item-use'>Push Pin</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([52.10, -106.0], {icon: iconDistraction, alt: "level4dis-faucet"}).bindLabel("Faucet").bindPopup("<h2>Distraction</h2><h1>Faucet</h1><p class='item-use'>Turn On/Off</p>"),
    L.marker([49.15, -131.0], {icon: iconDistraction, alt: "level4dis-faucet"}).bindLabel("Faucet").bindPopup("<h2>Distraction</h2><h1>Faucet</h1><p class='item-use'>Turn On/Off</p>"),
    L.marker([53.82, -98.04], {icon: iconDistraction, alt: "level4dis-faucet"}).bindLabel("Faucet").bindPopup("<h2>Distraction</h2><h1>Faucet</h1><p class='item-use'>Turn On/Off</p>"),
    L.marker([34.84, -105.6], {icon: iconDistraction, alt: "level4dis-faucet"}).bindLabel("Faucet").bindPopup("<h2>Distraction</h2><h1>Faucet</h1><p class='item-use'>Turn On/Off</p>"),
    L.marker([33.39, -111.2], {icon: iconDistraction, alt: "level4dis-radio"}).bindLabel("Radio").bindPopup("<h2>Distraction</h2><h1>Radio</h1><p class='item-use'>Turn On/Off</p>"),
    L.marker([55.70, -91.45], {icon: iconDistraction, alt: "level4dis-radio"}).bindLabel("Radio").bindPopup("<h2>Distraction</h2><h1>Radio</h1><p class='item-use'>Turn On/Off</p>"),

    L.marker([42.19, -105.1], {icon: iconAlarm, alt: "level4alarm"}).bindLabel("Fire Alarm").bindPopup("<h2>Alarm</h2><h1>Fire Alarm</h1><p class='item-use'>Trigger Fire Alarm</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([53.74, -119.0], {icon: iconAlarm, alt: "level4alarm"}).bindLabel("Fire Alarm").bindPopup("<h2>Alarm</h2><h1>Fire Alarm</h1><p class='item-use'>Trigger Fire Alarm</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([54.23, -90.35], {icon: iconAlarm, alt: "level4alarm"}).bindLabel("Fire Alarm").bindPopup("<h2>Alarm</h2><h1>Fire Alarm</h1><p class='item-use'>Trigger Fire Alarm</p><p class='susp'>Suspicious in any disguise</p>"),

    L.marker([50.84, -46.45], {icon: iconSabotage, alt: "level4sab-canister"}).bindLabel("Gas Canister").bindPopup("<h2>Sabotage</h2><h1>Gas Canister</h1><p class='item-use'>Loosen the Valve</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([36.35, -98.48], {icon: iconSabotage, alt: "level4sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1><p class='note'>Not connected to any Winch</p>"),
    L.marker([37.33, -93.25], {icon: iconSabotage, alt: "level4sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1><p class='note'>Not connected to any Winch</p>"),
    L.marker([34.81, -103.3], {icon: iconSabotage, alt: "level4sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1><p class='note'>Not connected to any Winch</p>"),
    L.marker([49.18, -100.5], {icon: iconSabotage, alt: "level4sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1><p class='note'>Not connected to any Winch</p>"),
    L.marker([50.14, -95.36], {icon: iconSabotage, alt: "level4sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1><p class='note'>Not connected to any Winch</p>"),
    L.marker([43.03, -96.54], {icon: iconSabotage, alt: "level4sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1><p class='note'>Winch is on the second floor</p>"),
    L.marker([43.03, -114.6], {icon: iconSabotage, alt: "level4sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1><p class='note'>Winch is on the second floor</p>"),
    L.marker([44.37, -30.93], {icon: iconSabotage, alt: "level4sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1><p class='note'>Not connected to any Winch</p>"),
    L.marker([53.46, -123.8], {icon: iconSabotage, alt: "level4sab-solarsystem"}).bindLabel("Solar System").bindPopup("<h2>Sabotage</h2><h1>Solar System</h1><p class='note'>Not connected to any Winch</p>"),
    L.marker([37.47, -127.8], {icon: iconSabotage, alt: "level4sab-tractor"}).bindLabel("Garden Tractor").bindPopup("<h2>Sabotage</h2><h1>Garden Tractor</h1><p class='item-use'>Create Oil Leak</p><p class='req'>Requires Wrench</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([50.03, -126.2], {icon: iconSabotage, alt: "level4sab-shaft"}).bindLabel("Shaft").bindPopup("<h2>Sabotage</h2><h1>Shaft</h1><p class='item-use'>Dump Propane Flask</p><p class='req'>Requires Propane Flask</p><p class='susp'>Suspicious in any disguise</p><p class='note'>Shaft is on the roof</p>"),

    L.marker([45.76, -46.18], {icon: iconPoison, alt: "level4poison"}).bindLabel("Coffee Glass").bindPopup("<h2>Poison</h2><h1>Coffee Glass</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Dr. Lafayette</p>"),
    L.marker([43.89, -46.58], {icon: iconPoison, alt: "level4poison"}).bindLabel("Coffee Glass").bindPopup("<h2>Poison</h2><h1>Coffee Glass</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Tourist</p>"),
    L.marker([45.95, -44.29], {icon: iconPoison, alt: "level4poison"}).bindLabel("Coffee Glass").bindPopup("<h2>Poison</h2><h1>Coffee Glass</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Tourist</p>"),
    L.marker([45.12, -44.60], {icon: iconPoison, alt: "level4poison"}).bindLabel("Coffee Glass").bindPopup("<h2>Poison</h2><h1>Coffee Glass</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Tourist</p>"),
    L.marker([47.78, -47.10], {icon: iconPoison, alt: "level4poison"}).bindLabel("Coffee Glass").bindPopup("<h2>Poison</h2><h1>Coffee Glass</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Tourist</p>"),
    L.marker([48.01, -44.29], {icon: iconPoison, alt: "level4poison"}).bindLabel("Coffee Glass").bindPopup("<h2>Poison</h2><h1>Coffee Glass</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Tourist</p>"),
    L.marker([47.04, -44.69], {icon: iconPoison, alt: "level4poison"}).bindLabel("Water Bottle").bindPopup("<h2>Poison</h2><h1>Water Bottle</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Tourist</p>"),
    L.marker([55.55, -111.3], {icon: iconPoison, alt: "level4poison"}).bindLabel("Glass of White Wine (2)").bindPopup("<h2>Poison</h2><h1>Glass of White Wine (2)</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Mansion Security</p>"),
    L.marker([42.55, -130.2], {icon: iconPoison, alt: "level4poison"}).bindLabel("Water Bottle").bindPopup("<h2>Poison</h2><h1>Water Bottle</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Roberto Vargas</p>"),
    L.marker([51.17, -115.8], {icon: iconPoison, alt: "level4poison"}).bindLabel("Glass of Champagne").bindPopup("<h2>Poison</h2><h1>Glass of Champagne</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Francesca De Santis</p>"),
    L.marker([57.01, -94.21], {icon: iconPoison, alt: "level4poison"}).bindLabel("Spaghetti Pot").bindPopup("<h2>Poison</h2><h1>Spaghetti Pot</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison Silvio Caruso</p>"),

    L.marker([44.18, -53.56], {icon: iconIntel, alt: "level4intel"}).bindLabel("The Death Anniversary").bindPopup("<img src='img/map_sapienza/screenshots/intel_psychologist.jpg'><h2>Intel</h2><h1>The Psychologist</h1><p class='note'>Reveals 'Catharsis' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>According to Dr. Lafayette's phone call, Ether has hired the world-renowned psychologist to treat Silvio Caruso. No doubt they are concerned about the bioengineer's mental helath. The session will take place in private and furthermore, our records show that Caruso and Lafayette have not previously met.</p>"),
    L.marker([47.10, -110.4], {icon: iconIntel, alt: "level4intel"}).bindLabel("Isabella Caruso's Gramophone").bindPopup("<img src='img/map_sapienza/screenshots/intel_gram.jpg'><h2>Intel</h2><h1>Isabella Caruso's Gramophone</h1><p class='note'>Reveals 'Beyond the Grave' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>According to staff, the antique gramophone player in the great dining hall belonged to Caruso's mother, Isabella. Like all her other possessions, Caruos keeps them untouched and unsullied.</p>"),
    L.marker([52.64, -118.9], {icon: iconIntel, alt: "level4intel"}).bindLabel("Romantic Note").bindPopup("<img src='img/map_sapienza/screenshots/intel_romnote.jpg'><h2>Intel</h2><h1>Romantic Note</h1><p class='note'>Reveals 'By Candlelight' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>A note to Francesca De Santis from her lover, Roberto Vargas. The two plan to meet for a romantic randezvous soon after Vargas' golf lesson with Caruso.</p>"),
    L.marker([51.23, -117.1], {icon: iconIntel, alt: "level4intel"}).bindLabel("The Ether Proxy").bindPopup("<img src='img/map_sapienza/screenshots/intel_etherproxy.jpg'><h2>Intel</h2><h1>The Ether Proxy</h1><p class='item-desc'>This intle appears while Francesca is meeting Agent 47 disguised as Roberto Vargas</p><p class='ingame-desc'><b>In-game description:</b><br>It appears Francesca De Santis is spying on Silvio Caruso on behalf of their mutual employer, the Ether Corporation. Ether clearly doesn't trust Caruso, especially when it comes to ownership of the DNA-specific virus. De Santis has been instructed to keep an eye on bioengineer and potentially decommission him, and carry on in his place, if the need arises.</p>"),

    L.marker([8.798, -153.2], {icon: iconItem, alt: "level4item", title: "Item: Bag of Gunpowder"}).bindLabel("Bag of Gunpowder (2)").bindPopup("<img src='img/map_sapienza/screenshots/item_gunpowder.jpg'><h2>Item</h2><h1>Bag of Gunpowder (2)</h1><p class='ingame-desc'><b>In-game description:</b><br>A bag containing gunpowder used to arm the antique canon.</p>"),
    L.marker([16.25, -147.1], {icon: iconItem, alt: "level4item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup("<img src='img/map_sapienza/screenshots/item_cannonball.jpg'><h2>Item</h2><h1>Cannonball</h1><p class='ingame-desc'><b>In-game description:</b><br>An antique cannonball.</p>"),
    L.marker([14.22, -144.4], {icon: iconItem, alt: "level4item", title: "Item: Cannonball"}).bindLabel("Cannonball").bindPopup("<img src='img/map_sapienza/screenshots/item_cannonball.jpg'><h2>Item</h2><h1>Cannonball</h1><p class='ingame-desc'><b>In-game description:</b><br>An antique cannonball.</p>"),
    L.marker([61.81, -70.97], {icon: iconItem, alt: "level4item", title: "Item: Explosive Golf Ball"}).bindLabel("Explosive Golf Ball").bindPopup("<img src='img/map_sapienza/screenshots/item_golfball.jpg'><h2>Item</h2><h1>Explosive Golf Ball</h1><p class='ingame-desc'><b>In-game description:</b><br>A golf ball that detonates upon contact.</p>"),
    L.marker([50.65, -94.30], {icon: iconItem, alt: "level4item", title: "Item: Mansion Masterkey"}).bindLabel("Mansion Masterkey").bindPopup("<h2>Item</h2><h1>Mansion Masterkey</h1>"),
    L.marker([50.87, -126.7], {icon: iconItem, alt: "level4item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup("<img src='img/map_sapienza/screenshots/item_keycardbio.jpg'><h2>Item</h2><h1>Biolab Keycard</h1><p class='ingame-desc'><b>In-game description:</b><br>An access keycard for the Ether biolab.</p>"),
    L.marker([56.60, -91.23], {icon: iconItem, alt: "level4item", title: "Item: Expired Can of Spaghetti Sauce"}).bindLabel("Expired Can of Spaghetti Sauce (2)").bindPopup("<img src='img/map_sapienza/screenshots/item_sauce.jpg'><h2>Item</h2><h1>Expired Can of Spaghetti Sauce</h1><p class='ingame-desc'><b>In-game description:</b><br>An expired can of spaghetti sauce. Looks like ot was brought while Isabella Caruso was still alive. It appears the legend of her family recipe is somewhat exaggerated.</p>"),
    L.marker([50.84, -132.9], {icon: iconItem, alt: "level4item", title: "Item: Roberto Vargas Cell Phone"}).bindLabel("Roberto Vargas' Cell Phone").bindPopup("<h2>Item</h2><h1>Roberto Vargas' Cell Phone</h1><p class='note'>Carried by Roberto Vargas</p><p class='item-desc'>Use it to call Francesca and set up a date</p>"),

    L.marker([17.51, -150.7], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Antique Cannon"}).bindLabel("Antique Cannon").bindPopup("<img src='img/map_sapienza/screenshots/inter_cannon.jpg'><h2>Interaction</h2><h1>Antique Cannon</h1><p class='item-use'>Load/Use Cannon</p><p class='req'>Requires Gunpowder and Cannonball</p><p class='susp'>Suspicious in any disguise</p><p class='item-desc'>First load Gunpowder and Cannonball into the cannon, then fire.</p>"),
    L.marker([43.83, -98.43], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Chair Lift"}).bindLabel("Chair Lift").bindPopup("<img src='img/map_sapienza/screenshots/inter_chairlift.jpg'><h2>Interaction</h2><h1>Chair Lift</h1><p class='item-use'>Turn On</p><p class='susp'>Suspicious in any disguise</p><p class='note'>Part of 'Beyond the Grave' opportunity</p>"),
    L.marker([41.01, -118.1], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Gramophone"}).bindLabel("Gramophone").bindPopup("<img src='img/map_sapienza/screenshots/inter_gram.jpg'><h2>Interaction</h2><h1>Gramophone</h1><p class='item-use'>Turn On</p><p class='susp'>Suspicious in any disguise</p><p class='note'>Part of 'Beyond the Grave' opportunity</p>"),
    L.marker([56.82, -98.43], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Dinner Bell"}).bindLabel("Dinner Bell").bindPopup("<img src='img/map_sapienza/screenshots/inter_bell.jpg'><h2>Interaction</h2><h1>Dinner Bell</h1><p class='item-use'>Ring Bell</p>"),
    L.marker([31.95, -121.7], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Golf Ball Bucket"}).bindLabel("Golf Ball Bucket").bindPopup("<img src='img/map_sapienza/screenshots/inter_golfball.jpg'><h2>Interaction</h2><h1>Golf Ball Bucket</h1><p class='item-use'>Place Golf Ball</p>"),
    L.marker([50.00, -124.9], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Caruso Cigarette Pack"}).bindLabel("Caruso's Cigarette Pack").bindPopup("<img src='img/map_sapienza/screenshots/inter_jointcaruso.jpg'><h2>Interaction</h2><h1>Caruso's Cigarette Pack</h1><p class='item-use'>Place Joint</p><p class='req'>Requires Cannabis Joint</p>"),
    L.marker([49.78, -114.5], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Sit Down as the Golf Coach"}).bindLabel("Sit Down as the Golf Coach").bindPopup("<img src='img/map_sapienza/screenshots/inter_vargaschair.jpg'><h2>Interaction</h2><h1>Sit Down as the Golf Coach</h1><p class='note'>Francesca will see through your Vargas disguise unless you're sitting in this chair</p>"),
    L.marker([52.74, -126.9], {icon: iconInteraction, alt: "level4interaction", title: "Interaction: Video Projector"}).bindLabel("Video Projector").bindPopup("<img src='img/map_sapienza/screenshots/inter_video.jpg'><h2>Interaction</h2><h1>Video Projector</h1><p class='item-use'>Insert Video</p><p class='note'>Part of 'Memory Lane' opportunity</p>"),

    L.marker([43.16, -94.65], {icon: iconLocation, alt: "level4location", title: "Location: Butler"}).bindLabel("Butler").bindPopup("<img src='img/map_sapienza/screenshots/loc_butler.jpg'><h2>Location</h2><h1>Butler</h1>"),

    L.marker([50.17, -120.9], {icon: iconSeccheck, alt: "level4seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Mansions Security</h1><p class='item-desc'>Will be frisked if disguised as Housekeeper / Mansion Staff</p>"),

    L.marker([45.67, -38.67], {icon: iconCamera, alt: "level4camera"}).bindLabel("Security Camera"),
    L.polygon([[45.67, -38.67], [47.21, -36.95], [44.90, -36.73]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level4camera"}).bindLabel("Security Camera"),
    L.marker([31.05, -97.99], {icon: iconCamera, alt: "level4camera"}).bindLabel("Security Camera"),
    L.polygon([[31.05, -97.99], [29.87, -95.09], [32.21, -94.96]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level4camera"}).bindLabel("Security Camera"),
    L.marker([53.30, -112.1], {icon: iconCamera, alt: "level4camera"}).bindLabel("Security Camera"),
    L.polygon([[53.30, -112.1], [51.94, -107.9], [54.34, -107.9]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level4camera"}).bindLabel("Security Camera"),
    L.marker([53.98, -130.2], {icon: iconCamera, alt: "level4camera"}).bindLabel("Security Camera"),
    L.polygon([[53.98, -130.2], [53.09, -132.8], [52.32, -130.8]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level4camera"}).bindLabel("Security Camera"),
    L.marker([38.78, -108.3], {icon: iconCamera, alt: "level4camera"}).bindLabel("Security Camera"),
    L.polygon([[38.78, -108.3], [36.63, -110.7], [36.63, -106.6]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level4camera"}).bindLabel("Security Camera"),

    L.marker([45.89, -35.63], {icon: iconLocked, alt: "level4locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key or Lockpick / Crowbar</p>"),
    L.marker([60.97, -73.87], {icon: iconLocked, alt: "level4locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires ICA Safe House Key or Lockpick / Crowbar</p>"),
    L.marker([55.72, -125.0], {icon: iconLocked, alt: "level4locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Mansion Masterkey or Lockpick / Crowbar</p>"),
    L.marker([54.49, -112.4], {icon: iconLocked, alt: "level4locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Mansion Masterkey or Lockpick / Crowbar</p>"),

]);

/* ==================================================================================================================================================================
   Level 5
   ================================================================================================================================================================== */

var level5other = L.layerGroup([

    L.marker([52.72, -41.08], {icon: iconWayDown, alt: "level5waysupdown"}).bindLabel("Pipe: Level 3-5").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 3-5</h1>"),
    L.marker([54.36, -48.47], {icon: iconWayUp, alt: "level5waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Up</h2><h1>Pipe</h1>"),
    L.marker([48.01, -39.85], {icon: iconWayUp, alt: "level5waysupdown"}).bindLabel("Hang on the Ledge").bindPopup("<h2>Way Up</h2><h1>Hang on the Ledge</h1>"),
    L.marker([59.53, -79.71], {icon: iconWayDown, alt: "level5waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([55.35, -120.3], {icon: iconWayUp, alt: "level5waysupdown"}).bindLabel("Climb").bindPopup("<h2>Way Up</h2><h1>Climb</h1>"),

    L.marker([53.95, -41.74], {icon: iconWayIn, alt: "level5waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([53.59, -47.72], {icon: iconWayIn, alt: "level5waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([47.63, -39.28], {icon: iconWayIn, alt: "level5waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([36.27, -96.54], {icon: iconWayIn, alt: "level5waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),

    new L.Polyline([[52.85, -41.26], [54.77, -41.61]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level5ledge"}).bindLabel("Ledge"),

    L.marker([34.19, -91.97], {icon: iconStairsUp, alt: "level5stairsupdown"}),
    L.marker([49.72, -102.4], {icon: iconStairsUp, alt: "level5stairsupdown"}),
    L.marker([54.52, -129.9], {icon: iconStairsUp, alt: "level5stairsupdown"}),
    L.marker([8.971, -150.7], {icon: iconStairsUpDown, alt: "level5stairsupdown"}),
    L.marker([31.91, -73.87], {icon: iconStairsUpDown, alt: "level5stairsupdown"}),
    L.marker([55.77, -46.18], {icon: iconStairsUpDown, alt: "level5stairsupdown"}),
    L.marker([76.28, -118.2], {icon: iconStairsUpDown, alt: "level5stairsupdown"}),
    L.marker([36.73, -102.4], {icon: iconStairsDown, alt: "level5stairsupdown"}),
    L.marker([41.80, -99.22], {icon: iconStairsDown, alt: "level5stairsupdown"}),
    L.marker([44.02, -99.22], {icon: iconStairsDown, alt: "level5stairsupdown"}),
    L.marker([56.43, -116.3], {icon: iconStairsDown, alt: "level5stairsupdown"}),
    L.marker([44.62, -33.39], {icon: iconStairsDown, alt: "level5stairsupdown"}),

]);

var level5weapons = L.layerGroup([

    L.marker([54.77, -115.6], {icon: iconCoin, alt: "level5coin"}).bindLabel("Coin"),
    L.marker([32.17, -102.8], {icon: iconCoin, alt: "level5coin"}).bindLabel("Coin (2)"),
    L.marker([45.12, -36.60], {icon: iconBust, alt: "level5bust"}).bindLabel("Bust"),
    L.marker([47.84, -46.36], {icon: iconGolfClub, alt: "level5golfclub"}).bindLabel("Golf Club"),
    L.marker([51.50, -42.09], {icon: iconScissors, alt: "level5scissors"}).bindLabel("Scissors"),
    L.marker([46.13, -36.03], {icon: iconSaber, alt: "level5saber"}).bindLabel("Saber"),
    L.marker([33.06, -102.6], {icon: iconSoda, alt: "level5sodacan"}).bindLabel("Soda Can"),

]);

var level5poi = L.layerGroup([

    L.marker([54.18, -44.42], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),
    L.marker([48.60, -46.36], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),
    L.marker([43.06, -39.15], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),
    L.marker([50.73, -116.2], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),
    L.marker([52.24, -113.2], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),
    L.marker([54.87, -120.0], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),
    L.marker([55.00, -129.4], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),
    L.marker([43.10, -92.76], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),
    L.marker([36.63, -94.04], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),
    L.marker([34.23, -93.69], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),
    L.marker([33.57, -104.5], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),
    L.marker([50.62, -103.4], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),
    L.marker([48.66, -93.38], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),
    L.marker([39.33, -107.0], {icon: iconContainer, alt: "level5container"}).bindLabel("Hiding Spot"),

    L.marker([48.51, -97.95], {icon: iconConceal, alt: "level5conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([51.39, -108.3], {icon: iconBlend, alt: "level5blend"}).bindLabel("Blend In as Housekeeper / Mansion Staff").bindPopup("<h2>Blend In</h2><h1>Housekeeper / Mansion Staff</h1>"),

    L.marker([58.90, -76.64], {icon: iconDisguise, alt: "level5disguise", title: "Disguise: Kitchen Assistant"}).bindLabel("Disguise: Kitchen Assistant").bindPopup("<img src='img/map_sapienza/screenshots/disg_kitchenass.jpg'><h2>Disguise</h2><h1>Kitchen Assistant</h1>"),

    L.marker([54.29, -43.59], {icon: iconDistraction, alt: "level5dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([61.60, -74.44], {icon: iconDistraction, alt: "level5dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([49.49, -98.61], {icon: iconDistraction, alt: "level5dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([54.47, -42.27], {icon: iconDistraction, alt: "level5dis-radio"}).bindLabel("Transistor Radio").bindPopup("<h2>Distraction</h2><h1>Transistor Radio</h1><p class='item-use'>Turn On/Off</p>"),
    L.marker([36.70, -95.62], {icon: iconDistraction, alt: "level5dis-vacuum"}).bindLabel("Vacuum Cleaner").bindPopup("<h2>Distraction</h2><h1>Vacuum Cleaner</h1><p class='item-use'>Turn On/Off</p>"),

    L.marker([48.71, -43.72], {icon: iconSabotage, alt: "level5sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1><p class='note'>Winch is on the 6th level</p>"),
    L.marker([46.49, -37.08], {icon: iconSabotage, alt: "level5sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1><p class='note'>Not connected to any Winch</p>"),
    L.marker([49.75, -103.5], {icon: iconSabotage, alt: "level5sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1><p class='note'>Not connected to any Winch</p>"),
    L.marker([43.03, -97.60], {icon: iconSabotage, alt: "level5sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1>"),
        new L.Polyline([[43.03, -97.60], [43.03, -94.87]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level5sab-chandelier"}),
        L.marker([43.03, -94.87], {icon: iconPointRed, alt: "level5sab-chandelier"}).bindLabel("Winch").bindPopup("<h2>Sabotage</h2><h1>Winch</h1><p class='item-use'>Release Winch</p>"),
    L.marker([43.03, -114.8], {icon: iconSabotage, alt: "level5sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1>"),
        new L.Polyline([[43.03, -114.8], [43.03, -108.7]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level5sab-chandelier"}),
        L.marker([43.03, -108.7], {icon: iconPointRed, alt: "level5sab-chandelier"}).bindLabel("Winch").bindPopup("<h2>Sabotage</h2><h1>Winch</h1><p class='item-use'>Release Winch</p>"),

    L.marker([54.87, -118.8], {icon: iconAlarm, alt: "level5alarm"}).bindLabel("Fire Alarm").bindPopup("<h2>Alarm</h2><h1>Fire Alarm</h1><p class='item-use'>Trigger Fire Alarm</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([45.95, -105.7], {icon: iconAlarm, alt: "level5alarm"}).bindLabel("Fire Alarm").bindPopup("<h2>Alarm</h2><h1>Fire Alarm</h1><p class='item-use'>Trigger Fire Alarm</p><p class='susp'>Suspicious in any disguise</p>"),

    L.marker([49.00, -113.3], {icon: iconIntel, alt: "level5intel"}).bindLabel("Caruso's Family Footage").bindPopup("<img src='img/map_sapienza/screenshots/intel_footage.jpg'><h2>Intel</h2><h1>Caruso's Family Footage</h1><p class='note'>Reveals 'Memory Lane' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>According to staff, Caruso keeps a crate of VHS tapes from his childhood somewhere in the observatory. Apparently, he used to watch them on the projector in the observatory but stopped after his mental breakdown.</p>"),
    L.marker([51.28, -96.45], {icon: iconIntel, alt: "level5intel"}).bindLabel("Medical Journal").bindPopup("<img src='img/map_sapienza/screenshots/intel_medjournal.jpg'><h2>Intel</h2><h1>Medical Journal</h1><p class='note'>Reveals 'Beyond the Grave' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>A journal from a mental institution in Naples where Silvio Caruso was briefly admitted last year. According to his statement, Caruso found his mother's favorite record playing in the empty dining hall and then saw her chair lift move by itself. Upon hearing the service bell ring in Isabella's old bedroom, Caruso entered alone and was later found unconscious by his staff. He claims to have no recollection of what he witnessed inside.</p>"),

    L.marker([54.05, -128.6], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Open Observatory Dome"}).bindLabel("Open Observatory Dome").bindPopup("<img src='img/map_sapienza/screenshots/inter_opendome1.jpg'><h2>Interaction</h2><h1>Open Observatory Dome</h1>"),
    L.marker([55.55, -125.7], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Open Observatory Dome"}).bindLabel("Open Observatory Dome").bindPopup("<img src='img/map_sapienza/screenshots/inter_opendome2.jpg'><h2>Interaction</h2><h1>Open Observatory Dome</h1>"),
    L.marker([46.40, -103.0], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Chair Lift"}).bindLabel("Chair Lift").bindPopup("<img src='img/map_sapienza/screenshots/inter_chairlift.jpg'><h2>Interaction</h2><h1>Chair Lift</h1><p class='item-use'>Turn On</p><p class='susp'>Suspicious in any disguise</p><p class='note'>Part of 'Beyond the Grave' opportunity</p>"),
    L.marker([49.83, -95.97], {icon: iconInteraction, alt: "level5interaction", title: "Interaction: Service Bell"}).bindLabel("Service Bell").bindPopup("<img src='img/map_sapienza/screenshots/inter_servicebell.jpg'><h2>Interaction</h2><h1>Service Bell</h1><p class='item-use'>Ring Bell</p><p class='susp'>Suspicious in any disguise</p><p class='note'>Part of 'Beyond the Grave' opportunity</p>"),

    L.marker([58.03, -73.82], {icon: iconItem, alt: "level5item", title: "Item: Mansion Keycard"}).bindLabel("Mansion Keycard").bindPopup("<img src='img/map_sapienza/screenshots/item_keycardman.jpg'><h2>Item</h2><h1>Mansion Keycard</h1><p class='ingame-desc'><b>In-game description:</b><br>An access keycard for Villa Caruso's two service entrances.</p>"),
    L.marker([58.10, -77.60], {icon: iconItem, alt: "level5item", title: "Item: Apartment Key"}).bindLabel("Apartment Key").bindPopup("<img src='img/map_sapienza/screenshots/item_keyapt.jpg'><h2>Item</h2><h1>Apartment Key</h1><p class='ingame-desc'><b>In-game description:</b><br>A key to an apartment in town.</p>"),
    L.marker([51.39, -115.3], {icon: iconItem, alt: "level5item", title: "Item: Bag of Gunpowder"}).bindLabel("Bag of Gunpowder").bindPopup("<img src='img/map_sapienza/screenshots/item_gunpowder.jpg'><h2>Item</h2><h1>Bag of Gunpowder</h1><p class='ingame-desc'><b>In-game description:</b><br>A bag containing gunpowder used to arm the antique canon.</p>"),
    L.marker([51.39, -113.9], {icon: iconItem, alt: "level5item", title: "Item: Mansion Masterkey"}).bindLabel("Mansion Masterkey").bindPopup("<h2>Item</h2><h1>Mansion Masterkey</h1>"),

    L.marker([47.63, -104.3], {icon: iconSeccheck, alt: "level5seccheck"}).bindLabel("Security Check").bindPopup("<h2>Security Check</h2><h1>Mansions Security</h1><p class='item-desc'>Will be frisked if disguised as Housekeeper / Mansion Staff</p>"),

    L.marker([54.90, -44.07], {icon: iconCamera, alt: "level5camera"}).bindLabel("Security Camera"),
    L.polygon([[54.90, -44.07], [54.54, -46.53], [56.19, -46.14]], {color: '#00F204', opacity: 0, weight: 2, fillColor: '#00AA05', fillOpacity: 0.5, className: "level5camera"}).bindLabel("Security Camera"),

    L.marker([54.44, -45.87], {icon: iconLocked, alt: "level5locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key or Lockpick / Crowbar</p>"),
    L.marker([59.53, -73.87], {icon: iconLocked, alt: "level5locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Apartment Key or Lockpick / Crowbar</p><p class='note'>You can also just ring the bell</p>"),

]);

/* ==================================================================================================================================================================
   Level 6
   ================================================================================================================================================================== */

var level6other = L.layerGroup([

    L.marker([35.13, -95.62], {icon: iconEnter, alt: "level6enter"}).bindLabel("Starting Locaton: Undercover as Security Staff").bindPopup("<img src='img/map_sapienza/screenshots/enter_mansion.jpg'><h2>Starting Locaton</h2><h1>Undercover as Security Staff</h1>"),

    L.marker([48.10, -40.29], {icon: iconWayUp, alt: "level6waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),
    L.marker([48.13, -39.24], {icon: iconWayDown, alt: "level6waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),
    L.marker([54.36, -48.47], {icon: iconWayDown, alt: "level6waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Down</h2><h1>Pipe</h1>"),
    L.marker([55.60, -48.60], {icon: iconWayUp, alt: "level6waysupdown"}).bindLabel("Scale the Clock Tower").bindPopup("<h2>Way Up</h2><h1>Scale the Clock Tower</h1>"),
    L.marker([55.35, -120.3], {icon: iconWayDown, alt: "level6waysupdown"}).bindLabel("Climb").bindPopup("<h2>Way Down</h2><h1>Climb</h1>"),
    L.marker([76.99, -118.7], {icon: iconWayDown, alt: "level6waysupdown"}).bindLabel("Pipe: Level 6-1").bindPopup("<h2>Way Down</h2><h1>Pipe: Level 6-1</h1>"),
    L.marker([51.50, -96.76], {icon: iconWayUp, alt: "level6waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Up</h2><h1>Pipe</h1>"),
    L.marker([49.26, -109.1], {icon: iconWayUp, alt: "level6waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Up</h2><h1>Pipe</h1>"),
    L.marker([39.67, -106.3], {icon: iconWayUp, alt: "level6waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Up</h2><h1>Scale</h1>"),

    L.marker([53.43, -47.72], {icon: iconWayIn, alt: "level6waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([51.97, -47.46], {icon: iconWayIn, alt: "level6waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([53.69, -41.66], {icon: iconWayIn, alt: "level6waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([51.06, -105.2], {icon: iconWayIn, alt: "level6waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([45.33, -115.4], {icon: iconWayIn, alt: "level6waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([40.58, -115.5], {icon: iconWayIn, alt: "level6waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),
    L.marker([39.06, -104.0], {icon: iconWayIn, alt: "level6waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),

    new L.Polyline([[50.68, -47.46], [56.89, -48.99]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level6ledge"}).bindLabel("Ledge"),
    new L.Polyline([[77.07, -118.2], [76.27, -114.7], [75.40, -118.3], [76.25, -121.8], [77.07, -118.2]], {color: '#fff', weight: 6, opacity: 1, smoothFactor: 1, className: "level6ledge"}).bindLabel("Ledge"),

    L.marker([37.78, -100.9], {icon: iconStairsUp, alt: "level6stairsupdown"}),
    L.marker([50.40, -40.07], {icon: iconStairsUp, alt: "level6stairsupdown"}),
    L.marker([8.971, -150.6], {icon: iconStairsUpDown, alt: "level6stairsupdown"}),
    L.marker([31.95, -73.82], {icon: iconStairsUpDown, alt: "level6stairsupdown"}),
    L.marker([55.87, -46.23], {icon: iconStairsUpDown, alt: "level6stairsupdown"}),
    L.marker([35.67, -94.17], {icon: iconStairsDown, alt: "level6stairsupdown"}),
    L.marker([48.25, -104.4], {icon: iconStairsDown, alt: "level6stairsupdown"}),
    L.marker([56.31, -128.7], {icon: iconStairsDown, alt: "level6stairsupdown"}),
    L.marker([75.92, -119.0], {icon: iconStairsDown, alt: "level6stairsupdown"}),

]);

var level6weapons = L.layerGroup([

    L.marker([39.50, -102.9], {icon: iconPoisons, alt: "level6weapoison"}).bindLabel("Emetic Rat Poison").bindPopup("<h2>Poison</h2><h1>Emetic Rat Poison</h1>"),
    L.marker([54.34, -43.68], {icon: iconExplosive, alt: "level6explosive"}).bindLabel("Propane Flask").bindPopup("<h2>Explosive</h2><h1>Propane Flask</h1>"),
    L.marker([52.07, -119.0], {icon: iconExplosive, alt: "level6explosive"}).bindLabel("Propane Flask").bindPopup("<h2>Explosive</h2><h1>Propane Flask</h1>"),
    L.marker([39.47, -104.6], {icon: iconFirearm, alt: "level6firearm"}).bindLabel("Pistol: Bartoli 75R").bindPopup("<h2>Pistol</h2><h1>Bartoli 75R</h1>"),
    L.marker([40.14, -104.6], {icon: iconAmmo, alt: "level6ammo"}).bindLabel("Pistol Ammo").bindPopup("<h2>Ammo</h2><h1>Pistol Ammo</h1>"),
    L.marker([50.26, -101.1], {icon: iconBust, alt: "level6bust"}).bindLabel("Bust"),
    L.marker([7.231, -151.9], {icon: iconBattleAxe, alt: "level6battleaxe"}).bindLabel("Battle Axe"),
    L.marker([50.93, -46.14], {icon: iconFireAxe, alt: "level6fireaxe"}).bindLabel("Fire Axe"),
    L.marker([30.48, -72.11], {icon: iconKnifeFold, alt: "level6foldingknife"}).bindLabel("Folding Knife"),
    L.marker([53.38, -44.34], {icon: iconCrowbar, alt: "level6crowbar"}).bindLabel("Crowbar"),
    L.marker([52.80, -119.6], {icon: iconCrowbar, alt: "level6crowbar"}).bindLabel("Crowbar"),
    L.marker([39.53, -107.0], {icon: iconGolfClub, alt: "level6golfclub"}).bindLabel("Golf Club"),
    L.marker([54.29, -44.56], {icon: iconExtinguisher, alt: "level6extinguisher"}).bindLabel("Fire Extinguisher"),
    L.marker([44.24, -99.62], {icon: iconFirePoker, alt: "level6firepoker"}).bindLabel("Fire Poker"),
    L.marker([50.28, -99.27], {icon: iconOpener, alt: "level6opener"}).bindLabel("Letter Opener"),
    L.marker([44.24, -116.9], {icon: iconSoda, alt: "level6sodacan"}).bindLabel("Soda Can"),
    L.marker([33.65, -101.6], {icon: iconShovel, alt: "level6shovel"}).bindLabel("Shovel"),
    L.marker([44.02, -95.49], {icon: iconScissors, alt: "level6scissors"}).bindLabel("Scissors"),
    L.marker([40.84, -101.5], {icon: iconScrewdriver, alt: "level6screwdriver"}).bindLabel("Screwdriver"),
    L.marker([40.41, -93.07], {icon: iconScrewdriver, alt: "level6screwdriver"}).bindLabel("Screwdriver"),

]);

var level6poi = L.layerGroup([

    L.marker([52.21, -41.83], {icon: iconContainer, alt: "level6container"}).bindLabel("Hiding Spot"),
    L.marker([56.19, -127.6], {icon: iconContainer, alt: "level6container"}).bindLabel("Hiding Spot"),
    L.marker([51.50, -99.40], {icon: iconContainer, alt: "level6container"}).bindLabel("Hiding Spot"),
    L.marker([46.28, -108.1], {icon: iconContainer, alt: "level6container"}).bindLabel("Hiding Spot"),
    L.marker([39.57, -108.3], {icon: iconContainer, alt: "level6container"}).bindLabel("Hiding Spot"),
    L.marker([38.65, -100.9], {icon: iconContainer, alt: "level6container"}).bindLabel("Hiding Spot"),
    L.marker([43.99, -101.3], {icon: iconContainer, alt: "level6container"}).bindLabel("Hiding Spot"),
    L.marker([45.39, -101.4], {icon: iconContainer, alt: "level6container"}).bindLabel("Hiding Spot"),

    L.marker([47.81, -108.6], {icon: iconConceal, alt: "level6conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([41.17, -108.3], {icon: iconDisguise, alt: "level6disguise", title: "Disguise: Housekeeper"}).bindLabel("Disguise: Housekeeper").bindPopup("<img src='img/map_sapienza/screenshots/disg_housekeeper.jpg'><h2>Disguise</h2><h1>Housekeeper</h1>"),

    L.marker([43.73, -108.1], {icon: iconBlend, alt: "level6blend"}).bindLabel("Blend In as Housekeeper / Mansion Staff").bindPopup("<h2>Blend In</h2><h1>Housekeeper / Mansion Staff</h1>"),
    L.marker([41.37, -96.67], {icon: iconBlend, alt: "level6blend"}).bindLabel("Blend In as Housekeeper / Mansion Staff").bindPopup("<h2>Blend In</h2><h1>Housekeeper / Mansion Staff</h1>"),
    L.marker([36.03, -95.66], {icon: iconBlend, alt: "level6blend"}).bindLabel("Blend In as Mansion Security").bindPopup("<h2>Blend In</h2><h1>Mansion Security</h1>"),

    L.marker([48.74, -108.7], {icon: iconDistraction, alt: "level6dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([45.67, -98.96], {icon: iconDistraction, alt: "level6dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),
    L.marker([35.38, -105.1], {icon: iconDistraction, alt: "level6dis-faucet"}).bindLabel("Faucet").bindPopup("<h2>Distraction</h2><h1>Faucet</h1><p class='item-use'>Turn On/Off</p>"),

    L.marker([48.71, -43.72], {icon: iconSabotage, alt: "level6sab-chandelier"}).bindLabel("Chandelier").bindPopup("<h2>Sabotage</h2><h1>Chandelier</h1>"),
        new L.Polyline([[48.71, -43.72], [51.28, -42.36]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level6sab-chandelier"}),
        L.marker([51.28, -42.36], {icon: iconPointRed, alt: "level6sab-chandelier"}).bindLabel("Winch").bindPopup("<h2>Sabotage</h2><h1>Winch</h1><p class='item-use'>Release Winch</p>"),
    L.marker([76.26, -118.2], {icon: iconSabotage, alt: "level6sab-bell"}).bindLabel("Church Bell").bindPopup("<h2>Sabotage</h2><h1>Church Bell</h1>"),
        new L.Polyline([[76.26, -118.2], [75.93, -118.0]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level6sab-bell"}),
        L.marker([75.93, -118.0], {icon: iconPointRed, alt: "level6sab-bell"}).bindLabel("Winch").bindPopup("<h2>Sabotage</h2><h1>Winch</h1><p class='item-use'>Release Winch</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([50.03, -126.2], {icon: iconSabotage, alt: "level6sab-shaft"}).bindLabel("Shaft").bindPopup("<h2>Sabotage</h2><h1>Shaft</h1><p class='item-use'>Dump Propane Flask</p><p class='req'>Requires Propane Flask</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([41.31, -109.7], {icon: iconSabotage, alt: "level6sab-shaft"}).bindLabel("Shaft").bindPopup("<h2>Sabotage</h2><h1>Shaft</h1><p class='item-use'>Dump Propane Flask</p><p class='req'>Requires Propane Flask</p><p class='susp'>Suspicious in any disguise</p><p class='note'>Shaft is on the attic</p>"),
    L.marker([44.65, -99.00], {icon: iconSabotage, alt: "level6sab-shaft"}).bindLabel("Shaft").bindPopup("<h2>Sabotage</h2><h1>Shaft</h1><p class='item-use'>Dump Propane Flask</p><p class='req'>Requires Propane Flask</p><p class='susp'>Suspicious in any disguise</p><p class='note'>Shaft is on the attic</p>"),
    L.marker([36.24, -97.51], {icon: iconSabotage, alt: "level6sab-wire"}).bindLabel("Wire Plug").bindPopup("<h2>Sabotage</h2><h1>Wire Plug</h1><p class='item-use'>Expose Wire</p><p class='req'>Requires Screwdriver</p><p class='susp'>Suspicious in any disguise</p>"),
        new L.Polyline([[38.75, -99.09], [36.24, -97.51], [35.38, -105.1]], {color: '#fff', weight: 2, opacity: 0.25, smoothFactor: 1, className: "level6sab-wire"}),
        L.marker([38.75, -99.09], {icon: iconPointRed, alt: "level6sab-wire"}).bindLabel("Power Outlet").bindPopup("<h2>Sabotage</h2><h1>Power Outlet</h1><p class='item-use'>Turn On/Off</p><p class='susp'>Suspicious in any disguise</p>"),

    L.marker([38.92, -97.51], {icon: iconPoison, alt: "level6poison"}).bindLabel("Water Bottle").bindPopup("<h2>Poison</h2><h1>Water Bottle</h1><p class='req'>Requires Poison</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p><p class='note'>Will poison one of Francesca De Santis' bodyguards</p>"),

    L.marker([39.30, -102.0], {icon: iconAlarm, alt: "level6alarm"}).bindLabel("Fire Alarm").bindPopup("<h2>Alarm</h2><h1>Fire Alarm</h1><p class='item-use'>Trigger Fire Alarm</p><p class='susp'>Suspicious in any disguise</p>"),

    L.marker([55.37, -126.4], {icon: iconItem, alt: "level6item", title: "Item: VHS Tape"}).bindLabel("VHS Tape").bindPopup("<img src='img/map_sapienza/screenshots/item_vhstape.jpg'><h2>Item</h2><h1>VHS Tape</h1><p class='ingame-desc'><b>In-game description:</b><br>A worn VHS tape containing home footage from Silvio Caruso's childhood.</p>"),
    L.marker([50.68, -102.9], {icon: iconItem, alt: "level6item", title: "Item: Safe Combination"}).bindLabel("Safe Combination").bindPopup("<img src='img/map_sapienza/screenshots/item_safecode.jpg'><h2>Item</h2><h1>Safe Combination</h1><p class='ingame-desc'><b>In-game description:</b><br>A note with a combination code. It likely opens the safe in the attic. Whatever Caruso wants to conceal is of interest for us.</p>"),
    L.marker([45.67, -111.5], {icon: iconItem, alt: "level6item", title: "Item: Biolab Keycard"}).bindLabel("Biolab Keycard").bindPopup("<img src='img/map_sapienza/screenshots/item_keycardbio.jpg'><h2>Item</h2><h1>Biolab Keycard</h1><p class='ingame-desc'><b>In-game description:</b><br>An access keycard for the Ether biolab.</p>"),
    L.marker([45.05, -93.12], {icon: iconItem, alt: "level6item", title: "Item: Mansion Masterkey"}).bindLabel("Mansion Masterkey").bindPopup("<h2>Item</h2><h1>Mansion Masterkey</h1>"),

    L.marker([41.24, -113.2], {icon: iconInteraction, alt: "level6interaction", title: "Interaction: Sit Down as Dr. Lafayette"}).bindLabel("Sit Down as Dr. Lafayette").bindPopup("<img src='img/map_sapienza/screenshots/inter_therapy.jpg'><h2>Interaction</h2><h1>Sit Down as Dr. Lafayette</h1>"),
    L.marker([44.21, -94.35], {icon: iconInteraction, alt: "level6interaction", title: "Interaction: De Santis Cigarette Pack"}).bindLabel("De Santis' Cigarette Pack").bindPopup("<img src='img/map_sapienza/screenshots/inter_jointfrancesca.jpg'><h2>Interaction</h2><h1>De Santis' Cigarette Pack</h1><p class='item-use'>Place Joint</p><p class='req'>Requires Cannabis Joint</p>"),

    L.marker([54.36, -42.18], {icon: iconEvidence, alt: "level6evidence", title: "Camera Recorder - Cafe"}).bindLabel("Camera Recorder").bindPopup("<h2>Evidence</h2><h1>Camera Recorder</h1><p class='item-use'>Destroy Evidence</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([41.37, -102.8], {icon: iconEvidence, alt: "level6evidence", title: "Camera Recorder - Mansion"}).bindLabel("Camera Recorder").bindPopup("<h2>Evidence</h2><h1>Camera Recorder</h1><p class='item-use'>Destroy Evidence</p><p class='susp'>Suspicious in any disguise</p>"),

    L.marker([54.49, -45.87], {icon: iconLocked, alt: "level6locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Town Hall Key or Lockpick / Crowbar</p>"),
    L.marker([47.36, -101.6], {icon: iconLocked, alt: "level6locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Manshion Masterkey or Lockpick / Crowbar</p>"),
    L.marker([51.26, -101.6], {icon: iconLocked, alt: "level6locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Manshion Masterkey or Lockpick / Crowbar</p>"),
    L.marker([44.05, -106.4], {icon: iconLocked, alt: "level6locked"}).bindLabel("Locked Door").bindPopup("<h2>Locked</h2><h1>Locked Door</h1><p class='req'>Requires Manshion Masterkey or Lockpick / Crowbar</p>"),

]);

/* ==================================================================================================================================================================
   Level 7
   ================================================================================================================================================================== */

var level7other = L.layerGroup([

    L.marker([56.12, -48.12], {icon: iconEnter, alt: "level7enter"}).bindLabel("Starting Locaton: Main Square Tower").bindPopup("<img src='img/map_sapienza/screenshots/enter_tower.jpg'><h2>Starting Locaton</h2><h1>Main Square Tower</h1>"),

    L.marker([48.10, -40.29], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Scale").bindPopup("<h2>Way Down</h2><h1>Scale</h1>"),
    L.marker([55.60, -48.60], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Scale the Clock Tower").bindPopup("<h2>Way Down</h2><h1>Scale the Clock Tower</h1>"),
    L.marker([51.50, -96.76], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Down</h2><h1>Pipe</h1>"),
    L.marker([49.26, -109.1], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Pipe").bindPopup("<h2>Way Down</h2><h1>Pipe</h1>"),
    L.marker([50.42, -107.5], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Drop Down").bindPopup("<h2>Way Down</h2><h1>Drop Down</h1>"),
    L.marker([39.67, -106.3], {icon: iconWayDown, alt: "level7waysupdown"}).bindLabel("Climb Down").bindPopup("<h2>Way Down</h2><h1>Climb Down</h1>"),

    L.marker([47.45, -40.64], {icon: iconWayIn, alt: "level7waysin"}).bindLabel("Open Window").bindPopup("<h2>Passage</h2><h1>Open Window</h1>"),

    L.marker([56.68, -44.73], {icon: iconStairsDown, alt: "level7stairsupdown"}),
    L.marker([52.61, -40.47], {icon: iconStairsDown, alt: "level7stairsupdown"}),
    L.marker([33.28, -72.20], {icon: iconStairsDown, alt: "level7stairsupdown"}),
    L.marker([37.68, -102.3], {icon: iconStairsDown, alt: "level7stairsupdown"}),
    L.marker([39.70, -106.3], {icon: iconStairsDown, alt: "level7stairsupdown"}),
    L.marker([9.102, -148.4], {icon: iconStairsDown, alt: "level7stairsupdown"}),

]);

var level7weapons = L.layerGroup([

    L.marker([44.49, -100.1], {icon: iconExplosive, alt: "level7explosive"}).bindLabel("Propane Flask").bindPopup("<h2>Explosive</h2><h1>Propane Flask</h1>"),
    L.marker([42.09, -108.8], {icon: iconExplosive, alt: "level7explosive"}).bindLabel("Propane Flask").bindPopup("<h2>Explosive</h2><h1>Propane Flask</h1>"),
    L.marker([43.45, -114.4], {icon: iconExplosive, alt: "level7explosive"}).bindLabel("Propane Flask").bindPopup("<h2>Explosive</h2><h1>Propane Flask</h1>"),
    L.marker([10.66, -151.8], {icon: iconFirearm, alt: "level7firearm"}).bindLabel("Shotgun: Bartoli 12G").bindPopup("<h2>Shotgun</h2><h1>Bartoli 12G</h1>"),
    L.marker([46.89, -101.4], {icon: iconBrick, alt: "level7brick"}).bindLabel("Brick"),
    L.marker([40.34, -108.8], {icon: iconExtinguisher, alt: "level7extinguisher"}).bindLabel("Fire Extinguisher"),
    L.marker([56.68, -47.24], {icon: iconPipe, alt: "level7pipe"}).bindLabel("Lead Pipe"),
    L.marker([41.21, -93.25], {icon: iconKatana, alt: "level7katana"}).bindLabel("Katana"),
    L.marker([43.73, -101.6], {icon: iconToyTank, alt: "level7toytank"}).bindLabel("Toy Tank"),
    L.marker([44.74, -110.1], {icon: iconShovel, alt: "level7shovel"}).bindLabel("Shovel"),

]);

var level7poi = L.layerGroup([

    L.marker([44.84, -96.63], {icon: iconContainer, alt: "level7container"}).bindLabel("Hiding Spot"),
    L.marker([39.84, -110.7], {icon: iconContainer, alt: "level7container"}).bindLabel("Hiding Spot"),

    L.marker([47.69, -42.71], {icon: iconConceal, alt: "level7conceal"}).bindLabel("Conceal Item: Waste Basket"),

    L.marker([41.31, -109.7], {icon: iconSabotage, alt: "level7sab-shaft"}).bindLabel("Shaft").bindPopup("<h2>Sabotage</h2><h1>Shaft</h1><p class='item-use'>Dump Propane Flask</p><p class='req'>Requires Propane Flask</p><p class='susp'>Suspicious in any disguise</p>"),
    L.marker([44.65, -99.00], {icon: iconSabotage, alt: "level7sab-shaft"}).bindLabel("Shaft").bindPopup("<h2>Sabotage</h2><h1>Shaft</h1><p class='item-use'>Dump Propane Flask</p><p class='req'>Requires Propane Flask</p><p class='susp'>Suspicious in any disguise</p>"),

    L.marker([56.21, -45.74], {icon: iconDistraction, alt: "level7dis-radio"}).bindLabel("Transistor Radio").bindPopup("<h2>Distraction</h2><h1>Transistor Radio</h1><p class='item-use'>Turn On/Off</p>"),
    L.marker([47.04, -42.67], {icon: iconDistraction, alt: "level7dis-sink"}).bindLabel("Sink").bindPopup("<h2>Distraction</h2><h1>Sink</h1><p class='item-use'>Overflow Sink</p><p class='susp'>Suspicious unless disguised as <br>Waiter / Kitchen Assistant / Chef</p>"),

    L.marker([43.92, -94.43], {icon: iconIntel, alt: "level7intel"}).bindLabel("The Code to Caruso's Safe").bindPopup("<img src='img/map_sapienza/screenshots/intel_safe.jpg'><h2>Intel</h2><h1>The Code to Caruso's Safe</h1><p class='note'>Reveals 'Memento' opportunity</p><p class='ingame-desc'><b>In-game description:</b><br>According to the Ether security guards, Francesca De Santis is searching for the combination code to Caruso's safe, which is located in the attic. She believes Caruso has written the code down and keeps it somewhere near. If Ether is concerned about the cotent, then it is probably worth investigating.</p>"),

    L.marker([44.55, -93.64], {icon: iconInteraction, alt: "level7interaction", title: "Interaction: Safe"}).bindLabel("Safe").bindPopup("<img src='img/map_sapienza/screenshots/inter_safe.jpg'><h2>Interaction</h2><h1>Safe</h1><p class='item-use'>Use Combination</p><p class='req'>Requires Safe Combination</p>"),

    L.marker([47.81, -45.48], {icon: iconItem, alt: "level7item", title: "Item: Cannabis Joint"}).bindLabel("Cannabis Joint").bindPopup("<img src='img/map_sapienza/screenshots/item_cannabis.jpg'><h2>Item</h2><h1>Cannabis Joint</h1><p class='ingame-desc'><b>In-game description:</b><br>A joint belonging to the apartment's bohemian owner. Potent stuff, it's useful to cause sleepiness and increased appetite.</p>"),
    L.marker([43.35, -93.64], {icon: iconItem, alt: "level7item", title: "Item: DNA Sample"}).bindLabel("DNA Sample").bindPopup("<img src='img/map_sapienza/screenshots/item_dna.jpg'><h2>Item</h2><h1>DNA Sample</h1><p class='ingame-desc'><b>In-game description:</b><br>Hair and skin cells belonging to Francesca De Santis. Caruso appears to be collecting DNA material on his closest allies as some kind of security policy. No doubt De Santis would like to know about this.</p>"),
    L.marker([44.77, -113.5], {icon: iconItem, alt: "level7item", title: "Item: Expired Can of Spaghetti Sauce"}).bindLabel("Expired Can of Spaghetti Sauce").bindPopup("<img src='img/map_sapienza/screenshots/item_sauce.jpg'><h2>Item</h2><h1>Expired Can of Spaghetti Sauce</h1><p class='ingame-desc'><b>In-game description:</b><br>An expired can of spaghetti sauce. Looks like ot was brought while Isabella Caruso was still alive. It appears the legend of her family recipe is somewhat exaggerated.</p>"),

    L.marker([49.18, -43.63], {icon: iconLocation, alt: "level7location", title: "Location: Bohemian Apartment"}).bindLabel("Bohemian's Apartment").bindPopup("<img src='img/map_sapienza/screenshots/loc_bohemianapt.jpg'><h2>Location</h2><h1>Bohemian's Apartment</h1>"),

]);
    
/* ==================================================================================================================================================================
   All Markers
   ================================================================================================================================================================== */

var allMarkers = L.layerGroup([
    level0markers = L.layerGroup([level0other, level0weapons, level0poi]),
    level1markers = L.layerGroup([level1other, level1weapons, level1poi]),
    level2markers = L.layerGroup([level2other, level2weapons, level2poi]),
    level3markers = L.layerGroup([level3other, level3weapons, level3poi]),
    level4markers = L.layerGroup([level4other, level4weapons, level4poi]),
    level5markers = L.layerGroup([level5other, level5weapons, level5poi]),
    level6markers = L.layerGroup([level6other, level6weapons, level6poi]),
    level7markers = L.layerGroup([level7other, level7weapons, level7poi])
]);