var mongoose = require('mongoose');
var overpath = require('query-overpass');
mongoose.connect('mongodb://test:test@ds137090.mlab.com:37090/nearest-cafe');


var CafeSchema = new mongoose.Schema({
  id:  String,
  lat: Number,
  long: Number,
  name: String,
  open: String
});

var cafe = mongoose.model('Cafes', CafeSchema);

overpath("[out: json];area[name='Гродно']->.city;(node(area.city)[amenity=cafe];(way(area.city)[amenity=cafe];);(rel(area.city)[amenity=cafe];););out;", function(err,data){

  for (var i = 0; i < data.features.length; i++) {
    var saveData = new cafe({
                 id: data.features[i].properties.id,
                lat: data.features[i].geometry.coordinates[1],
               long: data.features[i].geometry.coordinates[0],
               name: data.features[i].properties.tags.name,
               open: data.features[i].properties.tags.opening_hours
    });
    saveData.save(function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
  console.log("Success!!");

});
