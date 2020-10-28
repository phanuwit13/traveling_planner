function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/map/map.page.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/map/map.page.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeMapMapPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back-outline\">Black</ion-icon> -->\n      <ion-back-button [routerLink]=\"['/home']\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Map</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <div id=\"map_canvas2\"></div>\n  <div id=\"container\"></div>\n</ion-content>\n\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button mode=\"ios\" expand=\"block\" color=\"primary\" (click)=\"myLocation()\"\n      >Location</ion-button\n    >\n  </section>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/home/map/map-routing.module.ts":
  /*!************************************************!*\
    !*** ./src/app/home/map/map-routing.module.ts ***!
    \************************************************/

  /*! exports provided: MapPageRoutingModule */

  /***/
  function srcAppHomeMapMapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function () {
      return MapPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map.page */
    "./src/app/home/map/map.page.ts");

    var routes = [{
      path: '',
      component: _map_page__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }];

    var MapPageRoutingModule = function MapPageRoutingModule() {
      _classCallCheck(this, MapPageRoutingModule);
    };

    MapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MapPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/map/map.module.ts":
  /*!****************************************!*\
    !*** ./src/app/home/map/map.module.ts ***!
    \****************************************/

  /*! exports provided: MapPageModule */

  /***/
  function srcAppHomeMapMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPageModule", function () {
      return MapPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-routing.module */
    "./src/app/home/map/map-routing.module.ts");
    /* harmony import */


    var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./map.page */
    "./src/app/home/map/map.page.ts");

    var MapPageModule = function MapPageModule() {
      _classCallCheck(this, MapPageModule);
    };

    MapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]],
      declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
    })], MapPageModule);
    /***/
  },

  /***/
  "./src/app/home/map/map.page.scss":
  /*!****************************************!*\
    !*** ./src/app/home/map/map.page.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeMapMapPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map_canvas2 {\n  height: 100%;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tYXAvQzpcXHByb2plY3RcXGZhaWxcXHRyYXZlbGluZ19wbGFubmVyL3NyY1xcYXBwXFxob21lXFxtYXBcXG1hcC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvbWFwL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFwL21hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwX2NhbnZhczIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4iLCIjbWFwX2NhbnZhczIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/map/map.page.ts":
  /*!**************************************!*\
    !*** ./src/app/home/map/map.page.ts ***!
    \**************************************/

  /*! exports provided: MapPage */

  /***/
  function srcAppHomeMapMapPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPage", function () {
      return MapPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

    var MapPage = /*#__PURE__*/function () {
      function MapPage(platform, http, loadingCtrl, geolocation) {
        _classCallCheck(this, MapPage);

        this.platform = platform;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.list = [];
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer();
        this.currentLocation = {
          lat: null,
          lng: null
        };
        this.GOOGLE = {
          lat: 37.422476,
          lng: -122.08425
        };
      }

      _createClass(MapPage, [{
        key: "overrideHardwareBackAction",
        value: function overrideHardwareBackAction($event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.list.forEach(function (item) {
                      _this.http.removeList(item);
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.http.list$.subscribe(function (list) {
                      return _this2.list = list;
                    });

                  case 2:
                    this.loadmap(); //console.log(this.list);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "loadmap",
        value: function loadmap() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingCtrl.create({
                      message: "Please wait..."
                    });

                  case 2:
                    this.loading = _context3.sent;
                    _context3.next = 5;
                    return this.loading.present();

                  case 5:
                    this.map = new google.maps.Map(document.getElementById("map_canvas2"), {
                      zoom: 16,
                      center: {
                        lat: 14.9736915,
                        lng: 102.0827157
                      }
                    });
                    _context3.next = 8;
                    return new google.maps.Marker({
                      map: this.map,
                      animation: google.maps.Animation.DROP,
                      position: {
                        lat: 14.9736915,
                        lng: 102.0827157
                      }
                    });

                  case 8:
                    this.marker = _context3.sent;
                    this.myLocation();
                    this.loading.dismiss();

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "myLocation",
        value: function myLocation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingCtrl.create({
                      message: "Please wait..."
                    });

                  case 2:
                    this.loading = _context5.sent;
                    _context5.next = 5;
                    return this.loading.present();

                  case 5:
                    this.geolocation.getCurrentPosition().then(function (resp) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                this.currentLocation.lat = resp.coords.latitude;
                                this.currentLocation.lng = resp.coords.longitude; //console.log(this.currentLocation);

                                this.marker.setPosition(this.currentLocation);

                                if (this.list.length != 0) {
                                  this.marker.setMap(null);
                                  this.routPath(this.currentLocation);
                                }

                                console.log(this.list);
                                this.map.setCenter(this.currentLocation);
                                this.loading.dismiss();

                              case 7:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "routPath",
        value: function routPath(currentLocation) {
          var _this4 = this;

          var n = this.list[0].length;

          if (this.directionsRenderer != null) {
            this.directionsRenderer.setMap(null);
            this.directionsRenderer = null;
          }

          this.directionsRenderer = new google.maps.DirectionsRenderer();
          this.directionsRenderer.setMap(this.map);
          var waypts = [];

          for (var i = 0; i < n; i++) {
            if (i == n - 1) {} else {
              waypts.push({
                location: {
                  lat: parseFloat(this.list[0][i].latitude),
                  lng: parseFloat(this.list[0][i].longitude)
                },
                stopover: true
              });
            }
          } //console.log(waypts);


          this.directionsService.route({
            origin: currentLocation,
            destination: {
              lat: parseFloat(this.list[0][n - 1].latitude),
              lng: parseFloat(this.list[0][n - 1].longitude)
            },
            waypoints: waypts,
            optimizeWaypoints: false,
            travelMode: "DRIVING"
          }, function (response, status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (status === "OK") {
                        this.directionsRenderer.setDirections(response); //console.log(response);

                        this.list.forEach(function (item) {
                          _this5.http.removeList(item);
                        });
                      } else {//console.log(status);
                      }

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          });
        }
      }]);

      return MapPage;
    }();

    MapPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:ionBackButton", ["$event"])], MapPage.prototype, "overrideHardwareBackAction", null);
    MapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-map",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./map.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/map/map.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./map.page.scss */
      "./src/app/home/map/map.page.scss"))["default"]]
    })], MapPage);
    /***/
  }
}]);
//# sourceMappingURL=map-map-module-es5.js.map