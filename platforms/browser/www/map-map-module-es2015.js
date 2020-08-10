(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["map-map-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/map/map.page.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/map/map.page.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back-outline\">Black</ion-icon> -->\n      <ion-back-button [routerLink]=\"['/home']\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Map</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <div id=\"map_canvas2\"></div>\n  <div id=\"container\"></div>\n</ion-content>\n\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button mode=\"ios\" expand=\"block\" color=\"primary\" (click)=\"myLocation()\"\n      >Location</ion-button\n    >\n  </section>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/home/map/map-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/map/map-routing.module.ts ***!
  \************************************************/
/*! exports provided: MapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function() { return MapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.page */ "./src/app/home/map/map.page.ts");




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapPageRoutingModule);



/***/ }),

/***/ "./src/app/home/map/map.module.ts":
/*!****************************************!*\
  !*** ./src/app/home/map/map.module.ts ***!
  \****************************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/home/map/map-routing.module.ts");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/home/map/map.page.ts");







let MapPageModule = class MapPageModule {
};
MapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
    })
], MapPageModule);



/***/ }),

/***/ "./src/app/home/map/map.page.scss":
/*!****************************************!*\
  !*** ./src/app/home/map/map.page.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map_canvas2 {\n  height: 100%;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9iaWcvRTQ5NjlFNzc5NjlFNDlDNi9wcm9qZWN0L2ZhaWwvdHJhdmVsaW5nX3BsYW5uZXIvc3JjL2FwcC9ob21lL21hcC9tYXAucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL21hcC9tYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL21hcC9tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcF9jYW52YXMyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuIiwiI21hcF9jYW52YXMyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/map/map.page.ts":
/*!**************************************!*\
  !*** ./src/app/home/map/map.page.ts ***!
  \**************************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");





let MapPage = class MapPage {
    constructor(platform, http, loadingCtrl, geolocation) {
        this.platform = platform;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.list = [];
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer();
        this.currentLocation = {
            lat: null,
            lng: null,
        };
        this.GOOGLE = { lat: 37.422476, lng: -122.08425 };
    }
    overrideHardwareBackAction($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.list.forEach((item) => {
                this.http.removeList(item);
            });
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.http.list$.subscribe((list) => (this.list = list));
            this.loadmap();
            //console.log(this.list);
        });
    }
    loadmap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: "Please wait...",
            });
            yield this.loading.present();
            this.map = new google.maps.Map(document.getElementById("map_canvas2"), {
                zoom: 16,
                center: { lat: 14.9736915, lng: 102.0827157 },
            });
            this.marker = yield new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position: { lat: 14.9736915, lng: 102.0827157 },
            });
            this.myLocation();
            this.loading.dismiss();
        });
    }
    myLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: "Please wait...",
            });
            yield this.loading.present();
            this.geolocation.getCurrentPosition().then((resp) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.currentLocation.lat = resp.coords.latitude;
                this.currentLocation.lng = resp.coords.longitude;
                //console.log(this.currentLocation);
                this.marker.setPosition(this.currentLocation);
                if (this.list.length != 0) {
                    this.marker.setMap(null);
                    this.routPath(this.currentLocation);
                }
                this.map.setCenter(this.currentLocation);
                this.loading.dismiss();
            }));
        });
    }
    routPath(currentLocation) {
        let n = this.list[0].length;
        if (this.directionsRenderer != null) {
            this.directionsRenderer.setMap(null);
            this.directionsRenderer = null;
        }
        this.directionsRenderer = new google.maps.DirectionsRenderer();
        this.directionsRenderer.setMap(this.map);
        let waypts = [];
        for (let i = 0; i < n; i++) {
            if (i == n - 1) {
            }
            else {
                waypts.push({
                    location: {
                        lat: parseFloat(this.list[0][i].latitude),
                        lng: parseFloat(this.list[0][i].longitude),
                    },
                    stopover: true,
                });
            }
        }
        //console.log(waypts);
        this.directionsService.route({
            origin: currentLocation,
            destination: {
                lat: parseFloat(this.list[0][n - 1].latitude),
                lng: parseFloat(this.list[0][n - 1].longitude),
            },
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: "DRIVING",
        }, (response, status) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (status === "OK") {
                this.directionsRenderer.setDirections(response);
                //console.log(response);
                this.list.forEach((item) => {
                    this.http.removeList(item);
                });
            }
            else {
                //console.log(status);
            }
        }));
    }
};
MapPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:ionBackButton", ["$event"])
], MapPage.prototype, "overrideHardwareBackAction", null);
MapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-map",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./map.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/map/map.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./map.page.scss */ "./src/app/home/map/map.page.scss")).default]
    })
], MapPage);



/***/ })

}]);
//# sourceMappingURL=map-map-module-es2015.js.map