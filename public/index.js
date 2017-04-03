var LonLat = [23.847670,53.815868];
var transform = ol.proj.fromLonLat(LonLat);


var view = new ol.View({
  center: transform,
  zoom: 16,
  minZoom: 10,
  maxZoom: 19
});

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
        source: new ol.source.OSM()
      })
  ],
  target: 'map',
  view: view
});

function getGeolocation(view) {
  var geolocation= new ol.Geolocation({
          projection: view.getProjection(),
          tracking: true
  });

  return geolocation
}


var geolocation;
function getLocation(){
  geolocation = getGeolocation(view);
  alert(geolocation.getPosition());
  $("div.box-shadow").remove();
  $("button.location").remove();
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

    var resolutionAtCoords = 1.47243;
    var resolutionFactor = resolution/resolutionAtCoords;

      var point = new ol.layer.Vector({

          source: new ol.source.Vector({
              features: [new ol.Feature({
                  geometry: new ol.geom.Circle(position, (1300 / ol.proj.METERS_PER_UNIT.m)*resolutionFactor),
              })]
          })
      });

      map.addLayer(point);
    GetNearestCafe();
}

function GetNearestCafe() {
  $(".content").css("opacity","1")
  $(".asd").text("Cafe list")

  var position = geolocation.getPosition();
  var mylocation = ol.proj.toLonLat(position);

   $.ajax({
       url: "/nearest-cafe?lat="+mylocation[1]+"&long="+mylocation[0],
       type: "GET",
       contentType: "application/json",
       success: function (cafe) {
         var i = 0;
         $.each(cafe, function (index, Object) {
           var a = document.createElement('a');
           a.className = 'list-group-item';
           a.href = "cafe/"+Object.id+"/info";
           a.innerHTML = '<h4 class="list-group-item-heading">'+Object.name+'</h4> \
                                  <p class="list-group-item-text">'+JSON.stringify(Object.lat+','+Object.long)+'</p>';
           list.appendChild(a);
           var position = [Object.long,Object.lat];
           var transform = ol.proj.fromLonLat(position);

           var point = new ol.layer.Vector({
               source: new ol.source.Vector({
                   features: [new ol.Feature({
                       geometry: new ol.geom.Circle(transform,7),
                       title: 'Cafe: '+Object.name,
                       open: 'Open: '+Object.open
                   })]
               })
           });

           map.addLayer(point);

             point = new ol.layer.Vector({

                 source: new ol.source.Vector({
                     features: [new ol.Feature({
                         geometry: new ol.geom.Point(transform),
                     })]
                 })
             });
             map.addLayer(point);
         });


       }
   });
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

  map.on('singleclick', function(e) {
      var feature = map.forEachFeatureAtPixel(e.pixel, function(feature) {
        return feature;
      });
      var infoElement = document.getElementById('popup');
      infoElement.innerHTML = feature ? getInfo(feature) : 'asdasd';
});


function getInfo(feature) {
  var text = '';
  for (var i = 1; i < feature.getKeys().length; i++) {
      text+=feature.get(feature.getKeys()[i])+"<br>";
  }
  return text;
}
