/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = [{ "_id": { "$oid": "58e202fa9c6542271a7ac4f3" }, "id": "320409511", "lat": 53.6970778, "long": 23.8197576, "name": "Верас", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac4f4" }, "id": "320409561", "lat": 53.6920821, "long": 23.8253921, "name": "Фея", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac4f5" }, "id": "320409564", "lat": 53.6918252, "long": 23.8257079, "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac4f6" }, "id": "320409626", "lat": 53.6825317, "long": 23.8328022, "name": "Чебуречная", "open": "Mo-Su 10:00-22:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac4f7" }, "id": "320409638", "lat": 53.6811059, "long": 23.8407719, "name": "Гудини", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac4f8" }, "id": "320409698", "lat": 53.675888, "long": 23.827257, "name": "Нестерка", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac4f9" }, "id": "320409833", "lat": 53.6648965, "long": 23.7905346, "name": "Заря", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac4fa" }, "id": "320409851", "lat": 53.6633181, "long": 23.7782989, "name": "Кафе Очаг", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac4fb" }, "id": "320409854", "lat": 53.662689, "long": 23.839582, "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac4fc" }, "id": "320409928", "lat": 53.6489469, "long": 23.836262, "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac4fd" }, "id": "334138965", "lat": 53.6440031, "long": 23.8237662, "name": "Столовая", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac4fe" }, "id": "387671759", "lat": 53.6755251, "long": 23.862463, "name": "Верона", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac4ff" }, "id": "394604135", "lat": 53.6864474, "long": 23.824351, "name": "Рута", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac500" }, "id": "431335370", "lat": 53.6850132, "long": 23.8420663, "name": "Loft House Cafe", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac501" }, "id": "449710605", "lat": 53.6802567, "long": 23.8417329, "name": "Офицерская столовая", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac502" }, "id": "483754694", "lat": 53.69673, "long": 23.8211883, "name": "Романтика", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac503" }, "id": "586302955", "lat": 53.6824163, "long": 23.8323295, "name": "Кофемания", "open": "Mo-Su 08:00-20:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac504" }, "id": "810018751", "lat": 53.6559656, "long": 23.7795536, "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac505" }, "id": "1089317945", "lat": 53.6929021, "long": 23.8284549, "name": "Палуба", "open": "Mo 00:00-02:00,12:00-21:00; Tu 12:00-24:00; We-Su 00:00-02:00,12:00-24:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac506" }, "id": "1089317951", "lat": 53.6933682, "long": 23.8237162, "name": "Мока", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac507" }, "id": "1157378592", "lat": 53.6845544, "long": 23.8431991, "name": "Салодкi пачастунак", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac508" }, "id": "1204096636", "lat": 53.678688, "long": 23.8352645, "name": "Пицца \u0026 кофе/ Taboo bar", "open": "00:00-02:00,11:00-24:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac509" }, "id": "1256843549", "lat": 53.6879621, "long": 23.8462896, "name": "\"У старога млына\"", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac50a" }, "id": "1321509244", "lat": 53.6908861, "long": 23.8244803, "name": "Arena", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac50b" }, "id": "1362587729", "lat": 53.6745615, "long": 23.8634339, "name": "Витрувий", "open": "Mo-Th 11:30-17:30; Fr 11:30-24:00; Sa 00:00-01:00,17:00-24:00; Su 00:00-01:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac50c" }, "id": "1380182221", "lat": 53.6757125, "long": 23.8507627, "name": "Чайный дом", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac50d" }, "id": "1561249552", "lat": 53.7014198, "long": 23.806681, "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac50e" }, "id": "1697657553", "lat": 53.6861174, "long": 23.8342362, "name": "АРХидэя", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac50f" }, "id": "1697658247", "lat": 53.6880362, "long": 23.8431679, "name": "Родный Кут", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac510" }, "id": "1697662270", "lat": 53.6780633, "long": 23.8366233, "name": "Палитра", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac511" }, "id": "1697693725", "lat": 53.678076, "long": 23.8282709, "name": "Сахара", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac512" }, "id": "1697696165", "lat": 53.6796743, "long": 23.8300466, "name": "Раскоша 1795", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac513" }, "id": "1777279868", "lat": 53.6672487, "long": 23.9111678, "name": "Кафе \"Строитель\"", "open": "Mo-Fr 08:30-16:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac514" }, "id": "1832189988", "lat": 53.659178, "long": 23.8307445, "name": "Столовая", "open": "Mo-Fr 08:30-16:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac515" }, "id": "1851895778", "lat": 53.6535543, "long": 23.844814, "name": "Солнечный", "open": "Mo-Su 08:00-22:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac516" }, "id": "2189324533", "lat": 53.6824294, "long": 23.8316637, "name": "Большой Буфет", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac517" }, "id": "2268454430", "lat": 53.6818125, "long": 23.8321244, "name": "Хамелеон", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac518" }, "id": "2314589039", "lat": 53.6508968, "long": 23.8293599, "name": "1000 и одна ночь", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac519" }, "id": "2315633120", "lat": 53.6394966, "long": 23.8406244, "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac51a" }, "id": "2501222563", "lat": 53.6716, "long": 23.7624226, "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac51b" }, "id": "2596391064", "lat": 53.6508744, "long": 23.8326553, "name": "Pizza Smile", "open": "Mo-Su 11:00-23:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac51c" }, "id": "2599226402", "lat": 53.676573, "long": 23.8281511, "name": "Магнолия", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac51d" }, "id": "2660413104", "lat": 53.7111725, "long": 23.8485643, "name": "Пицца \u0026 кофе", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac51e" }, "id": "2660455280", "lat": 53.6871107, "long": 23.8301506, "name": "Go-Go Pizza", "open": "Mo-Fr 10:00-23:00; Sa 10:00-24:00; Su 10:00-23:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac51f" }, "id": "2929872139", "lat": 53.7086345, "long": 23.8391245, "name": "Белоруснефть", "open": "12:00-15:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac520" }, "id": "2929872140", "lat": 53.7099045, "long": 23.8388598, "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac521" }, "id": "2940748803", "lat": 53.7008289, "long": 23.8165539, "name": "Столовая", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac522" }, "id": "2958909569", "lat": 53.6715279, "long": 23.8530165, "name": "Спадчына", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac523" }, "id": "2969282036", "lat": 53.6999768, "long": 23.8115062, "name": "Жемчужина", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac524" }, "id": "3236339917", "lat": 53.6664798, "long": 23.7887348, "name": "Табачный дворик", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac525" }, "id": "3236339923", "lat": 53.6634808, "long": 23.7847857, "name": "Фламинго", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac526" }, "id": "3273395788", "lat": 53.6906887, "long": 23.8018169, "open": "12:00-17:00,18:00-24:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac527" }, "id": "3704206403", "lat": 53.6725926, "long": 23.8632403, "name": "Pizza Smile", "open": "Mo-Su 11:00-23:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac528" }, "id": "3704212117", "lat": 53.6739124, "long": 23.8690598, "name": "Столовая", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac529" }, "id": "3704991782", "lat": 53.65196, "long": 23.787867, "name": "Столовая Гродножилстрой", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac52a" }, "id": "3806399465", "lat": 53.6911784, "long": 23.8464007, "name": "Столовая Гродторгмаш", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac52b" }, "id": "3830532606", "lat": 53.6957826, "long": 23.8442172, "name": "Столовая ГГАУ", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac52c" }, "id": "3833195767", "lat": 53.7070502, "long": 23.817502, "name": "Столовая Гронитекс", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac52d" }, "id": "4002634059", "lat": 53.6797935, "long": 23.8308106, "name": "Колобки", "open": "08:00-23:00", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac52e" }, "id": "4005669589", "lat": 53.6777107, "long": 23.8253906, "name": "Просто Кофе", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac52f" }, "id": "4005669590", "lat": 53.6782318, "long": 23.8262033, "name": "Наша кава", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac530" }, "id": "4005676301", "lat": 53.6821303, "long": 23.8315999, "name": "Амато Кофе", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac531" }, "id": "4107127190", "lat": 53.6855863, "long": 23.8312047, "name": "блины", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac532" }, "id": "4112883789", "lat": 53.6855924, "long": 23.836021, "name": "Шекспир", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac533" }, "id": "4225169542", "lat": 53.6636481, "long": 23.8334662, "name": "Кафе \"Амстердам\"", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac534" }, "id": "4323082995", "lat": 53.6649531, "long": 23.7840066, "name": "Тачки", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac535" }, "id": "4358273797", "lat": 53.6685729, "long": 23.8173723, "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac536" }, "id": "4400882472", "lat": 53.6957208, "long": 23.8349685, "name": "Пиплз", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac537" }, "id": "4487480290", "lat": 53.6867244, "long": 23.848613, "name": "Биг Джонс", "open": "24/7", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac538" }, "id": "4586899189", "lat": 53.6484309, "long": 23.8445315, "name": "Панорама", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac539" }, "id": "4620138290", "lat": 53.6852391, "long": 23.8429223, "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac53a" }, "id": "4648488895", "lat": 53.6852419, "long": 23.8429379, "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac53b" }, "id": "4648683889", "lat": 53.688019, "long": 23.8475961, "name": "Мишутка", "__v": 0 }, { "_id": { "$oid": "58e202fa9c6542271a7ac53c" }, "id": "4745560580", "lat": 53.6806628, "long": 23.8278462, "name": "Тайм-кафе \"Портал\"", "open": "12:00-00:00", "__v": 0 }];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  createMap: function () {
    let LonLat = [23.847670, 53.815868];
    var transform = ol.proj.fromLonLat(LonLat);
    view = new ol.View({
      center: transform,
      zoom: 16,
      minZoom: 13,
      maxZoom: 19
    });
    map = new ol.Map({
      layers: [new ol.layer.Tile({
        source: new ol.source.OSM()
      })],
      target: 'map',
      view: view
    });
    geolocation = new ol.Geolocation({
      projection: view.getProjection(),
      tracking: true
    });
    map.on('singleclick', function (e) {
      var feature = map.forEachFeatureAtPixel(e.pixel, function (feature) {
        return feature;
      });
      var infoElement = document.getElementById('popup');
      infoElement.innerHTML = feature ? getInfoOffPoint(feature) : 'Здесь кафе нет!';
    });
  }

};
function getInfoOffPoint(feature) {
  var text = '';
  for (var i = 1; i < feature.getKeys().length; i++) {
    text += feature.get(feature.getKeys()[i]) + "<br>";
  }
  return text;
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  GetNearestCafe: function () {
    $(".content").css("opacity", "1");
    $(".asd").text("Cafe list");

    var position = geolocation.getPosition();
    var mylocation = ol.proj.toLonLat(position);
    if (localStorage['cafe'] != undefined) {

      noConnectNearest(JSON.parse(localStorage['cafe']));
    } else {
      $.ajax({
        url: "/nearest-cafe?lat=" + mylocation[1] + "&long=" + mylocation[0],
        type: "GET",
        contentType: "application/json",
        success: function (cafe) {
          localStorage["cafe"] = JSON.stringify(cafe);

          createList(cafe);
        }
      });
    }
  }
};

