import geo from './geo'
import cafe from './nearest-cafe'
var data = require('../../data/cafe');

localStorage["cafe"] = JSON.stringify(data);


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

$('body').on('click', 'a[class*=list-group-item]', function(e){

    $.ajax({
       type: "GET",
       url: $(this).attr("href"),
       contentType: "application/json",
       success: function (cafe) {
             var position = [cafe.long,cafe.lat];
             var transform = ol.proj.fromLonLat(position);
             view.setCenter(transform);
             view.setResolution(2.388657133911758);
       }
    });

   e.preventDefault();
});
