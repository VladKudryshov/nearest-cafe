module.exports = {
  GetNearestCafe: function() {
    $(".content").css("opacity","1")
    $(".asd").text("Cafe list")

      var position = geolocation.getPosition();
    var mylocation = ol.proj.toLonLat(position);
    if (localStorage['cafe']!=undefined) {

      noConnectNearest(JSON.parse(localStorage['cafe']));
    }else{
     $.ajax({
         url: "/nearest-cafe?lat="+mylocation[1]+"&long="+mylocation[0],
         type: "GET",
         contentType: "application/json",
         success: function (cafe) {
           localStorage["cafe"] = JSON.stringify(cafe);

           createList(cafe)
         }
     });
   }
  }
}


function createList(cafe) {
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

function noConnectNearest(cafe){



    var position = geolocation.getPosition();
    var mylocation = ol.proj.toLonLat(position);

    var lat1 = mylocation[1];
    var long1 = mylocation[0];

    var arr = [];
    var i = 0;
    $.each(cafe, function (index, Object) {
      var lat2 = Object.lat;
      var long2 = Object.long;
      var radius = distance(lat1, long1 ,Object.lat,Object.long);
      if (radius<1300 ) {
          arr[i] = [Object,radius];
          i++;
      }
    });


    var result = []
    arr.sort(compareNumeric);
    for (var i = 0; i < arr.length; i++) {
        result[i] = arr[i][0]
    }

    createList(result)
}

function distance(a, b, c, d) {
  const earthRadius = 6372795;
  const pi180 = 0.017453;// 29251//Math.Round(Math.PI / 180, 5);
  var zz = 1, yy = 1;
  function taylorSin(x) {
      yy = x * x;
      zz = x;
      return zz - (zz *= yy) / 6 + (zz *= yy) / 120;
  }
  function taylorCos(x) {
      yy = x * x;
      zz = yy;
      return 1 - (yy) / 2 + (zz *= yy) / 24;
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
  var ad = Math.atan2(y, x);//taylorAtan(y/x);
  var dist = Math.ceil(ad * earthRadius);//(int)Math.Round(ad * earthRadius, 0);

  return dist;
}


function compareNumeric(a, b) {
  if (a[1] > b[1]) return 1;
  if (a[1] < b[1]) return -1;
}

function createResult(arr){
  var tmp = "[";

  for (var i = 0; i < arr.length; i++) {
    tmp+= JSON.stringify(cafe[arr[i][0]])+",";
  }
  if(arr.length>0){
    tmp = tmp.substring(0, tmp.length - 1);
    tmp+= "]";
  }else{
    tmp+= "{\"name\": \"Ничего не найдено\", \"lat\": \"Сдвиньтесь с места\", \"long\": \"возле вас пусто\"}]";
  }
  console.log(tmp);
  return JSON.parse(tmp);
}