function createList(cafe) {
  var i = 0;
  $.each(cafe, function (index, Object) {
    var a = document.createElement('a');
    a.className = 'list-group-item';
    a.href = "cafe/" + Object.id + "/info";
    a.innerHTML = '<h4 class="list-group-item-heading">' + Object.name + '</h4> \
                           <p class="list-group-item-text">' + JSON.stringify(Object.lat + ',' + Object.long) + '</p>';
    list.appendChild(a);
    var position = [Object.long, Object.lat];
    var transform = ol.proj.fromLonLat(position);

    var point = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.Circle(transform, 7),
          title: 'Cafe: ' + Object.name,
          open: 'Open: ' + Object.open
        })]
      })
    });

    map.addLayer(point);

    point = new ol.layer.Vector({

      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.Point(transform)
        })]
      })
    });
    map.addLayer(point);
  });
}

function noConnectNearest(cafe) {

  var position = geolocation.getPosition();
  var mylocation = ol.proj.toLonLat(position);

  var lat1 = mylocation[1];
  var long1 = mylocation[0];

  var arr = [];
  var i = 0;
  $.each(cafe, function (index, Object) {
    var lat2 = Object.lat;
    var long2 = Object.long;
    var radius = distance(lat1, long1, Object.lat, Object.long);
    if (radius < 1300) {
      arr[i] = [Object, radius];
      i++;
    }
  });

  var result = [];
  arr.sort(compareNumeric);
  for (var i = 0; i < arr.length; i++) {
    result[i] = arr[i][0];
  }

  createList(result);
}

