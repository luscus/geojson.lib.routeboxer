# geojson.lib.routeboxer
[![NPM version](https://badge.fury.io/js/geojson.lib.routeboxer.svg)](http://badge.fury.io/js/geojson.lib.routeboxer)
[![dependencies](https://david-dm.org/luscus/geojson.lib.routeboxer.svg)](https://david-dm.org/luscus/geojson.lib.routeboxer)
[![devDependency Status](https://david-dm.org/luscus/geojson.lib.routeboxer/dev-status.svg?theme=shields.io)](https://david-dm.org/luscus/geojson.lib.routeboxer#info=devDependencies)

The RouteBoxer class generates an Array of [GeoJSON.Polygon Objects](http://geojson.org/geojson-spec.html#id4) that are guaranteed to cover every point within a specified distance of a path. The primary use case for this class is to support implementing Search along a route against a Spatial db that supports bounding box queries.

This library builds uppon following project:

- [RouteBoxer.js](http://google-maps-utility-library-v3.googlecode.com/svn/trunk/routeboxer/docs/examples.html): Calculates boxes arround a route (found at [google-maps-utility-library-v3](https://code.google.com/p/google-maps-utility-library-v3/wiki/Libraries))

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

