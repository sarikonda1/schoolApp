(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-student-student-module~app-modules-transportation-routing-routes-module"],{

/***/ "./node_modules/@agm/core/core.module.js":
/*!***********************************************!*\
  !*** ./node_modules/@agm/core/core.module.js ***!
  \***********************************************/
/*! exports provided: coreDirectives, AgmCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDirectives", function() { return coreDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return AgmCoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/map */ "./node_modules/@agm/core/directives/map.js");
/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/circle */ "./node_modules/@agm/core/directives/circle.js");
/* harmony import */ var _directives_rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/rectangle */ "./node_modules/@agm/core/directives/rectangle.js");
/* harmony import */ var _directives_info_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/info-window */ "./node_modules/@agm/core/directives/info-window.js");
/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/marker */ "./node_modules/@agm/core/directives/marker.js");
/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/polygon */ "./node_modules/@agm/core/directives/polygon.js");
/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/polyline */ "./node_modules/@agm/core/directives/polyline.js");
/* harmony import */ var _directives_polyline_point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");
/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/kml-layer */ "./node_modules/@agm/core/directives/kml-layer.js");
/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/data-layer */ "./node_modules/@agm/core/directives/data-layer.js");
/* harmony import */ var _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/maps-api-loader/lazy-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* harmony import */ var _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* harmony import */ var _utils_browser_globals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/browser-globals */ "./node_modules/@agm/core/utils/browser-globals.js");
/* harmony import */ var _agm_core_directives_fit_bounds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core/directives/fit-bounds */ "./node_modules/@agm/core/directives/fit-bounds.js");
















/**
 * @internal
 */
function coreDirectives() {
    return [
        _directives_map__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _directives_marker__WEBPACK_IMPORTED_MODULE_5__["AgmMarker"], _directives_info_window__WEBPACK_IMPORTED_MODULE_4__["AgmInfoWindow"], _directives_circle__WEBPACK_IMPORTED_MODULE_2__["AgmCircle"], _directives_rectangle__WEBPACK_IMPORTED_MODULE_3__["AgmRectangle"],
        _directives_polygon__WEBPACK_IMPORTED_MODULE_6__["AgmPolygon"], _directives_polyline__WEBPACK_IMPORTED_MODULE_7__["AgmPolyline"], _directives_polyline_point__WEBPACK_IMPORTED_MODULE_8__["AgmPolylinePoint"], _directives_kml_layer__WEBPACK_IMPORTED_MODULE_9__["AgmKmlLayer"],
        _directives_data_layer__WEBPACK_IMPORTED_MODULE_10__["AgmDataLayer"], _agm_core_directives_fit_bounds__WEBPACK_IMPORTED_MODULE_14__["AgmFitBounds"]
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmCoreModule = /** @class */ (function () {
    function AgmCoreModule() {
    }
    /**
     * Please use this method when you register the module at the root level.
     */
    /**
       * Please use this method when you register the module at the root level.
       */
    AgmCoreModule.forRoot = /**
       * Please use this method when you register the module at the root level.
       */
    function (lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_13__["BROWSER_GLOBALS_PROVIDERS"].concat([
                { provide: _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_12__["MapsAPILoader"], useClass: _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["LazyMapsAPILoader"] },
                { provide: _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["LAZY_MAPS_API_CONFIG"], useValue: lazyMapsAPILoaderConfig }
            ]),
        };
    };
    AgmCoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ declarations: coreDirectives(), exports: coreDirectives() },] },
    ];
    return AgmCoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives.js":
/*!**********************************************!*\
  !*** ./node_modules/@agm/core/directives.js ***!
  \**********************************************/
/*! exports provided: AgmMap, AgmCircle, AgmRectangle, AgmInfoWindow, AgmKmlLayer, AgmDataLayer, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmFitBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/map */ "./node_modules/@agm/core/directives/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return _directives_map__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]; });

/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/circle */ "./node_modules/@agm/core/directives/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return _directives_circle__WEBPACK_IMPORTED_MODULE_1__["AgmCircle"]; });

/* harmony import */ var _directives_rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/rectangle */ "./node_modules/@agm/core/directives/rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return _directives_rectangle__WEBPACK_IMPORTED_MODULE_2__["AgmRectangle"]; });

/* harmony import */ var _directives_info_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/info-window */ "./node_modules/@agm/core/directives/info-window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return _directives_info_window__WEBPACK_IMPORTED_MODULE_3__["AgmInfoWindow"]; });

/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/kml-layer */ "./node_modules/@agm/core/directives/kml-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return _directives_kml_layer__WEBPACK_IMPORTED_MODULE_4__["AgmKmlLayer"]; });

/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/data-layer */ "./node_modules/@agm/core/directives/data-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return _directives_data_layer__WEBPACK_IMPORTED_MODULE_5__["AgmDataLayer"]; });

/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/marker */ "./node_modules/@agm/core/directives/marker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return _directives_marker__WEBPACK_IMPORTED_MODULE_6__["AgmMarker"]; });

/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/polygon */ "./node_modules/@agm/core/directives/polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return _directives_polygon__WEBPACK_IMPORTED_MODULE_7__["AgmPolygon"]; });

/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/polyline */ "./node_modules/@agm/core/directives/polyline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return _directives_polyline__WEBPACK_IMPORTED_MODULE_8__["AgmPolyline"]; });

/* harmony import */ var _directives_polyline_point__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return _directives_polyline_point__WEBPACK_IMPORTED_MODULE_9__["AgmPolylinePoint"]; });

/* harmony import */ var _directives_fit_bounds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/fit-bounds */ "./node_modules/@agm/core/directives/fit-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return _directives_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["AgmFitBounds"]; });












//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/circle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@agm/core/directives/circle.js ***!
  \*****************************************************/
/*! exports provided: AgmCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return AgmCircle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");


var AgmCircle = /** @class */ (function () {
    function AgmCircle(_manager) {
        this._manager = _manager;
        /**
           * Indicates whether this Circle handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this circle over the map. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this circle by dragging the control points shown at
           * the center and around the circumference of the circle. Defaults to false.
           */
        this.editable = false;
        /**
           * The radius in meters on the Earth's surface.
           */
        this.radius = 0;
        /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */
        this.strokePosition = 'CENTER';
        /**
           * The stroke width in pixels.
           */
        this.strokeWeight = 0;
        /**
           * Whether this circle is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the circle's center is changed.
           */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the circle.
           */
        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the circle.
           */
        this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the circle.
           */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the circle.
           */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the circle.
           */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the circle.
           */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the circle.
           */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on circle mouseout.
           */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on circle mouseover.
           */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mouseup event is fired on the circle.
           */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the circle's radius is changed.
           */
        this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the circle is right-clicked on.
           */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnInit = /** @internal */
    function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    AgmCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmCircle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnDestroy = /** @internal */
    function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    /**
       * Gets the LatLngBounds of this Circle.
       */
    AgmCircle.prototype.getBounds = /**
       * Gets the LatLngBounds of this Circle.
       */
    function () { return this._manager.getBounds(this); };
    AgmCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    AgmCircle._mapOptions = [
        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
        'visible', 'zIndex', 'clickable'
    ];
    AgmCircle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-circle'
                },] },
    ];
    /** @nocollapse */
    AgmCircle.ctorParameters = function () { return [
        { type: _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__["CircleManager"], },
    ]; };
    AgmCircle.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['circleDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "radius": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokePosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "centerChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "circleClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "circleDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "drag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "radiusChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmCircle;
}());

//# sourceMappingURL=circle.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/data-layer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/directives/data-layer.js ***!
  \*********************************************************/
/*! exports provided: AgmDataLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return AgmDataLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");


var layerId = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
var AgmDataLayer = /** @class */ (function () {
    function AgmDataLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
           * This event is fired when a feature in the layer is clicked.
           */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * The geoJson to be displayed
           */
        this.geoJson = null;
    }
    AgmDataLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmDataLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.toString = /** @internal */
    function () { return "AgmDataLayer-" + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.ngOnDestroy = /** @internal */
    function () {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.ngOnChanges = /** @internal */
    function (changes) {
        var _this = this;
        if (!this._addedToManager) {
            return;
        }
        var geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        var dataOptions = {};
        AgmDataLayer._dataOptionsAttributes.forEach(function (k) { return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this[k]; });
        this._manager.setDataOptions(this, dataOptions);
    };
    AgmDataLayer._dataOptionsAttributes = ['style'];
    AgmDataLayer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-data-layer'
                },] },
    ];
    /** @nocollapse */
    AgmDataLayer.ctorParameters = function () { return [
        { type: _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_1__["DataLayerManager"], },
    ]; };
    AgmDataLayer.propDecorators = {
        "layerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "geoJson": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return AgmDataLayer;
}());

//# sourceMappingURL=data-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/fit-bounds.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/directives/fit-bounds.js ***!
  \*********************************************************/
/*! exports provided: AgmFitBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return AgmFitBounds; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
var AgmFitBounds = /** @class */ (function () {
    function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
           * If the value is true, the element gets added to the bounds of the map.
           * Default: true.
           */
        this.agmFitBounds = true;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnChanges = /**
       * @internal
       */
    function (changes) {
        this._updateBounds();
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnInit = /**
       * @internal
       */
    function () {
        var _this = this;
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
            return x.latLng.lat === y.latLng.lng;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$))
            .subscribe(function (details) { return _this._updateBounds(details); });
    };
    AgmFitBounds.prototype._updateBounds = function (newFitBoundsDetails) {
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
        else {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnDestroy = /**
       * @internal
       */
    function () {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    };
    AgmFitBounds.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[agmFitBounds]'
                },] },
    ];
    /** @nocollapse */
    AgmFitBounds.ctorParameters = function () { return [
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__["FitBoundsAccessor"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] },] },
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__["FitBoundsService"], },
    ]; };
    AgmFitBounds.propDecorators = {
        "agmFitBounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return AgmFitBounds;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/info-window.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agm/core/directives/info-window.js ***!
  \**********************************************************/
/*! exports provided: AgmInfoWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return AgmInfoWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");


var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmInfoWindow = /** @class */ (function () {
    function AgmInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
           * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
           */
        this.isOpen = false;
        /**
           * Emits an event when the info window is closed.
           */
        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    AgmInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    AgmInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    AgmInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    /**
       * Opens the info window.
       */
    AgmInfoWindow.prototype.open = /**
       * Opens the info window.
       */
    function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    /**
       * Closes the info window.
       */
    AgmInfoWindow.prototype.close = /**
       * Closes the info window.
       */
    function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.toString = /** @internal */
    function () { return 'AgmInfoWindow-' + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnDestroy = /** @internal */
    function () { this._infoWindowManager.deleteInfoWindow(this); };
    AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
    AgmInfoWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-info-window',
                    template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmInfoWindow.ctorParameters = function () { return [
        { type: _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    AgmInfoWindow.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableAutoPan": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "infoWindowClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmInfoWindow;
}());

//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/kml-layer.js":
/*!********************************************************!*\
  !*** ./node_modules/@agm/core/directives/kml-layer.js ***!
  \********************************************************/
/*! exports provided: AgmKmlLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return AgmKmlLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");


var layerId = 0;
var AgmKmlLayer = /** @class */ (function () {
    function AgmKmlLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
           * If true, the layer receives mouse events. Default value is true.
           */
        this.clickable = true;
        /**
           * By default, the input map is centered and zoomed to the bounding box of the contents of the
           * layer.
           * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
           * were never set.
           */
        this.preserveViewport = false;
        /**
           * Whether to render the screen overlays. Default true.
           */
        this.screenOverlays = true;
        /**
           * Suppress the rendering of info windows when layer features are clicked.
           */
        this.suppressInfoWindows = false;
        /**
           * The URL of the KML document to display.
           */
        this.url = null;
        /**
           * The z-index of the layer.
           */
        this.zIndex = null;
        /**
           * This event is fired when a feature in the layer is clicked.
           */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the KML layers default viewport has changed.
           */
        this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the KML layer has finished loading.
           * At this point it is safe to read the status property to determine if the layer loaded
           * successfully.
           */
        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgmKmlLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmKmlLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    };
    AgmKmlLayer.prototype._updatePolygonOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmKmlLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.toString = /** @internal */
    function () { return "AgmKmlLayer-" + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.ngOnDestroy = /** @internal */
    function () {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
    AgmKmlLayer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-kml-layer'
                },] },
    ];
    /** @nocollapse */
    AgmKmlLayer.ctorParameters = function () { return [
        { type: _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_1__["KmlLayerManager"], },
    ]; };
    AgmKmlLayer.propDecorators = {
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "preserveViewport": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "screenOverlays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "suppressInfoWindows": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "url": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "layerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "defaultViewportChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "statusChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmKmlLayer;
}());

//# sourceMappingURL=kml-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/map.js":
/*!**************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.js ***!
  \**************************************************/
/*! exports provided: AgmMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");











/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = /** @class */ (function () {
    function AgmMap(_elem, _mapsWrapper, _fitBoundsService) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._fitBoundsService = _fitBoundsService;
        /**
           * The longitude that defines the center of the map.
           */
        this.longitude = 0;
        /**
           * The latitude that defines the center of the map.
           */
        this.latitude = 0;
        /**
           * The zoom level of the map. The default zoom level is 8.
           */
        this.zoom = 8;
        /**
           * Enables/disables if map is draggable.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
           * Enables/disables zoom and center on double click. Enabled by default.
           */
        this.disableDoubleClickZoom = false;
        /**
           * Enables/disables all default UI of the Google map. Please note: When the map is created, this
           * value cannot get updated.
           */
        this.disableDefaultUI = false;
        /**
           * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
           */
        this.scrollwheel = true;
        /**
           * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
           * enabled by default.
           */
        this.keyboardShortcuts = true;
        /**
           * The enabled/disabled state of the Zoom control.
           */
        this.zoomControl = true;
        /**
           * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
           * modes, these styles will only apply to labels and geometry.
           */
        this.styles = [];
        /**
           * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
           * used to
           * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
           */
        this.usePanning = false;
        /**
           * The initial enabled/disabled state of the Street View Pegman control.
           * This control is part of the default UI, and should be set to false when displaying a map type
           * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
           */
        this.streetViewControl = true;
        /**
           * Sets the viewport to contain the given bounds.
           * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
           */
        this.fitBounds = false;
        /**
           * The initial enabled/disabled state of the Scale control. This is disabled by default.
           */
        this.scaleControl = false;
        /**
           * The initial enabled/disabled state of the Map type control.
           */
        this.mapTypeControl = false;
        /**
           * The initial enabled/disabled state of the Pan control.
           */
        this.panControl = false;
        /**
           * The initial enabled/disabled state of the Rotate control.
           */
        this.rotateControl = false;
        /**
           * The initial enabled/disabled state of the Fullscreen control.
           */
        this.fullscreenControl = false;
        /**
           * The map mapTypeId. Defaults to 'roadmap'.
           */
        this.mapTypeId = 'roadmap';
        /**
           * When false, map icons are not clickable. A map icon represents a point of interest,
           * also known as a POI. By default map icons are clickable.
           */
        this.clickableIcons = true;
        /**
           * This setting controls how gestures on the map are handled.
           * Allowed values:
           * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
           * - 'greedy'      (All touch gestures pan or zoom the map.)
           * - 'none'        (The map cannot be panned or zoomed by user gestures.)
           * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
           */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
           * This event emitter gets emitted when the user clicks on the map (but not when they click on a
           * marker or infoWindow).
           */
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user right-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user double-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter is fired when the map center changes.
           */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the viewport bounds have changed.
           */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the mapTypeId property changes.
           */
        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the map becomes idle after panning or zooming.
           */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the zoom level has changed.
           */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the google map is fully initialized.
           * You get the google.maps.Map instance as a result of this EventEmitter.
           */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnInit = /** @internal */
    function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleIdleEvent();
    };
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnDestroy = /** @internal */
    function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    };
    /* @internal */
    /* @internal */
    AgmMap.prototype.ngOnChanges = /* @internal */
    function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    AgmMap.prototype.triggerResize = /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                this._updateBounds(this.fitBounds);
        }
    };
    AgmMap.prototype._subscribeToFitBoundsUpdates = function () {
        var _this = this;
        this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(function (b) { return _this._updateBounds(b); });
    };
    AgmMap.prototype._updateBounds = function (bounds) {
        if (this._isLatLngBoundsLiteral(bounds) && google && google.maps) {
            var newBounds = google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds);
            return;
        }
        this._mapsWrapper.fitBounds(bounds);
    };
    AgmMap.prototype._isLatLngBoundsLiteral = function (bounds) {
        return bounds != null && bounds.extend === undefined;
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapTypeIdChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    /**
       * Map option attributes that can change over time
       */
    AgmMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
        'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
        'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
        'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
        'mapTypeId', 'clickableIcons', 'gestureHandling'
    ];
    AgmMap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-map',
                    providers: [
                        _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__["MarkerManager"], _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__["InfoWindowManager"], _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__["CircleManager"], _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__["RectangleManager"],
                        _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__["PolylineManager"], _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__["PolygonManager"], _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__["KmlLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"],
                        _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"]
                    ],
                    host: {
                        // todo: deprecated - we will remove it with the next version
                        '[class.sebm-google-map-container]': 'true'
                    },
                    styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                    template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmMap.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], },
        { type: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_10__["FitBoundsService"], },
    ]; };
    AgmMap.propDecorators = {
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mapDraggable',] },],
        "disableDoubleClickZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableDefaultUI": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollwheel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "backgroundColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggableCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggingCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "keyboardShortcuts": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styles": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "usePanning": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fitBounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickableIcons": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "gestureHandling": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "centerChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "boundsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapTypeIdChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "idle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "zoomChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapReady": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmMap;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/marker.js":
/*!*****************************************************!*\
  !*** ./node_modules/@agm/core/directives/marker.js ***!
  \*****************************************************/
/*! exports provided: AgmMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return AgmMarker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _info_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-window */ "./node_modules/@agm/core/directives/info-window.js");





var markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarker = /** @class */ (function () {
    function AgmMarker(_markerManager) {
        this._markerManager = _markerManager;
        /**
           * If true, the marker can be dragged. Default value is false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If true, the marker is visible
           */
        this.visible = true;
        /**
           * Whether to automatically open the child info window when the marker is clicked.
           */
        this.openInfoWindow = true;
        /**
           * The marker's opacity between 0.0 and 1.0.
           */
        this.opacity = 1;
        /**
           * All markers are displayed on the map in order of their zIndex, with higher values displaying in
           * front of markers with lower values. By default, markers are displayed according to their
           * vertical position on screen, with lower markers appearing in front of markers further up the
           * screen.
           */
        this.zIndex = 1;
        /**
           * If true, the marker can be clicked. Default value is true.
           */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
           * This event emitter gets emitted when the user clicks on the marker.
           */
        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user rightclicks on the marker.
           */
        this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the marker.
           */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user mouses over the marker.
           */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user mouses outside the marker.
           */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * @internal
           */
        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this._id = (markerId++).toString();
    }
    /* @internal */
    /* @internal */
    AgmMarker.prototype.ngAfterContentInit = /* @internal */
    function () {
        var _this = this;
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(function () { return _this.handleInfoWindowUpdate(); });
    };
    AgmMarker.prototype.handleInfoWindowUpdate = function () {
        var _this = this;
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this;
        });
    };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
        }
        if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._updateFitBoundsDetails();
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
            this._updateFitBoundsDetails();
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
        if (changes['animation']) {
            this._markerManager.updateAnimation(this);
        }
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmMarker.prototype.getFitBoundsDetails$ = /**
       * @internal
       */
    function () {
        return this._fitBoundsDetails$.asObservable();
    };
    AgmMarker.prototype._updateFitBoundsDetails = function () {
        this._fitBoundsDetails$.next({ latLng: { lat: this.latitude, lng: this.longitude } });
    };
    AgmMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow) {
                _this.infoWindow.forEach(function (infoWindow) { return infoWindow.open(); });
            }
            _this.markerClick.emit(_this);
        });
        this._observableSubscriptions.push(cs);
        var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
            _this.markerRightClick.emit(null);
        });
        this._observableSubscriptions.push(rc);
        var ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        var mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(function (e) {
            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        var mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(function (e) {
            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
    };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.toString = /** @internal */
    function () { return 'AgmMarker-' + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.ngOnDestroy = /** @internal */
    function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmMarker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-marker',
                    providers: [
                        { provide: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_2__["FitBoundsAccessor"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AgmMarker; }) }
                    ],
                    inputs: [
                        'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
                        'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'
                    ],
                    outputs: ['markerClick', 'dragEnd', 'mouseOver', 'mouseOut']
                },] },
    ];
    /** @nocollapse */
    AgmMarker.ctorParameters = function () { return [
        { type: _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
    ]; };
    AgmMarker.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['markerDraggable',] },],
        "iconUrl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "openInfoWindow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "opacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['markerClickable',] },],
        "markerClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "markerRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "infoWindow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_info_window__WEBPACK_IMPORTED_MODULE_4__["AgmInfoWindow"],] },],
    };
    return AgmMarker;
}());

//# sourceMappingURL=marker.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polygon.js":
/*!******************************************************!*\
  !*** ./node_modules/@agm/core/directives/polygon.js ***!
  \******************************************************/
/*! exports provided: AgmPolygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return AgmPolygon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");


/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
var AgmPolygon = /** @class */ (function () {
    function AgmPolygon(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
           * Indicates whether this Polygon handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this shape over the map. The geodesic
           * property defines the mode of dragging. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this shape by dragging the control
           * points shown at the vertices and on each segment. Defaults to false.
           */
        this.editable = false;
        /**
           * When true, edges of the polygon are interpreted as geodesic and will
           * follow the curvature of the Earth. When false, edges of the polygon are
           * rendered as straight lines in screen space. Note that the shape of a
           * geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */
        this.geodesic = false;
        /**
           * The ordered sequence of coordinates that designates a closed loop.
           * Unlike polylines, a polygon may consist of one or more paths.
           *  As a result, the paths property may specify one or more arrays of
           * LatLng coordinates. Paths are closed automatically; do not repeat the
           * first vertex of the path as the last vertex. Simple polygons may be
           * defined using a single array of LatLngs. More complex polygons may
           * specify an array of arrays. Any simple arrays are converted into Arrays.
           * Inserting or removing LatLngs from the Array will automatically update
           * the polygon on the map.
           */
        this.paths = [];
        /**
           * This event is fired when the DOM click event is fired on the Polygon.
           */
        this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM dblclick event is fired on the Polygon.
           */
        this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the polygon.
           */
        this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the polygon.
           */
        this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the polygon.
           */
        this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the Polygon.
           */
        this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the Polygon.
           */
        this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polygon mouseout.
           */
        this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polygon mouseover.
           */
        this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired whe the DOM mouseup event is fired on the Polygon
           */
        this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This even is fired when the Polygon is right-clicked on.
           */
        this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.ngAfterContentInit = /** @internal */
    function () {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    };
    AgmPolygon.prototype.ngOnChanges = function (changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    };
    AgmPolygon.prototype._init = function () {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolygon.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    AgmPolygon.prototype._updatePolygonOptions = function (changes) {
        return Object.keys(changes)
            .filter(function (k) { return AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    };
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.ngOnDestroy = /** @internal */
    function () {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmPolygon._polygonOptionsAttributes = [
        'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
        'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
        'editable', 'visible'
    ];
    AgmPolygon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-polygon'
                },] },
    ];
    /** @nocollapse */
    AgmPolygon.ctorParameters = function () { return [
        { type: _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_1__["PolygonManager"], },
    ]; };
    AgmPolygon.propDecorators = {
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['polyDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "geodesic": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "paths": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "polyClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDrag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyDragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyMouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "polyRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmPolygon;
}());

//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline-point.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agm/core/directives/polyline-point.js ***!
  \*************************************************************/
/*! exports provided: AgmPolylinePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return AgmPolylinePoint; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var AgmPolylinePoint = /** @class */ (function () {
    function AgmPolylinePoint() {
        /**
           * This event emitter gets emitted when the position of the point changed.
           */
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    AgmPolylinePoint.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'agm-polyline-point' },] },
    ];
    /** @nocollapse */
    AgmPolylinePoint.ctorParameters = function () { return []; };
    AgmPolylinePoint.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "positionChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmPolylinePoint;
}());

//# sourceMappingURL=polyline-point.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/directives/polyline.js ***!
  \*******************************************************/