function distance(a, b, c, d) {
  const earthRadius = 6372795;
  const pi180 = 0.017453; // 29251//Math.Round(Math.PI / 180, 5);
  var zz = 1,
      yy = 1;
  function taylorSin(x) {
    yy = x * x;
    zz = x;
    return zz - (zz *= yy) / 6 + (zz *= yy) / 120;
  }
  function taylorCos(x) {
    yy = x * x;
    zz = yy;
    return 1 - yy / 2 + (zz *= yy) / 24;
  }
  function taylorAtan(x) {
    yy = x * x;
    zz = x;
    return zz - (zz *= yy) / 3 + (zz *= yy) / 5 - (zz *= yy) / 7 + (zz *= yy) / 9 - (zz *= yy) / 20;
  }

  // перевести координаты в радианы
  var lat1 = a * pi180;
  var lat2 = c * pi180;
  var long1 = b * pi180;
  var long2 = d * pi180;

  // косинусы и синусы широт и разницы долгот
  var cl1 = taylorCos(lat1);
  var cl2 = taylorCos(lat2);
  var sl1 = taylorSin(lat1);
  var sl2 = taylorSin(lat2);
  var delta = long2 - long1;
  var cdelta = taylorCos(delta);
  var sdelta = taylorSin(delta);

  // вычисления длины большого круга
  var tmp = cl2 * cdelta;
  var y = Math.sqrt(cl2 * cl2 * sdelta * sdelta + (cl1 * sl2 - sl1 * tmp) * (cl1 * sl2 - sl1 * tmp));
  var x = sl1 * sl2 + cl1 * tmp;

  //
  var ad = Math.atan2(y, x); //taylorAtan(y/x);
  var dist = Math.ceil(ad * earthRadius); //(int)Math.Round(ad * earthRadius, 0);

  return dist;
}

