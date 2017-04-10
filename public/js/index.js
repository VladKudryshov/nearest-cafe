import geo from './geo'
import cafe from './nearest-cafe'
var data = require('../../data/cafe');




$(document).ready(function() {
  geo.createMap();
});


var TIME = 10*1000; //3 дня
function setCookie () {
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
                geometry: new ol.geom.Point(position),
            })]
        })
    });
    map.addLayer(point);
    view.setCenter(position);
    view.setResolution(2.388657133911758);
    var coords = view.getCenter();
    var resolution = view.getResolution();

    var resolutionAtCoords = 1.409;
    var resolutionFactor = resolution/resolutionAtCoords;

      var point = new ol.layer.Vector({

          source: new ol.source.Vector({
              features: [new ol.Feature({
                  geometry: new ol.geom.Circle(position, (1300 / ol.proj.METERS_PER_UNIT.m)*resolutionFactor),
              })]
          })
      });

      map.addLayer(point);
      cafe.GetNearestCafe();
}


window.find = function(){
  setCookie();
  $("div.box-shadow").remove();
  $("button.location").remove();
  createPointsIntoMap();

}

function getCafeLocation(cafeUrl, callback) {
  $.ajax({
    type: "GET",
    url: cafeUrl,
    contentType: "application/json",
    success: function (cafe) {
      callback(null, cafe);
    },
    // TODO check option existence
    fail: function (err) {
      callback(err);
    }
  });
}

const createCenterView = (view) => (location) => centerView(view, location);
const centerMainView = createCenterView(window.view);

function centerView (view, location) {
  var transform = ol.proj.fromLonLat([ location.long, location.lat ]);
  view.setCenter(transform);
  view.setResolution(2.388657133911758);
}

function centerOnCafe(cafeUrl, callback) {
  getCafeLocation(cafeUrl, function (err, location) {
    if (err) {
      return callback(err);
    }
    centerMainView(location);
  });
}

$('body').on('click', 'a[class*=list-group-item]', function (e) {
  const cafeUrl = $(this).attr("href");
  centerOnCafe(cafeUrl, (err) => {
    $(this).addClass('failted-to-center');
  });
  e.preventDefault();
});