/*! exports provided: AgmPolyline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return AgmPolyline; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _polyline_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");



var polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmPolyline = /** @class */ (function () {
    function AgmPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
           * Indicates whether this Polyline handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this shape over the map. The geodesic property defines the
           * mode of dragging. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this shape by dragging the control points shown at the
           * vertices and on each segment. Defaults to false.
           */
        this.editable = false;
        /**
           * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
           * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
           * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */
        this.geodesic = false;
        /**
           * Whether this polyline is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the DOM click event is fired on the Polyline.
           */
        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM dblclick event is fired on the Polyline.
           */
        this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the polyline.
           */
        this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the polyline.
           */
        this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the polyline.
           */
        this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the Polyline.
           */
        this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the Polyline.
           */
        this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polyline mouseout.
           */
        this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on Polyline mouseover.
           */
        this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired whe the DOM mouseup event is fired on the Polyline
           */
        this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This even is fired when the Polyline is right-clicked on.
           */
        this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.ngAfterContentInit = /** @internal */
    function () {
        var _this = this;
        if (this.points.length) {
            this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var s = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this);
    };
    AgmPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    AgmPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype._getPoints = /** @internal */
    function () {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.ngOnDestroy = /** @internal */
    function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmPolyline._polylineOptionsAttributes = [
        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
        'zIndex'
    ];
    AgmPolyline.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-polyline'
                },] },
    ];
    /** @nocollapse */
    AgmPolyline.ctorParameters = function () { return [
        { type: _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_1__["PolylineManager"], },
    ]; };
    AgmPolyline.propDecorators = {
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['polylineDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "geodesic": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "lineClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDrag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineDragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineMouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "lineRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "points": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_polyline_point__WEBPACK_IMPORTED_MODULE_2__["AgmPolylinePoint"],] },],
    };
    return AgmPolyline;
}());

//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/rectangle.js":
/*!********************************************************!*\
  !*** ./node_modules/@agm/core/directives/rectangle.js ***!
  \********************************************************/
/*! exports provided: AgmRectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return AgmRectangle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");


var AgmRectangle = /** @class */ (function () {
    function AgmRectangle(_manager) {
        this._manager = _manager;
        /**
           * Indicates whether this Rectangle handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this rectangle over the map. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this rectangle by dragging the control points shown at
           * the center and around the circumference of the rectangle. Defaults to false.
           */
        this.editable = false;
        /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */
        this.strokePosition = 'CENTER';
        /**
           * The stroke width in pixels.
           */
        this.strokeWeight = 0;
        /**
           * Whether this rectangle is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the rectangle's is changed.
           */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */
        this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */
        this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the rectangle.
           */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the rectangle.
           */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the rectangle.
           */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the rectangle.
           */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the rectangle.
           */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on rectangle mouseout.
           */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired on rectangle mouseover.
           */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the DOM mouseup event is fired on the rectangle.
           */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the rectangle is right-clicked on.
           */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnInit = /** @internal */
    function () {
        this._manager.addRectangle(this);
        this._rectangleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._rectangleAddedToManager) {
            return;
        }
        if (changes['north'] ||
            changes['east'] ||
            changes['south'] ||
            changes['west']) {
            this._manager.setBounds(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        this._updateRectangleOptionsChanges(changes);
    };
    AgmRectangle.prototype._updateRectangleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmRectangle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
        });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmRectangle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('bounds_changed', this.boundsChange);
        events.set('click', this.rectangleClick);
        events.set('dblclick', this.rectangleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager
                .createEventObservable(eventName, _this)
                .subscribe(function (value) {
                switch (eventName) {
                    case 'bounds_changed':
                        _this._manager.getBounds(_this).then(function (bounds) {
                            return eventEmitter.emit({
                                north: bounds.getNorthEast().lat(),
                                east: bounds.getNorthEast().lng(),
                                south: bounds.getSouthWest().lat(),
                                west: bounds.getSouthWest().lng()
                            });
                        });
                        break;
                    default:
                        eventEmitter.emit({
                            coords: { lat: value.latLng.lat(), lng: value.latLng.lng() }
                        });
                }
            }));
        });
    };
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnDestroy = /** @internal */
    function () {
        this._eventSubscriptions.forEach(function (s) {
            s.unsubscribe();
        });
        this._eventSubscriptions = null;
        this._manager.removeRectangle(this);
    };
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    /**
       * Gets the LatLngBounds of this Rectangle.
       */
    AgmRectangle.prototype.getBounds = /**
       * Gets the LatLngBounds of this Rectangle.
       */
    function () {
        return this._manager.getBounds(this);
    };
    AgmRectangle._mapOptions = [
        'fillColor',
        'fillOpacity',
        'strokeColor',
        'strokeOpacity',
        'strokePosition',
        'strokeWeight',
        'visible',
        'zIndex',
        'clickable'
    ];
    AgmRectangle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-rectangle'
                },] },
    ];
    /** @nocollapse */
    AgmRectangle.ctorParameters = function () { return [
        { type: _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_1__["RectangleManager"], },
    ]; };
    AgmRectangle.propDecorators = {
        "north": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "east": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "south": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "west": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['rectangleDraggable',] },],
        "editable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fillOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeOpacity": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokePosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "strokeWeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "visible": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "boundsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rectangleClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rectangleDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "drag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "dragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "rightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmRectangle;
}());

//# sourceMappingURL=rectangle.js.map

/***/ }),

/***/ "./node_modules/@agm/core/index.js":
/*!*****************************************!*\
  !*** ./node_modules/@agm/core/index.js ***!
  \*****************************************/
/*! exports provided: AgmCoreModule, AgmMap, AgmCircle, AgmRectangle, AgmInfoWindow, AgmKmlLayer, AgmDataLayer, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmFitBounds, GoogleMapsAPIWrapper, CircleManager, RectangleManager, InfoWindowManager, MarkerManager, PolygonManager, PolylineManager, KmlLayerManager, DataLayerManager, GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader, MapsAPILoader, NoOpMapsAPILoader, FitBoundsAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ "./node_modules/@agm/core/directives.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmCircle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmRectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmInfoWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmKmlLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmDataLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolygon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolyline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolylinePoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmFitBounds"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./node_modules/@agm/core/services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["CircleManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["RectangleManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["MarkerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["PolygonManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["PolylineManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["KmlLayerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["DataLayerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsScriptProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LAZY_MAPS_API_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LazyMapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["NoOpMapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["FitBoundsAccessor"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.module */ "./node_modules/@agm/core/core.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services.js":
/*!********************************************!*\
  !*** ./node_modules/@agm/core/services.js ***!
  \********************************************/
/*! exports provided: GoogleMapsAPIWrapper, CircleManager, RectangleManager, InfoWindowManager, MarkerManager, PolygonManager, PolylineManager, KmlLayerManager, DataLayerManager, GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader, MapsAPILoader, NoOpMapsAPILoader, FitBoundsAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_0__["GoogleMapsAPIWrapper"]; });

/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__["CircleManager"]; });

/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_2__["RectangleManager"]; });

/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__["InfoWindowManager"]; });

/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__["MarkerManager"]; });

/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__["PolygonManager"]; });

/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__["PolylineManager"]; });

/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__["KmlLayerManager"]; });

/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__["DataLayerManager"]; });

/* harmony import */ var _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/maps-api-loader/lazy-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsScriptProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["LAZY_MAPS_API_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["LazyMapsAPILoader"]; });

/* harmony import */ var _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__["MapsAPILoader"]; });

/* harmony import */ var _services_maps_api_loader_noop_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/maps-api-loader/noop-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return _services_maps_api_loader_noop_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["NoOpMapsAPILoader"]; });

/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return _services_fit_bounds__WEBPACK_IMPORTED_MODULE_12__["FitBoundsAccessor"]; });














//# sourceMappingURL=services.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/fit-bounds.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/services/fit-bounds.js ***!
  \*******************************************************/
/*! exports provided: FitBoundsAccessor, FitBoundsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsService", function() { return FitBoundsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");




/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
var /**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
FitBoundsAccessor = /** @class */ (function () {
    function FitBoundsAccessor() {
    }
    return FitBoundsAccessor;
}());
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */

/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
var FitBoundsService = /** @class */ (function () {
    function FitBoundsService(loader) {
        var _this = this;
        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function () { return _this._includeInBounds$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (time) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, time); }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (includeInBounds) { return _this._generateBounds(includeInBounds); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    FitBoundsService.prototype._generateBounds = function (includeInBounds) {
        var bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(function (b) { return bounds.extend(b); });
        return bounds;
    };
    FitBoundsService.prototype.addToBounds = function (latLng) {
        var id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        var map = this._includeInBounds$.value;
        map.set(id, latLng);
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.removeFromBounds = function (latLng) {
        var map = this._includeInBounds$.value;
        map.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.changeFitBoundsChangeSampleTime = function (timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    };
    FitBoundsService.prototype.getBounds$ = function () {
        return this.bounds$;
    };
    FitBoundsService.prototype._createIdentifier = function (latLng) {
        return latLng.lat + "+" + latLng.lng;
    };
    FitBoundsService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FitBoundsService.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], },
    ]; };
    return FitBoundsService;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/google-maps-api-wrapper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/google-maps-api-wrapper.js ***!
  \********************************************************************/
/*! exports provided: GoogleMapsAPIWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = /** @class */ (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);
                _this._mapResolver(map);
                return;
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    /**
       * Creates a google map marker with the map context
       */
    GoogleMapsAPIWrapper.prototype.createMarker = /**
       * Creates a google map marker with the map context
       */
    function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    /**
       * Creates a google.map.Circle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createCircle = /**
       * Creates a google.map.Circle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    /**
       * Creates a google.map.Rectangle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createRectangle = /**
       * Creates a google.map.Rectangle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Rectangle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    /**
       * Creates a new google.map.Data layer for the current map
       */
    GoogleMapsAPIWrapper.prototype.createDataLayer = /**
       * Creates a new google.map.Data layer for the current map
       */
    function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    /**
       * Determines if given coordinates are insite a Polygon path.
       */
    GoogleMapsAPIWrapper.prototype.containsLocation = /**
       * Determines if given coordinates are insite a Polygon path.
       */
    function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
        this._map.then(function (map) {
            google.maps.event.clearInstanceListeners(map);
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
        return this._map.then(function (map) { return map.getMapTypeId(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    GoogleMapsAPIWrapper.prototype.getNativeMap = /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    /**
       * Triggers the given event name on the map instance.
       */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = /**
       * Triggers the given event name on the map instance.
       */
    function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    GoogleMapsAPIWrapper.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return GoogleMapsAPIWrapper;
}());

//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/circle-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/circle-manager.js ***!
  \********************************************************************/
/*! exports provided: CircleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var CircleManager = /** @class */ (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    /**
       * Removes the given circle from the map.
       */
    CircleManager.prototype.removeCircle = /**
       * Removes the given circle from the map.
       */
    function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CircleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return CircleManager;
}());

//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/data-layer-manager.js":
/*!************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/data-layer-manager.js ***!
  \************************************************************************/
/*! exports provided: DataLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = /** @class */ (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    /**
       * Adds a new Data Layer to the map.
       */
    DataLayerManager.prototype.addDataLayer = /**
       * Adds a new Data Layer to the map.
       */
    function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    DataLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    DataLayerManager.prototype.getDataFeatures = /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    DataLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    DataLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return DataLayerManager;
}());

//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/info-window-manager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/info-window-manager.js ***!
  \*************************************************************************/
/*! exports provided: InfoWindowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");




var InfoWindowManager = /** @class */ (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
            });
        });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    InfoWindowManager.prototype.createEventObservable = /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    function (eventName, infoWindow) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    InfoWindowManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    InfoWindowManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
    ]; };
    return InfoWindowManager;
}());

//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/kml-layer-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/kml-layer-manager.js ***!
  \***********************************************************************/
/*! exports provided: KmlLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = /** @class */ (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    /**
       * Adds a new KML Layer to the map.
       */
    KmlLayerManager.prototype.addKmlLayer = /**
       * Adds a new KML Layer to the map.
       */
    function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    KmlLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    KmlLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    KmlLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return KmlLayerManager;
}());

//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/marker-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/marker-manager.js ***!
  \********************************************************************/
/*! exports provided: MarkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var MarkerManager = /** @class */ (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.updateAnimation = function (marker) {
        return this._markers.get(marker).then(function (m) {
            if (typeof marker.animation === 'string') {
                m.setAnimation(google.maps.Animation[marker.animation]);
            }
            else {
                m.setAnimation(marker.animation);
            }
        });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
            animation: (typeof marker.animation === 'string') ? google.maps.Animation[marker.animation] : marker.animation
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MarkerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return MarkerManager;
}());

//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polygon-manager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polygon-manager.js ***!
  \*********************************************************************/
/*! exports provided: PolygonManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolygonManager = /** @class */ (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolygonManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolygonManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolygonManager;
}());

//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polyline-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polyline-manager.js ***!
  \**********************************************************************/
/*! exports provided: PolylineManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolylineManager = /** @class */ (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolylineManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolylineManager;
}());

//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/rectangle-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/rectangle-manager.js ***!
  \***********************************************************************/
/*! exports provided: RectangleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return RectangleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var RectangleManager = /** @class */ (function () {
    function RectangleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    RectangleManager.prototype.addRectangle = function (rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex
        }));
    };
    /**
     * Removes the given rectangle from the map.
     */
    /**
       * Removes the given rectangle from the map.
       */
    RectangleManager.prototype.removeRectangle = /**
       * Removes the given rectangle from the map.
       */
    function (rectangle) {
        var _this = this;
        return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);
            _this._rectangles.delete(rectangle);
        });
    };
    RectangleManager.prototype.setOptions = function (rectangle, options) {
        return this._rectangles.get(rectangle).then(function (r) { return r.setOptions(options); });
    };
    RectangleManager.prototype.getBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) { return r.getBounds(); });
    };
    RectangleManager.prototype.setBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            });
        });
    };
    RectangleManager.prototype.setEditable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
        });
    };
    RectangleManager.prototype.setDraggable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
        });
    };
    RectangleManager.prototype.setVisible = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
        });
    };
    RectangleManager.prototype.createEventObservable = function (eventName, rectangle) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var listener = null;
            _this._rectangles.get(rectangle).then(function (r) {
                listener = r.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    RectangleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    RectangleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return RectangleManager;
}());

//# sourceMappingURL=rectangle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js ***!
  \*********************************************************************************/
/*! exports provided: GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return GoogleMapsScriptProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return LazyMapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/browser-globals */ "./node_modules/@agm/core/utils/browser-globals.js");
/* harmony import */ var _maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');
var LazyMapsAPILoader = /** @class */ (function (_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d) {
        if (config === void 0) { config = null; }
        var _this = _super.call(this) || this;
        _this._SCRIPT_ID = 'agmGoogleMapsApiScript';
        _this.callbackName = "agmLazyMapsAPILoader";
        _this._config = config || {};
        _this._windowRef = w;
        _this._documentRef = d;
        return _this;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var window = this._windowRef.getNativeWindow();
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
        }
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        // this can happen in HMR situations or Stackblitz.io editors.
        var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
        if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);
            return this._scriptLoadingPromise;
        }
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = this._SCRIPT_ID;
        script.src = this._getScriptSrc(this.callbackName);
        this._assignScriptLoadingPromise(script);
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._assignScriptLoadingPromise = function (scriptElem) {
        var _this = this;
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._windowRef.getNativeWindow()[_this.callbackName] = function () {
                resolve();
            };
            scriptElem.onerror = function (error) {
                reject(error);
            };
        });
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        var queryParams = {
            v: this._config.apiVersion || '3',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) {
            return entry.key + "=" + entry.value;
        })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    LazyMapsAPILoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    LazyMapsAPILoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAZY_MAPS_API_CONFIG,] },] },
        { type: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__["WindowRef"], },
        { type: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__["DocumentRef"], },
    ]; };
    return LazyMapsAPILoader;
}(_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]));

//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js ***!
  \****************************************************************************/
/*! exports provided: MapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var MapsAPILoader = /** @class */ (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return MapsAPILoader;
}());

//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js ***!
  \*********************************************************************************/
/*! exports provided: NoOpMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return NoOpMapsAPILoader; });
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var /**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
NoOpMapsAPILoader = /** @class */ (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    return NoOpMapsAPILoader;
}());
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */

//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/utils/browser-globals.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/utils/browser-globals.js ***!
  \*********************************************************/
/*! exports provided: WindowRef, DocumentRef, BROWSER_GLOBALS_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRef", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_GLOBALS_PROVIDERS", function() { return BROWSER_GLOBALS_PROVIDERS; });
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    WindowRef.prototype.getNativeWindow = function () { return window; };
    return WindowRef;
}());

var DocumentRef = /** @class */ (function () {
    function DocumentRef() {
    }
    DocumentRef.prototype.getNativeDocument = function () { return document; };
    return DocumentRef;
}());

var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
//# sourceMappingURL=browser-globals.js.map

/***/ }),

/***/ "./node_modules/agm-direction/fesm5/agm-direction.js":
/*!***********************************************************!*\
  !*** ./node_modules/agm-direction/fesm5/agm-direction.js ***!
  \***********************************************************/
/*! exports provided: AgmDirectionModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDirectionModule", function() { return AgmDirectionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AgmDirection; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AgmDirection = /** @class */ (function () {
    function AgmDirection(gmapsApi) {
        this.gmapsApi = gmapsApi;
        // Options
        this.travelMode = 'DRIVING';
        this.transitOptions = undefined;
        this.drivingOptions = undefined;
        this.waypoints = [];
        this.optimizeWaypoints = true;
        this.provideRouteAlternatives = false;
        this.avoidHighways = false;
        this.avoidTolls = false;
        // Remove or draw direction
        this.visible = true;
        // Direction change event handler
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Direction response for the new request
        this.onResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Send a custom infowindow
        this.sendInfoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Status of Directions Query (google.maps.DirectionsStatus.OVER_QUERY_LIMIT)
        this.status = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Marker drag event handler
        this.originDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.destinationDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.directionsService = undefined;
        this.directionsDisplay = undefined;
        this.waypointsMarker = [];
        // Use for visible flag
        this.isFirstChange = true;
    }
    /**
     * @return {?}
     */
    AgmDirection.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.visible === true) {
            this.directionDraw();
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    AgmDirection.prototype.ngOnChanges = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /**
         * When visible is false then remove the direction layer
         */
        if (!this.visible) {
            try {
                this.removeMarkers();
                this.removeDirections();
            }
            catch (e) { }
        }
        else {
            if (this.isFirstChange) {
                /**
                 * When visible is false at the first time
                 */
                if (typeof this.directionsDisplay === 'undefined') {
                    this.directionDraw();
                }
                this.isFirstChange = false;
                return;
            }
            /**
             * When renderOptions are not first change then reset the display
             */
            if (typeof obj.renderOptions !== 'undefined') {
                if (obj.renderOptions.firstChange === false) {
                    this.removeMarkers();
                    this.removeDirections();
                }
            }
            this.directionDraw();
        }
    };
    /**
     * @return {?}
     */
    AgmDirection.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyMarkers();
        this.removeDirections();
    };
    /**
     * This event is fired when the user creating or updating this direction
     */
    /**
     * This event is fired when the user creating or updating this direction
     * @return {?}
     */
    AgmDirection.prototype.directionDraw = /**
     * This event is fired when the user creating or updating this direction
     * @return {?}
     */
    function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            if (typeof _this.directionsDisplay === 'undefined') {
                _this.directionsDisplay = new google.maps.DirectionsRenderer(_this.renderOptions);
                _this.directionsDisplay.setMap(map);
                _this.directionsDisplay.addListener('directions_changed', function () {
                    _this.onChange.emit(_this.directionsDisplay.getDirections());
                });
            }
            if (typeof _this.directionsService === 'undefined') {
                _this.directionsService = new google.maps.DirectionsService;
            }
            if (typeof _this.panel === 'undefined') {
                _this.directionsDisplay.setPanel(null);
            }
            else {
                _this.directionsDisplay.setPanel(_this.panel);
            }
            // Render exist direction
            if (typeof _this.renderRoute === 'object' && _this.renderRoute !== null) {
                _this.directionsDisplay.setDirections(_this.renderRoute);
                _this.renderRoute = null; // or set undefined, ''
            }
            else {
                // Request new direction
                _this.directionsService.route({
                    origin: _this.origin,
                    destination: _this.destination,
                    travelMode: _this.travelMode,
                    transitOptions: _this.transitOptions,
                    drivingOptions: _this.drivingOptions,
                    waypoints: _this.waypoints,
                    optimizeWaypoints: _this.optimizeWaypoints,
                    provideRouteAlternatives: _this.provideRouteAlternatives,
                    avoidHighways: _this.avoidHighways,
                    avoidTolls: _this.avoidTolls,
                }, function (response, status) {
                    _this.onResponse.emit(response);
                    // Emit Query Status
                    _this.status.emit(status);
                    /**
                     * DirectionsStatus
                     * https://developers.google.com/maps/documentation/javascript/directions#DirectionsStatus
                     */
                    switch (status) {
                        case 'OK':
                            _this.directionsDisplay.setDirections(response);
                            /**
                             * Emit The DirectionsResult Object
                             * https://developers.google.com/maps/documentation/javascript/directions?hl=en#DirectionsResults
                             */
                            // Custom Markers
                            if (typeof _this.markerOptions !== 'undefined') {
                                _this.destroyMarkers();
                                // Set custom markers
                                /** @type {?} */
                                var _route_1 = response.routes[0].legs[0];
                                try {
                                    // Origin Marker
                                    if (typeof _this.markerOptions.origin !== 'undefined') {
                                        _this.markerOptions.origin.map = map;
                                        _this.markerOptions.origin.position = _route_1.start_location;
                                        _this.originMarker = _this.setMarker(map, _this.originMarker, _this.markerOptions.origin, _route_1.start_address);
                                        if (_this.markerOptions.origin.draggable) {
                                            _this.originMarker.addListener('dragend', function () {
                                                _this.origin = _this.originMarker.position;
                                                _this.directionDraw();
                                                _this.originDrag.emit(_this.origin);
                                            });
                                        }
                                    }
                                    // Destination Marker
                                    if (typeof _this.markerOptions.destination !== 'undefined') {
                                        _this.markerOptions.destination.map = map;
                                        _this.markerOptions.destination.position = _route_1.end_location;
                                        _this.destinationMarker = _this.setMarker(map, _this.destinationMarker, _this.markerOptions.destination, _route_1.end_address);
                                        if (_this.markerOptions.destination.draggable) {
                                            _this.destinationMarker.addListener('dragend', function () {
                                                _this.destination = _this.destinationMarker.position;
                                                _this.directionDraw();
                                                _this.destinationDrag.emit(_this.destination);
                                            });
                                        }
                                    }
                                    // Waypoints Marker
                                    if (typeof _this.markerOptions.waypoints !== 'undefined') {
                                        _this.waypoints.forEach(function (waypoint, index) {
                                            // If waypoints are not array then set all the same
                                            if (!Array.isArray(_this.markerOptions.waypoints)) {
                                                _this.markerOptions.waypoints.map = map;
                                                _this.markerOptions.waypoints.position = _route_1.via_waypoints[index];
                                                _this.waypointsMarker.push(_this.setMarker(map, waypoint, _this.markerOptions.waypoints, _route_1.via_waypoints[index]));
                                            }
                                            else {
                                                _this.markerOptions.waypoints[index].map = map;
                                                _this.markerOptions.waypoints[index].position = _route_1.via_waypoints[index];
                                                _this.waypointsMarker.push(_this.setMarker(map, waypoint, _this.markerOptions.waypoints[index], _route_1.via_waypoints[index]));
                                            }
                                        }); // End forEach
                                    }
                                }
                                catch (err) {
                                    console.error('MarkerOptions error.', err);
                                }
                            }
                            break;
                        default:
                            // console.warn(status);
                            break;
                    } // End switch
                });
            }
        });
    };
    /**
     * Custom Origin and Destination Icon
     * @param map map
     * @param marker marker
     * @param markerOpts properties
     * @param content marker's infowindow content
     * @returns new marker
     * @memberof AgmDirection
     */
    /**
     * Custom Origin and Destination Icon
     * \@memberof AgmDirection
     * @param {?} map map
     * @param {?} marker marker
     * @param {?} markerOpts properties
     * @param {?} content marker's infowindow content
     * @return {?} new marker
     */
    AgmDirection.prototype.setMarker = /**
     * Custom Origin and Destination Icon
     * \@memberof AgmDirection
     * @param {?} map map
     * @param {?} marker marker
     * @param {?} markerOpts properties
     * @param {?} content marker's infowindow content
     * @return {?} new marker
     */
    function (map, marker, markerOpts, content) {
        var _this = this;
        if (typeof this.infoWindow === 'undefined') {
            this.infoWindow = new google.maps.InfoWindow({});
            this.sendInfoWindow.emit(this.infoWindow);
        }
        marker = new google.maps.Marker(markerOpts);
        // https://developers.google.com/maps/documentation/javascript/reference/marker?hl=zh-tw#MarkerOptions.clickable
        if (marker.clickable) {
            marker.addListener('click', function () {
                /** @type {?} */
                var infowindoContent = typeof markerOpts.infoWindow === 'undefined' ? content : markerOpts.infoWindow;
                _this.infoWindow.setContent(infowindoContent);
                _this.infoWindow.open(map, marker);
            });
        }
        return marker;
    };
    /**
     * This event is fired when remove markers
     */
    /**
     * This event is fired when remove markers
     * @return {?}
     */
    AgmDirection.prototype.removeMarkers = /**
     * This event is fired when remove markers
     * @return {?}
     */
    function () {
        if (typeof this.originMarker !== 'undefined') {
            this.originMarker.setMap(null);
        }
        if (typeof this.destinationMarker !== 'undefined') {
            this.destinationMarker.setMap(null);
        }
        this.waypointsMarker.forEach(function (w) {
            if (typeof w !== 'undefined') {
                w.setMap(null);
            }
        });
    };
    /**
     * This event is fired when remove directions
     */
    /**
     * This event is fired when remove directions
     * @return {?}
     */
    AgmDirection.prototype.removeDirections = /**
     * This event is fired when remove directions
     * @return {?}
     */
    function () {
        if (this.directionsDisplay !== undefined) {
            this.directionsDisplay.setPanel(null);
            this.directionsDisplay.setMap(null);
            this.directionsDisplay = undefined;
        }
    };
    /**
     * This event is fired when destroy markers
     */
    /**
     * This event is fired when destroy markers
     * @return {?}
     */
    AgmDirection.prototype.destroyMarkers = /**
     * This event is fired when destroy markers
     * @return {?}
     */
    function () {
        // Remove origin markers
        try {
            if (typeof this.originMarker !== 'undefined') {
                google.maps.event.clearListeners(this.originMarker, 'click');
                if (this.markerOptions.origin.draggable) {
                    google.maps.event.clearListeners(this.originMarker, 'dragend');
                }
            }
            if (typeof this.destinationMarker !== 'undefined') {
                google.maps.event.clearListeners(this.destinationMarker, 'click');
                if (this.markerOptions.origin.draggable) {
                    google.maps.event.clearListeners(this.destinationMarker, 'dragend');
                }
            }
            this.waypointsMarker.forEach(function (w) {
                if (typeof w !== 'undefined') {
                    google.maps.event.clearListeners(w, 'click');
                }
            });
            this.removeMarkers();
        }
        catch (err) {
            console.error('Can not reset custom marker.', err);
        }
    };
    AgmDirection.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'agm-direction',
                },] }
    ];
    /** @nocollapse */
    AgmDirection.ctorParameters = function () { return [
        { type: _agm_core__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"] }
    ]; };
    AgmDirection.propDecorators = {
        origin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        destination: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        travelMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        transitOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        drivingOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        waypoints: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        optimizeWaypoints: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        provideRouteAlternatives: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        avoidHighways: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        avoidTolls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        renderOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        markerOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        infoWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        renderRoute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onResponse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        sendInfoWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        status: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        originDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        destinationDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return AgmDirection;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AgmDirectionModule = /** @class */ (function () {
    function AgmDirectionModule() {
    }
    /**
     * @return {?}
     */
    AgmDirectionModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AgmDirectionModule,
        };
    };
    AgmDirectionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [
                        AgmDirection,
                    ],
                    exports: [
                        AgmDirection,
                    ]
                },] }
    ];
    return AgmDirectionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=agm-direction.js.map


