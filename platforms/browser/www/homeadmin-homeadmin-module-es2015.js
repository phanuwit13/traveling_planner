(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homeadmin-homeadmin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/homeadmin.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/homeadmin.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back-outline\">Black</ion-icon> -->\n      <ion-back-button [routerLink]=\"['/home']\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Place Manager</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher mode=\"md\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-button size=\"default\" color=\"dark\" [routerLink]=\"['addplace']\"\n        >สถานที่</ion-button\n      >\n      <ion-button size=\"default\" color=\"dark\" [routerLink]=\"['addcategory']\"\n        >ประเภท</ion-button\n      >\n    </ion-fab-list>\n  </ion-fab>\n  <div id=\"container\">\n    <form action=\"\" [formGroup]=\"form_planning\">\n      <ion-item color=\"\">\n        <ion-label>ประเภท</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"categoryNo\"\n          interface=\"action-sheet\"\n          (ionChange)=\"getPlaceCategory()\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of categoryData\"\n            [value]=\"item.categoryNo\"\n            >{{item.categoryTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-searchbar\n        [formControl]=\"key\"\n        (ionChange)=\"getPlaceSearch()\"\n      ></ion-searchbar>\n    </form>\n    <ion-item-sliding *ngFor=\"let item of place ;let i = index\">\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <img\n            *ngIf=\"item.img ==''\"\n            src=\"https://i.picsum.photos/id/496/200/200.jpg?hmac=Asy6Q8R1Y6wu0nrV_ymC5JGqktniSVnGqoYvNcHdzBI\"\n          />\n          <img\n            *ngIf=\"item.img !=''\"\n            src=\"http://cpe.rmuti.ac.th/project/traveling_planner/api/img/{{item.img}}\"\n          />\n        </ion-thumbnail>\n\n        <ion-label>\n          <h2>{{item.placeTH}}</h2>\n          <h3>{{item.categoryTH}}</h3>\n          <p>{{item.detail}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options>\n        <ion-item-option\n          style=\"color: #ffffff;\"\n          (click)=\"openModal();addItem(item)\"\n          color=\"warning\"\n        >\n          <ion-icon slot=\"start\" name=\"color-wand\"></ion-icon>\n          แก้ไข\n        </ion-item-option>\n        <ion-item-option (click)=\"delPlace(item.placeNo)\" color=\"danger\">\n          <ion-icon slot=\"start\" name=\"trash-bin\"></ion-icon>\n\n          ลบ\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/admin/homeadmin/homeadmin-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/admin/homeadmin/homeadmin-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: HomeadminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeadminPageRoutingModule", function() { return HomeadminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _homeadmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeadmin.page */ "./src/app/home/admin/homeadmin/homeadmin.page.ts");




const routes = [
    {
        path: "",
        component: _homeadmin_page__WEBPACK_IMPORTED_MODULE_3__["HomeadminPage"],
    },
    {
        path: "addplace",
        loadChildren: () => __webpack_require__.e(/*! import() | addplace-addplace-module */ "addplace-addplace-module").then(__webpack_require__.bind(null, /*! ./addplace/addplace.module */ "./src/app/home/admin/homeadmin/addplace/addplace.module.ts")).then((m) => m.AddplacePageModule),
    },
    {
        path: 'addcategory',
        loadChildren: () => __webpack_require__.e(/*! import() | addcategory-addcategory-module */ "addcategory-addcategory-module").then(__webpack_require__.bind(null, /*! ./addcategory/addcategory.module */ "./src/app/home/admin/homeadmin/addcategory/addcategory.module.ts")).then(m => m.AddcategoryPageModule)
    },
];
let HomeadminPageRoutingModule = class HomeadminPageRoutingModule {
};
HomeadminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeadminPageRoutingModule);



/***/ }),

/***/ "./src/app/home/admin/homeadmin/homeadmin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/admin/homeadmin/homeadmin.module.ts ***!
  \**********************************************************/
/*! exports provided: HomeadminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeadminPageModule", function() { return HomeadminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _homeadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homeadmin-routing.module */ "./src/app/home/admin/homeadmin/homeadmin-routing.module.ts");
/* harmony import */ var _homeadmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homeadmin.page */ "./src/app/home/admin/homeadmin/homeadmin.page.ts");







