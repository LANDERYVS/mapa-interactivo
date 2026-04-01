var map = L.map('map').setView([-34.6037, -58.3816], 13);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: 'OpenStreetMap'
}).addTo(map);

let puntos = [];

L.marker([-34.6037, -58.3816])
   .addTo(map)
   .bindPopup("Ubicación inicial")
   .openPopup();

   map.on('click', function(e) {
   puntos.push([e.latlng.lat, e.latlng.lng]);


    if (puntos.length === 3) {
       L.polygon(puntos, { color: 'red' }).addTo(map);
    }
});