/***/ }),

/***/ "./src/app/modules/transportation/routing/add-transport-schedules/add-transport-schedules.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/add-transport-schedules/add-transport-schedules.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-sm-40\">\n  <div class=\"mat-elevation-z3 simple-table-container radius-t-20\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"p-20 border-bottom\">\n      <div class=\"font-size-18 text-uppercase\" translate>New Transportation Schedule</div>\n      <div>\n        <button mat-raised-button color=\"primary\" type='button' (click)=\"onAction(true)\"\n          class=\"mr-4 text-uppercase\">{{'Back' | translate}}</button>\n        <button mat-button type='button' (click)=\"getHelpText('Schedules')\">\n          <mat-icon class=\"grey-600-fg\">info</mat-icon>\n        </button>\n      </div>\n    </div>\n    <form [formGroup]=\"scheduleForm\" #scheduleform=\"ngForm\" class=\"px-28 pt-28\">\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n          <mat-label translate #scheduleName>Schedule Name</mat-label>\n          <input matInput (blur)=\"trimTextBoxSpaces('scheduleForm','name')\" formControlName=\"name\" required autofocus id=\"focusField\">\n          <mat-error>\n            <app-validation [labelName]='scheduleName.innerText' [validationControl]=\"scheduleForm.controls.name\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\"\n          class=\"pl-sm-16\">\n          <mat-label translate #typeId>Type</mat-label>\n          <mat-select required formControlName=\"inboundOrOutbound\" (selectionChange)=\"onTypeChange($event)\">\n            <mat-option *ngFor=\"let type of routeTypeList\" [value]=\"type.code\">\n              {{ type.name }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='typeId.innerText' [validationControl]=\"scheduleForm.controls.inboundOrOutbound\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n\n        <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\" class=\"formfield-pb-0 pl-sm-16\">\n          <app-custom-timepicker [label]=\"'Start Time'\" appearance=\"outline\" formControlName=\"startTime\"\n            [is24HoursFormat]=\"true\" [showLabel]=\"true\" [isRequired]=\"true\" [errorClass]=\"'pt-20'\" [requiredValidator]=true></app-custom-timepicker>\n          <!-- <mat-error *ngIf=\"scheduleForm.controls.startTime.dirty\">\n            <app-validation [labelName]=\"'Start Time'\" [validationControl]=\"scheduleForm.controls.startTime\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error> -->\n        </div>\n        <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\" class=\"formfield-pb-0 pl-sm-16\">\n          <app-custom-timepicker [label]=\"'End Time'\" appearance=\"outline\" formControlName=\"endTime\"\n            [is24HoursFormat]=\"true\" [showLabel]=\"true\" timeValidator=true [errorClass]=\"'pt-20'\" ngDefaultControl></app-custom-timepicker>\n          <!-- <mat-error *ngIf=\"scheduleForm.controls.endTime.dirty\">\n            <app-validation [labelName]=\"'End Time'\" [validationControl]=\"scheduleForm.controls.endTime\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error> -->\n        </div>\n      </div>\n      <div *ngIf=\"!isShowRoutesForm && !routeListForm.value?.routesList?.length\" fxLayout=\"row\" class=\"py-20\">\n        <button mat-raised-button color=\"accent\" class=\"text-uppercase\" (click)=\"isShowRoutesForm = true\" translate><span>Add Routes</span></button>\n      </div>\n    </form>\n    <form *ngIf=\"isShowRoutesForm || routeListForm.value?.routesList?.length\" [formGroup]=\"routeSelectionForm\" #form=\"ngForm\" fxLayout=\"row\" class=\"px-28 pt-12\">\n      <div (click)=\"onClickForm()\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n          <mat-label translate #routeId>Route Name</mat-label>\n          <mat-select (selectionChange)=\"onRouteChange($event)\" required formControlName=\"transportRouteId\">\n            <mat-option [disabled]=\"route.disable\" *ngFor=\"let route of routesList\" [value]=\"route.id\">\n              {{route.name}}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='routeId.innerText'\n              [validationControl]=\"routeSelectionForm.controls.transportRouteId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\"\n          class=\"pl-sm-16\">\n          <mat-label translate #vehicleId>Vehicle</mat-label>\n          <mat-select formControlName=\"vehicleId\" required>\n            <mat-option [disabled]=\"vehicle.disable\" *ngFor=\"let vehicle of vehiclesList\" [value]=\"vehicle.id\">\n              {{vehicle.name}}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='vehicleId.innerText'\n              [validationControl]=\"routeSelectionForm.controls.vehicleId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"22\" class=\"pl-sm-16\">\n          <mat-label translate #driverId>Driver</mat-label>\n          <mat-select formControlName=\"driverStaffId\" required>\n            <mat-option [disabled]=\"driver.disable\" *ngFor=\"let driver of driversList\" [value]=\"driver.id\">\n              {{driver.name}}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='driverId.innerText'\n              [validationControl]=\"routeSelectionForm.controls.driverStaffId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\"\n          class=\"pl-sm-16\">\n          <mat-label translate #assistantId>Assistant</mat-label>\n          <mat-select formControlName=\"assistantStaffId\" required>\n            <mat-option [disabled]=\"driverAssistant.disable\" *ngFor=\"let driverAssistant of driversAssistantsList\"\n              [value]=\"driverAssistant.id\">\n              {{driverAssistant.name}}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='assistantId.innerText'\n              [validationControl]=\"routeSelectionForm.controls.assistantStaffId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <div fxLayout=\"column\" class=\"mt-12 pl-sm-16\">\n          <button class mat-raised-button (click)=\"onSelectRoute()\" type=\"submit\" color=\"accent\">\n            {{'Select' | translate}}\n          </button>\n        </div>\n      </div>\n    </form>\n    <div class=\"simple-table-container\" fxLayout=\"column\" *ngIf=\"routeListForm.value?.routesList?.length\">\n      <div class=\"font-size-20 p-20 border-bottom\" translate>Selected Routes</div>\n      <table class=\"simple\">\n        <thead>\n          <tr>\n            <th translate>Route No</th>\n            <th translate>Route Name</th>\n            <th translate>Route Description</th>\n            <th translate>Vehicle</th>\n            <th translate>Driver</th>\n            <th translate>Assistant</th>\n            <th translate>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let route of routeListForm.get('routesList')?.controls; let i = index\">\n            <td><span class=\"p-4 \"> {{route.value.routeNumber}} </span>\n            </td>\n            <td><span class=\"p-4 text-bold\"> {{getLabelById('routesList', route.value.transportRouteId)}} </span>\n            </td>\n            <td>\n              <p>{{route.value.routeDescription}}</p>\n            </td>\n            <td>\n              <p> {{getLabelById('vehiclesList', route.value.vehicleId)}} </p>\n            </td>\n            <td>\n              <p> {{getLabelById('driversList', route.value.driverStaffId)}} </p>\n            </td>\n            <td>\n              <p>{{getLabelById('driversAssistantsList', route.value.assistantStaffId)}} </p>\n            </td>\n            <td> <button mat-icon-button type=\"button\">\n                <mat-icon class=\"red-300-fg\" (click)=\"removeRoute(route,i)\">delete</mat-icon>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"px-24 py-16\">\n      <button (click)=\"onAction(true)\" mat-raised-button type=\"button\" class=\"text-uppercase mr-12\">\n        {{'cancel' | translate}}</button>\n      <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\" (click)=\"onAction()\">\n        {{(updateRouteId ? 'update' : 'submit') | translate}}\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/transportation/routing/add-transport-schedules/add-transport-schedules.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/add-transport-schedules/add-transport-schedules.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vcm91dGluZy9hZGQtdHJhbnNwb3J0LXNjaGVkdWxlcy9hZGQtdHJhbnNwb3J0LXNjaGVkdWxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/transportation/routing/add-transport-schedules/add-transport-schedules.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/add-transport-schedules/add-transport-schedules.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AddTransportSchedulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTransportSchedulesComponent", function() { return AddTransportSchedulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_shared_custom_timepicker_custom_timepicker_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/custom-timepicker/custom-timepicker.validators */ "./src/app/shared/custom-timepicker/custom-timepicker.validators.ts");
/* harmony import */ var app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/Transport/routing.service */ "./src/app/service/Transport/routing.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_Transport_schedule_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/Transport/schedule.service */ "./src/app/service/Transport/schedule.service.ts");
/* harmony import */ var app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/class-schedules/class-time-table.service */ "./src/app/service/class-schedules/class-time-table.service.ts");
/* harmony import */ var app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/service/staff/staffCommon.service */ "./src/app/service/staff/staffCommon.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");














var AddTransportSchedulesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AddTransportSchedulesComponent, _super);
    function AddTransportSchedulesComponent(routingService, _formBuilder, classTimetableService, staffCommonService, scheduleService, dialogRef, commonService, router, route, snackBar) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this._formBuilder = _formBuilder;
        _this.classTimetableService = classTimetableService;
        _this.staffCommonService = staffCommonService;
        _this.scheduleService = scheduleService;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.router = router;
        _this.route = route;
        _this.snackBar = snackBar;
        _this.currentComponent = 'AddTransportSchedulesComponent';
        _this.rows = [];
        _this.routeTypeList = [];
        _this.routesList = [];
        _this.driversList = [];
        _this.vehiclesList = [];
        _this.driversAssistantsList = [];
        _this.tableName = 'Routes Covered in this schedule';
        _this.validate = true;
        _this.schoolBoardsList = [];
        _this.classes = [];
        _this.activeColumn = '';
        _this.sortDirection = '';
        _this.staffList = [];
        _this.isOnEdit = false;
        _this.teachersData = [];
        _this.schoolHasBoard = false;
        _this.padding = false;
        _this.firstClick = true;
        _this.isShowRoutesForm = false;
        return _this;
    }
    AddTransportSchedulesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setScheduleForm();
        this.getRouteTypes();
        this.getStaff();
        this.getStaff(true);
        this.getVehicles();
        this.initializeFilterView();
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.updateRouteId = params.id;
                // this.isShowRoutesForm = true;
                _this.getTransportScheduleDetails();
            }
            else {
                _this.focus();
            }
        });
    };
    AddTransportSchedulesComponent.prototype.focus = function () {
        if (document.getElementById('focusField')) {
            document.getElementById('focusField').focus();
        }
    };
    AddTransportSchedulesComponent.prototype.getTransportScheduleDetails = function () {
        var _this = this;
        this.scheduleService.transportSchedulesDetails(this.updateRouteId)
            .subscribe(function (res) {
            _this.setTransportScheduleDetails(res.transportSchedulesDataView);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    AddTransportSchedulesComponent.prototype.setTransportScheduleDetails = function (response) {
        var _this = this;
        this.scheduleForm.patchValue(response);
        response.transportScheduleRoutesDataView.forEach(function (element, i) {
            _this.routeListForm.controls['routesList'].push(_this.setRouteListArray(element));
        });
        this.getRoutes();
        this.focus();
    };
    AddTransportSchedulesComponent.prototype.getRoutes = function () {
        var _this = this;
        var id = this.routeTypeList.find(function (e) {
            return e.code === _this.scheduleForm.value.inboundOrOutbound;
        }).id;
        this.scheduleService.fetchTransportRoutes(id)
            .subscribe(function (res) { return _this.setRoutes(res); });
    };
    AddTransportSchedulesComponent.prototype.setRoutes = function (response) {
        var _this = this;
        if (response) {
            this.routesList = response.transportScheduleDetailsView;
        }
        this.routeListForm.value.routesList.map(function (e, i) {
            _this.actionOptions(true, i, true);
        });
    };
    AddTransportSchedulesComponent.prototype.getStaff = function (assistant) {
        var _this = this;
        if (assistant === void 0) { assistant = false; }
        var code;
        if (assistant) {
            code = app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DRIVER_ASSISTANT_STAFF_CODE;
        }
        else {
            code = app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DRIVER_STAFF_CODE;
        }
        this.staffCommonService.fetchStaffs(code)
            .subscribe(function (res) { return _this.setStaffData(res, assistant); });
    };
    AddTransportSchedulesComponent.prototype.getVehicles = function () {
        var _this = this;
        this.scheduleService.fetchVehicle()
            .subscribe(function (res) { return _this.setVehiclesData(res); });
    };
    AddTransportSchedulesComponent.prototype.setVehiclesData = function (response) {
        this.vehiclesList = response.commonViewModel;
    };
    AddTransportSchedulesComponent.prototype.setStaffData = function (response, assistant) {
        if (assistant) {
            this.driversAssistantsList = response;
        }
        else {
            this.driversList = response;
        }
    };
    AddTransportSchedulesComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].PAGESIZE,
            routeName: [],
            routeNumber: [],
            routeTypeId: [],
            routeDescription: [],
        };
    };
    AddTransportSchedulesComponent.prototype.setRouteListArray = function (route) {
        return this._formBuilder.group({
            id: [route.id],
            routeNumber: [route.routeNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            transportRouteId: [route.transportRouteId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            routeDescription: [route.routeDescription, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            vehicleId: [route.vehicleId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            driverStaffId: [route.driverStaffId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            assistantStaffId: [route.assistantStaffId, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    AddTransportSchedulesComponent.prototype.onTypeChange = function ($event) {
        this.routeListForm.setControl('routesList', this._formBuilder.array([]));
        this.routesList = [];
        this.getRoutes();
        this.resetAllDropDowns();
    };
    AddTransportSchedulesComponent.prototype.onRouteChange = function ($event) {
        var route = this.routesList.find(function (e) {
            return e.id === $event.value;
        });
        this.routeSelectionForm.patchValue({ routeNumber: route.routeNumber, routeDescription: route.routeDescription });
    };
    AddTransportSchedulesComponent.prototype.getRouteTypes = function () {
        var _this = this;
        this.routingService.routeTypes()
            .subscribe(function (res) { return _this.routeTypeList = res; });
    };
    AddTransportSchedulesComponent.prototype.removeRoute = function (route, i) {
        this.actionOptions(false, route);
        this.routeListForm.controls['routesList'].removeAt(i);
    };
    AddTransportSchedulesComponent.prototype.setScheduleForm = function () {
        this.scheduleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]),
            inboundOrOutbound: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            startTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [app_shared_custom_timepicker_custom_timepicker_validators__WEBPACK_IMPORTED_MODULE_4__["TimeValidator"].validateTimeRequired]),
            endTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [app_shared_custom_timepicker_custom_timepicker_validators__WEBPACK_IMPORTED_MODULE_4__["TimeValidator"].validateOnlyTimeRequired])
        });
        this.routeSelectionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            routeNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            routeDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            transportRouteId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            vehicleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            driverStaffId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            assistantStaffId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.routeListForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            routesList: this._formBuilder.array([])
        });
    };
    AddTransportSchedulesComponent.prototype.onSelectRoute = function () {
        var _this = this;
        this.showValidations();
        this.setRoutesValidators();
        if (this.routeSelectionForm.valid && this.scheduleForm.valid) {
            this.routeListForm.controls['routesList'].push(this.setRouteListArray(this.routeSelectionForm.value));
            this.actionOptions();
            setTimeout(function () { return _this.form.resetForm(); }, 0);
        }
    };
    AddTransportSchedulesComponent.prototype.actionOptions = function (disable, routeOnIndex, onEdit) {
        if (disable === void 0) { disable = true; }
        if (routeOnIndex === void 0) { routeOnIndex = null; }
        if (onEdit === void 0) { onEdit = false; }
        var route;
        if (disable) {
            route = !onEdit ? this.routeSelectionForm.value : this.routeListForm.value.routesList[routeOnIndex];
        }
        else {
            route = routeOnIndex.value;
        }
        this.vehiclesList.find(function (e) {
            return e.id === route.vehicleId;
        }).disable = disable;
        this.driversList.find(function (e) {
            return e.id === route.driverStaffId;
        }).disable = disable;
        if (this.driversAssistantsList && this.driversAssistantsList.length) {
            this.driversAssistantsList.find(function (e) {
                return e.id === route.assistantStaffId;
            }).disable = disable;
        }
        this.routesList.find(function (e) {
            return e.id === route.transportRouteId;
        }).disable = disable;
    };
    AddTransportSchedulesComponent.prototype.addRoutes = function () {
    };
    AddTransportSchedulesComponent.prototype.getLabelById = function (arrayName, value) {
        if (value === '' || value === 0) {
            return '';
        }
        var x;
        return (x = this[arrayName] && this[arrayName].find(function (element) { return element.id === value; })) ? (arrayName === 'routesList' ? x.routeName : x.name) : '';
    };
    AddTransportSchedulesComponent.prototype.onAction = function (cancel) {
        var _this = this;
        if (cancel === void 0) { cancel = false; }
        if (!cancel) {
            this.setRoutesValidators();
            if (!this.scheduleForm.valid) {
                this.showValidations();
                return;
            }
            if (this.updateRouteId) {
                this.transportSchedule = this.scheduleForm.value;
                this.setEndTime();
                this.transportSchedule['transportScheduleRoutesUpdateView'] = [];
                this.routeListForm.value.routesList.forEach(function (element) {
                    if (!element.id) {
                        element.id = 0;
                    }
                    _this.transportSchedule['transportScheduleRoutesUpdateView'].push(element);
                });
                this.transportSchedule['id'] = this.updateRouteId;
                this.scheduleService.updateSchedule(this.transportSchedule).subscribe(function (res) { return _this.onPageAction(res); }, function (err) { return _this.errorResponse(err); });
            }
            else {
                this.transportSchedule = this.scheduleForm.value;
                this.setEndTime();
                this.transportSchedule.transportScheduleRoutesView = this.routeListForm.value.routesList;
                this.scheduleService.createSchedule(this.transportSchedule)
                    .subscribe(function (res) { return _this.onPageAction(res); }, function (err) { return _this.errorResponse(err); });
            }
        }
        else {
            this.clearRouteValidators();
            this.redirectPage();
        }
    };
    AddTransportSchedulesComponent.prototype.onPageAction = function (response) {
        this.updateRouteId = null;
        this.redirectPage();
        this.openSnackBar(response.messages.ResultMessage);
    };
    AddTransportSchedulesComponent.prototype.redirectPage = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_13__["RouteConfig"]._Transport_Schedule]);
    };
    AddTransportSchedulesComponent.prototype.resetAllDropDowns = function () {
        this.vehiclesList.map(function (e) {
            e.disable = false;
        });
        this.driversList.map(function (e) {
            e.disable = false;
        });
        this.driversAssistantsList.map(function (e) {
            e.disable = false;
        });
        this.routesList.map(function (e) {
            e.disable = true;
        });
    };
    AddTransportSchedulesComponent.prototype.showValidations = function () {
        this.scheduleform.submitted = true;
        this.scheduleForm.controls.startTime.markAsDirty();
        this.scheduleForm.controls.startTime.updateValueAndValidity();
    };
    AddTransportSchedulesComponent.prototype.setRoutesValidators = function () {
        this.routeSelectionForm.controls.transportRouteId.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.routeSelectionForm.controls.transportRouteId.updateValueAndValidity();
        this.routeSelectionForm.controls.vehicleId.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.routeSelectionForm.controls.vehicleId.updateValueAndValidity();
        this.routeSelectionForm.controls.driverStaffId.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.routeSelectionForm.controls.driverStaffId.updateValueAndValidity();
        this.routeSelectionForm.controls.assistantStaffId.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.routeSelectionForm.controls.assistantStaffId.updateValueAndValidity();
    };
    AddTransportSchedulesComponent.prototype.clearRouteValidators = function () {
        this.routeSelectionForm.controls.transportRouteId.clearValidators();
        this.routeSelectionForm.controls.transportRouteId.updateValueAndValidity();
        this.routeSelectionForm.controls.vehicleId.clearValidators();
        this.routeSelectionForm.controls.vehicleId.updateValueAndValidity();
        this.routeSelectionForm.controls.driverStaffId.clearValidators();
        this.routeSelectionForm.controls.driverStaffId.updateValueAndValidity();
        this.routeSelectionForm.controls.assistantStaffId.clearValidators();
        this.routeSelectionForm.controls.assistantStaffId.updateValueAndValidity();
    };
    AddTransportSchedulesComponent.prototype.setEndTime = function () {
        if (this.scheduleForm.value.endTime) {
            var endTime = this.scheduleForm.value.endTime.trim();
            endTime = endTime.replace(/^([:]*)/g, '');
            this.transportSchedule.endTime = endTime;
        }
    };
    AddTransportSchedulesComponent.prototype.onClickForm = function () {
        if (this.firstClick) {
            this.firstClick = false;
            this.setRoutes(false);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], AddTransportSchedulesComponent.prototype, "form", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddTransportSchedulesComponent.prototype, "scheduleform", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transportTemplate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddTransportSchedulesComponent.prototype, "transportTemplate", void 0);
    AddTransportSchedulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-transport-schedules',
            template: __webpack_require__(/*! ./add-transport-schedules.component.html */ "./src/app/modules/transportation/routing/add-transport-schedules/add-transport-schedules.component.html"),
            providers: [app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_5__["RoutingService"], app_service_Transport_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ScheduleService"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__["ClassTimetableService"], app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_9__["StaffCommonService"]],
            styles: [__webpack_require__(/*! ./add-transport-schedules.component.scss */ "./src/app/modules/transportation/routing/add-transport-schedules/add-transport-schedules.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_5__["RoutingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], app_service_class_schedules_class_time_table_service__WEBPACK_IMPORTED_MODULE_8__["ClassTimetableService"],
            app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_9__["StaffCommonService"], app_service_Transport_schedule_service__WEBPACK_IMPORTED_MODULE_7__["ScheduleService"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_11__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]])
    ], AddTransportSchedulesComponent);
    return AddTransportSchedulesComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/transportation/routing/directions-map.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/directions-map.directive.ts ***!
  \****************************************************************************/
