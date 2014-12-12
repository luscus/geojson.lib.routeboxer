var RouteBoxer = require('../lib/geojson.lib.routeboxer');


var boxer = new RouteBoxer();
var geojson = {
  "type": "LineString",
  "coordinates": [
    [100.0, 0.0],
    [100.25, 0.5],
    [100.73, 0.63],
    [100.90, 0.95],
    [101.0, 1.0]
  ]};

var route = require('./route.json');

var range = 20;
var boxes = boxer.box(geojson, range);


boxes.push(geojson);
console.log(JSON.stringify(boxes));
