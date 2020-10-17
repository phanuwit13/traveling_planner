(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addcategory-addcategory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addcategory/addcategory.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addcategory/addcategory.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        [routerLink]=\"['/home/admin/homeadmin']\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content mode=\"ios\" [fullscreen]=\"false\">\n  <form id=\"container\">\n    <div style=\"padding: 5%;\">\n      <span>ประเภทของสถานที่</span>\n    </div>\n    <ion-item-sliding *ngFor=\"let item of categoryData\">\n      <ion-item>\n        <ion-label>\n          {{item.categoryTH}}\n          <br />\n          {{item.categoryEN}}\n        </ion-label>\n      </ion-item>\n      <ion-item-options>\n        <ion-item-option\n          style=\"color: #ffffff;\"\n          (click)=\"AlertEdit(item.categoryTH,item.categoryEN,item.categoryNo)\"\n          color=\"warning\"\n        >\n          <ion-icon slot=\"start\" name=\"color-wand\"></ion-icon>\n          แก้ไข\n        </ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"delCategory(item.categoryNo)\">\n          <ion-icon slot=\"start\" name=\"trash-bin\"></ion-icon>\n          ลบ\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button mode=\"ios\" (click)=\"AlertAdd()\" expand=\"block\" color=\"primary\"\n      >Add</ion-button\n    >\n  </section>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/home/admin/homeadmin/addcategory/addcategory-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/admin/homeadmin/addcategory/addcategory-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: AddcategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcategoryPageRoutingModule", function() { return AddcategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addcategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addcategory.page */ "./src/app/home/admin/homeadmin/addcategory/addcategory.page.ts");




const routes = [
    {
        path: '',
        component: _addcategory_page__WEBPACK_IMPORTED_MODULE_3__["AddcategoryPage"]
    }
];
let AddcategoryPageRoutingModule = class AddcategoryPageRoutingModule {
};
AddcategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddcategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/home/admin/homeadmin/addcategory/addcategory.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/admin/homeadmin/addcategory/addcategory.module.ts ***!
  \************************************************************************/
/*! exports provided: AddcategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcategoryPageModule", function() { return AddcategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addcategory-routing.module */ "./src/app/home/admin/homeadmin/addcategory/addcategory-routing.module.ts");
/* harmony import */ var _addcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addcategory.page */ "./src/app/home/admin/homeadmin/addcategory/addcategory.page.ts");







let AddcategoryPageModule = class AddcategoryPageModule {
};
AddcategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddcategoryPageRoutingModule"]
        ],
        declarations: [_addcategory_page__WEBPACK_IMPORTED_MODULE_6__["AddcategoryPage"]]
    })
], AddcategoryPageModule);



/***/ }),

/***/ "./src/app/home/admin/homeadmin/addcategory/addcategory.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/home/admin/homeadmin/addcategory/addcategory.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n#container {\n  left: 0;\n  right: 0;\n  height: 100%;\n  text-align: center;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZG1pbi9ob21lYWRtaW4vYWRkY2F0ZWdvcnkvQzpcXHByb2plY3RcXGZhaWxcXHRyYXZlbGluZ19wbGFubmVyL3NyY1xcYXBwXFxob21lXFxhZG1pblxcaG9tZWFkbWluXFxhZGRjYXRlZ29yeVxcYWRkY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9hZGRjYXRlZ29yeS9hZGRjYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRtaW4vaG9tZWFkbWluL2FkZGNhdGVnb3J5L2FkZGNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbiNjb250YWluZXIge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiIsImlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/admin/homeadmin/addcategory/addcategory.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/admin/homeadmin/addcategory/addcategory.page.ts ***!
  \**********************************************************************/
/*! exports provided: AddcategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcategoryPage", function() { return AddcategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let AddcategoryPage = class AddcategoryPage {
    constructor(http, alertController, formBuilder) {
        this.http = http;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.categoryData = null;
    }
    ngOnInit() {
        this.form_category = this.formBuilder.group({
            categoryTH: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            categoryEN: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.getCategory();
    }
    getCategory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let httpResponse = yield this.http.post("getCategory");
            if (httpResponse.response.success) {
                this.categoryData = yield httpResponse.response.data;
                this.categoryData = this.categoryData.filter((item) => {
                    return item.categoryNo != "008";
                });
            }
            else {
                this.categoryData = null;
            }
        });
    }
    AlertEdit(TH, EN, NO) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alertEdit = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "แก้ไขประเภท!",
                inputs: [
                    {
                        name: "categoryTH",
                        type: "text",
                        value: TH,
                        placeholder: "",
                    },
                    {
                        name: "categoryEN",
                        type: "text",
                        value: EN,
                        placeholder: "",
                    },
                ],
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: () => {
                            console.log("Confirm Cancel");
                        },
                    },
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.editCategory(data.categoryTH, data.categoryEN, NO);
                        },
                    },
                ],
            });
            yield alertEdit.present();
        });
    }
    AlertAdd() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alertEdit = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "เพิ่มสถานที่!",
                inputs: [
                    {
                        name: "categoryTH",
                        type: "text",
                        value: "",
                        placeholder: "ชื่อประเภทภาษาไทย",
                    },
                    {
                        name: "categoryEN",
                        type: "text",
                        value: "",
                        placeholder: "ชื่อประเภทภาษาอังกฤษ",
                    },
                ],
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: () => {
                            console.log("Confirm Cancel");
                        },
                    },
                    {
                        text: "Ok",
                        handler: (data) => {
                            this.addCategory(data.categoryTH, data.categoryEN);
                        },
                    },
                ],
            });
            yield alertEdit.present();
        });
    }
    editCategory(categoryTH, categoryEN, categoryNo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append("categoryTH", categoryTH);
            formData.append("categoryEN", categoryEN);
            formData.append("categoryNo", categoryNo);
            let httpRespon = yield this.http.post("editCategory", formData);
            console.log(httpRespon);
            if (httpRespon.response.success) {
                console.log(httpRespon.response.message);
                this.getCategory();
            }
            else {
                console.log(httpRespon.response.message);
            }
        });
    }
    addCategory(categoryTH, categoryEN) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append("categoryTH", categoryTH);
            formData.append("categoryEN", categoryEN);
            let httpRespon = yield this.http.post("addCategory", formData);
            console.log(httpRespon);
            if (httpRespon.response.success) {
                console.log(httpRespon.response.message);
                this.getCategory();
            }
            else {
                console.log(httpRespon.response.message);
            }
        });
    }
    delCategory(categoryNo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: "คุณแน่ใจว่าต้องการลบประเภท?",
                text: "สถานที่ทั้งหมดที่อยู่ในประเภทนี้จะถูกลบ!",
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
                    formData.append("categoryNo", categoryNo);
                    let httpRespon = yield this.http.post("delCategory", formData);
                    console.log(httpRespon);
                    if (httpRespon.response.success) {
                        yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("สำเร็จ", httpRespon.response.message + " !", "success").then(() => {
                            this.getCategory();
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("ผิดพลาด", httpRespon.response.message + " !", "error");
                    }
                }
                else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {
                }
            }));
        });
    }
};
AddcategoryPage.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
AddcategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-addcategory",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addcategory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addcategory/addcategory.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addcategory.page.scss */ "./src/app/home/admin/homeadmin/addcategory/addcategory.page.scss")).default]
    })
], AddcategoryPage);



/***/ })

}]);
//# sourceMappingURL=addcategory-addcategory-module-es2015.js.map