/*! exports provided: DirectionsMapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsMapDirective", function() { return DirectionsMapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");



var DirectionsMapDirective = /** @class */ (function () {
    // We inject AGM's google maps api wrapper that handles the communication with the Google Maps Javascript
    function DirectionsMapDirective(gmapsApi) {
        this.gmapsApi = gmapsApi;
        this.markers = [];
        this.getDirections = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showDirection = true;
    }
    DirectionsMapDirective.prototype.drawDirectionsRoute = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            if (!_this.directionsRenderer) {
                _this.directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true, preserveViewport: true });
            }
            var directionsRenderer = _this.directionsRenderer;
            if (_this.showDirection) {
                var directionsService = new google.maps.DirectionsService;
                directionsRenderer.setMap(map);
                directionsService.route({
                    origin: _this.getFormatedValues(_this.markers[0]),
                    destination: _this.getFormatedValues(_this.markers[_this.markers.length - 1]),
                    waypoints: _this.getwayPoints(),
                    travelMode: 'DRIVING',
                    transitOptions: { modes: ['BUS'] },
                    unitSystem: google.maps.UnitSystem.METRIC
                }, function (response, status) {
                    if (response) {
                        _this.getDirections.emit(response);
                    }
                    if (status === 'OK') {
                        directionsRenderer.setDirections(response);
                    }
                    else {
                        // console.log('Directions request failed due to ' + status);
                    }
                });
            }
        });
    };
    DirectionsMapDirective.prototype.getFormatedValues = function (point) {
        return {
            lat: point.latitude,
            lng: point.longitude
        };
    };
    DirectionsMapDirective.prototype.getwayPoints = function () {
        var wayPoints = [];
        if (this.markers.length > 2) {
            for (var i = 1; i < this.markers.length - 1; i++) {
                wayPoints.push({
                    location: { lat: this.markers[i].latitude, lng: this.markers[i].longitude },
                    stopover: true
                });
            }
            return wayPoints;
        }
        else {
            return [];
        }
    };
    DirectionsMapDirective.prototype.ngOnInit = function () {
        if (this.directionsRenderer !== undefined) {
            this.directionsRenderer.setDirections({ routes: [] });
            return;
        }
    };
    DirectionsMapDirective.prototype.ngOnChanges = function (changes) {
        if (changes.markers.currentValue && changes.markers.currentValue.length > 1) {
            this.drawDirectionsRoute();
        }
        else {
            if (this.directionsRenderer !== undefined) {
                this.directionsRenderer.setDirections({ routes: [] });
                return;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DirectionsMapDirective.prototype, "markers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DirectionsMapDirective.prototype, "getDirections", void 0);
    DirectionsMapDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDirectionsMap]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"]])
    ], DirectionsMapDirective);
    return DirectionsMapDirective;
}());



/***/ }),

/***/ "./src/app/modules/transportation/routing/manage-student-transport/manage-student-transport.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/manage-student-transport/manage-student-transport.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content px-sm-40 py-sm-20\">\n  <div class=\"mat-elevation-z2 simple-table-container radius-t-20 mb-20\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-20\">\n      <div fxlayout=\"column\" fxLayoutAlign=\"start center\" fxFlex=\"100\">\n        <div class=\"h3 secondary-text\" translate>STUDENT INFORMATION</div>\n      </div>\n      <button mat-raised-button color=\"primary\" class=\"text-uppercase\" translate (click)=\"onCancel()\">{{'Back' | translate}}</button>\n      <button mat-button (click)=\"getHelpText('Student Transport')\">\n        <mat-icon class=\"grey-600-fg\">info</mat-icon>\n      </button>\n    </div>\n    <mat-divider></mat-divider>\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"ml-24 py-20\">\n      <div fxLayout=\"column\" fxFlex=\"50\">\n        <div class=\"font-size-18 primary-900-fg-custom mb-16\">{{getFormatedName(studentInfo?.studentDetails)}}</div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>mobilenumber</div> : <div class=\"ml-24\">\n            {{studentInfo?.studentDetails?.mobileTel ? studentInfo?.studentDetails?.mobileTel : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>email</div> : <div class=\"ml-24\">\n            {{studentInfo?.studentDetails?.email1 ? studentInfo?.studentDetails?.email1 : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>Class</div> : <div class=\"ml-24\">\n            {{studentInfo?.className ? studentInfo?.className : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>status</div> : <div class=\"ml-24\">\n            {{ studentInfo?.statusName ? studentInfo?.statusName  : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>dateofbirth</div> : <div class=\"ml-24\">\n            {{ studentInfo?.studentDetails.dateOfBirth ? getFormattedDateBySchoolDateFormat(studentInfo.studentDetails.dateOfBirth)  : \"-\"}}</div>\n        </div>\n      </div>\n\n\n      <div fxLayout=\"column\" fxFlex=\"50\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>admissionNumber</div> : <div class=\"ml-24\">\n            {{studentInfo?.admissionNumber ? studentInfo?.admissionNumber : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>Father Name</div> : <div class=\"ml-24\">\n            {{studentInfo?.fatherDetails ? getFormatedName(studentInfo?.fatherDetails) : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>Mother Name</div> : <div class=\"ml-24\">\n            {{studentInfo?.motherDetails ? getFormatedName(studentInfo?.motherDetails) : \"-\"}}</div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div class=\"w-140 py-4 primary-300-fg\" translate>Guardian Name</div> : <div class=\"ml-24\">\n            {{studentInfo?.guardianDetails ? getFormatedName(studentInfo?.guardianDetails) : \"-\"}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mat-elevation-z2 simple-table-container radius-t-20 my-20\">\n    <form [formGroup]=\"studentTransport\" #manualForm=\"ngForm\" class=\"p-24\">\n      <div fxLayout=\"row\" class=\"pt-12\">\n        <div fxLayout=\"column\" fxFlex=\"50\" class=\"pr-20\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label #picUpLocationLabel translate>Requested Pick-up Location</mat-label>\n            <input #picUpLocation formControlName=\"requestedPickupAddress\" matInput\n              (blur)=\"trimTextBoxSpaces('studentTransport','requestedPickupAddress')\">\n            <mat-error>\n              <app-validation [labelName]='picUpLocationLabel.innerText'\n                [validationControl]=\"studentTransport.controls.requestedPickupAddress\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div fxLayout=\"column\" fxFlex=\"50\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label  #dropOffLocationLabel translate>Requested Drop-off Location</mat-label>\n            <input  #dropOffLocation formControlName=\"requestedDropoffAddress\" matInput\n              (blur)=\"trimTextBoxSpaces('studentTransport','requestedDropoffAddress')\">\n            <mat-error>\n              <app-validation [labelName]='dropOffLocationLabel.innerText'\n                [validationControl]=\"studentTransport.controls.requestedDropoffAddress\" [doValidate]=\"validate\">\n              </app-validation>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n    </form>\n  </div>\n\n\n  <div class=\"mat-elevation-z2 simple-table-container radius-t-20 \">\n    <div fxLayout=\"row\" class=\"p-20\" fxLayoutAlign=\"space-between center\">\n        <div class=\"h3 secondary-text\">\n          <strong translate>Route & Schedule Assignment</strong>\n        </div> \n      <div fxLayout=\"row\" *ngIf=\"getTotalDistance()\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\"  *ngIf=\"getTotalDuration()\">\n          <mat-icon class=\"mr-4 grey-600-fg\">access_time</mat-icon>\n          <div fxLayout=\"column\">\n            <span class=\"grey-500-fg\">Estimated Travel Time</span>\n            <span>{{getTotalDuration()}}</span>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"px-24\" *ngIf=\"getTotalDistance()\">\n            <mat-icon class=\"mr-4 grey-600-fg\">place</mat-icon>\n            <div fxLayout=\"column\">\n              <span class=\"grey-500-fg\">Estimated Total Distance</span>\n              <span>{{getTotalDistance()}} km</span>\n            </div>\n          </div>\n      </div>\n    </div>\n \n    <mat-divider></mat-divider>\n      <!-- <div class=\"h5 p-12 secondary-text\">\n        <strong>Pick-up Location</strong>\n      </div>  -->\n      <div class=\"pt-24 px-24 font-size-18\" translate>Pick-up Location</div>\n    <form [formGroup]=\"pickupPoint\" #pickUpForm=\"ngForm\" fxLayout=\"row\">\n      <div fxLayout=\"column\" class=\"px-24\" fxLayout.gt-sm=\"row\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n          <mat-label translate #scheduleId>Schedule</mat-label>\n          <mat-select (selectionChange)=\"clearFormData('schedule');getTransportRoutes($event.value)\"\n            formControlName=\"transportScheduleId\">\n            <mat-option [style.display]=\"schedule.code == 'I' ? 'block': 'none'\" *ngFor=\"let schedule of schedulesList\"\n              [value]=\"schedule.id\">\n              {{schedule.name}}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='scheduleId.innerText'\n              [validationControl]=\"pickupPoint.controls.transportScheduleId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\" class=\"px-sm-20\">\n          <mat-label translate #routeId>Route</mat-label>\n          <mat-select (selectionChange)=\"clearFormData('route')\" formControlName=\"transportRouteId\">\n            <mat-option *ngFor=\"let inbound of inBoundroutesList\" [value]=\"inbound.transportRouteId\">\n              {{inbound.name}}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='routeId.innerText' [validationControl]=\"pickupPoint.controls.transportRouteId\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n          <mat-label #pickUp translate>Pick-up Location</mat-label>\n          <input readonly matInput formControlName=\"pointAddres\"\n            (blur)=\"trimTextBoxSpaces('pickupPoint','pointAddres')\">\n          <mat-error>\n            <app-validation [labelName]='pickUp.innerText' [validationControl]=\"pickupPoint.controls.pointAddres\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <div fxLayout=\"column\" class=\"pt-12 px-20\">\n          <button class mat-raised-button (click)=\"onSelectRoute()\" type=\"submit\" color=\"accent\">\n            {{'Select' | translate}}\n          </button>       \n        </div>\n        <div fxLayout=\"column\" *ngIf=\"pickupPoint.value.transportScheduleId\" fxLayout=\"column\" class=\"pt-12\">\n          <button class mat-raised-button (click)=\"onClear()\" type=\"reset\" color=\"primary\">\n            {{'Clear' | translate}}\n          </button>\n        </div>\n      </div>\n    </form>\n    <div class=\"px-24 font-size-18\" translate>Drop-off Location</div>\n    <form [formGroup]=\"dropoffPoint\" #dropOffForm=\"ngForm\" fxLayout=\"row\">\n      <div fxLayout=\"column\" class=\"px-24\" fxLayout.gt-sm=\"row\" fxFlex=\"100\">\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n          <mat-label translate #scheduleOutId>Schedule</mat-label>\n          <mat-select (selectionChange)=\"clearFormData('schedule',false);getTransportRoutes($event.value, false)\"\n            formControlName=\"transportScheduleId\">\n            <mat-option [style.display]=\"schedule.code == 'O' ? 'block': 'none'\" *ngFor=\"let schedule of schedulesList\"\n              [value]=\"schedule.id\">\n              {{schedule.name}}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='scheduleOutId.innerText'\n              [validationControl]=\"dropoffPoint.controls.transportScheduleId\" [doValidate]=\"validate\">\n            </app-validation>\n            <button *ngIf=\"0\" class mat-raised-button id=\"resetForm\" type=\"reset\" color=\"accent\">\n              {{'reset' | translate}}\n            </button>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\" class=\"px-sm-20\">\n          <mat-label translate #transportRouteId>Route</mat-label>\n          <mat-select (selectionChange)=\"clearFormData('route',false)\" formControlName=\"transportRouteId\">\n            <mat-option *ngFor=\"let outbound of outBoundroutesList\" [value]=\"outbound.transportRouteId\">\n              {{outbound.name}}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]='transportRouteId.innerText'\n              [validationControl]=\"dropoffPoint.controls.transportRouteId\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" fxFlexFill fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\">\n          <mat-label translate #dropOff>Drop-off Location</mat-label>\n          <input readonly matInput formControlName=\"pointAddres\"\n            (blur)=\"trimTextBoxSpaces('dropoffPoint','pointAddres')\">\n          <mat-error>\n            <app-validation [labelName]='dropOff.innerText' [validationControl]=\"dropoffPoint.controls.pointAddres\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <div fxLayout=\"column\" class=\"pt-12 px-20\">\n          <button class mat-raised-button (click)=\"onSelectRoute(false)\" type=\"submit\" color=\"accent\">\n            {{'Select' | translate}}\n          </button>\n        </div>\n        <div *ngIf=\"dropoffPoint.value.transportScheduleId\" fxLayout=\"column\" class=\"pt-12\">\n          <button class mat-raised-button (click)=\"onClear(false)\" type=\"reset\" color=\"primary\">\n            {{'Clear' | translate}}\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"mt-32 pr-32\">\n    <button (click)=\"submitRoute(false)\" mat-raised-button type=\"button\" class=\"text-uppercase mr-12\">{{'cancel' | translate}}</button>\n    <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\" (click)=\"submitRoute(true)\">\n       {{(studentTransportAssignmentInfo ? 'update' : 'submit') | translate}}\n    </button>\n  </div>\n</div>\n<ng-template #popupMap>\n  <app-view-common-route [inBound]=\"inBound\" [requestedPoint]=\"inBound ? requestedPoint.inBound : requestedPoint.outBound\" [selectedPoint]=\"inBound ? pickupPoint.value : dropoffPoint.value\" (onSelectLocation)=\"onSelectFromPopUp($event)\" [routePoints]=\"routePoints\">\n  </app-view-common-route>\n</ng-template>"

/***/ }),

/***/ "./src/app/modules/transportation/routing/manage-student-transport/manage-student-transport.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/manage-student-transport/manage-student-transport.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vcm91dGluZy9tYW5hZ2Utc3R1ZGVudC10cmFuc3BvcnQvbWFuYWdlLXN0dWRlbnQtdHJhbnNwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/transportation/routing/manage-student-transport/manage-student-transport.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/manage-student-transport/manage-student-transport.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ManageStudentTransportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStudentTransportComponent", function() { return ManageStudentTransportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_service_student_transport_student_transport_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/student-transport/student-transport.service */ "./src/app/service/student-transport/student-transport.service.ts");
/* harmony import */ var app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/student-admissions-service/student-admission.service */ "./src/app/service/student-admissions-service/student-admission.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");













var ManageStudentTransportComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ManageStudentTransportComponent, _super);
    function ManageStudentTransportComponent(router, route, dialog, commonService, studentTransportService, dialogRef, studentAdmissionService, snackBar, mapsAPILoader, ngZone, changeDetector, location) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.route = route;
        _this.dialog = dialog;
        _this.commonService = commonService;
        _this.studentTransportService = studentTransportService;
        _this.dialogRef = dialogRef;
        _this.studentAdmissionService = studentAdmissionService;
        _this.snackBar = snackBar;
        _this.mapsAPILoader = mapsAPILoader;
        _this.ngZone = ngZone;
        _this.changeDetector = changeDetector;
        _this.location = location;
        _this.schedulesList = [];
        _this.inBoundroutesList = [];
        _this.outBoundroutesList = [];
        _this.validate = true;
        _this.inBound = true;
        _this.routePointsData = {
            inBound: [],
            outBound: []
        };
        _this.requestedPoint = {
            inBound: null,
            outBound: null
        };
        _this.studetRouteInfo = {
            inBound: null,
            outBound: null
        };
        return _this;
    }
    ManageStudentTransportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSchedules();
        this.studentTransport = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            assigneeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            requestedPickupAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(180)),
            requestedDropoffAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(180)),
            pickupPointId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            dropoffPointId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null)
        });
        this.pickupPoint = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            transportScheduleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            transportRouteId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            pointAddres: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null)
        });
        this.dropoffPoint = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            transportScheduleId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            transportRouteId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            pointAddres: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null)
        });
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.studentId = params.id;
                _this.getStudentDetails(_this.studentId);
                _this.getStudentTrasportAssignmentDetails(_this.studentId);
                _this.studentTransport.controls.assigneeId.setValue(_this.studentId);
            }
        });
        this.studentTransport.controls.requestedPickupAddress.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])()).subscribe(function (val) {
            if (!val) {
                _this.requestedPoint.inBound = null;
            }
        });
        this.studentTransport.controls.requestedDropoffAddress.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])()).subscribe(function (val) {
            if (!val) {
                _this.requestedPoint.outBound = null;
            }
        });
        this.initializeMap();
        this.initializeMap(true);
    };
    ManageStudentTransportComponent.prototype.getStudentDetails = function (id) {
        var _this = this;
        this.studentAdmissionService.studentDetails(id)
            .subscribe(function (res) {
            _this.setStudentDetails(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ManageStudentTransportComponent.prototype.initializeMap = function (pickUp) {
        var _this = this;
        if (pickUp === void 0) { pickUp = false; }
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(pickUp ? _this.picUpLocation.nativeElement : _this.dropOffLocation.nativeElement, {
                types: ['establishment']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    var currentMarker = {
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng(),
                        label: '',
                        draggable: true,
                        name: place.name,
                        pointAddres: place.formatted_address.substring(0, 200),
                        latlng: {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                        }
                    };
                    if (pickUp) {
                        _this.requestedPoint.inBound = currentMarker;
                    }
                    else {
                        _this.requestedPoint.outBound = currentMarker;
                    }
                });
            });
        });
    };
    ManageStudentTransportComponent.prototype.setStudentDetails = function (res) {
        this.studentInfo = res.studentDetailsView;
    };
    ManageStudentTransportComponent.prototype.getStudentTrasportAssignmentDetails = function (id) {
        var _this = this;
        this.studentTransportService.fetchTransportAssignment(id).subscribe(function (res) {
            _this.setStudentTransportDetails(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ManageStudentTransportComponent.prototype.setStudentTransportDetails = function (res) {
        if (res.studentTransportDataView) {
            this.studentTransportAssignmentInfo = res.studentTransportDataView;
            this.studentTransport.patchValue(this.studentTransportAssignmentInfo);
            if (this.studentTransportAssignmentInfo.pickupPoint) {
                if (this.studentTransportAssignmentInfo.pickupPoint.id !== null && this.studentTransportAssignmentInfo.pickupPoint.id !== 0) {
                    this.studentTransport.controls.pickupPointId.patchValue(this.studentTransportAssignmentInfo.pickupPoint.id);
                    this.pickupPoint.patchValue(this.studentTransportAssignmentInfo.pickupPoint);
                    this.getTransportRoutes(this.pickupPoint.value.transportScheduleId);
                    this.onSelectRoute(true, true);
                }
                else {
                    this.studentTransportAssignmentInfo.pickupPoint = null;
                }
            }
            if (this.studentTransportAssignmentInfo.dropoffPoint) {
                if (this.studentTransportAssignmentInfo.dropoffPoint.id !== null && this.studentTransportAssignmentInfo.dropoffPoint.id !== 0) {
                    this.studentTransport.controls.dropoffPointId.patchValue(this.studentTransportAssignmentInfo.dropoffPoint.id);
                    this.dropoffPoint.patchValue(this.studentTransportAssignmentInfo.dropoffPoint);
                    this.getTransportRoutes(this.dropoffPoint.value.transportScheduleId, false);
                    this.onSelectRoute(false, true);
                }
                else {
                    this.studentTransportAssignmentInfo.dropoffPoint = null;
                }
            }
        }
    };
    ManageStudentTransportComponent.prototype.getSchedules = function () {
        var _this = this;
        this.studentTransportService.fetchTransportSchedules()
            .subscribe(function (res) { return _this.setTransportSchedules(res); });
    };
    ManageStudentTransportComponent.prototype.setTransportSchedules = function (res) {
        this.schedulesList = res.typeListViewModels;
    };
    ManageStudentTransportComponent.prototype.getTransportRoutes = function (id, inBound) {
        var _this = this;
        if (inBound === void 0) { inBound = true; }
        this.studentTransportService.fetchTransportRoutes(id)
            .subscribe(function (res) { return _this.setTransportRoutes(res, inBound); });
    };
    ManageStudentTransportComponent.prototype.setTransportRoutes = function (res, inBound) {
        if (inBound === void 0) { inBound = true; }
        if (inBound) {
            this.inBoundroutesList = res.transportScheduleRoutesView;
        }
        else {
            this.outBoundroutesList = res.transportScheduleRoutesView;
        }
    };
    ManageStudentTransportComponent.prototype.clearFormData = function (formField, inBound) {
        if (inBound === void 0) { inBound = true; }
        this[inBound ? 'pickupPoint' : 'dropoffPoint'].patchValue({
            transportRouteId: (formField === 'schedule') ? null : this[inBound ? 'pickupPoint' : 'dropoffPoint'].value.transportRouteId,
            name: null,
            latitude: null,
            longitude: null,
            position: null,
            pointAddres: null,
            id: null
        });
        if (inBound) {
            this.studentTransport.patchValue({ pickupPointId: null });
            this.routePointsData.inBound = [];
        }
        else {
            this.studentTransport.patchValue({ dropoffPointId: null });
            this.routePointsData.outBound = [];
        }
    };
    ManageStudentTransportComponent.prototype.setValidatorsOnSelect = function (selectedForm) {
        this[selectedForm].controls.transportRouteId.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required);
        this[selectedForm].controls.transportRouteId.updateValueAndValidity();
        this[selectedForm].controls.transportScheduleId.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required);
        this[selectedForm].controls.transportScheduleId.updateValueAndValidity();
        this[selectedForm].controls.pointAddres.clearValidators();
        this[selectedForm].controls.pointAddres.updateValueAndValidity();
    };
    ManageStudentTransportComponent.prototype.onSelectRoute = function (inBound, onUpdate) {
        var _this = this;
        if (inBound === void 0) { inBound = true; }
        if (onUpdate === void 0) { onUpdate = false; }
        if (inBound) {
            this.setValidatorsOnSelect('pickupPoint');
        }
        else {
            this.setValidatorsOnSelect('dropoffPoint');
        }
        if (inBound && this.pickupPoint.valid || !inBound && this.dropoffPoint.valid) {
            if (((inBound && !this.pickupPoint.value.latitude) || (!inBound && !this.dropoffPoint.value.latitude) || onUpdate)) {
                this.studentTransportService.fetchRoutePoints(inBound ? this.pickupPoint.value.transportRouteId : this.dropoffPoint.value.transportRouteId)
                    .subscribe(function (res) { return _this.setRoutePoints(res, inBound, onUpdate); });
            }
            else {
                this.inBound = inBound;
                this.routePoints = this.routePointsData[inBound ? 'inBound' : 'outBound'];
                this.viewDialog = this.dialogRef.open(this.popupMap, {
                    disableClose: true,
                    width: '100%',
                    panelClass: 'rootmap-popup'
                });
            }
        }
    };
    ManageStudentTransportComponent.prototype.setRoutePoints = function (res, inBound, onUpdate) {
        var _this = this;
        this.inBound = inBound;
        if (res.routePointsView) {
            res.routePointsView.forEach(function (element) {
                element.transportRouteId = inBound ? _this.pickupPoint.value.transportRouteId : _this.dropoffPoint.value.transportRouteId;
            });
            this.routePoints = res.routePointsView;
            if (this.studentTransportAssignmentInfo) {
                this.routePointsData[inBound ? 'inBound' : 'outBound'] = res.routePointsView.sort(function (a, b) { return a.position - b.position; });
            }
            if (!onUpdate) {
                this.viewDialog = this.dialogRef.open(this.popupMap, {
                    disableClose: true,
                    width: '100%',
                    panelClass: 'rootmap-popup'
                });
            }
            else {
                this.calculateFinalDistanceDuration(inBound);
            }
        }
    };
    ManageStudentTransportComponent.prototype.calculateFinalDistanceDuration = function (inBound) {
        var _this = this;
        var directionsService = new google.maps.DirectionsService;
        directionsService.route({
            origin: this.setMarkerData(inBound ? this.routePointsData['inBound'][+this.pickupPoint.value.position - 1] : this.routePointsData['outBound'][0]),
            // tslint:disable-next-line: max-line-length
            destination: this.setMarkerData(!inBound ? this.routePointsData['outBound'][+this.dropoffPoint.value.position - 1] : this.routePointsData['inBound'][this.routePointsData['inBound'].length - 1]),
            waypoints: this.getwayPoints(inBound, +this[inBound ? 'pickupPoint' : 'dropoffPoint'].value.position - 1),
            travelMode: 'DRIVING',
            transitOptions: { modes: ['BUS'] },
            unitSystem: google.maps.UnitSystem.METRIC
        }, function (response, status) {
            if (inBound) {
                _this.studetRouteInfo.inBound = {
                    distance: response.routes[0].legs[0].distance.value,
                    duration: response.routes[0].legs[0].duration.value
                };
            }
            else {
                _this.studetRouteInfo.outBound = {
                    distance: response.routes[0].legs[0].distance.value,
                    duration: response.routes[0].legs[0].duration.value
                };
            }
            _this.getTotalDuration();
            _this.changeDetector.detectChanges();
        });
    };
    ManageStudentTransportComponent.prototype.getTotalDistance = function () {
        if (this.studetRouteInfo.inBound || this.studetRouteInfo.outBound) {
            var dist = ((this.studetRouteInfo.inBound ? this.studetRouteInfo.inBound.distance : 0) +
                (this.studetRouteInfo.outBound ? this.studetRouteInfo.outBound.distance : 0));
            this.changeDetector.markForCheck();
            return Math.round(dist / 1000);
        }
    };
    ManageStudentTransportComponent.prototype.getTotalDuration = function () {
        if (this.studetRouteInfo.inBound || this.studetRouteInfo.outBound) {
            var dur = ((this.studetRouteInfo.inBound ? this.studetRouteInfo.inBound.duration : 0) +
                (this.studetRouteInfo.outBound ? this.studetRouteInfo.outBound.duration : 0)) / 60;
            this.changeDetector.markForCheck();
            return (Math.floor(dur / 60) ? Math.floor(dur / 60) + 'hr ' : '') + Math.round(dur % 60) + 'min ';
        }
    };
    ManageStudentTransportComponent.prototype.getwayPoints = function (inBound, index) {
        var wayPoints = [];
        if (this.routePointsData[inBound ? 'inBound' : 'outBound'].length > 2) {
            for (var i = (inBound ? index + 1 : 1); i < (inBound ? this.routePointsData[inBound ? 'inBound' : 'outBound'].length - 1 : index); i++) {
                wayPoints.push({
                    location: { lat: this.routePointsData[inBound ? 'inBound' : 'outBound'][i].latitude, lng: this.routePointsData[inBound ? 'inBound' : 'outBound'][i].longitude },
                    stopover: false
                });
            }
            return wayPoints;
        }
        else {
            return [];
        }
    };
    ManageStudentTransportComponent.prototype.setMarkerData = function (point) {
        return { lat: point.latitude, lng: point.longitude };
    };
    ManageStudentTransportComponent.prototype.onSelectFromPopUp = function (event) {
        this.viewDialog.close();
        if (!event) {
            return;
        }
        if (event.selectedRouteMarker) {
            if (event.inBound) {
                this.studentTransport.controls.pickupPointId.patchValue(event.selectedPoint.id);
                this.routePointsData.inBound = event.updatedPoints;
            }
            else {
                this.studentTransport.controls.dropoffPointId.patchValue(event.selectedPoint.id);
                this.routePointsData.outBound = event.updatedPoints;
            }
        }
        else {
            if (event.inBound) {
                this.routePointsData.inBound = event.updatedPoints;
                this.studentTransport.controls.pickupPointId.patchValue(null);
            }
            else {
                this.routePointsData.outBound = event.updatedPoints;
                this.studentTransport.controls.dropoffPointId.patchValue(null);
            }
        }
        var selectedLocation = {
            latitude: event.selectedPoint.latitude,
            longitude: event.selectedPoint.longitude,
            name: event.selectedPoint.name ? event.selectedPoint.name.substring(0, 45) : null,
            pointAddres: event.selectedPoint.pointAddres ? event.selectedPoint.pointAddres.substring(0, 200) : null,
            position: event.selectedPoint.position,
            id: event.selectedPoint.id
        };
        if (event.inBound) {
            this.pickupPoint.patchValue(selectedLocation);
        }
        else {
            this.dropoffPoint.patchValue(selectedLocation);
        }
        this.calculateFinalDistanceDuration(event.inBound);
    };
    ManageStudentTransportComponent.prototype.getFormatedName = function (data) {
        if (data) {
            if (data.middleName) {
                var fullName = data.firstName + ' ' + data.middleName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
            else {
                var fullName = data.firstName + ' ' + data.lastName;
                return fullName.replace(/  +/g, ' ').trim();
            }
        }
    };
    ManageStudentTransportComponent.prototype.setUpFormValidations = function (formName) {
        if (this[formName].value.transportScheduleId || this[formName].value.transportRouteId) {
            this[formName].controls.pointAddres.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
            this[formName].controls.pointAddres.updateValueAndValidity();
        }
        else {
            this[formName].controls.transportRouteId.clearValidators();
            this[formName].controls.transportRouteId.updateValueAndValidity();
            this[formName].controls.transportScheduleId.clearValidators();
            this[formName].controls.transportScheduleId.updateValueAndValidity();
            this[formName].controls.pointAddres.clearValidators();
            this[formName].controls.pointAddres.updateValueAndValidity();
        }
    };
    ManageStudentTransportComponent.prototype.setAPiDataForRoutePoints = function (inBound) {
        if (inBound === void 0) { inBound = true; }
        if (this.routePointsData[inBound ? 'inBound' : 'outBound'].length) {
            this.routePointsData[inBound ? 'inBound' : 'outBound'] = this.routePointsData[inBound ? 'inBound' : 'outBound'].filter(function (e) {
                if (e.id) {
                    return e.position = e.position;
                }
            });
        }
    };
    ManageStudentTransportComponent.prototype.submitRoute = function (onSubmit) {
        var _this = this;
        if (onSubmit === void 0) { onSubmit = false; }
        if (onSubmit) {
            this.setUpFormValidations('pickupPoint');
            this.setUpFormValidations('dropoffPoint');
            if (this.studentTransport.valid && this.pickupPoint.valid && this.dropoffPoint.valid) {
                if (!(this.pickupPoint.value.latitude || this.dropoffPoint.value.latitude)) {
                    this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].ATLEAST_ONE_LOCATION_ERROR, true);
                    return;
                }
                if (this.studentTransport.value.requestedPickupAddress) {
                    // tslint:disable-next-line: max-line-length
                    this.studentTransport.controls.requestedPickupAddress.setValue(this.requestedPoint.inBound ? this.requestedPoint.inBound.name : this.studentTransport.value.requestedPickupAddress);
                }
                if (this.studentTransport.value.requestedDropoffAddress) {
                    // tslint:disable-next-line: max-line-length
                    this.studentTransport.controls.requestedDropoffAddress.setValue(this.requestedPoint.outBound ? this.requestedPoint.outBound.name : this.studentTransport.value.requestedDropoffAddress);
                }
                this.studentTransportView = this.studentTransport.value;
                this.setAPiDataForRoutePoints();
                this.setAPiDataForRoutePoints(false);
                this.studentTransportView.routePointDetails = this.routePointsData.inBound.concat(this.routePointsData.outBound);
                if (!this.studentTransportView.routePointDetails.length) {
                    this.studentTransportView.routePointDetails = null;
                }
                // tslint:disable-next-line: max-line-length
                this.studentTransportView.transportScheduleInboundRouteId = this.pickupPoint.value.transportRouteId ? this.inBoundroutesList.find(function (e) { return e.transportRouteId === _this.pickupPoint.value.transportRouteId; }).id : null;
                // tslint:disable-next-line: max-line-length
                this.studentTransportView.transportScheduleOutboundRoutesId = this.dropoffPoint.value.transportRouteId ? this.outBoundroutesList.find(function (e) { return e.transportRouteId === _this.dropoffPoint.value.transportRouteId; }).id : null;
                this.setPointsDataForApi('pickupPoint');
                this.setPointsDataForApi('dropoffPoint');
                if (this.studentTransportAssignmentInfo) {
                    this.studentTransportView['id'] = this.studentTransportAssignmentInfo.id;
                    this.studentTransportService.updateTransportAssignments(this.studentTransportView)
                        .subscribe(function (res) { return _this.afterSubmit(res); }, function (err) { return _this.errorResponse(err); });
                }
                else {
                    this.studentTransportService.createTransportAssignments(this.studentTransportView).subscribe(function (res) { return _this.afterSubmit(res); }, function (err) { return _this.errorResponse(err); });
                }
            }
            else {
                this.manualForm.submitted = true;
                this.pickUpForm.submitted = true;
                this.dropOffForm.submitted = true;
            }
        }
        else {
            this.onCancel();
        }
    };
    ManageStudentTransportComponent.prototype.setPointsDataForApi = function (key) {
        if (this.studentTransport.value[key === 'pickupPoint' ? 'pickupPointId' : 'dropoffPointId']) {
            this.studentTransportView[key] = null;
        }
        else if (this[key].value.transportRouteId) {
            this.studentTransportView[key] = this[key].value;
            this.studentTransportView[key].position = this.studentTransportView[key].position;
        }
        else {
            this.studentTransportView[key] = null;
        }
    };
    ManageStudentTransportComponent.prototype.onCancel = function () {
        this.back();
    };
    ManageStudentTransportComponent.prototype.afterSubmit = function (res) {
        this.onCancel();
        this.openSnackBar(res.messages.ResultMessage);
    };
    ManageStudentTransportComponent.prototype.onClear = function (pickUp) {
        if (pickUp === void 0) { pickUp = true; }
        if (pickUp) {
            this.pickupPoint.reset();
            this.studentTransport.controls.pickupPointId.reset();
            this.routePointsData.inBound = [];
            this.pickUpForm.submitted = false;
            this.studetRouteInfo.inBound = null;
        }
        else {
            this.dropoffPoint.reset();
            this.studentTransport.controls.dropoffPointId.reset();
            this.routePointsData.outBound = [];
            this.dropOffForm.submitted = false;
            this.studetRouteInfo.outBound = null;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('manualForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ManageStudentTransportComponent.prototype, "manualForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pickUpForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ManageStudentTransportComponent.prototype, "pickUpForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dropOffForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ManageStudentTransportComponent.prototype, "dropOffForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('popupMap'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], ManageStudentTransportComponent.prototype, "popupMap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('picUpLocation'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ManageStudentTransportComponent.prototype, "picUpLocation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dropOffLocation'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ManageStudentTransportComponent.prototype, "dropOffLocation", void 0);
    ManageStudentTransportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-student-transport',
            template: __webpack_require__(/*! ./manage-student-transport.component.html */ "./src/app/modules/transportation/routing/manage-student-transport/manage-student-transport.component.html"),
            providers: [app_service_student_transport_student_transport_service__WEBPACK_IMPORTED_MODULE_7__["StudentTransportService"], app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_8__["StudentAdmissionService"]],
            styles: [__webpack_require__(/*! ./manage-student-transport.component.scss */ "./src/app/modules/transportation/routing/manage-student-transport/manage-student-transport.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"], app_service_student_transport_student_transport_service__WEBPACK_IMPORTED_MODULE_7__["StudentTransportService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            app_service_student_admissions_service_student_admission_service__WEBPACK_IMPORTED_MODULE_8__["StudentAdmissionService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _agm_core__WEBPACK_IMPORTED_MODULE_10__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"]])
    ], ManageStudentTransportComponent);
    return ManageStudentTransportComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_3__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/transportation/routing/new-route/new-route.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/new-route/new-route.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-32 content allTable-grid\">\n  <div class=\"text-uppercase font-size-18 pl-12\" translate>new route</div>\n  <div class=\"simple-table-container radius-t-20 mat-elevation-z3\" id=\"route-form\">\n    <form [formGroup]=\"routeForm\" #class=\"ngForm\" fxLayout=\"column\">\n      <div fxFlexFill fxLayout=\"column\" fxLayout.gt-sm=\"row\" class=\"pt-24 pb-12 px-20\">\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\">\n          <mat-label translate #routeName>Route Name</mat-label>\n          <input (keyup)=\"preventSpace($event,'routeForm','name')\"  matInput required formControlName=\"name\" (blur)=\"trimTextBoxSpaces('routeForm','name')\">\n          <mat-error>\n            <app-validation [labelName]=\"routeName.innerText\" [validationControl]=\"routeForm.controls.name\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"25\"\n          class=\"px-sm-20\">\n          <mat-label translate #type>Type</mat-label>\n          <mat-select placeholder=\"Select Type\" formControlName=\"routeTypeId\" required>\n            <mat-option *ngFor=\"let type of routeTypeList\" [value]=\"type.id\">\n              {{ type.name }}</mat-option>\n          </mat-select>\n          <mat-error>\n            <app-validation [labelName]=\"type.innerText\" [validationControl]=\"routeForm.controls.routeTypeId\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"20\">\n          <mat-label translate #routeNumber>Route Number</mat-label>\n          <input (keyup)=\"preventSpace($event,'routeForm','routeNumber')\" matInput required formControlName=\"routeNumber\" (blur)=\"trimTextBoxSpaces('routeForm','routeNumber')\">\n          <mat-error>\n            <app-validation [labelName]=\"routeNumber.innerText\" [validationControl]=\"routeForm.controls.routeNumber\"\n              [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"30\" class=\"pl-sm-20\">\n          <mat-label translate #description>Route Description</mat-label>\n          <textarea matInput required formControlName=\"routeDescription\"\n          (blur)=\"trimTextBoxSpaces('routeForm','routeDescription')\"></textarea>\n          <mat-error>\n            <app-validation [labelName]=\"description.innerText\"\n              [validationControl]=\"routeForm.controls.routeDescription\" [doValidate]=\"validate\">\n            </app-validation>\n          </mat-error>\n        </mat-form-field>\n      </div> \n      <mat-divider></mat-divider>\n      <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" fxFlex=\"100\" fxLayoutAlign.gt-sm=\"space-between center\" class=\"mt-32 px-sm-12\">\n        <mat-form-field fxlayout=\"column\" fxFlex=\"40\">               \n          <input (keyup)=\"preventSpaceForArray($event,searchControl)\" id=\"inputId\" matInput placeholder=\"{{'Search Place' | translate}}\" [formControl]=\"searchControl\" #search>\n        </mat-form-field>\n        <h3 class=\"px-16 break-word\" translate>Use the map to click on and build the route</h3>\n        <div fxLayout=\"row\" *ngIf=\"duration && distance\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"w-140\">\n            <mat-icon class=\"mr-4 grey-600-fg\">access_time</mat-icon>\n            <div fxLayout=\"column\">\n              <span class=\"grey-500-fg\" translate>Travel Time</span>\n              <span>{{duration}}</span>\n            </div>\n          </div>\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"px-24\" class=\"w-140\">\n              <mat-icon class=\"mr-4 grey-600-fg\">place</mat-icon>\n              <div fxLayout=\"column\">\n                <span class=\"grey-500-fg\" translate>Total Distance</span>\n                <span>{{distance}} km</span>\n              </div>\n            </div>\n        </div>\n      </div>\n      <agm-map appDirectionsMap (getDirections)=\"getDirections($event)\" [streetViewControl]=\"false\" [latitude]=\"latitude\" [longitude]=\"longitude\" class=\"h-600 mat-elevation-z3 mx-20 radius-10\"  [showDirection]=\"true\" (mapClick)=\"mapClicked($event)\"  travelMode=\"DRIVING\"\n       [clickableIcons]=\"false\" [streetViewControl]=\"false\" (dblclick)=\"mapDoubleClicked($event)\" maxZoom=\"16\"\n       [disableDefaultUI]=\"true\" [markers]=\"markers\"\n       [zoom]=\"markers?.length ? 10 : 8\"  [fitBounds]=\"(markers?.length || currentLocation) ? true : false\"> \n       \n      <agm-marker *ngFor=\"let m of markers;let i = index;\" [agmFitBounds]=\"true\"\n      [latitude]=\"m.latitude\" [markerDraggable]=\"m.draggable\"\n      [longitude]=\"m.longitude\" [label]=\"(m.label)?.toString()\" [agmFitBounds]=\"true\" (dragEnd)=\"markerDragEnd(i, $event)\" [animation]=\"'DROP'\">\n      <agm-info-window [isOpen]=\"m.openInfoWindow\">\n      {{m.pointAddress}} \n      </agm-info-window>\n      </agm-marker>\n      \n      <agm-marker [agmFitBounds]=\"markers?.length ? false : true\" *ngIf=\"currentLocation\"\n      [latitude]=\"currentLocation?.latitude\" [markerDraggable]=\"currentLocation?.draggable\"\n      [longitude]=\"currentLocation?.longitude\" [label]=\"(currentLocation?.label)?.toString()\" [agmFitBounds]=\"true\" [iconUrl]=\"'assets/images/custom-icons/currentlocation.png'\" > \n      </agm-marker>\n\n      <agm-marker *ngIf=\"selectedPoint?.latitude\" [latitude]=\"selectedPoint?.latitude\"\n      [longitude]=\"selectedPoint?.longitude\" [label]=\"(selectedPoint?.label)?.toString()\" [agmFitBounds]=\"true\" [markerDraggable]=\"true\" (dragEnd)=\"markerAction($event)\">\n        <agm-info-window [isOpen]=\"true\" (infoWindowClose)=\"selectedPoint = null\">\n          <div class=\"font-size-14 pr-4\"> {{selectedPoint?.pointAddress}} </div> \n          <div fxLayoutAlign=\"end center\" class=\"py-12 min-width-400\"> \n              <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"50\">\n                  <mat-label translate #infoWindo>Add At Stop</mat-label>\n                  <input [formControl]=\"infoWindow\" type=\"number\" (keyup)=\"preventSpaceForArray($event,infoWindow)\"  matInput required >               \n                </mat-form-field>\n                <mat-error class=\"p-absolute\">\n                  <app-validation labelName=\"Add at Stop\"\n                                  [validationControl]=\"infoWindow\" [doValidate]=\"true\">\n                  </app-validation>\n                </mat-error>\n                <button (click)=\"addSelectedPoint(selectedPoint)\" class=\"ml-8 mb-16\" mat-raised-button color=\"accent\" type=\"button\" [disabled]=\"infoWindow.invalid\">\n                  {{'Add Stop' | translate}}\n                </button>      \n          </div>\n         \n        </agm-info-window>\n      </agm-marker>\n\n    </agm-map>\n      <div class=\"scrolltable mb-12\">\n        <mat-table #table *ngIf=\"markers?.length\" formArrayName=\"routePointsView\" class=\"tableBar mt-28\" mat-table\n          [dataSource]=\"rows | async\" matSort matSortDisable cdkDropList\n          [cdkDropListData]=\"rows | async\"\n          (cdkDropListDropped)=\"dropTable($event)\" [cdkDropConnectedTo]=\"[table]\">\n          <ng-container *ngFor=\"let column of columns; let i = index\" matColumnDef=\"{{column.field}}\">\n            <mat-header-cell *matHeaderCellDef>\n              <div class=\"headerTitle w-100-p\"  mat-sort-header disableClear\n                [disabled]=\"!column.sort || (rows && rows.length == 0)\">\n                <strong class=\"mb-0 title mat-subheading-2\" translate >{{column.header}}</strong>\n              </div>\n            </mat-header-cell>\n            <mat-cell cdkDragHandle *matCellDef=\"let row; let i = index\" [row]=\"row\" [column]=\"column\" [formGroupName]=\"i\">     \n                <mat-form-field *ngIf=\"column.field == 'name';else elseBlock\" class=\"pb-28 pt-12\">       \n                  <mat-label translate #name>Name</mat-label>\n                  <input required (blur)=\"trimTextBoxSpacesForTable(i)\"  (keyup)=\"preventSpaceForArray($event, routeForm.get('routePointsView')?.controls[i]?.controls?.name)\" matInput #name formControlName=\"name\">\n                  <mat-error>\n                    <app-validation labelName=\"name\"\n                      [validationControl]=\"routeForm.get('routePointsView')?.controls[i]?.controls?.name\"\n                      [doValidate]=\"validate\">\n                    </app-validation>\n                  </mat-error>\n                </mat-form-field>\n              <ng-template #elseBlock>\n                <button mat-icon-button type=\"button\" *ngIf=\"column.field == 'delete';else fieldValue\">\n                  <mat-icon (click)=\"deleteAction(i)\" class=\"red-300-fg\">delete</mat-icon>\n                </button>\n              </ng-template>\n              <ng-template #fieldValue>\n                <p>\n                  {{row[column.field]}}\n                </p>\n              </ng-template>\n            </mat-cell>\n          </ng-container>\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"grey-header\"></mat-header-row>\n          <mat-row class=\"cursor-drag\" cdkDragHandle cdkDrag [cdkDragData]=\"row\" *matRowDef=\"let row; columns: displayedColumns;\">\n          </mat-row>\n        </mat-table>\n      </div>\n      <div *ngIf=\"!markers.length\" class=\"errorMsg\">\n        <h2 class=\"red-text text-center mb-0 font-weight-bold p-24\" translate>Add locations to create a route</h2>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"p-20\">\n        <button (click)=\"onAction()\" mat-raised-button type=\"button\" class=\"text-uppercase mr-12\">{{'cancel' | translate}}</button>\n        <button mat-raised-button type=\"submit\" class=\"text-uppercase\" color=\"accent\" (click)=\"onAction(true)\">\n        {{(updateRouteId ? 'update' : 'submit') | translate}}\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/transportation/routing/new-route/new-route.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/new-route/new-route.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map ::ng-deep .agm-map-container-inner {\n  border-radius: 10px; }\n\nagm-map ::ng-deep .agm-info-window-content {\n  padding-right: 20px;\n  display: table; }\n\nagm-map ::ng-deep .gm-ui-hover-effect {\n  top: 0 !important;\n  right: 0 !important; }\n\nagm-map ::ng-deep .gm-style-cc {\n  display: none; }\n\nagm-map ::ng-deep .min-width-400 {\n  min-width: 400px; }\n\nagm-map ::ng-deep .p-absolute span {\n  position: absolute;\n  bottom: 18px;\n  right: 64px;\n  left: 50px;\n  text-align: center;\n  min-width: 300px; }\n\n.grey-header .mat-header-cell {\n  background-color: #f5f5f5;\n  color: rgba(0, 0, 0, 0.87); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vcm91dGluZy9uZXctcm91dGUvbmV3LXJvdXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR00sbUJBQW1CLEVBQUE7O0FBSHpCO0VBT00sbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFScEI7RUFZTSxpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBYnpCO0VBaUJNLGFBQWEsRUFBQTs7QUFqQm5CO0VBb0JFLGdCQUFnQixFQUFBOztBQXBCbEI7RUF3QlEsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFLeEI7RUFDRSx5QkFBMEI7RUFDMUIsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RyYW5zcG9ydGF0aW9uL3JvdXRpbmcvbmV3LXJvdXRlL25ldy1yb3V0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICA6Om5nLWRlZXAge1xuICAgIC5hZ20tbWFwLWNvbnRhaW5lci1pbm5lciB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cblxuICAgIC5hZ20taW5mby13aW5kb3ctY29udGVudCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgfVxuXG4gICAgLmdtLXVpLWhvdmVyLWVmZmVjdCB7XG4gICAgICB0b3A6IDAgIWltcG9ydGFudDtcbiAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmdtLXN0eWxlLWNjIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuLm1pbi13aWR0aC00MDB7XG4gIG1pbi13aWR0aDogNDAwcHg7XG59XG4gICAgLnAtYWJzb2x1dGUge1xuICAgICAgc3BhbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAxOHB4O1xuICAgICAgICByaWdodDogNjRweDtcbiAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmdyZXktaGVhZGVyIC5tYXQtaGVhZGVyLWNlbGx7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjUgO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KSA7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/transportation/routing/new-route/new-route.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/new-route/new-route.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NewRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRouteComponent", function() { return NewRouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/Transport/routing.service */ "./src/app/service/Transport/routing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");











var NewRouteComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NewRouteComponent, _super);
    function NewRouteComponent(mapsAPILoader, ngZone, changedetector, dialogRef, commonService, _formBuilder, routingService, route, router, snackBar) {
        var _this = _super.call(this) || this;
        _this.mapsAPILoader = mapsAPILoader;
        _this.ngZone = ngZone;
        _this.changedetector = changedetector;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this._formBuilder = _formBuilder;
        _this.routingService = routingService;
        _this.route = route;
        _this.router = router;
        _this.snackBar = snackBar;
        _this.latitude = 20.5937;
        _this.longitude = 78.9629;
        _this.renderOptions = {
            suppressMarkers: true,
        };
        _this.markers = [];
        _this.rows = Promise.resolve([]);
        _this.validate = true;
        _this.routeTypeList = [];
        _this.columns = [
            { field: 'label', header: 'Stop No.', sort: false },
            { field: 'name', header: 'Name', sort: false },
            { field: 'latitude', header: 'Latitute', sort: false },
            { field: 'longitude', header: 'Longitude', sort: false },
            { field: 'pointAddress', header: 'Position Address', sort: false },
            { field: 'delete', header: 'Action', sort: false }
        ];
        _this.displayedColumns = ['label', 'name', 'latitude', 'longitude', 'pointAddress', 'delete'];
        _this.isSingleClick = true;
        _this.setCurrentLoation();
        return _this;
    }
    NewRouteComponent.prototype.setCurrentLoation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.currentLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                _this.changedetector.detectChanges();
            });
        }
    };
    NewRouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.updateRouteId = params.id;
                _this.getRouteInfo(params.id);
            }
        });
        this.getRouteTypes();
        this.routeForm = this._formBuilder.group({
            routePointsView: this._formBuilder.array([]),
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]],
            routeNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["Pattern"].ALPHANUMERIC), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]],
            routeTypeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            routeDescription: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(135)]],
        });
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.infoWindow = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99)]);
        this.mapsAPILoader.load().then(function () {
            var input = document.getElementById('inputId');
            google.maps.event.addDomListener(input, 'keydown', function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                }
            });
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['establishment']
            });
            autocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    var currentMarker = {
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng(),
                        draggable: true,
                        name: place.name,
                        pointAddress: place.formatted_address.substring(0, 200),
                        latlng: {
                            lat: place.geometry.location.lat(),
                            lng: place.geometry.location.lng()
                        }
                    };
                    _this.infoWindow.setValue(_this.markers.length + 1);
                    _this.selectedPoint = currentMarker;
                    _this.searchControl.setValue(null);
                });
            });
        });
    };
    NewRouteComponent.prototype.addRoute = function (currentMarker) {
        this.addRouteMarker(currentMarker);
    };
    NewRouteComponent.prototype.updateRoute = function (currentMarker, index) {
        this.updateRouteMarker(currentMarker, index);
    };
    NewRouteComponent.prototype.setPositionsForUpdate = function (currentMarker, index) {
        var start = this.setLatLngForDirections(this.markers);
        start[index] = currentMarker.latlng;
        start.pop();
        var end = this.setLatLngForDirections(this.markers);
        end[index] = currentMarker.latlng;
        end.shift();
        return { start: start, end: end };
    };
    NewRouteComponent.prototype.addRouteMarker = function (currentMarker) {
        var _this = this;
        this.ngZone.run(function () {
            if (_this.isMarkerAlreadyExists(currentMarker) === -1) {
                _this.routeForm.controls['routePointsView'].push(_this._formBuilder.group({
                    name: [currentMarker.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]]
                }));
                _this.lastmarkerForWayPoint = {
                    index: _this.infoWindow.value > _this.markers.length ? _this.markers.length + 1 : _this.infoWindow.value,
                    point: _this.selectedPoint
                };
                if (_this.infoWindow.value > _this.markers.length) {
                    _this.markers.push(currentMarker);
                }
                else {
                    _this.markers.splice(_this.infoWindow.value - 1, 0, currentMarker);
                    var pointsData = _this.routeForm.value.routePointsView;
                    pointsData.splice(_this.infoWindow.value - 1, 0, { name: currentMarker.name });
                    pointsData.pop();
                    _this.routeForm.controls['routePointsView'].setValue(pointsData);
                }
                _this.selectedPoint = null;
                _this.setMarkerAndRows();
            }
            else {
                _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].LOCATION_ALREADY_EXISTS, true);
            }
        });
    };
    NewRouteComponent.prototype.isMarkerAlreadyExists = function (currentMarker) {
        return this.markers.findIndex(function (e) {
            return (e.latitude === currentMarker.latitude && e.longitude === currentMarker.longitude);
        });
    };
    NewRouteComponent.prototype.updateRouteMarker = function (currentMarker, index) {
        var _this = this;
        this.ngZone.run(function () {
            Object.assign(_this.lastmarkerForWayPoint = {}, {
                point: _this.markers[index],
                index: index,
                formValues: _this.routeForm.value.routePointsView,
                isDrag: true
            });
            _this.routeForm.controls['routePointsView'].controls[index].setValue({ name: currentMarker.name });
            currentMarker.label = index + 1;
            _this.markers[index] = currentMarker;
            _this.setMarkerAndRows();
        });
    };
    NewRouteComponent.prototype.setPositionsForAdd = function (marker) {
        var start;
        var end;
        if (this.markers.length > 0) {
            start = this.setLatLngForDirections(this.markers);
            end = this.setLatLngForDirections(this.markers);
            end.push(marker.latlng);
            end.shift();
        }
        return { start: start, end: end };
    };
    NewRouteComponent.prototype.setLatLngForDirections = function (markers) {
        var latLng = [];
        for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
            var marker = markers_1[_i];
            latLng.push(marker.latlng);
        }
        return latLng;
    };
    NewRouteComponent.prototype.getRouteInfo = function (id) {
        var _this = this;
        this.routingService.transportRoutesDetails(id)
            .subscribe(function (res) { return _this.setRouteDetails(res.transportRouteDetailsView); });
    };
    NewRouteComponent.prototype.setRouteDetails = function (res) {
        var _this = this;
        this.routeForm.patchValue(res);
        this.markers = [];
        var locationArray = this.routeForm.controls['routePointsView'];
        res.routePointsDetailsView.sort(function (a, b) { return a.position - b.position; });
        var _loop_1 = function (marker) {
            locationArray.push(this_1._formBuilder.group({
                name: [marker.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(45)]]
            }));
            this_1.ngZone.run(function () {
                _this.markers.push({
                    name: marker.name,
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                    label: marker.position,
                    draggable: true,
                    pointAddress: marker.pointAddress,
                    latlng: { lat: marker.latitude, lng: marker.longitude },
                    id: marker.id
                });
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = res.routePointsDetailsView; _i < _a.length; _i++) {
            var marker = _a[_i];
            _loop_1(marker);
        }
        this.rows = Promise.resolve(this.markers);
        this.mapsAPILoader.load().then(function () {
            if (_this.markers.length > 1) {
                _this.setMarkerAndRows();
            }
        });
        this.changedetector.detectChanges();
    };
    NewRouteComponent.prototype.getRouteTypes = function () {
        var _this = this;
        this.routingService.routeTypes()
            .subscribe(function (res) { return _this.routeTypeList = res; });
    };
    NewRouteComponent.prototype.onAction = function (submit) {
        var _this = this;
        if (submit === void 0) { submit = false; }
        if (submit) {
            if (this.routeForm.valid && this.routeForm.value.routePointsView.length > 1) {
                var positionArray = this.routeForm.value.routePointsView;
                for (var i = 0; i < this.routeForm.value.routePointsView.length; i++) {
                    this.markers[i].name = positionArray[i].name;
                }
                var pointsView = [];
                for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
                    var marker = _a[_i];
                    pointsView.push(this.setUpApiData(marker));
                }
                if (this.updateRouteId) {
                    this.transportRouteData = {
                        id: this.updateRouteId
                    };
                    for (var key in this.routeForm.value) {
                        if (this.routeForm.value.hasOwnProperty(key) && key !== 'routePointsView') {
                            this.transportRouteData[key] = this.routeForm.value[key];
                        }
                    }
                    this.transportRouteData.routePoints = [];
                    this.transportRouteData.routePoints = pointsView;
                    this.routingService.updateTransportRoute(this.transportRouteData).subscribe(function (res) { return _this.addUpdateRoute(res); }, function (err) { return _this.errorResponse(err); });
                }
                else {
                    this.transportRouteData = this.routeForm.value;
                    this.transportRouteData.routePointsView = [];
                    this.transportRouteData.routePointsView = pointsView;
                    this.routingService.addVehicleRoutes(this.transportRouteData).subscribe(function (res) { return _this.addUpdateRoute(res); }, function (err) { return _this.errorResponse(err); });
                }
            }
            else if (this.routeForm.valid && this.routeForm.value.routePointsView.length < 2) {
                this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].ATLEAST_TWO_ROUTES_ERROR, true);
            }
            else {
                if (this.routeForm.controls.routePointsView.valid) {
                    this.scrollIntoViewById('route-form');
                }
            }
        }
        else {
            this.onCancel();
        }
    };
    NewRouteComponent.prototype.onCancel = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_10__["RouteConfig"]._Route_Database]);
    };
    NewRouteComponent.prototype.setUpApiData = function (marker) {
        return {
            name: marker.name, latitude: marker.latitude, longitude: marker.longitude, position: parseInt(marker.label, 0),
            pointAddress: marker.pointAddress, id: marker.id ? marker.id : 0
        };
    };
    NewRouteComponent.prototype.addUpdateRoute = function (res) {
        this.onCancel();
        this.openSnackBar(res.messages.ResultMessage);
    };
    NewRouteComponent.prototype.markerAction = function ($event, index, clicked) {
        var _this = this;
        if (index === void 0) { index = 0; }
        if (clicked === void 0) { clicked = true; }
        if (navigator.geolocation) {
            var geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng($event.coords.lat, $event.coords.lng);
            var request = { latLng: latlng };
            geocoder.geocode(request, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var result = results[0];
                    if (result) {
                        var currentMaker = {
                            latitude: $event.coords.lat,
                            longitude: $event.coords.lng,
                            pointAddress: result.formatted_address.substring(0, 200),
                            draggable: true,
                            name: _this.getAddressObject(result),
                            latlng: {
                                lat: $event.coords.lat,
                                lng: $event.coords.lng
                            }
                        };
                        if (!clicked) {
                            _this.updateRoute(currentMaker, index);
                        }
                        else {
                            _this.infoWindow.setValue(_this.markers.length + 1);
                            _this.selectedPoint = currentMaker;
                        }
                        _this.changedetector.detectChanges();
                    }
                    else {
                        _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].ADDRESS_NOT_FOUND, true);
                    }
                }
            });
        }
    };
    NewRouteComponent.prototype.addSelectedPoint = function (currentMaker) {
        this.addRoute(currentMaker);
    };
    NewRouteComponent.prototype.getAddressObject = function (response) {
        var ShouldBeComponent = {
            premise: 'premise',
            route: 'route',
            sublocality_level_2: 'sublocality_level_2',
            sublocality_level_1: 'sublocality_level_1'
        };
        var address = {
            premise: '',
            route: '',
            sublocality_level_2: '',
            sublocality_level_1: ''
        };
        response.address_components.forEach(function (component) {
            for (var shouldBe in ShouldBeComponent) {
                if (component.types.indexOf(ShouldBeComponent[shouldBe]) !== -1) {
                    address[shouldBe] = component.long_name ? component.long_name + ',' : '';
                }
            }
        });
        var data = (address.premise + '' + address.route + '' + address.sublocality_level_2 + '' + address.sublocality_level_1).replace(/,+/g, ',').replace(/,\s*$/, '');
        return data ? data.substring(0, 45) : response.formatted_address.substring(0, 45);
    };
    NewRouteComponent.prototype.mapClicked = function ($event) {
        var _this = this;
        this.isSingleClick = true;
        setTimeout(function () {
            if (_this.isSingleClick) {
                _this.markerAction($event);
            }
        }, 300);
    };
    NewRouteComponent.prototype.mapDoubleClicked = function ($event) {
        this.isSingleClick = false;
    };
    NewRouteComponent.prototype.markerDragEnd = function (i, $event) {
        this.markerAction($event, i, false);
    };
    NewRouteComponent.prototype.deleteAction = function (index) {
        this.routeForm.controls['routePointsView'].removeAt(index);
        this.markers.splice(index, 1);
        if (this.markers.length > 1) {
            var positions = this.setPositionsForDelete();
            this.setMarkerAndRows();
        }
        else {
            this.distance = 0;
            this.duration = 0;
            this.setMarkerAndRows();
        }
        this.changedetector.detectChanges();
    };
    NewRouteComponent.prototype.setPositionsForDelete = function () {
        var start = this.setLatLngForDirections(this.markers);
        start.pop();
        var end = this.setLatLngForDirections(this.markers);
        end.shift();
        return { start: start, end: end };
    };
    NewRouteComponent.prototype.setMarkerAndRows = function () {
        this.rows = Promise.resolve(this.markers);
        var markerPoints = [];
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].label = i + 1;
            markerPoints.push(this.markers[i]);
        }
        this.markers = markerPoints;
        this.changedetector.detectChanges();
    };
    NewRouteComponent.prototype.trimTextBoxSpacesForTable = function (i) {
        this.routeForm.controls['routePointsView'].controls[i].setValue({ name: this.commonService.trimSpaces(this.routeForm.value.routePointsView[i].name) });
    };
    NewRouteComponent.prototype.dropTable = function (event) {
        var prevIndex = this.markers.findIndex(function (d) { return d === event.item.data; });
        if (prevIndex < 0 || event.currentIndex < 0) {
            return;
        }
        var tempMarker = this.markers[prevIndex];
        this.markers[prevIndex] = this.markers[event.currentIndex];
        this.markers[event.currentIndex] = tempMarker;
        var temp = this.routeForm.value.routePointsView[prevIndex].name;
        this.routeForm.controls['routePointsView'].controls[prevIndex].setValue({ name: this.routeForm.value.routePointsView[event.currentIndex].name });
        this.routeForm.controls['routePointsView'].controls[event.currentIndex].setValue({ name: temp });
        this.table.renderRows();
        this.markers.map(function (e, i) { return e.label = i + 1; });
        if (this.markers.length > 1) {
            this.setMarkerAndRows();
        }
    };
    NewRouteComponent.prototype.getDirections = function (res) {
        if (res.status === 'OK') {
            this.distance = 0;
            this.duration = 0;
            var response = res.routes[0].legs;
            for (var i = 0; i < response.length; i++) {
                if (response[i].distance) {
                    this.distance += response[i].distance.value;
                }
                if (response[i].duration) {
                    this.duration += response[i].duration.value;
                }
            }
            this.distance = Math.round(this.distance / 1000);
            this.duration = this.duration / 60;
            this.duration = (Math.floor(this.duration / 60) ? Math.floor(this.duration / 60) + 'hr ' : '') + Math.round(this.duration % 60) + 'min ';
            this.changedetector.detectChanges();
        }
        else {
            if (this.lastmarkerForWayPoint && this.lastmarkerForWayPoint.isDrag) {
                if (this.lastmarkerForWayPoint.formValues) {
                    this.routeForm.controls['routePointsView'].setValue(this.lastmarkerForWayPoint.formValues);
                }
                this.markers[this.lastmarkerForWayPoint.index] = this.lastmarkerForWayPoint.point;
                this.setMarkerAndRows();
            }
            else {
                this.markers.splice(this.lastmarkerForWayPoint.index - 1, 1);
                var pointsData = this.routeForm.value.routePointsView;
                pointsData.splice(this.lastmarkerForWayPoint.index - 1, 1);
                this.routeForm.controls['routePointsView'].removeAt(this.lastmarkerForWayPoint.index - 1);
                this.routeForm.controls['routePointsView'].setValue(pointsData);
                this.setMarkerAndRows();
            }
            if (res.status === 'ZERO_RESULTS') {
                if (!this.lastmarkerForWayPoint.isDrag) {
                    this.selectedPoint = this.lastmarkerForWayPoint.point;
                    this.selectedPoint.label = '';
                    this.changedetector.detectChanges();
                }
                return this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DISTANCE_NOT_FOUND_VIA_ROAD, true);
            }
            else if (res.status === 'MAX_WAYPOINTS_EXCEEDED') {
                this.selectedPoint = null;
                return this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].MAX_WAY_POINTS_EXCEEDS, true);
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NewRouteComponent.prototype, "searchElementRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"])
    ], NewRouteComponent.prototype, "agmMap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewRouteComponent.prototype, "table", void 0);
    NewRouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-route',
            template: __webpack_require__(/*! ./new-route.component.html */ "./src/app/modules/transportation/routing/new-route/new-route.component.html"),
            providers: [app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"]],
            styles: [__webpack_require__(/*! ./new-route.component.scss */ "./src/app/modules/transportation/routing/new-route/new-route.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], NewRouteComponent);
    return NewRouteComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_4__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/transportation/routing/routes-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/routes-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RoutesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesRoutingModule", function() { return RoutesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_route_new_route_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-route/new-route.component */ "./src/app/modules/transportation/routing/new-route/new-route.component.ts");
/* harmony import */ var _vehicle_route_database_vehicle_route_database_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle-route-database/vehicle-route-database.component */ "./src/app/modules/transportation/routing/vehicle-route-database/vehicle-route-database.component.ts");
/* harmony import */ var _view_route_view_route_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-route/view-route.component */ "./src/app/modules/transportation/routing/view-route/view-route.component.ts");
/* harmony import */ var _add_transport_schedules_add_transport_schedules_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-transport-schedules/add-transport-schedules.component */ "./src/app/modules/transportation/routing/add-transport-schedules/add-transport-schedules.component.ts");
/* harmony import */ var _transport_schedules_transport_schedules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transport-schedules/transport-schedules.component */ "./src/app/modules/transportation/routing/transport-schedules/transport-schedules.component.ts");
/* harmony import */ var _manage_student_transport_manage_student_transport_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage-student-transport/manage-student-transport.component */ "./src/app/modules/transportation/routing/manage-student-transport/manage-student-transport.component.ts");
/* harmony import */ var _view_transport_schedules_view_transport_schedules_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-transport-schedules/view-transport-schedules.component */ "./src/app/modules/transportation/routing/view-transport-schedules/view-transport-schedules.component.ts");
/* harmony import */ var app_shared_student_basic_search_student_basic_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/student-basic-search/student-basic-search.component */ "./src/app/shared/student-basic-search/student-basic-search.component.ts");











