(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resulte-resulte-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/planning/resulte/resulte.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/planning/resulte/resulte.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back-outline\">Black</ion-icon> -->\n      <ion-back-button\n        (click)=\"closePlan()\"\n        [routerLink]=\"['/home/planning']\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Resulte</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content mode=\"md\" [fullscreen]=\"false\">\n  <div id=\"container\">\n    <div class=\"detail\">\n      <div class=\"box left\">\n        <div class=\"one\"><ion-icon name=\"car-sport-sharp\"></ion-icon></div>\n        <div class=\"two\"><h3 style=\"color: white;\">{{list[2]}} กม.</h3></div>\n      </div>\n      <div class=\"box right\">\n        <div class=\"one\"><ion-icon name=\"logo-usd\"></ion-icon></div>\n        <div class=\"two\" *ngIf=\"list != []\">\n          <h3 style=\"color: white;\">{{list[1]}} บาท</h3>\n        </div>\n      </div>\n    </div>\n    <div *ngFor=\"let item of list[0] ;let i = index\">\n      <ion-card>\n        <ion-item>\n          <ion-thumbnail class=\"img\" slot=\"start\">\n            <img\n              src=\"http://cpe.rmuti.ac.th/project/traveling_planner/api/img/{{item.img}}\"\n            />\n          </ion-thumbnail>\n          <ion-label>\n            <h2>{{item.placeTH}}</h2>\n            <h3>{{item.categoryTH}}</h3>\n            <p>{{item.detail}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-card>\n\n      <ion-icon\n        *ngIf=\"i+1 != list[0].length \"\n        style=\"font-size: 30px; color: #4c8dff;\"\n        name=\"arrow-down-outline\"\n      ></ion-icon>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button\n      [routerLink]=\"['/home/map']\"\n      mode=\"ios\"\n      expand=\"block\"\n      color=\"primary\"\n      >Get Route</ion-button\n    >\n  </section>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/home/planning/resulte/resulte-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/planning/resulte/resulte-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ResultePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultePageRoutingModule", function() { return ResultePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resulte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resulte.page */ "./src/app/home/planning/resulte/resulte.page.ts");




const routes = [
    {
        path: '',
        component: _resulte_page__WEBPACK_IMPORTED_MODULE_3__["ResultePage"]
    }
];
let ResultePageRoutingModule = class ResultePageRoutingModule {
};
ResultePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResultePageRoutingModule);



/***/ }),

/***/ "./src/app/home/planning/resulte/resulte.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/planning/resulte/resulte.module.ts ***!
  \*********************************************************/
/*! exports provided: ResultePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultePageModule", function() { return ResultePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _resulte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resulte-routing.module */ "./src/app/home/planning/resulte/resulte-routing.module.ts");
/* harmony import */ var _resulte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resulte.page */ "./src/app/home/planning/resulte/resulte.page.ts");







let ResultePageModule = class ResultePageModule {
};
ResultePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resulte_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResultePageRoutingModule"]
        ],
        declarations: [_resulte_page__WEBPACK_IMPORTED_MODULE_6__["ResultePage"]]
    })
], ResultePageModule);



/***/ }),

/***/ "./src/app/home/planning/resulte/resulte.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/planning/resulte/resulte.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  background: #ebebeb;\n  height: 100%;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.img {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 100px !important;\n  max-height: 100px !important;\n}\n\n.detail {\n  height: 50px;\n}\n\n.box {\n  width: 50%;\n  float: left;\n  height: 50px;\n}\n\n.left {\n  background-color: #3880ff;\n}\n\n.right {\n  background-color: #2dd36f;\n}\n\n.one {\n  height: 50px;\n  width: 30%;\n  float: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.two {\n  height: 50px;\n  width: 60%;\n  float: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-icon {\n  font-size: 30px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9iaWcvRTQ5NjlFNzc5NjlFNDlDNi9wcm9qZWN0L2ZhaWwvdHJhdmVsaW5nX3BsYW5uZXIvc3JjL2FwcC9ob21lL3BsYW5uaW5nL3Jlc3VsdGUvcmVzdWx0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvcGxhbm5pbmcvcmVzdWx0ZS9yZXN1bHRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQVBHO0VBUUgsWUFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL3BsYW5uaW5nL3Jlc3VsdGUvcmVzdWx0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmc6ICNlYmViZWI7XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICRiZztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbiAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZVxufVxuLmRldGFpbCB7XG4gIGhlaWdodDogNTBweDtcbn1cbi5ib3gge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmxlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg4MGZmO1xufVxuLnJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDM2Zjtcbn1cbi5vbmUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAzMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50d28ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaW1nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmRldGFpbCB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmJveCB7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5sZWZ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBmZjtcbn1cblxuLnJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDM2Zjtcbn1cblxuLm9uZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDMwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udHdvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNjAlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/planning/resulte/resulte.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/planning/resulte/resulte.page.ts ***!
  \*******************************************************/
/*! exports provided: ResultePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultePage", function() { return ResultePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let ResultePage = class ResultePage {
    constructor(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.list = [];
    }
    overrideHardwareBackAction($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.list.forEach((item, index) => {
                this.http.removeList(this.list[index]);
            });
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: "Please wait...",
            });
            yield this.loading.present();
            this.http.list$.subscribe((list) => (this.list = list));
            this.loading.dismiss();
        });
    }
    closePlan() {
        this.list.forEach((item) => {
            this.http.removeList(item);
        });
    }
};
ResultePage.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:ionBackButton", ["$event"])
], ResultePage.prototype, "overrideHardwareBackAction", null);
ResultePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-resulte",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resulte.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/planning/resulte/resulte.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resulte.page.scss */ "./src/app/home/planning/resulte/resulte.page.scss")).default]
    })
], ResultePage);



/***/ })

}]);
//# sourceMappingURL=resulte-resulte-module-es2015.js.map