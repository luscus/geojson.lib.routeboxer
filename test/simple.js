var RouteBoxer = require('../lib/geojson.lib.routeboxer');


var boxer = new RouteBoxer();
var geojson = {
  "type": "LineString",
  "coordinates": [
    [100.0, 0.0],
    [101.0, 1.0]
  ]};
var range = 10;
var boxes = boxer.box(geojson, range);


boxes.push(geojson);
console.log(JSON.stringify(boxes));