var routes = [
    { path: 'vehicle-route-database/new-route', component: _new_route_new_route_component__WEBPACK_IMPORTED_MODULE_3__["NewRouteComponent"], data: { title: 'New Route' } },
    { path: 'vehicle-route-database/edit-route/:id', component: _new_route_new_route_component__WEBPACK_IMPORTED_MODULE_3__["NewRouteComponent"], data: { title: 'Edit Route' } },
    { path: 'vehicle-route-database', component: _vehicle_route_database_vehicle_route_database_component__WEBPACK_IMPORTED_MODULE_4__["VehicleRouteDatabaseComponent"], data: { title: 'Vehicle Route Database' } },
    { path: 'vehicle-route-database/view-route/:id/:routeName', component: _view_route_view_route_component__WEBPACK_IMPORTED_MODULE_5__["ViewRouteComponent"], data: { title: 'View Route' } },
    { path: 'transport-schedules/new-transport-schedule', component: _add_transport_schedules_add_transport_schedules_component__WEBPACK_IMPORTED_MODULE_6__["AddTransportSchedulesComponent"], data: { title: 'New Transport Schedule' } },
    { path: 'transport-schedules/edit-transport-schedule/:id', component: _add_transport_schedules_add_transport_schedules_component__WEBPACK_IMPORTED_MODULE_6__["AddTransportSchedulesComponent"], data: { title: 'Edit Transport Schedule' } },
    { path: 'transport-schedules', component: _transport_schedules_transport_schedules_component__WEBPACK_IMPORTED_MODULE_7__["TransportSchedulesComponent"], data: { title: 'Transport Schedules' } },
    { path: 'student-transport/manage-student-transport/:id', component: _manage_student_transport_manage_student_transport_component__WEBPACK_IMPORTED_MODULE_8__["ManageStudentTransportComponent"], data: { title: 'Manage Student Transport' } },
    { path: 'transport-schedules/view-transport-schedule/:id', component: _view_transport_schedules_view_transport_schedules_component__WEBPACK_IMPORTED_MODULE_9__["ViewTransportSchedulesComponent"], data: { title: 'View Transport Schedule' } },
    { path: 'student-transport', component: app_shared_student_basic_search_student_basic_search_component__WEBPACK_IMPORTED_MODULE_10__["StudentBasicSearchComponent"], data: { title: 'Student Transport' } },
];
var RoutesRoutingModule = /** @class */ (function () {
    function RoutesRoutingModule() {
    }
    RoutesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RoutesRoutingModule);
    return RoutesRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/transportation/routing/routes.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/transportation/routing/routes.module.ts ***!
  \*****************************************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _routes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes-routing.module */ "./src/app/modules/transportation/routing/routes-routing.module.ts");
/* harmony import */ var app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/matcomponents.module */ "./src/app/main/matcomponents.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/ng2-tel-input.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _new_route_new_route_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./new-route/new-route.component */ "./src/app/modules/transportation/routing/new-route/new-route.component.ts");
/* harmony import */ var _vehicle_route_database_vehicle_route_database_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vehicle-route-database/vehicle-route-database.component */ "./src/app/modules/transportation/routing/vehicle-route-database/vehicle-route-database.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm5/agm-direction.js");
/* harmony import */ var _view_route_view_route_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./view-route/view-route.component */ "./src/app/modules/transportation/routing/view-route/view-route.component.ts");
/* harmony import */ var _transport_schedules_transport_schedules_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./transport-schedules/transport-schedules.component */ "./src/app/modules/transportation/routing/transport-schedules/transport-schedules.component.ts");
/* harmony import */ var _add_transport_schedules_add_transport_schedules_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-transport-schedules/add-transport-schedules.component */ "./src/app/modules/transportation/routing/add-transport-schedules/add-transport-schedules.component.ts");
/* harmony import */ var _manage_student_transport_manage_student_transport_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./manage-student-transport/manage-student-transport.component */ "./src/app/modules/transportation/routing/manage-student-transport/manage-student-transport.component.ts");
/* harmony import */ var _view_transport_schedules_view_transport_schedules_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./view-transport-schedules/view-transport-schedules.component */ "./src/app/modules/transportation/routing/view-transport-schedules/view-transport-schedules.component.ts");
/* harmony import */ var _view_common_route_view_common_route_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view-common-route/view-common-route.component */ "./src/app/modules/transportation/routing/view-common-route/view-common-route.component.ts");
/* harmony import */ var _directions_map_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directions-map.directive */ "./src/app/modules/transportation/routing/directions-map.directive.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");

























var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_new_route_new_route_component__WEBPACK_IMPORTED_MODULE_13__["NewRouteComponent"],
                _vehicle_route_database_vehicle_route_database_component__WEBPACK_IMPORTED_MODULE_14__["VehicleRouteDatabaseComponent"],
                _view_route_view_route_component__WEBPACK_IMPORTED_MODULE_17__["ViewRouteComponent"], _transport_schedules_transport_schedules_component__WEBPACK_IMPORTED_MODULE_18__["TransportSchedulesComponent"], _add_transport_schedules_add_transport_schedules_component__WEBPACK_IMPORTED_MODULE_19__["AddTransportSchedulesComponent"], _manage_student_transport_manage_student_transport_component__WEBPACK_IMPORTED_MODULE_20__["ManageStudentTransportComponent"], _view_transport_schedules_view_transport_schedules_component__WEBPACK_IMPORTED_MODULE_21__["ViewTransportSchedulesComponent"], _view_common_route_view_common_route_component__WEBPACK_IMPORTED_MODULE_22__["ViewCommonRouteComponent"], _directions_map_directive__WEBPACK_IMPORTED_MODULE_23__["DirectionsMapDirective"]],
            entryComponents: [_view_common_route_view_common_route_component__WEBPACK_IMPORTED_MODULE_22__["ViewCommonRouteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _routes_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutesRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_main_matcomponents_module__WEBPACK_IMPORTED_MODULE_4__["MatcomponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedManagementModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_9__["FuseSharedModule"],
                ng2_tel_input__WEBPACK_IMPORTED_MODULE_10__["Ng2TelInputModule"],
                agm_direction__WEBPACK_IMPORTED_MODULE_16__["AgmDirectionModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__["DragDropModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD5OFmlQeSKDj7YPHKwTHFzuit2sUY4UNA',
                    libraries: ['places']
                }),
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
                    useClass: app_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
                    multi: true
                },
            ],
            exports: [_view_route_view_route_component__WEBPACK_IMPORTED_MODULE_17__["ViewRouteComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], RoutesModule);
    return RoutesModule;
}());



/***/ }),

/***/ "./src/app/modules/transportation/routing/transport-schedules/transport-schedules.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/transport-schedules/transport-schedules.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-table [settings]=\"tableSettings\" (getTableData)='tableData($event)'(openAddForm)=\"onAddFormClick()\" (rowBasedAction)='actions($event)'></app-table>"

/***/ }),

