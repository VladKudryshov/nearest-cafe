module.exports = {
  GetNearestCafe: function() {
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
}
