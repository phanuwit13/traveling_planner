function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app mode=\"ios\">\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/detail/detail.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/detail/detail.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsDetailDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Detail</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content mode=\"md\" fullscreen>\n  <ion-card *ngIf=\"list[0] !=null\">\n    <img\n      *ngIf=\"list[0].img==''\"\n      height=\"400\"\n      src=\"https://i.picsum.photos/id/623/400/400.jpg?hmac=cWA8OevZRMt2Z__hKLPY6UMyf_YJfmXYsxwBZ6bf7wA\"\n    />\n    <img\n      *ngIf=\"list[0].img !=''\"\n      height=\"300\"\n      src=\"http://cpe.rmuti.ac.th/project/traveling_planner/api/img/{{list[0].img}}\"\n    />\n    <ion-card-header>\n      <ion-card-subtitle *ngIf=\"list[0] !=null\"\n        >{{list[0].categoryTH}}</ion-card-subtitle\n      >\n      <ion-card-title style=\"font-size: 20px;\" *ngIf=\"list[0] !=null\"\n        >{{list[0].placeTH}}</ion-card-title\n      >\n    </ion-card-header>\n    <ion-card-content *ngIf=\"list[0] !=null\">\n      {{list[0].detail}}\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-place/edit-place.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-place/edit-place.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsEditPlaceEditPlacePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"ios\" translucent>\n  <ion-toolbar>\n    <ion-title>Edit Place</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">Close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content mode=\"ios\">\n  <form action=\"\" [formGroup]=\"form_place\">\n    <ion-card>\n      <img\n        *ngIf=\"this.form_place.controls['img'].value =='' && !imgURL\"\n        height=\"400\"\n        src=\"https://i.picsum.photos/id/623/400/400.jpg?hmac=cWA8OevZRMt2Z__hKLPY6UMyf_YJfmXYsxwBZ6bf7wA\"\n      />\n      <img\n        *ngIf=\"this.form_place.controls['img'].value !='' && !imgURL\"\n        height=\"400\"\n        src=\"http://cpe.rmuti.ac.th/project/traveling_planner/api/img/{{this.form_place.controls['img'].value}}\"\n      />\n      <img [src]=\"imgURL\" height=\"400\" *ngIf=\"imgURL\" />\n      <ion-card-header>\n        <ion-item>\n          <ion-label>รูปภาพ :</ion-label>\n          <ion-input\n            type=\"file\"\n            accept=\"image/*\"\n            id=\"upload\"\n            (change)=\"onFileSelected($event)\"\n          ></ion-input>\n        </ion-item>\n        <ion-item color=\"\">\n          <ion-label>ประเภท</ion-label>\n          <ion-select\n            type=\"md\"\n            formControlName=\"categoryNo\"\n            interface=\"action-sheet\"\n          >\n            <ion-select-option\n              *ngFor=\"let item of categoryData\"\n              [value]=\"item.categoryNo\"\n              >{{item.categoryTH}}</ion-select-option\n            >\n          </ion-select>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>ชื่อสถานที่</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>TH :</ion-label>\n          <ion-input formControlName=\"placeTH\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>EN :</ion-label>\n          <ion-input formControlName=\"placeEN\"></ion-input>\n        </ion-item>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label>รายละเอียด</ion-label>\n          <ion-textarea\n            formControlName=\"detail\"\n            rows=\"4\"\n            cols=\"50\"\n            placeholder=\"รายละเอียดของสถานที่ท่องเที่ยว...\"\n          ></ion-textarea>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button\n      mode=\"ios\"\n      expand=\"block\"\n      color=\"primary\"\n      (click)=\"setPlaceEdit()\"\n      >Save</ion-button\n    >\n  </section>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: "home",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    }, {
      path: "detail",
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./modals/detail/detail.module */
        "./src/app/modals/detail/detail.module.ts")).then(function (m) {
          return m.DetailPageModule;
        });
      }
    }, {
      path: "edit-place",
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./modals/edit-place/edit-place.module */
        "./src/app/modals/edit-place/edit-place.module.ts")).then(function (m) {
          return m.EditPlacePageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        onSameUrlNavigation: "reload"
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            //this.statusBar.styleDefault();
            _this.splashScreen.hide();

            _this.statusBar.hide(); //this.statusBar.overlaysWebView(true);
            //this.statusBar.backgroundColorByHexString("#ffffff");

          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "./node_modules/@ionic-native/google-maps/index.js");
    /* harmony import */


    var _modals_edit_place_edit_place_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./modals/edit-place/edit-place.module */
    "./src/app/modals/edit-place/edit-place.module.ts");
    /* harmony import */


    var _modals_detail_detail_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./modals/detail/detail.module */
    "./src/app/modals/detail/detail.module.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js"); //modals


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _modals_edit_place_edit_place_module__WEBPACK_IMPORTED_MODULE_12__["EditPlacePageModule"], _modals_detail_detail_module__WEBPACK_IMPORTED_MODULE_13__["DetailPageModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_11__["GoogleMaps"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__["Geolocation"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/modals/detail/detail-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/modals/detail/detail-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: DetailPageRoutingModule */

  /***/
  function srcAppModalsDetailDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function () {
      return DetailPageRoutingModule;
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


    var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/modals/detail/detail.page.ts");

    var routes = [{
      path: '',
      component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }];

    var DetailPageRoutingModule = function DetailPageRoutingModule() {
      _classCallCheck(this, DetailPageRoutingModule);
    };

    DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modals/detail/detail.module.ts":
  /*!************************************************!*\
    !*** ./src/app/modals/detail/detail.module.ts ***!
    \************************************************/

  /*! exports provided: DetailPageModule */

  /***/
  function srcAppModalsDetailDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPageModule", function () {
      return DetailPageModule;
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


    var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detail-routing.module */
    "./src/app/modals/detail/detail-routing.module.ts");
    /* harmony import */


    var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail.page */
    "./src/app/modals/detail/detail.page.ts");

    var DetailPageModule = function DetailPageModule() {
      _classCallCheck(this, DetailPageModule);
    };

    DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]],
      declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })], DetailPageModule);
    /***/
  },

  /***/
  "./src/app/modals/detail/detail.page.scss":
  /*!************************************************!*\
    !*** ./src/app/modals/detail/detail.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsDetailDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  font-size: 20px;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9iaWcvRTQ5NjlFNzc5NjlFNDlDNi9wcm9qZWN0L2ZhaWwvdHJhdmVsaW5nX3BsYW5uZXIvc3JjL2FwcC9tb2RhbHMvZGV0YWlsL2RldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFscy9kZXRhaWwvZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2RldGFpbC9kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuIiwiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/detail/detail.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/modals/detail/detail.page.ts ***!
    \**********************************************/

  /*! exports provided: DetailPage */

  /***/
  function srcAppModalsDetailDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailPage", function () {
      return DetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var DetailPage = /*#__PURE__*/function () {
      function DetailPage(modalController, http) {
        _classCallCheck(this, DetailPage);

        this.modalController = modalController;
        this.http = http;
        this.list = [];
      }

      _createClass(DetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.http.list$.subscribe(function (list) {
            return _this2.list = list;
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.modalController.dismiss({
                      dismissed: true
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return DetailPage;
    }();

    DetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
      }];
    };

    DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-detail",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/detail/detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail.page.scss */
      "./src/app/modals/detail/detail.page.scss"))["default"]]
    })], DetailPage);
    /***/
  },

  /***/
  "./src/app/modals/edit-place/edit-place-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modals/edit-place/edit-place-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: EditPlacePageRoutingModule */

  /***/
  function srcAppModalsEditPlaceEditPlaceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPlacePageRoutingModule", function () {
      return EditPlacePageRoutingModule;
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


    var _edit_place_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-place.page */
    "./src/app/modals/edit-place/edit-place.page.ts");

    var routes = [{
      path: '',
      component: _edit_place_page__WEBPACK_IMPORTED_MODULE_3__["EditPlacePage"]
    }];

    var EditPlacePageRoutingModule = function EditPlacePageRoutingModule() {
      _classCallCheck(this, EditPlacePageRoutingModule);
    };

    EditPlacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditPlacePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modals/edit-place/edit-place.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/modals/edit-place/edit-place.module.ts ***!
    \********************************************************/

  /*! exports provided: EditPlacePageModule */

  /***/
  function srcAppModalsEditPlaceEditPlaceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPlacePageModule", function () {
      return EditPlacePageModule;
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


    var _edit_place_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-place-routing.module */
    "./src/app/modals/edit-place/edit-place-routing.module.ts");
    /* harmony import */


    var _edit_place_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-place.page */
    "./src/app/modals/edit-place/edit-place.page.ts");

    var EditPlacePageModule = function EditPlacePageModule() {
      _classCallCheck(this, EditPlacePageModule);
    };

    EditPlacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_place_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPlacePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_edit_place_page__WEBPACK_IMPORTED_MODULE_6__["EditPlacePage"]]
    })], EditPlacePageModule);
    /***/
  },

  /***/
  "./src/app/modals/edit-place/edit-place.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/modals/edit-place/edit-place.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsEditPlaceEditPlacePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  font-size: 20px;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9iaWcvRTQ5NjlFNzc5NjlFNDlDNi9wcm9qZWN0L2ZhaWwvdHJhdmVsaW5nX3BsYW5uZXIvc3JjL2FwcC9tb2RhbHMvZWRpdC1wbGFjZS9lZGl0LXBsYWNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2VkaXQtcGxhY2UvZWRpdC1wbGFjZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9lZGl0LXBsYWNlL2VkaXQtcGxhY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuIiwiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/edit-place/edit-place.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/modals/edit-place/edit-place.page.ts ***!
    \******************************************************/

  /*! exports provided: EditPlacePage */

  /***/
  function srcAppModalsEditPlaceEditPlacePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPlacePage", function () {
      return EditPlacePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var EditPlacePage = /*#__PURE__*/function () {
      function EditPlacePage(modalController, http, formBuilder, loadingCtrl) {
        _classCallCheck(this, EditPlacePage);

        this.modalController = modalController;
        this.http = http;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.list = [];
        this.categoryData = null;
        this.fileName = null;
        this.selectedFile = null;
        this.lastNameFile = [];
      }

      _createClass(EditPlacePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.form_place = this.formBuilder.group({
                      placeNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                      categoryNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                      placeTH: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                      placeEN: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                      detail: "",
                      img: ""
                    });
                    _context2.next = 3;
                    return this.loadingCtrl.create({
                      message: "Please wait..."
                    });

                  case 3:
                    this.loading = _context2.sent;
                    _context2.next = 6;
                    return this.loading.present();

                  case 6:
                    this.http.list$.subscribe(function (list) {
                      return _this3.list = list;
                    });
                    this.getCategory();
                    _context2.next = 10;
                    return this.setEdit();

                  case 10:
                    this.loading.dismiss();

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "setEdit",
        value: function setEdit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.form_place.controls["placeNo"].setValue(this.list[0].placeNo);
                    this.form_place.controls["categoryNo"].setValue(this.list[0].categoryNo);
                    this.form_place.controls["placeTH"].setValue(this.list[0].placeTH);
                    this.form_place.controls["placeEN"].setValue(this.list[0].placeEN);
                    this.form_place.controls["detail"].setValue(this.list[0].detail);
                    this.form_place.controls["img"].setValue(this.list[0].img); //console.log(this.form_place.controls["img"].value);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.dismiss({
                      dismissed: true
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var httpRespon;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.http.post("getCategory");

                  case 2:
                    httpRespon = _context5.sent;

                    if (!httpRespon.response.success) {
                      _context5.next = 9;
                      break;
                    }

                    _context5.next = 6;
                    return httpRespon.response.data;

                  case 6:
                    this.categoryData = _context5.sent;
                    _context5.next = 10;
                    break;

                  case 9:
                    this.categoryData = null;

                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "setPlaceEdit",
        value: function setPlaceEdit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                      title: "คุณแน่ใจว่าจะแก้ไขข้อมูล?",
                      text: "คุณจะไม่สามารถยกเลิกสิ่งนี้ได้ !",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#28a745",
                      cancelButtonColor: "#dc3545",
                      confirmButtonText: "ตกลง !",
                      cancelButtonText: "ยกเลิก",
                      reverseButtons: true
                    }).then(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        var _this5 = this;

                        var formData, httpRespon;
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                if (!result.value) {
                                  _context6.next = 17;
                                  break;
                                }

                                formData = new FormData();
                                Object.keys(this.form_place.value).forEach(function (key) {
                                  formData.append(key, _this5.form_place.value[key]);
                                });
                                formData.append("img", this.fileName);
                                formData.append("image", this.selectedFile, this.fileName); //console.log(this.selectedFile);

                                _context6.next = 7;
                                return this.http.post("setPlaceEdit", formData);

                              case 7:
                                httpRespon = _context6.sent;

                                if (!httpRespon.response.success) {
                                  _context6.next = 14;
                                  break;
                                }

                                _context6.next = 11;
                                return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("สำเร็จ", httpRespon.response.message, "success");

                              case 11:
                                this.closeModal();
                                _context6.next = 15;
                                break;

                              case 14:
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("ผิดพลาด", httpRespon.response.message, "error");

                              case 15:
                                _context6.next = 18;
                                break;

                              case 17:
                                if (
                                /* Read more about handling dismissals below */
                                result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {}

                              case 18:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7);
          }));
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this6 = this;

            var mimeType, reader;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.selectedFile = event.target.files[0]; //console.log(event.target.files);
                    //console.log(this.selectedFile);

                    if (!(event.target.files.length === 0)) {
                      _context8.next = 3;
                      break;
                    }

                    return _context8.abrupt("return");

                  case 3:
                    this.lastNameFile = this.selectedFile.name.split(".");
                    this.fileName = new Date().getTime() + "." + this.lastNameFile[this.lastNameFile.length - 1]; //console.log(this.selectedFile.name);

                    mimeType = event.target.files[0].type;

                    if (!(mimeType.match(/image\/*/) == null)) {
                      _context8.next = 8;
                      break;
                    }

                    return _context8.abrupt("return");

                  case 8:
                    reader = new FileReader();
                    this.imagePath = event.target.files;
                    reader.readAsDataURL(event.target.files[0]);

                    reader.onload = function (_event) {
                      _this6.imgURL = reader.result;
                    };

                  case 12:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return EditPlacePage;
    }();

    EditPlacePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }];
    };

    EditPlacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: "app-edit-place",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-place.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/edit-place/edit-place.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-place.page.scss */
      "./src/app/modals/edit-place/edit-place.page.scss"))["default"]]
    })], EditPlacePage);
    /***/
  },

  /***/
  "./src/app/services/http.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/http.service.ts ***!
    \******************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "./node_modules/@ionic-native/google-maps/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var HttpService = /*#__PURE__*/function () {
      function HttpService(http, router, platform) {
        var _this7 = this;

        _classCallCheck(this, HttpService);

        this.http = http;
        this.router = router;
        this.platform = platform;
        this.rootPath = "http://cpe.rmuti.ac.th/project/traveling_planner/api/index.php/";
        this.userLogin = null;
        this.rawData = [];
        this.list = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.list$ = this.list.asObservable();
        this.headers = new Headers();

        this.post = function (path) {
          var formdata = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          return new Promise(function (resolve) {
            _this7.http.post(_this7.rootPath + path, formdata).toPromise().then(function (value) {
              resolve({
                connect: true,
                response: value
              });
            })["catch"](function (reason) {
              resolve({
                connect: false,
                response: reason
              });
            });
          });
        };

        this.get = function (path) {
          return new Promise(function (resolve) {
            _this7.http.get(_this7.rootPath + path).toPromise().then(function (value) {
              resolve({
                connect: true,
                response: value
              });
            })["catch"](function (reason) {
              resolve({
                connect: false,
                response: reason
              });
            });
          });
        };

        this.localStorage = {
          get: function get(key) {
            return JSON.parse(window.localStorage.getItem(key));
          },
          set: function set(key, value) {
            value = JSON.stringify(value);
            window.localStorage.setItem(key, value);
          },
          clear: function clear() {
            window.localStorage.clear();
          }
        };

        this.setUserLogin = function (data) {
          _this7.userLogin = data;

          _this7.localStorage.set("userLogin", data);
        };

        this.navRouter = function (path) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _this7.router.navigate(["".concat(path)], {
            queryParams: params
          });
        };
      }

      _createClass(HttpService, [{
        key: "addNewList",
        value: function addNewList(list) {
          console.log(list);
          this.rawData.push(list);
          this.list.next(this.rawData);
        }
      }, {
        key: "removeList",
        value: function removeList(list) {
          this.rawData = this.rawData.filter(function (v) {
            return v !== list;
          });
          this.list.next(this.rawData);
        }
      }, {
        key: "attachMap",
        value: function attachMap(divId, options) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    options = options || {};

                    if (!this.map) {
                      _context9.next = 14;
                      break;
                    }

                    _context9.next = 4;
                    return new Promise(function (resolve) {
                      var instance = setInterval(function () {
                        if (document.querySelectorAll("#" + divId).length > 0) {
                          clearInterval(instance);
                          resolve();
                        }
                      }, 100);
                    });

                  case 4:
                    _context9.next = 6;
                    return this.map.setDiv(divId);

                  case 6:
                    _context9.next = 8;
                    return new Promise(function (resolve) {
                      setTimeout(resolve, 100);
                    });

                  case 8:
                    if (!options) {
                      _context9.next = 12;
                      break;
                    }

                    options.mapType = options.mapType || _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsMapTypeId"].NORMAL;
                    _context9.next = 12;
                    return this.map.setOptions(options);

                  case 12:
                    _context9.next = 18;
                    break;

                  case 14:
                    _context9.next = 16;
                    return this.platform.ready();

                  case 16:
                    _context9.next = 18;
                    return this._loadMap(divId, options);

                  case 18:
                    return _context9.abrupt("return", Promise.resolve(this.map));

                  case 19:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "_loadMap",
        value: function _loadMap(divId, options) {
          var _this8 = this;

          _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["Environment"].setEnv({
            API_KEY_FOR_BROWSER_RELEASE: "AIzaSyCNIzQ5m0sNY6MichBonktQITHgjXK9UAU",
            API_KEY_FOR_BROWSER_DEBUG: "AIzaSyCNIzQ5m0sNY6MichBonktQITHgjXK9UAU"
          });

          var mapOptions = options || {};
          this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMaps"].create(divId, options);
          return new Promise(function (resolve) {
            _this8.map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsEvent"].MAP_READY).then(function () {
              resolve();
            });
          });
        }
      }, {
        key: "detachMap",
        value: function detachMap() {
          if (!this.map) return;
          this.map.setDiv();
          this.map.off();
          this.map.setOptions({
            mapType: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsMapTypeId"].NONE,
            camera: {
              target: {
                lat: 0,
                lng: 0
              },
              zoom: 1,
              bearing: 0,
              tilt: 0,
              padding: 0
            },
            gestures: {
              scroll: true,
              tilt: true,
              rotate: true,
              zoom: true
            },
            controls: {
              compass: true,
              indoorPicker: true,
              myLocationButton: true,
              myLocation: true,
              zoom: true,
              mapToolbar: true
            },
            preferences: {
              zoom: null,
              building: true,
              clickableIcons: false,
              restriction: null
            }
          });
          this.map.clear();
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }];
    };

    HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], HttpService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /media/big/E4969E77969E49C6/project/fail/traveling_planner/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map