function compareNumeric(a, b) {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
}

function createResult(arr) {
  var tmp = "[";

  for (var i = 0; i < arr.length; i++) {
    tmp += JSON.stringify(cafe[arr[i][0]]) + ",";
  }
  if (arr.length > 0) {
    tmp = tmp.substring(0, tmp.length - 1);
    tmp += "]";
  } else {
    tmp += "{\"name\": \"Ничего не найдено\", \"lat\": \"Сдвиньтесь с места\", \"long\": \"возле вас пусто\"}]";
  }
  console.log(tmp);
  return JSON.parse(tmp);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__geo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nearest_cafe__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nearest_cafe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__nearest_cafe__);


var data = __webpack_require__(0);

$(document).ready(function () {
    __WEBPACK_IMPORTED_MODULE_0__geo___default.a.createMap();
});

var TIME = 10 * 1000; //3 дня
function setCookie() {
    var time = new Date();
    time.setTime(Date.parse(time) + TIME);
    document.cookie = 'position' + '=' + geolocation.getPosition() + '; expires=' + time;
}

function getCookie() {
    if (document.cookie.search('position') != -1) {
        $("div.box-shadow").remove();
        $("button.location").remove();
    }
}

function createPointsIntoMap() {
    var position = geolocation.getPosition();
    var point = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [new ol.Feature({
                geometry: new ol.geom.Point(position)
            })]
        })
    });
    map.addLayer(point);
    view.setCenter(position);
    view.setResolution(2.388657133911758);
    var coords = view.getCenter();
    var resolution = view.getResolution();

    var resolutionAtCoords = 1.409;
    var resolutionFactor = resolution / resolutionAtCoords;

    var point = new ol.layer.Vector({

        source: new ol.source.Vector({
            features: [new ol.Feature({
                geometry: new ol.geom.Circle(position, 1300 / ol.proj.METERS_PER_UNIT.m * resolutionFactor)
            })]
        })
    });

    map.addLayer(point);
    __WEBPACK_IMPORTED_MODULE_1__nearest_cafe___default.a.GetNearestCafe();
}

window.find = function () {
    setCookie();
    $("div.box-shadow").remove();
    $("button.location").remove();
    createPointsIntoMap();
};

$('body').on('click', 'a[class*=list-group-item]', function (e) {

    $.ajax({
        type: "GET",
        url: $(this).attr("href"),
        contentType: "application/json",
        success: function (cafe) {
            var position = [cafe.long, cafe.lat];
            var transform = ol.proj.fromLonLat(position);
            view.setCenter(transform);
            view.setResolution(2.388657133911758);
        }
    });

    e.preventDefault();
});

/***/ })
/******/ ]);