let HomeadminPageModule = class HomeadminPageModule {
};
HomeadminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _homeadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeadminPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_homeadmin_page__WEBPACK_IMPORTED_MODULE_6__["HomeadminPage"]],
    })
], HomeadminPageModule);



/***/ }),

/***/ "./src/app/home/admin/homeadmin/homeadmin.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/home/admin/homeadmin/homeadmin.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9iaWcvRTQ5NjlFNzc5NjlFNDlDNi9wcm9qZWN0L2ZhaWwvdHJhdmVsaW5nX3BsYW5uZXIvc3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9ob21lYWRtaW4ucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9ob21lYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9ob21lYWRtaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuIiwiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/admin/homeadmin/homeadmin.page.ts":
/*!********************************************************!*\
  !*** ./src/app/home/admin/homeadmin/homeadmin.page.ts ***!
  \********************************************************/
/*! exports provided: HomeadminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeadminPage", function() { return HomeadminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modals_edit_place_edit_place_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modals/edit-place/edit-place.page */ "./src/app/modals/edit-place/edit-place.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let HomeadminPage = class HomeadminPage {
    constructor(http, modalController, formBuilder) {
        this.http = http;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.place = null;
        this.key = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.categoryData = null;
        this.list = [];
    }
    overrideHardwareBackAction($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
            this.http.removeList(this.list[0]);
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.form_planning = this.formBuilder.group({
                placeNo: "",
                categoryNo: "",
                point_start: "",
            });
            this.http.list$.subscribe((list) => (this.list = list));
            this.getPlace();
            this.getCategory();
        });
    }
    onload() { }
    getPlace() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let httpRespon = yield this.http.post("getPlace");
            //console.log(httpRespon);
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
            //console.log(this.key.value);
            formData.append("key", this.key.value);
            let httpRespon = yield this.http.post("getPlaceSearch", formData);
            //console.log(httpRespon);
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
        //console.log("Begin async operation");
        setTimeout(() => {
            //console.log("Async operation has ended");
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
                component: _modals_edit_place_edit_place_page__WEBPACK_IMPORTED_MODULE_3__["EditPlacePage"],
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data.dismissed) {
                this.getPlace();
                this.http.removeList(this.list[0]);
            }
        });
    }
    addItem(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.http.addNewList(item);
        });
    }
    getPlaceCategory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append("categoryNo", this.form_planning.controls["categoryNo"].value);
            //console.log(this.form_planning.controls["categoryNo"].value);
            let httpRespon = yield this.http.post("getPlaceCategory", formData);
            //console.log(httpRespon);
            if (httpRespon.response.success) {
                this.place = yield httpRespon.response.data;
            }
            else {
                this.place = null;
            }
        });
    }
    getCategory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let httpRespon = yield this.http.post("getCategory");
            //console.log(httpRespon);
            if (httpRespon.response.success) {
                this.categoryData = yield httpRespon.response.data;
            }
            else {
                this.categoryData = null;
            }
        });
    }
    delPlace(placeNo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: "คุณแน่ใจว่าต้องการลบสถานที่?",
                text: "คุณจะไม่สามารถยกเลิกสิ่งนี้ได้!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#28a745",
                cancelButtonColor: "#dc3545",
                confirmButtonText: "ตกลง !",
                cancelButtonText: "ยกเลิก",
                reverseButtons: true,
            }).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.value) {
                    let formData = new FormData();
                    formData.append("placeNo", placeNo);
                    let httpRespon = yield this.http.post("delPlace", formData);
                    //console.log(httpRespon);
                    if (httpRespon.response.success) {
                        yield sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("สำเร็จ", httpRespon.response.message + " !", "success").then(() => {
                            this.getPlace();
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("ผิดพลาด", httpRespon.response.message + " !", "error");
                    }
                }
                else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {
                }
            }));
        });
    }
};
HomeadminPage.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:ionBackButton", ["$event"])
], HomeadminPage.prototype, "overrideHardwareBackAction", null);
HomeadminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-homeadmin",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./homeadmin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/homeadmin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./homeadmin.page.scss */ "./src/app/home/admin/homeadmin/homeadmin.page.scss")).default]
    })
], HomeadminPage);



/***/ })

}]);
//# sourceMappingURL=homeadmin-homeadmin-module-es2015.js.map