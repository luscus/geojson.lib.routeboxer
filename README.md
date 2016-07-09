# geojson.lib.routeboxer

[![NPM version](https://img.shields.io/npm/v/geojson.lib.routeboxer.svg?style=flat)](https://www.npmjs.com/package/geojson.lib.routeboxer "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/geojson.lib.routeboxer.svg?style=flat)](https://www.npmjs.com/package/geojson.lib.routeboxer "View this project on NPM")
[![NPM license](https://img.shields.io/npm/l/geojson.lib.routeboxer.svg?style=flat)](https://www.npmjs.com/package/geojson.lib.routeboxer "View this project on NPM")
[![flattr](https://img.shields.io/badge/flattr-donate-yellow.svg?style=flat)](http://flattr.com/thing/3817419/luscus-on-GitHub)

![coverage](https://rawgit.com/luscus/geojson.lib.routeboxer/master/reports/coverage.svg)
[![David](https://img.shields.io/david/luscus/geojson.lib.routeboxer.svg?style=flat)](https://david-dm.org/luscus/geojson.lib.routeboxer)
[![David](https://img.shields.io/david/dev/luscus/geojson.lib.routeboxer.svg?style=flat)](https://david-dm.org/luscus/geojson.lib.routeboxer#info=devDependencies)

The RouteBoxer class generates an Array of [GeoJSON.Polygon Objects](http://geojson.org/geojson-spec.html#id4) that are guaranteed to cover every point within a specified distance of a path. The primary use case for this class is to support implementing Search along a route against a Spatial db that supports bounding box queries.

This library builds uppon following project:

- [RouteBoxer.js](https://github.com/printercu/google-maps-utility-library-v3-read-only/blob/master/routeboxer/src/RouteBoxer.js): Calculates boxes arround a route (found at [google-maps-utility-library-v3](https://code.google.com/p/google-maps-utility-library-v3/wiki/Libraries))

## Usage

### Install

    npm install geojson.lib.routeboxer --save

### Example

    var RouteBoxer = require('geojson.lib.routeboxer'),
        boxer = new RouteBoxer(),
        boxes;


    // geojson: can be a GeoJSON.MultiPoint,
    //          a GeoJSON.LineString or an Array of GeoJSON.Positions
    // range:   is the distance to the line in km
    boxes = boxer.box(geojson, range);

## Test

While waiting for real tests, you can play around with the `simple.js` file.
A test route is provided and it will open the browser to visualise the whole
processing: grid, route, intersecting cells, route boxes

    node test/simple.js
