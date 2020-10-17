(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/admin.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/admin.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back-outline\">Black</ion-icon> -->\n      <ion-back-button [routerLink]=\"['/home']\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Admin</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"false\">\n  <div id=\"container\" text-center>\n    <form [formGroup]=\"form_user\">\n      <ion-grid>\n        <ion-row color=\"primary\" justify-content-center>\n          <ion-col align-self-center size-md=\"12\" size-lg=\"12\" size-xs=\"12\">\n            <div text-center>\n              <ion-icon class=\"lg\" name=\"person-outline\"></ion-icon>\n            </div>\n            <div padding>\n              <ion-item>\n                <ion-input\n                  formControlName=\"username\"\n                  placeholder=\"Username\"\n                  required\n                ></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input\n                  formControlName=\"password\"\n                  name=\"password\"\n                  type=\"password\"\n                  placeholder=\"Password\"\n                  required\n                ></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button\n      mode=\"ios\"\n      expand=\"block\"\n      color=\"primary\"\n      (click)=\"onLogin()\"\n      [disabled]=\"form_user.invalid\"\n      >Login</ion-button\n    >\n  </section>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/home/admin/admin-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home/admin/admin-routing.module.ts ***!
  \****************************************************/
/*! exports provided: AdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageRoutingModule", function() { return AdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.page */ "./src/app/home/admin/admin.page.ts");




const routes = [
    {
        path: "",
        component: _admin_page__WEBPACK_IMPORTED_MODULE_3__["AdminPage"],
    },
    {
        path: "homeadmin",
        loadChildren: () => __webpack_require__.e(/*! import() | homeadmin-homeadmin-module */ "homeadmin-homeadmin-module").then(__webpack_require__.bind(null, /*! ./homeadmin/homeadmin.module */ "./src/app/home/admin/homeadmin/homeadmin.module.ts")).then((m) => m.HomeadminPageModule),
    },
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ "./src/app/home/admin/admin.module.ts":
/*!********************************************!*\
  !*** ./src/app/home/admin/admin.module.ts ***!
  \********************************************/
/*! exports provided: AdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/home/admin/admin-routing.module.ts");
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.page */ "./src/app/home/admin/admin.page.ts");







let AdminPageModule = class AdminPageModule {
};
AdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_6__["AdminPage"]],
    })
], AdminPageModule);



/***/ }),

/***/ "./src/app/home/admin/admin.page.scss":
/*!********************************************!*\
  !*** ./src/app/home/admin/admin.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  left: 0;\n  right: 0;\n  height: 100%;\n  position: absolute;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.lg {\n  font-size: 100px;\n  margin-top: 10%;\n  color: #4c8dff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZG1pbi9DOlxccHJvamVjdFxcZmFpbFxcdHJhdmVsaW5nX3BsYW5uZXIvc3JjXFxhcHBcXGhvbWVcXGFkbWluXFxhZG1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvYWRtaW4vYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hZG1pbi9hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5sZyB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgY29sb3I6ICM0YzhkZmY7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubGcge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGNvbG9yOiAjNGM4ZGZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/admin/admin.page.ts":
/*!******************************************!*\
  !*** ./src/app/home/admin/admin.page.ts ***!
  \******************************************/
/*! exports provided: AdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPage", function() { return AdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let AdminPage = class AdminPage {
    constructor(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.form_user = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    onLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formData = new FormData();
            Object.keys(this.form_user.value).forEach((key) => {
                formData.append(key, this.form_user.controls[key].value);
            });
            let httpRespone = yield this.http.post("login", formData);
            console.log(httpRespone);
            if (httpRespone.response.success) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("สำเร็จ", httpRespone.response.message + " !", "success").then(() => {
                    this.http.navRouter("/home/admin/homeadmin");
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("ผิดพลาด", httpRespone.response.message + " !", "error");
            }
        });
    }
};
AdminPage.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
AdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-admin",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/admin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin.page.scss */ "./src/app/home/admin/admin.page.scss")).default]
    })
], AdminPage);



/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map