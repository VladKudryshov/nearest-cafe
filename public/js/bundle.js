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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
      infoElement.innerHTML = feature ? getInfo(feature) : 'Здесь кафе нет!';
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
/* 1 */
/***/ (function(module, exports) {

module.exports = {
    GetNearestCafe: function () {
        $(".content").css("opacity", "1");
        $(".asd").text("Cafe list");

        var position = geolocation.getPosition();
        var mylocation = ol.proj.toLonLat(position);

        $.ajax({
            url: "/nearest-cafe?lat=" + mylocation[1] + "&long=" + mylocation[0],
            type: "GET",
            contentType: "application/json",
            success: function (cafe) {
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
        });
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var geo = __webpack_require__(0);
var cafe = __webpack_require__(1);

$(document).ready(function () {
    geo.createMap();
});

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

    var resolutionAtCoords = 1.47243;
    var resolutionFactor = resolution / resolutionAtCoords;

    var point = new ol.layer.Vector({

        source: new ol.source.Vector({
            features: [new ol.Feature({
                geometry: new ol.geom.Circle(position, 1300 / ol.proj.METERS_PER_UNIT.m * resolutionFactor)
            })]
        })
    });

    map.addLayer(point);
    cafe.GetNearestCafe();
}

window.find = function () {

    $("div.box-shadow").remove();
    $("button.location").remove();
    functionName();
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