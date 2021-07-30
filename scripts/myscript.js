function LoadMap() {
//Определяем карту, координаты центра и начальный масштаб
var map = L.map('map').setView([56.326944, 44.0075], 12);
 
//Добавляем на нашу карту слой OpenStreetMap
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a rel="nofollow" href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);




var myMarker = L.marker([56.326944, 44.0075]);
myMarker.addTo(map);



var polyline = L.polyline([[56.3271,44.0074],[56.3250,44.0269],[56.3200,44.0250]],
    {color: 'red',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1},
    ).addTo(map);
    map.fitBounds(polyline.getBounds());




const drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

const drawControl = new L.Control.Draw({
  position: 'topright',
  draw: {},
  edit: {
    featureGroup: drawnItems,
    remove: true,
    buffer: {
      replacePolylines: false,
      separateBuffer: false,
    },
  },
});
map.addControl(drawControl);

}

