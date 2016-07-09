var RouteBoxer = require('../lib/geojson.lib.routeboxer');
var exec       = require('child_process').exec;
var fs         = require('fs');

var template   = fs.readFileSync(__dirname + '/GeoJSONViewer.tmpl').toString();

var route1 = require('./route.json');
var route2 = {
  "type": "LineString",
  "coordinates": [
    [100.0, 0.0],
    [100.25, 0.5],
    [100.73, 0.63],
    [100.90, 0.95],
    [101.0, 1.0]
  ]};


var path  = route1;

var range = 20;

var boxer = new RouteBoxer();
var boxes = boxer.box(path, range);


boxes.push(path);
boxes.push(boxer.getGrid());
boxes.push(boxer.getIntersectingCells());


generateHtml(boxes);

function generateHtml (geojson) {
  var pageCode = template.replace('###LINES###', JSON.stringify(geojson));

  fs.writeFileSync(__dirname + '/GeoJSONViewer.html', pageCode);

  openBrowser();
}
function openBrowser () {
  var opener;

  switch (process.platform) {
    case 'linux':
      opener = 'xdg-open';
      break;
    case 'darwin':
      opener = 'open';
      break;
    case 'win32':
      opener = 'start ""';
      break;
  }

  return exec(opener + ' "file://' + __dirname + '/GeoJSONViewer.html"');
}
