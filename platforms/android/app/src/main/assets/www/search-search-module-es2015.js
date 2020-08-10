(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/search/search.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/search/search.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [routerLink]=\"['/home']\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Search</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\" [fullscreen]=\"true\">\n  <ion-refresher mode=\"md\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div id=\"container\">\n    <ion-searchbar\n      [formControl]=\"key\"\n      (ionChange)=\"getPlaceSearch()\"\n    ></ion-searchbar>\n    <ion-list>\n      <ion-list-header>\n        สถานที่ท่องเที่ยวใน อำเภอเมืองนครราชสีมา\n      </ion-list-header>\n\n      <ion-item\n        *ngFor=\"let item of place ;let i = index\"\n        (click)=\"openModal();addItem(item)\"\n      >\n        <ion-thumbnail slot=\"start\">\n          <img\n            *ngIf=\"item.img ==''\"\n            src=\"https://i.picsum.photos/id/496/200/200.jpg?hmac=Asy6Q8R1Y6wu0nrV_ymC5JGqktniSVnGqoYvNcHdzBI\"\n          />\n          <img\n            *ngIf=\"item.img !=''\"\n            src=\"http://cpe.rmuti.ac.th/project/traveling_planner/api/img/{{item.img}}\"\n          />\n        </ion-thumbnail>\n\n        <ion-label>\n          <h2>{{item.placeTH}}</h2>\n          <h3>{{item.categoryTH}}</h3>\n          <p>{{item.detail}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/search/search-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home/search/search-routing.module.ts ***!
  \******************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "./src/app/home/search/search.page.ts");




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ "./src/app/home/search/search.module.ts":
/*!**********************************************!*\
  !*** ./src/app/home/search/search.module.ts ***!
  \**********************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/home/search/search-routing.module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/home/search/search.page.ts");







let SearchPageModule = class SearchPageModule {
};
SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]],
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/home/search/search.page.scss":
/*!**********************************************!*\
  !*** ./src/app/home/search/search.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9iaWcvRTQ5NjlFNzc5NjlFNDlDNi9wcm9qZWN0L2ZhaWwvdHJhdmVsaW5nX3BsYW5uZXIvc3JjL2FwcC9ob21lL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuIiwiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/search/search.page.ts":
/*!********************************************!*\
  !*** ./src/app/home/search/search.page.ts ***!
  \********************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _modals_detail_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modals/detail/detail.page */ "./src/app/modals/detail/detail.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let SearchPage = class SearchPage {
    constructor(http, modalController, loadingCtrl) {
        this.http = http;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.place = null;
        this.key = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.list = [];
    }
    overrideHardwareBackAction($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
            this.list.forEach((item) => {
                this.http.removeList(item);
            });
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: "Please wait...",
            });
            yield this.loading.present();
            this.getPlace();
            this.loading.dismiss();
            this.http.list$.subscribe((list) => (this.list = list));
        });
    }
    getPlace() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let httpRespon = yield this.http.post("getPlace");
            if (httpRespon.response.success) {
                this.place = httpRespon.response.data;
            }
            else {
                this.place = httpRespon.response.message;
            }
        });
    }
    getPlaceSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append("key", this.key.value);
            let httpRespon = yield this.http.post("getPlaceSearch", formData);
            if (httpRespon.response.success) {
                this.place = yield httpRespon.response.data;
            }
            else {
                this.place = null;
            }
        });
    }
    //รีเฟช
    doRefresh(event) {
        setTimeout(() => {
            this.getPlace();
            event.target.complete();
        }, 1000);
        this.place = null;
        this.key.setValue("");
    }
    //เปิดโมเดล
    openModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_detail_detail_page__WEBPACK_IMPORTED_MODULE_4__["DetailPage"],
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data.dismissed) {
                this.list.forEach((item) => {
                    this.http.removeList(item);
                });
            }
        });
    }
    addItem(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.http.addNewList(item);
        });
    }
};
SearchPage.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:ionBackButton", ["$event"])
], SearchPage.prototype, "overrideHardwareBackAction", null);
SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-search",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/search/search.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.page.scss */ "./src/app/home/search/search.page.scss")).default]
    })
], SearchPage);



/***/ })

}]);
//# sourceMappingURL=search-search-module-es2015.js.map