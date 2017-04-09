module.exports = {
  createMap: function (){
    let LonLat = [23.847670,53.815868];
    var transform = ol.proj.fromLonLat(LonLat);
    view = new ol.View({
      center: transform,
      zoom: 16,
      minZoom: 13,
      maxZoom: 19
    });
    map = new ol.Map({
      layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
          })
      ],
      target: 'map',
      view: view
    });
    geolocation= new ol.Geolocation({
             projection: view.getProjection(),
             tracking: true
    });
    map.on('singleclick', function(e) {
          var feature = map.forEachFeatureAtPixel(e.pixel, function(feature) {
            return feature;
          });
          var infoElement = document.getElementById('popup');
          infoElement.innerHTML = feature ? getInfo(feature) : 'Здесь кафе нет!';
    });
  },

}
function getInfoOffPoint(feature) {
  var text = '';
  for (var i = 1; i < feature.getKeys().length; i++) {
      text+=feature.get(feature.getKeys()[i])+"<br>";
  }
  return text;
}