/***/ "./src/app/modules/transportation/routing/transport-schedules/transport-schedules.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/transport-schedules/transport-schedules.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vcm91dGluZy90cmFuc3BvcnQtc2NoZWR1bGVzL3RyYW5zcG9ydC1zY2hlZHVsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/transportation/routing/transport-schedules/transport-schedules.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/transport-schedules/transport-schedules.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TransportSchedulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportSchedulesComponent", function() { return TransportSchedulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_Transport_schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/Transport/schedule.service */ "./src/app/service/Transport/schedule.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var TransportSchedulesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TransportSchedulesComponent, _super);
    function TransportSchedulesComponent(router, scheduleService, snackBar) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.scheduleService = scheduleService;
        _this.snackBar = snackBar;
        _this.rows = [];
        _this.custRowsPerPageOptions = [];
        _this.currentComponent = 'TransportSchedulesComponent';
        _this.initializeFilterView();
        _this.setColumnHeaders();
        _this.initializeTableSettings();
        return _this;
    }
    TransportSchedulesComponent.prototype.ngOnInit = function () {
        this.httpStatus = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
        }
        this.getAllFilteredTransportSchedule();
    };
    TransportSchedulesComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].PAGESIZE,
        };
    };
    TransportSchedulesComponent.prototype.setColumnHeaders = function () {
        this.cols = [
            { field: 'name', header: 'Schedule Name', sort: true },
            { field: 'inboundOrOutbound', header: 'Type', sort: true },
            { field: 'startTime', header: 'Start Time', sort: true },
            { field: 'endTime', header: 'End Time', sort: true },
            { field: 'actions', header: 'Actions', sort: false }
        ];
    };
    TransportSchedulesComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.cols,
            model: this.filterViewModel,
            tablename: 'Transportation Schedules',
            componentName: this.currentComponent,
        };
    };
    TransportSchedulesComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.getAllFilteredTransportSchedule();
    };
    TransportSchedulesComponent.prototype.getAllFilteredTransportSchedule = function () {
        var _this = this;
        this.scheduleService.TransportSchedules(this.filterViewModel.sortBy, this.filterViewModel.scheduleName, this.filterViewModel.routeTypeId, this.filterViewModel.startTime, this.filterViewModel.startTimeBegin, this.filterViewModel.startTimeEnd, this.filterViewModel.endTimeBegin, this.filterViewModel.endTimeEnd, this.filterViewModel.endTime, this.filterViewModel.sortOrder, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).
            subscribe(function (res) {
            _this.bindTransportRoutesResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    TransportSchedulesComponent.prototype.bindTransportRoutesResult = function (data) {
        if (!data.transportSchedulesDataView) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            data.transportSchedulesDataView.list.map(function (e) {
                e.startTime = e.startTime ? e.startTime.substring(0, 5) : null;
                e.endTime = e.endTime ? e.endTime.substring(0, 5) : null;
            });
            this.rows = data.transportSchedulesDataView.list;
            this.totalRowsCount = data.transportSchedulesDataView.totalItems;
            this.pageCnt = data.transportSchedulesDataView.totalPages;
            this.rows.forEach(function (e) {
                if (e.inboundOrOutbound === 'I') {
                    e.inboundOrOutbound = 'InBound';
                }
                else {
                    e.inboundOrOutbound = 'OutBound';
                }
                e.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].EDIT
                    }, {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VIEW_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].DETAILS_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VIEW
                    }
                ];
            });
        }
        if (data.transportSchedulesDataView) {
            this.filterViewModel.pageNumber = data.transportSchedulesDataView.pageNumber;
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.cols,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'Transportation Schedules',
            componentName: this.currentComponent,
            custRowsPerPageOptions: this.custRowsPerPageOptions,
            isPaginationRequired: true,
            filtersList: data.filters,
            headerOperations: {
                addingForm: {
                    required: true,
                    btnName: app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].NEW
                },
                infoButton: {
                    required: true,
                    text: 'Schedules'
                }
            }
        };
    };
    TransportSchedulesComponent.prototype.onAddFormClick = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_6__["RouteConfig"]._Add_Transport_Schedule]);
    };
    TransportSchedulesComponent.prototype.actions = function (operationData) {
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].VIEW.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_6__["RouteConfig"]._View_Transport_Schedule + operationData.clickedRow.id]);
        }
        else {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_6__["RouteConfig"]._Edit_Transport_Schedule + operationData.clickedRow.id]);
        }
    };
    TransportSchedulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transport-schedules',
            template: __webpack_require__(/*! ./transport-schedules.component.html */ "./src/app/modules/transportation/routing/transport-schedules/transport-schedules.component.html"),
            providers: [app_service_Transport_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"]],
            styles: [__webpack_require__(/*! ./transport-schedules.component.scss */ "./src/app/modules/transportation/routing/transport-schedules/transport-schedules.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_service_Transport_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], TransportSchedulesComponent);
    return TransportSchedulesComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/transportation/routing/vehicle-route-database/vehicle-route-database.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/vehicle-route-database/vehicle-route-database.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"px-sm-40 pt-sm-40\">\n  <div class=\"py-8 px-20 font-size-18 text-uppercase\" translate>Vehicle Route Database</div>\n  <div class=\"mat-elevation-z3 simple-table-container radius-t-20\">\n    <form [formGroup]=\"routeTypeForm\">\n      <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"start center\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex=\"100\">         \n          <af-select class=\"pt-20 w-332\" [required]=\"true\" [options]=\"routeTypes\" placeholder=\"Route Type\"\n            label=\"Route Type\" (selectionChange)=\"getTableDataDetails($event)\" formControlName=\"routeTypeId\"\n            appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\"  [value]=\"selectedItem\"></af-select>\n        </div>\n        <div class=\"pb-20\" fxLayout=\"row\">\n          <button mat-raised-button color=\"accent\" type=\"button\" class=\" text-uppercase mr-12\"\n            (click)=\"reDirect()\">{{'new route' | translate}}\n          </button>\n          <button (click)=\"getHelpText('Routes')\" mat-button type='button'>\n            <mat-icon  class=\"grey-600-fg\">info</mat-icon>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n<app-table *ngIf=\"routeTypeForm.valid\" [settings]=\"tableSettings\" (getTableData)='tableData($event)'\n  (rowBasedAction)='actions($event)'></app-table>\n\n<app-custom-card *ngIf=\"!routeTypeForm.valid\" [title]=\"'List Of Vehicle Routes'\"\n  [inputMessage]=\"'Please Select Route Type'\">\n</app-custom-card>\n"

/***/ }),

/***/ "./src/app/modules/transportation/routing/vehicle-route-database/vehicle-route-database.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/vehicle-route-database/vehicle-route-database.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vcm91dGluZy92ZWhpY2xlLXJvdXRlLWRhdGFiYXNlL3ZlaGljbGUtcm91dGUtZGF0YWJhc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/transportation/routing/vehicle-route-database/vehicle-route-database.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/vehicle-route-database/vehicle-route-database.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: VehicleRouteDatabaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleRouteDatabaseComponent", function() { return VehicleRouteDatabaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/Transport/routing.service */ "./src/app/service/Transport/routing.service.ts");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/custom-dialog/custom-dialog.component */ "./src/app/shared/custom-dialog/custom-dialog.component.ts");











var VehicleRouteDatabaseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VehicleRouteDatabaseComponent, _super);
    function VehicleRouteDatabaseComponent(router, routingService, dialog, commonService, dialogRef, snackBar) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.routingService = routingService;
        _this.dialog = dialog;
        _this.commonService = commonService;
        _this.dialogRef = dialogRef;
        _this.snackBar = snackBar;
        _this.rows = [];
        _this.custRowsPerPageOptions = [];
        _this.currentComponent = 'VehicleRouteDatabaseComponent';
        _this.initializeForm();
        _this.initializeFilterView();
        _this.setColumnHeaders();
        _this.initializeTableSettings();
        return _this;
    }
    VehicleRouteDatabaseComponent.prototype.ngOnInit = function () {
        this.getRouteTypes();
        var modelTableComponent = this.getModelComponent(this.currentComponent);
        if (modelTableComponent) {
            this.filterViewModel = modelTableComponent;
            if (this.filterViewModel.routeTypeId && this.filterViewModel.routeTypeId.length) {
                var id = this.filterViewModel.routeTypeId[0];
                this.routeTypeForm.controls['routeTypeId'].setValue(id);
                this.selectedItem = id;
                this.getAllFilteredTransportRoutes();
            }
        }
    };
    VehicleRouteDatabaseComponent.prototype.getRouteTypes = function () {
        var _this = this;
        this.routeTypesData = [];
        this.routingService.routeTypes().
            subscribe(function (res) {
            res.forEach(function (e) {
                _this.routeTypesData.push({
                    value: e.id, label: e.name,
                    code: e.code
                });
            });
            _this.routeTypes = _this.routeTypesData;
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    VehicleRouteDatabaseComponent.prototype.initializeForm = function () {
        this.routeTypeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            routeTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    };
    VehicleRouteDatabaseComponent.prototype.initializeFilterView = function () {
        this.filterViewModel = {
            sortBy: '',
            sortOrder: 0,
            pageNumber: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGENUMBER,
            pageSize: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].PAGESIZE,
        };
    };
    VehicleRouteDatabaseComponent.prototype.setColumnHeaders = function () {
        this.cols = [
            { field: 'routeName', header: 'Route Name', sort: true },
            { field: 'routeNumber', header: 'Route Number', sort: true },
            { field: 'routeDescription', header: 'Route Description', sort: true },
            { field: 'routeType', header: 'Route Type', sort: false },
            { field: 'actions', header: 'Actions', sort: false }
        ];
    };
    VehicleRouteDatabaseComponent.prototype.initializeTableSettings = function () {
        this.tableSettings = {
            rows: [],
            columns: this.cols,
            model: this.filterViewModel,
            tablename: 'List Of Vehicle Routes',
            componentName: this.currentComponent,
        };
    };
    VehicleRouteDatabaseComponent.prototype.getTableDataDetails = function (data) {
        this.routeTypeForm.controls['routeTypeId'].reset();
        if (data && !Array.isArray(data)) {
            this.filterViewModel.routeTypeId = [data];
        }
        else {
            this.filterViewModel.routeTypeId = [];
        }
        this.getAllFilteredTransportRoutes();
    };
    VehicleRouteDatabaseComponent.prototype.tableData = function (_event) {
        this.filterViewModel = _event;
        this.filterViewModel.routeTypeId = [this.routeTypeForm.value.routeTypeId];
        this.getAllFilteredTransportRoutes();
    };
    VehicleRouteDatabaseComponent.prototype.getAllFilteredTransportRoutes = function () {
        var _this = this;
        this.setModelDataTableComponent(this.currentComponent, this.filterViewModel);
        this.routingService.vehicleRouteS(this.filterViewModel.sortBy, this.filterViewModel.routeName, this.filterViewModel.routeNumber, this.filterViewModel.routeTypeId, this.filterViewModel.routeDescription, this.filterViewModel.sortOrder, this.filterViewModel.pageNumber, this.filterViewModel.pageSize).
            subscribe(function (res) {
            _this.bindTransportRoutesResult(res);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    VehicleRouteDatabaseComponent.prototype.actions = function (operationData) {
        var _this = this;
        if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].VIEW.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_5__["RouteConfig"]._View_Route + operationData.clickedRow.id + '/' + operationData.clickedRow.routeType]);
        }
        else if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT.toLowerCase()) {
            this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_5__["RouteConfig"]._Edit_Route + operationData.clickedRow.id]);
        }
        else if (operationData.operation === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE.toLowerCase()) {
            var dialogRef = this.dialog.open(app_shared_custom_dialog_custom_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CustomDialogComponent"], {
                width: '400px',
                disableClose: true,
                data: { text: this.commonService.getTranslation('Pleaseconfirmtodeletetheselectedroute'), action: true, btn1Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].NO, btn2Text: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES },
            });
            // Conformation for Delete Route
            dialogRef.afterClosed().subscribe(function (action) {
                if (action === app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].YES) {
                    _this.routingService.deleteTransportRoute(operationData.clickedRow.id).
                        subscribe(function (res) {
                        _this.deleteTransportRoutesResult(res);
                    }, function (error) {
                        _this.errorResponse(error);
                    });
                }
            });
        }
    };
    VehicleRouteDatabaseComponent.prototype.deleteTransportRoutesResult = function (data) {
        this.getAllFilteredTransportRoutes();
        this.openSnackBar(data.messages.ResultMessage);
    };
    VehicleRouteDatabaseComponent.prototype.bindTransportRoutesResult = function (data) {
        if (!data.vehicleDetailsDataView) {
            this.rows = [];
            this.totalRowsCount = 0;
            this.pageCnt = 0;
        }
        else {
            this.rows = data.vehicleDetailsDataView.list;
            this.totalRowsCount = data.vehicleDetailsDataView.totalItems;
            this.pageCnt = data.vehicleDetailsDataView.totalPages;
            this.rows.forEach(function (e) {
                e.operations = [
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].EDIT
                    }, {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].VIEW_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DETAILS_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].VIEW
                    },
                    {
                        name: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE_OPERATION,
                        icon: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE_ICON,
                        operationName: app_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppSettings"].DELETE
                    }
                ];
            });
        }
        if (data.vehicleDetailsDataView) {
            this.filterViewModel.pageNumber = data.vehicleDetailsDataView.pageNumber;
        }
        this.tableSettings = {
            model: this.filterViewModel,
            rows: this.rows,
            columns: this.cols,
            totalRowsCount: this.totalRowsCount,
            pageCnt: this.pageCnt,
            tablename: 'List Of Vehicle Routes',
            componentName: this.currentComponent,
            isPaginationRequired: true,
            filtersList: data.filters.filter(function (x) { return x.type === 'text'; }),
        };
    };
    VehicleRouteDatabaseComponent.prototype.reDirect = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_5__["RouteConfig"]._Add_Route]);
    };
    VehicleRouteDatabaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vehicle-route-database',
            template: __webpack_require__(/*! ./vehicle-route-database.component.html */ "./src/app/modules/transportation/routing/vehicle-route-database/vehicle-route-database.component.html"),
            providers: [app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"]],
            styles: [__webpack_require__(/*! ./vehicle-route-database.component.scss */ "./src/app/modules/transportation/routing/vehicle-route-database/vehicle-route-database.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_8__["RoutingService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], VehicleRouteDatabaseComponent);
    return VehicleRouteDatabaseComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/transportation/routing/view-common-route/view-common-route.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/view-common-route/view-common-route.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n     \n     <div fxLayout=\"row\" class=\"text-right border-bottom mb-20 pb-12\" fxLayoutAlign=\"space-between center\">\n        <div class=\"font-size-20\">Select the Route Point <small>or</small> Add new Point</div>\n        <div fxLayout=\"row\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"duration\">\n                <mat-icon class=\"mr-4 grey-600-fg\">access_time</mat-icon>\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                  <span class=\"grey-500-fg\">Travel Time</span>\n                  <span>{{duration}}</span>\n                </div>\n              </div>\n              <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"px-24\" *ngIf=\"distance\">\n                <mat-icon class=\"mr-4 grey-600-fg\">place</mat-icon>\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                  <span class=\"grey-500-fg\">Total Distance</span>\n                  <span>{{distance}} km</span>\n                </div>\n              </div>\n        </div>\n       \n      </div>\n\n     <mat-dialog-content class=\"mat-typography\"> \n      <div class=\"mat-elevation-z6 radius-5\">\n      <agm-map  class=\"h-540\" appDirectionsMap [showDirection]=\"true\" (mapClick)=\"mapClicked($event)\" ravelMode=\"DRIVING\"\n       [clickableIcons]=\"false\"  [streetViewControl]=\"false\" (dblclick)=\"mapDoubleClicked($event)\"\n       [disableDefaultUI]=\"true\" [markers]=\"markers\"\n       [zoom]=\"markers?.length ? 10 : 4\"  [fitBounds]=\"markers?.length ? true : false\"\n       (getDirections)=\"getDirections($event)\">\n        <agm-marker *ngFor=\"let m of markers;let i = index;\"\n        [latitude]=\"m.latitude\" [markerDraggable]=\"false\" [label]=\"m.studentIcon ? {color: 'blue', text: (m?.position)?.toString()} : (m.position)?.toString()\"\n        [longitude]=\"m.longitude\"  [agmFitBounds]=\"true\">\n          <agm-info-window [isOpen]=\"m.openInfoWindow || m.studentIcon\"> \n            <div class=\"font-size-14 pr-20\">{{m.pointAddres}} </div> \n            <div fxLayoutAlign=\"end center\" class=\"pt-8\"> \n            <button *ngIf=\"!m.studentIcon\" (click)=\"onClickRouteMarker(m,i)\"  mat-stroked-button color=\"accent\">\n                {{'Select Stop' | translate}}\n              </button>\n            </div>    \n          </agm-info-window>\n        </agm-marker>\n\n        <agm-marker *ngIf=\"selectedPoint?.latitude\" [latitude]=\"selectedPoint?.latitude\" \n         [label]=\"{color: 'blue', text: selectedPoint?.position?.toString() ? selectedPoint?.position?.toString() : ' '}\"\n        [longitude]=\"selectedPoint?.longitude\" [agmFitBounds]=\"true\" [markerDraggable]=\"true\" (dragEnd)=\"addMarker($event,true)\">\n          <agm-info-window [isOpen]=\"true\"  (infoWindowClose)=\"selectedPoint = null\" >\n            <div class=\"font-size-14 pr-20\">{{selectedPoint.pointAddres}} </div> \n            <div fxLayoutAlign=\"end center\" class=\"pt-8\"> \n                <mat-form-field fxFlexFill appearance=\"outline\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"32\" class=\"formfield-pb-0\">\n                    <mat-label translate #infoWindo>Add At Stop</mat-label>\n                    <input [formControl]=\"infoWindow\" (keyup)=\"preventSpace($event)\" matInput required>  \n                    \n                  </mat-form-field>\n            <button (click)=\"addSelectedPoint()\" mat-raised-button color=\"accent\" [disabled]=\"infoWindow?.invalid\" class=\"ml-8\">\n              {{'Add Stop & Select' | translate}}\n            </button>\n            </div>\n          </agm-info-window>\n        </agm-marker>\n\n        <agm-marker [agmFitBounds]=\"markers?.length ? false : true\" *ngIf=\"currentLocation\"\n        [latitude]=\"currentLocation?.latitude\" [markerDraggable]=\"currentLocation?.draggable\"\n        [longitude]=\"currentLocation?.longitude\" [label]=\"currentLocation?.label\" [agmFitBounds]=\"true\" [iconUrl]=\"'assets/images/custom-icons/currentlocation.png'\" > \n        </agm-marker>\n\n      </agm-map> \n    </div>\n      <div class=\"simple-table-container mat-elevation-z6 my-20 radius-t-20\" *ngIf=\"markers.length>0\">\n        <table class=\"simple\" cdkDropList (cdkDropListDropped)=\"onListDrop($event)\">\n          <thead>\n            <tr>\n              <th>Stop No</th>\n              <th>Name</th>\n              <th>Students Count</th>\n              <th>Latitute</th>\n              <th>Longitude</th>\n              <th>Position Address</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr  cdkDrag *ngFor=\"let column of markers\" class=\"cursor-drag\">\n              <td>{{column.position}}</td>\n              <td>{{column.name}}</td>\n              <td>{{column.studentCount ? column.studentCount : 0}}</td>\n              <td>{{column.latitude}}</td>\n              <td>{{column.longitude}}</td>\n              <td>{{column.pointAddres}}</td>           \n            </tr>\n          </tbody>\n        </table>\n      </div>   \n    \n  </mat-dialog-content>\n     <mat-dialog-actions align=\"end\" class=\"pb-20 border-top\">\n        <button mat-raised-button color=\"primary\" translate [mat-dialog-close]=\"true\" class=\"text-uppercase\">{{'cancel' | translate}}</button>\n       <button (click)=\"onBackButtonClick()\"  mat-raised-button [mat-dialog-close]=\"true\" cdkFocusInitial color=\"accent\" class=\"text-uppercase\">\n          {{'Ok' | translate}}\n        </button>\n     </mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/modules/transportation/routing/view-common-route/view-common-route.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/view-common-route/view-common-route.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .agm-map-container-inner {\n  border-radius: 6px; }\n  ::ng-deep .agm-map-container-inner .gm-ui-hover-effect {\n    top: 0 !important;\n    right: 0 !important; }\n  ::ng-deep .agm-map-container-inner .gm-style-cc {\n    display: none; }\n  ::ng-deep .agm-map-container-inner .agm-info-window-content {\n    max-width: 400px; }\n  .table.simple tr:last-child td {\n  border-bottom: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vcm91dGluZy92aWV3LWNvbW1vbi1yb3V0ZS92aWV3LWNvbW1vbi1yb3V0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQixFQUFBO0VBRnRCO0lBSVEsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBO0VBTDNCO0lBUVEsYUFBYSxFQUFBO0VBUnJCO0lBV08sZ0JBQWdCLEVBQUE7RUFJdkI7RUFHWSw4QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vcm91dGluZy92aWV3LWNvbW1vbi1yb3V0ZS92aWV3LWNvbW1vbi1yb3V0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcHtcbi5hZ20tbWFwLWNvbnRhaW5lci1pbm5lcntcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgLmdtLXVpLWhvdmVyLWVmZmVjdHtcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5nbS1zdHlsZS1jY3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgIC5hZ20taW5mby13aW5kb3ctY29udGVudHtcbiAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgfVxufVxufSAgXG4udGFibGUuc2ltcGxle1xuICAgIHRye1xuICAgICAgICAmOmxhc3QtY2hpbGQgdGR7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOm5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/modules/transportation/routing/view-common-route/view-common-route.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/view-common-route/view-common-route.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ViewCommonRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCommonRouteComponent", function() { return ViewCommonRouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/Transport/routing.service */ "./src/app/service/Transport/routing.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");










var ViewCommonRouteComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ViewCommonRouteComponent, _super);
    function ViewCommonRouteComponent(ngZone, changedetector, dialogRef, commonService, mapsAPILoader, snackBar) {
        var _this = _super.call(this) || this;
        _this.ngZone = ngZone;
        _this.changedetector = changedetector;
        _this.dialogRef = dialogRef;
        _this.commonService = commonService;
        _this.mapsAPILoader = mapsAPILoader;
        _this.snackBar = snackBar;
        _this.onSelectLocation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.markers = [];
        _this.fitBounds = false;
        _this.zoom = 4;
        _this.markersCount = 0;
        _this.isSingleClick = true;
        _this.lastPointIndexPosition = 0;
        _this.infoWindow = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["Pattern"].NATURAL_NUMBER_PATTERN)]);
        return _this;
    }
    ViewCommonRouteComponent.prototype.ngOnInit = function () {
        this.markers = [];
        if (this.routePoints) {
            this.setRouteDetails(this.routePoints);
        }
        this.setCurrentLoation();
    };
    ViewCommonRouteComponent.prototype.setCurrentLoation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.currentLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                _this.changedetector.detectChanges();
            });
        }
    };
    ViewCommonRouteComponent.prototype.setRouteDetails = function (data) {
        var _this = this;
        this.markers = [];
        var pointMatched = false;
        var _loop_1 = function (marker) {
            this_1.ngZone.run(function () {
                _this.markers.push({
                    name: marker.name,
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                    position: marker.position,
                    pointAddres: marker.pointAddres,
                    latlng: { lat: marker.latitude, lng: marker.longitude },
                    id: marker.id ? marker.id : null,
                    transportRouteId: marker.transportRouteId,
                    studentCount: marker.studentCount
                });
                if (marker.id === _this.selectedPoint.id) {
                    pointMatched = true;
                    _this.markers[_this.markers.length - 1].studentIcon = true;
                    _this.markers[_this.markers.length - 1].openInfoWindow = true;
                }
            });
        };
        var this_1 = this;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var marker = data_1[_i];
            _loop_1(marker);
        }
        if (!pointMatched) {
            if (!this.selectedPoint.id && this.selectedPoint.latitude) {
                this.selectedPoint.latlng = { lat: this.selectedPoint.latitude, lng: this.selectedPoint.longitude };
                this.selectedPoint.studentIcon = true;
                this.selectedPoint.openInfoWindow = true;
                this.markers.splice(this.selectedPoint.position - 1, 0, this.selectedPoint);
                var temp = [];
                for (var i = 0; i < this.markers.length; i++) {
                    if (i >= +this.selectedPoint.position) {
                        this.markers[i].position = this.markers[i].position + 1;
                    }
                    temp.push(this.markers[i]);
                }
                this.markers = temp;
                this.selectedPoint = {};
            }
            else {
                this.selectedPoint = this.requestedPoint;
            }
        }
        else {
            this.selectedPoint = {};
        }
        this.markerOptionsData = this.markers;
        this.infoWindow.setValue(this.markers.length + 1);
        this.markerOptionsData.sort(function (a, b) { return a.position - b.position; });
        this.markers = this.markerOptionsData;
        this.changedetector.detectChanges();
    };
    ViewCommonRouteComponent.prototype.onBackButtonClick = function () {
        this.onSelectLocation.emit(this.outputData);
    };
    ViewCommonRouteComponent.prototype.getwayPoints = function (index) {
        var wayPoints = [];
        if (this.markers.length > 2) {
            for (var i = (this.outputData.inBound ? index + 1 : 1); i < (this.outputData.inBound ? this.markers.length - 1 : index - 1); i++) {
                wayPoints.push({
                    location: { lat: this.markers[i].latitude, lng: this.markers[i].longitude },
                    stopover: false
                });
            }
            return wayPoints;
        }
        else {
            return [];
        }
    };
    ViewCommonRouteComponent.prototype.setMarkerData = function (point) {
        return { lat: point.latitude, lng: point.longitude };
    };
    ViewCommonRouteComponent.prototype.mapDoubleClicked = function ($event) {
        this.isSingleClick = false;
    };
    ViewCommonRouteComponent.prototype.mapClicked = function ($event) {
        var _this = this;
        this.isSingleClick = true;
        setTimeout(function () {
            if (_this.isSingleClick) {
                _this.resetMarkerPoints();
                _this.addMarker($event);
            }
        }, 500);
    };
    ViewCommonRouteComponent.prototype.resetMarkerPoints = function (marker) {
        if (marker === void 0) { marker = false; }
        var temp = [];
        this.routePoints = this.routePoints.filter(function (e) { return e.id; });
        this.routePoints = this.routePoints.sort(function (a, b) { return a.position - b.position; });
        for (var i = 0; i < this.routePoints.length; i++) {
            this.routePoints[i].position = i + 1;
            if (marker && (this.routePoints[i].latitude === marker.latitude && this.routePoints[i].longitude === marker.longitude)) {
                this.routePoints[i].studentIcon = true;
            }
            else {
                this.routePoints[i].studentIcon = false;
            }
            temp.push(this.routePoints[i]);
        }
        this.markers = temp;
    };
    ViewCommonRouteComponent.prototype.addSelectedPoint = function () {
        if (this.isMarkerAlreadyExists(this.selectedPoint) === -1) {
            this.findClosest(this.selectedPoint);
        }
        else {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].LOCATION_ALREADY_EXISTS, true);
        }
    };
    ViewCommonRouteComponent.prototype.addMarker = function ($event, onDrag) {
        var _this = this;
        if (onDrag === void 0) { onDrag = false; }
        if (navigator.geolocation) {
            var geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng($event.coords.lat, $event.coords.lng);
            var request = { latLng: latlng };
            geocoder.geocode(request, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var result_1 = results[0];
                    if (result_1) {
                        _this.ngZone.run(function () {
                            _this.selectedPoint = {
                                latitude: $event.coords.lat,
                                longitude: $event.coords.lng,
                                pointAddres: result_1.formatted_address,
                                draggable: true,
                                label: '',
                                position: '',
                                name: _this.getAddressObject(result_1),
                                latlng: {
                                    lat: $event.coords.lat,
                                    lng: $event.coords.lng
                                },
                                inBound: _this.inBound
                            };
                            _this.infoWindow.setValue(_this.markers.length + 1);
                        });
                    }
                    else {
                        _this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].ADDRESS_NOT_FOUND, true);
                    }
                }
            });
        }
    };
    ViewCommonRouteComponent.prototype.findClosest = function (pt) {
        var closest = [];
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(pt.latitude, pt.longitude), new google.maps.LatLng(this.markers[i].latitude, this.markers[i].longitude));
            closest.push(this.markers[i]);
        }
        closest.sort(function (a, b) { return (a.distance - b.distance); });
        var distanceBWpoints = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(closest[0].latitude, closest[0].longitude), new google.maps.LatLng(closest[1].latitude, closest[1].longitude));
        var finalPosition;
        if (closest[1].distance > distanceBWpoints) {
            if (closest[0].position > closest[1].position) {
                finalPosition = closest[0].position + 1;
            }
            else {
                finalPosition = closest[0].position;
            }
        }
        else {
            if (closest[0].position > closest[1].position) {
                finalPosition = closest[0].position;
            }
            else {
                finalPosition = closest[0].position + 1;
            }
        }
        finalPosition = this.infoWindow.value > this.markers.length ? this.markers.length + 1 : this.infoWindow.value;
        // this is for removing marker if points way_points_exceeds
        this.lastPointIndexPosition = finalPosition;
        this.selectedPoint.position = finalPosition;
        this.selectedPoint.label = finalPosition;
        this.selectedPoint.studentIcon = true;
        this.markers.splice(finalPosition - 1, 0, this.selectedPoint);
        this.selectedPoint = {};
        var temp = [];
        for (var i = 0; i < this.markers.length; i++) {
            if (i >= finalPosition) {
                this.markers[i].position = i + 1;
            }
            temp.push(this.markers[i]);
        }
        this.markers = temp;
        this.outputData = {
            selectedPoint: this.markers[finalPosition - 1] ? this.markers[finalPosition - 1] : this.markers[this.markers.length - 1],
            selectedRouteMarker: false,
            inBound: this.inBound,
            updatedPoints: this.markers
        };
        this.changedetector.detectChanges();
    };
    ViewCommonRouteComponent.prototype.onClickRouteMarker = function (obj, i) {
        this.resetMarkerPoints(obj);
        var updatedPosition = this.markers.findIndex(function (e) { return e.latitude === obj.latitude && e.longitude === obj.longitude; });
        obj.position = updatedPosition + 1;
        this.outputData = {
            selectedPoint: obj,
            selectedRouteMarker: true,
            inBound: this.inBound,
            updatedPoints: this.markers
        };
    };
    ViewCommonRouteComponent.prototype.isMarkerAlreadyExists = function (currentMarker) {
        return this.markers.findIndex(function (e) {
            return (e.latitude.toPrecision(6) === currentMarker.latitude.toPrecision(6) && e.longitude.toPrecision(6) === currentMarker.longitude.toPrecision(6));
        });
    };
    ViewCommonRouteComponent.prototype.getAddressObject = function (result) {
        var ShouldBeComponent = {
            premise: 'premise',
            route: 'route',
            sublocality_level_2: 'sublocality_level_2',
            sublocality_level_1: 'sublocality_level_1'
        };
        var address = {
            premise: '',
            route: '',
            sublocality_level_2: '',
            sublocality_level_1: ''
        };
        result.address_components.forEach(function (component) {
            for (var shouldBe in ShouldBeComponent) {
                if (component.types.indexOf(ShouldBeComponent[shouldBe]) !== -1) {
                    address[shouldBe] = component.long_name ? component.long_name + ',' : '';
                }
            }
        });
        var data = (address.premise + '' + address.route + '' + address.sublocality_level_2 + '' + address.sublocality_level_1).replace(/,+/g, ',').replace(/,\s*$/, '');
        return data ? data : result.formatted_address.substring(0, 45);
    };
    ViewCommonRouteComponent.prototype.getDirections = function (event) {
        if (event.status === 'OK') {
            this.distance = 0;
            this.duration = 0;
            var myroute = event.routes[0];
            for (var i = 0; i < myroute.legs.length; i++) {
                this.distance += myroute.legs[i].distance.value;
                this.duration += myroute.legs[i].duration.value;
            }
            this.distance = Math.round(this.distance / 1000);
            this.duration = this.duration / 60;
            this.duration = (Math.floor(this.duration / 60) ? Math.floor(this.duration / 60) + 'hr ' : '') + Math.round(this.duration % 60) + 'min ';
            return;
        }
        else if (event.status === 'ZERO_RESULTS') {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].DISTANCE_NOT_FOUND_VIA_ROAD, true);
        }
        else if (event.status === 'MAX_WAYPOINTS_EXCEEDED') {
            this.openSnackBar(app_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].MAX_WAY_POINTS_EXCEEDS, true);
        }
        this.resetMarkerPoints();
        this.outputData = null;
    };
    ViewCommonRouteComponent.prototype.onListDrop = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["moveItemInArray"])(this.markers, event.previousIndex, event.currentIndex);
        var temp = [];
        this.markers.map(function (e, i) {
            e.position = i + 1;
            temp.push(e);
        });
        this.markers = temp;
        this.changedetector.detectChanges();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewCommonRouteComponent.prototype, "routePoints", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewCommonRouteComponent.prototype, "inBound", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewCommonRouteComponent.prototype, "selectedPoint", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewCommonRouteComponent.prototype, "requestedPoint", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ViewCommonRouteComponent.prototype, "onSelectLocation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"])
    ], ViewCommonRouteComponent.prototype, "agmMap", void 0);
    ViewCommonRouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-common-route',
            template: __webpack_require__(/*! ./view-common-route.component.html */ "./src/app/modules/transportation/routing/view-common-route/view-common-route.component.html"),
            providers: [app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_3__["RoutingService"]],
            styles: [__webpack_require__(/*! ./view-common-route.component.scss */ "./src/app/modules/transportation/routing/view-common-route/view-common-route.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ViewCommonRouteComponent);
    return ViewCommonRouteComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/transportation/routing/view-route/view-route.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/view-route/view-route.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content p-sm-40\" *ngIf=\"markers?.length > 0\">\n  <div class=\"w-100-p mat-elevation-z3 simple-table-container radius-t-20\" fxLayout=\"column\">\n    <div fxLayout.gt-sm=\"row\" fxLayout=\"column\" fxFlex=\"100\" fxLayoutAlign.gt-sm=\"space-between center\" class=\"p-12\">\n      <h2>{{!trackingPoint ? 'Route Point Details' : 'Track Route ----------- Total Route Time and Distance --->' | translate}}{{routeName ? '('+routeName+')' : ''}}</h2>\n      <div fxLayout=\"row\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"duration\">\n          <mat-icon class=\"mr-4 grey-600-fg\">access_time</mat-icon>\n          <div fxLayout=\"column\">\n            <span class=\"grey-500-fg\" translate>Travel Time</span>\n            <span>{{ duration }}</span>\n          </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"px-24\" *ngIf=\"distance\">\n          <mat-icon class=\"mr-4 grey-600-fg\">place</mat-icon>\n          <div fxLayout=\"column\">\n            <span class=\"grey-500-fg\" translate>Total Distance</span>\n            <span>{{ distance }} km</span>\n          </div>\n        </div>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n        <button *ngIf=\"!trackingPoint\" mat-raised-button translate type=\"button\" color=\"primary\" class=\"mr-4 text-uppercase\"\n          (click)=\"onBackButtonClick()\">{{(fromStudentTransport ? 'Close' : 'Back') | translate}}</button>\n        <button mat-button *ngIf=\"!fromStudentTransport\" (click)=\"getHelpText('Routes')\">\n          <mat-icon class=\"grey-600-fg\">info</mat-icon>\n        </button>\n      </div>\n    </div>\n\n    <agm-map appDirectionsMap (getDirections)=\"getDirections($event)\" [markers]=\"markers\" [zoom]=\"zoom\" [fitBounds]=\"true\" class=\"h-600\" [streetViewControl]=\"false\" >\n      <!-- <agm-direction *ngIf=\"markers?.length > 1\" [origin]=\"markers[0]?.latlng\"\n        [destination]=\"markers[markers.length - 1].latlng\" travelMode=\"DRIVING\" [optimizeWaypoints]=\"false\"\n        [renderOptions]=\"renderOptions\" [markerOptions]=\"markerOptions\" [waypoints]=\"wayPoints\">\n      </agm-direction> -->\n\n      <agm-marker *ngIf=\"trackingPoint\"  [iconHeight]=\"20\" [iconWidth]=\"20\"\n      [agmFitBounds]=\"true\"\n      [label]=\"test\" [iconUrl]=\"icon\"  [latitude]=\"trackingPoint.lat\" [longitude]=\"trackingPoint.lng\"></agm-marker>\n\n      <span *ngFor=\"let m of markers; let i = index; let l = last; let f = first\">\n        <agm-marker [latitude]=\"m.latitude\"\n          [longitude]=\"m.longitude\" [agmFitBounds]=\"true\"\n          [label]=\"m.studentIcon ? {color: 'blue', text: (m?.position)?.toString()} : (m.position)?.toString()\">\n          <agm-info-window [isOpen]=\"m.studentIcon\">\n            {{ m.pointAddress }}\n          </agm-info-window>\n        </agm-marker>\n      </span>\n    </agm-map>\n    <div class=\"simple-table-container\" *ngIf=\"markers.length > 0\">\n      <table class=\"simple\">\n        <thead>\n          <tr>\n            <th>{{'Sr No.' | translate}}</th>\n            <th>{{'Name' | translate}}</th>\n            <th>{{'Latitute' | translate}}</th>\n            <th>{{'Longitude' | translate}}</th>\n            <th>{{'Position Address' | translate}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let column of markers\" [ngClass]=\"{'student-location': column.studentIcon}\">\n            <td>{{ column.position }}</td>\n            <td>{{ column.name }}</td>\n            <td>{{ column.latitude }}</td>\n            <td>{{ column.longitude }}</td>\n            <td>{{ column.pointAddress }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/transportation/routing/view-route/view-route.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/view-route/view-route.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-location {\n  background-color: #98c198; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L2h0bWwvc2Nob29sLW1hbmFnZW1lbnQtZnVzZS9zcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vcm91dGluZy92aWV3LXJvdXRlL3ZpZXctcm91dGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vcm91dGluZy92aWV3LXJvdXRlL3ZpZXctcm91dGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R1ZGVudC1sb2NhdGlvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThjMTk4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/transportation/routing/view-route/view-route.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/view-route/view-route.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ViewRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRouteComponent", function() { return ViewRouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/Transport/routing.service */ "./src/app/service/Transport/routing.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var ViewRouteComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ViewRouteComponent, _super);
    function ViewRouteComponent(commonService, ngZone, router, routes, routingService, changedetector, mapsAPILoader, location, snackBar) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        _this.ngZone = ngZone;
        _this.router = router;
        _this.routes = routes;
        _this.routingService = routingService;
        _this.changedetector = changedetector;
        _this.mapsAPILoader = mapsAPILoader;
        _this.location = location;
        _this.snackBar = snackBar;
        _this.markers = [];
        _this.markerOptions = { origin: { label: '1' }, destination: { label: '2' } };
        _this.renderOptions = {
            suppressMarkers: true,
        };
        _this.zoom = 4;
        _this.fitBounds = false;
        // tslint:disable-next-line:no-output-on-prefix
        _this.onClosePanel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.icon = {
            url: 'assets/images/custom-icons/navigation.gif',
            scaledSize: {
                width: 80,
                height: 80
            }
        };
        return _this;
    }
    ViewRouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params
            .subscribe(function (params) {
            if (params['id']) {
                _this.transportRoutesId = params['id'];
                _this.routeName = params['routeName'];
                _this.getTransportRouteDetails();
            }
        });
        this.markers = [];
    };
    ViewRouteComponent.prototype.ngOnChanges = function (changes) {
        if (!changes.trackingPoint && this.routePoints) {
            this.setRouteDetails(this.routePoints);
        }
    };
    ViewRouteComponent.prototype.getTransportRouteDetails = function () {
        var _this = this;
        this.routingService.transportRoutesDetails(this.transportRoutesId)
            .subscribe(function (res) {
            _this.setRouteDetails(res.transportRouteDetailsView.routePointsDetailsView);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ViewRouteComponent.prototype.setRouteDetails = function (data) {
        var _this = this;
        this.markers = [];
        var _loop_1 = function (marker) {
            this_1.ngZone.run(function () {
                _this.markers.push({
                    name: marker.name,
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                    position: marker.position.toString(),
                    pointAddress: _this.fromStudentTransport ? marker.pointAddres : marker.pointAddress,
                    latlng: { lat: marker.latitude, lng: marker.longitude },
                    studentIcon: marker.studentIcon || false
                });
            });
        };
        var this_1 = this;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var marker = data_1[_i];
            _loop_1(marker);
        }
        if (this.markers && !this.markers.length) {
            return;
        }
        this.markerOptionsData = this.markers;
        this.markerOptionsData.sort(function (a, b) { return parseFloat(a.position) - parseFloat(b.position); });
        this.markers = this.markerOptionsData;
        this.changedetector.detectChanges();
        if (this.markers[0].studentIcon) {
            this.markerOptions.origin['icon'] = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
        }
        else {
            this.markerOptions.origin['icon'] = '';
        }
        if (this.markers[this.markers.length - 1].studentIcon) {
            this.markerOptions.destination['icon'] = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
        }
        else {
            this.markerOptions.destination['icon'] = '';
        }
        this.markerOptions.destination.label = this.markers.length.toString();
        this.wayPoints = [];
        if (this.markers.length > 2) {
            for (var i = 1; i < this.markers.length - 1; i++) {
                this.wayPoints.push({
                    location: { lat: this.markers[i].latitude, lng: this.markers[i].longitude },
                    stopover: false
                });
            }
        }
        else {
            this.wayPoints = [];
        }
        this.changedetector.detectChanges();
        this.changedetector.markForCheck();
    };
    ViewRouteComponent.prototype.setLatLngForDirections = function (markers) {
        var latLng = [];
        for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
            var marker = markers_1[_i];
            latLng.push(marker.latlng);
        }
        return latLng;
    };
    ViewRouteComponent.prototype.getDirections = function (res) {
        this.distance = 0;
        this.duration = 0;
        var response = res.routes[0].legs;
        for (var i = 0; i < response.length; i++) {
            if (response[i].distance) {
                this.distance += response[i].distance.value;
            }
            if (response[i].duration) {
                this.duration += response[i].duration.value;
            }
        }
        this.distance = Math.round(this.distance / 1000);
        this.duration = this.duration / 60;
        this.duration = (Math.floor(this.duration / 60) ? Math.floor(this.duration / 60) + 'hr ' : '') + Math.round(this.duration % 60) + 'min ';
    };
    ViewRouteComponent.prototype.onBackButtonClick = function () {
        if (this.fromStudentTransport) {
            this.onClosePanel.emit();
        }
        else {
            this.location.back();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMap"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMap"])
    ], ViewRouteComponent.prototype, "agmMap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewRouteComponent.prototype, "routePoints", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ViewRouteComponent.prototype, "fromStudentTransport", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewRouteComponent.prototype, "routeName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewRouteComponent.prototype, "trackingPoint", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ViewRouteComponent.prototype, "onClosePanel", void 0);
    ViewRouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-route',
            template: __webpack_require__(/*! ./view-route.component.html */ "./src/app/modules/transportation/routing/view-route/view-route.component.html"),
            providers: [app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"]],
            styles: [__webpack_require__(/*! ./view-route.component.scss */ "./src/app/modules/transportation/routing/view-route/view-route.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_service_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            app_service_Transport_routing_service__WEBPACK_IMPORTED_MODULE_4__["RoutingService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], ViewRouteComponent);
    return ViewRouteComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/modules/transportation/routing/view-transport-schedules/view-transport-schedules.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/view-transport-schedules/view-transport-schedules.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content p-sm-40\">\n  <div class=\"mat-elevation-z3 simple-table-container radius-t-20 mb-20\" fxLayout=\"column\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"p-20\">\n      <div class=\"p-8 text-uppercase font-size-18\" translate>Transport Schedule Details</div>\n      <div>\n        <button mat-raised-button color=\"primary\" translate (click)=\"onBackButtonClick()\" class=\"text-uppercase\"><span translate>Back</span></button>\n        <button mat-button (click)=\"getHelpText('Schedules')\">\n          <mat-icon class=\"grey-600-fg\">info</mat-icon>\n        </button>\n      </div>\n    </div>\n    <mat-divider></mat-divider>\n\n    <div fxLayout=\"row wrap\" fxFlex=\"100\" class=\"w-90-p m-auto p-20\">\n      <div fxLayout=\"column\" fxFlex=\"20\" *ngFor=\"let item of transportSchedules;\">\n        <div class=\"grey-500-fg pb-4\" translate>{{item.label}}</div>\n        <div class=\"break-word pr-8\">{{item?.value ? item?.value : \"---\"}}</div>\n      </div>\n    </div>\n   \n\n    <div class=\"px-28 py-20 mt-28 text-uppercase font-size-18 border-vertical\" translate>Routes in this transport schedule</div>\n  \n    <app-table *ngIf=\"loaded | async\" [settings]=\"transportScheduleTab\"></app-table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/transportation/routing/view-transport-schedules/view-transport-schedules.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/view-transport-schedules/view-transport-schedules.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhbnNwb3J0YXRpb24vcm91dGluZy92aWV3LXRyYW5zcG9ydC1zY2hlZHVsZXMvdmlldy10cmFuc3BvcnQtc2NoZWR1bGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/transportation/routing/view-transport-schedules/view-transport-schedules.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/transportation/routing/view-transport-schedules/view-transport-schedules.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ViewTransportSchedulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTransportSchedulesComponent", function() { return ViewTransportSchedulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/common/common.component */ "./src/app/shared/common/common.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_Transport_schedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/Transport/schedule.service */ "./src/app/service/Transport/schedule.service.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/staff/staffCommon.service */ "./src/app/service/staff/staffCommon.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/service/common.service */ "./src/app/service/common.service.ts");









var ViewTransportSchedulesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ViewTransportSchedulesComponent, _super);
    function ViewTransportSchedulesComponent(router, routes, scheduleService, changedetector, staffCommonService, commonService, snackBar) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.routes = routes;
        _this.scheduleService = scheduleService;
        _this.changedetector = changedetector;
        _this.staffCommonService = staffCommonService;
        _this.commonService = commonService;
        _this.snackBar = snackBar;
        _this.loaded = Promise.resolve(true);
        return _this;
    }
    ViewTransportSchedulesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params
            .subscribe(function (params) {
            _this.transportScheduleId = params['id'];
            _this.getTransportScheduleDetails();
        });
        this.transportScheduleGridHeaderData = [
            { field: 'routeName', header: 'Route Name', sort: false },
            { field: 'routeNumber', header: 'Route Number', sort: false },
            { field: 'vehicleNo', header: 'Vehicle', sort: false },
            { field: 'driverStaffId', header: 'Driver Name', sort: false },
            { field: 'assistantStaffId', header: 'Driver Assistant Name', sort: false },
        ];
    };
    ViewTransportSchedulesComponent.prototype.getTransportScheduleDetails = function () {
        var _this = this;
        this.scheduleService.transportSchedulesDetails(this.transportScheduleId)
            .subscribe(function (res) {
            _this.setTransportScheduleDetails(res.transportSchedulesDataView);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ViewTransportSchedulesComponent.prototype.setTransportScheduleDetails = function (data) {
        var headerData = [];
        for (var key in data) {
            if (key !== 'transportScheduleRoutesDataView' && key !== 'id' &&
                key !== 'routeType') {
                if (data[key] === 'I') {
                    data[key] = 'Inbound';
                }
                else if (data[key] === 'O') {
                    data[key] = 'Outbound';
                }
                else if (key === 'startTime' || key === 'endTime') {
                    data[key] = data[key] ? data[key].substring(0, 5) : null;
                }
                headerData.push({ label: key, value: data[key] });
            }
        }
        this.resStaffDetails = data.transportScheduleRoutesDataView;
        this.getStaffDetails();
        this.transportSchedules = headerData;
        this.loaded = Promise.resolve(true);
    };
    ViewTransportSchedulesComponent.prototype.getStaffDetails = function () {
        var _this = this;
        this.staffCommonService.fetchStaffs().
            subscribe(function (res) {
            var staffData = [];
            res.forEach(function (obj) {
                staffData.push({
                    value: obj.id, label: obj.name
                });
            });
            _this.staffDetails = staffData;
            _this.assignStaffDetails(_this.resStaffDetails);
        }, function (error) {
            _this.errorResponse(error);
        });
    };
    ViewTransportSchedulesComponent.prototype.assignStaffDetails = function (data) {
        var _this = this;
        data.forEach(function (e) {
            var sName = _this.staffDetails.filter(function (x) { return x.value === e.driverStaffId; });
            if (sName.length > 0) {
                e.driverStaffId = sName[0].label;
            }
            var asName = _this.staffDetails.filter(function (x) { return x.value === e.assistantStaffId; });
            if (asName.length > 0) {
                e.assistantStaffId = asName[0].label;
            }
        });
        this.transportScheduleTab = {
            padding: true,
            rows: data,
            columns: this.transportScheduleGridHeaderData,
            // tablename: 'List of Transport Schedules',
            isPaginationRequired: false,
            hideHeader: true,
        };
    };
    ViewTransportSchedulesComponent.prototype.onBackButtonClick = function () {
        this.router.navigate([app_url_config__WEBPACK_IMPORTED_MODULE_5__["RouteConfig"]._Transport_Schedule]);
    };
    ViewTransportSchedulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-transport-schedules',
            template: __webpack_require__(/*! ./view-transport-schedules.component.html */ "./src/app/modules/transportation/routing/view-transport-schedules/view-transport-schedules.component.html"),
            providers: [app_service_Transport_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"], app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_6__["StaffCommonService"]],
            styles: [__webpack_require__(/*! ./view-transport-schedules.component.scss */ "./src/app/modules/transportation/routing/view-transport-schedules/view-transport-schedules.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            app_service_Transport_schedule_service__WEBPACK_IMPORTED_MODULE_4__["ScheduleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], app_service_staff_staffCommon_service__WEBPACK_IMPORTED_MODULE_6__["StaffCommonService"],
            app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], ViewTransportSchedulesComponent);
    return ViewTransportSchedulesComponent;
}(app_shared_common_common_component__WEBPACK_IMPORTED_MODULE_2__["CommonComponent"]));



/***/ }),

/***/ "./src/app/service/staff/staffCommon.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/staff/staffCommon.service.ts ***!
  \******************************************************/
/*! exports provided: StaffCommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffCommonService", function() { return StaffCommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var _url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../url.config */ "./src/app/url.config.ts");
/**
 * Teacher API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */







var StaffCommonService = /** @class */ (function () {
    function StaffCommonService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = _url_config__WEBPACK_IMPORTED_MODULE_6__["BaseUrlConfig"].BasePath + _url_config__WEBPACK_IMPORTED_MODULE_6__["ModuleConfig"].Teacher;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.configuration = new _base_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    StaffCommonService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StaffCommonService.prototype.fetchStaffTypes = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + _url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Staff_Types, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StaffCommonService.prototype.fetchStaffs = function (staffTypeCode, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_3__["CustomHttpUrlEncodingCodec"]() });
        if (staffTypeCode !== undefined && staffTypeCode !== null) {
            queryParameters = queryParameters.set('staffTypeCode', staffTypeCode);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + _url_config__WEBPACK_IMPORTED_MODULE_6__["BaseModuleConfig"]._Staff_Based_On_Code, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StaffCommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_4__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_5__["Configuration"]])
    ], StaffCommonService);
    return StaffCommonService;
}());



/***/ }),

/***/ "./src/app/service/student-transport/student-transport.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/service/student-transport/student-transport.service.ts ***!
  \************************************************************************/
/*! exports provided: StudentTransportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentTransportService", function() { return StudentTransportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/configuration */ "./src/app/service/base/configuration.ts");
/* harmony import */ var app_url_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/url.config */ "./src/app/url.config.ts");
/* harmony import */ var _base_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/variables */ "./src/app/service/base/variables.ts");
/* harmony import */ var _base_encoder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/encoder */ "./src/app/service/base/encoder.ts");
/**
 * BaseWebAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */







var StudentTransportService = /** @class */ (function () {
    function StudentTransportService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseUrlConfig"].BasePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["ModuleConfig"].Base;
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    StudentTransportService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    StudentTransportService.prototype.createTransportAssignments = function (studentTransportView, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"]._Student_Transport_Assignment, studentTransportView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentTransportService.prototype.fetchRoutePoints = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_6__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"]._Student_Transport_Route_Points, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentTransportService.prototype.fetchTransportAssignment = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_6__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"]._Student_Transport_Assignment, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentTransportService.prototype.fetchTransportRoutes = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_6__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"]._Student_Transport_Routes, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentTransportService.prototype.fetchTransportSchedules = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"]._Student_Transport_Schedules, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentTransportService.prototype.updateTransportAssignments = function (studentTransportDataView, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.put("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"]._Student_Transport_Assignment, studentTransportDataView, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentTransportService.prototype.fetchTransportAssignmentStudentId = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"].__Trasport_Assignment_By_Id, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentTransportService.prototype.fetchRouteTripProgressStudentId = function (id, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling fetchRouteTripProgressStudentId.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _base_encoder__WEBPACK_IMPORTED_MODULE_6__["CustomHttpUrlEncodingCodec"]() });
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('Id', id);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get("" + this.basePath + app_url_config__WEBPACK_IMPORTED_MODULE_4__["BaseModuleConfig"].__Student_Route_Tracking, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    StudentTransportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_base_variables__WEBPACK_IMPORTED_MODULE_5__["BASE_PATH"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _base_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]])
    ], StudentTransportService);
    return StudentTransportService;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-modules-student-student-module~app-modules-transportation-routing-routes-module.js.map