var express = require('express');
var router = express.Router();
var cafe = require('../data/cafe');

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

router.get('/', function(req, res, next) {

  var lat1 = req.query.lat;
  var long1 = req.query.long;

  var arr = [];
  var index = 0;

  for (var i = 0; i < cafe.length; i++) {
    var lat2 = cafe[i].lat;
    var long2 = cafe[i].long;
    var radius = distance(req.query.lat, req.query.long,cafe[i].lat,cafe[i].long);

    if (radius<1300 ) {
        arr[index] = [i,radius];4
        index++;
    }
  }
  arr.sort(compareNumeric);
  res.json(createResult(arr));
});

module.exports = router;
