function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content mode=\"ios\" [fullscreen]=\"true\">\n  <div id=\"container\">\n    <div class=\"box\" [routerLink]=\"['planning']\">\n      <ion-icon name=\"book-outline\" class=\"ic\"></ion-icon>\n      <div class=\"tl\">\n        <span>Planning</span>\n      </div>\n    </div>\n    <div class=\"box\" [routerLink]=\"['search']\">\n      <ion-icon name=\"search\" class=\"ic\"></ion-icon>\n      <div class=\"tl\">\n        <span>Search</span>\n      </div>\n    </div>\n    <div class=\"box\" [routerLink]=\"['map']\">\n      <ion-icon name=\"navigate-circle-outline\" class=\"ic\"></ion-icon>\n      <div class=\"tl\">\n        <span>Map</span>\n      </div>\n    </div>\n    <div class=\"box\" [routerLink]=\"['admin']\">\n      <ion-icon name=\"person-outline\" class=\"ic\"></ion-icon>\n      <div class=\"tl\">\n        <span>Admin</span>\n      </div>\n    </div>\n    <div class=\"box\" [routerLink]=\"['contact']\">\n      <ion-icon name=\"call-outline\" class=\"ic\"></ion-icon>\n      <div class=\"tl\">\n        <span>Contact</span>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: "",
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }, {
      path: "admin",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | admin-admin-module */
        "admin-admin-module").then(__webpack_require__.bind(null,
        /*! ./admin/admin.module */
        "./src/app/home/admin/admin.module.ts")).then(function (m) {
          return m.AdminPageModule;
        });
      }
    }, {
      path: "contact",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contact-contact-module */
        "contact-contact-module").then(__webpack_require__.bind(null,
        /*! ./contact/contact.module */
        "./src/app/home/contact/contact.module.ts")).then(function (m) {
          return m.ContactPageModule;
        });
      }
    }, {
      path: "map",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | map-map-module */
        "map-map-module").then(__webpack_require__.bind(null,
        /*! ./map/map.module */
        "./src/app/home/map/map.module.ts")).then(function (m) {
          return m.MapPageModule;
        });
      }
    }, {
      path: "planning",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | planning-planning-module */
        "planning-planning-module").then(__webpack_require__.bind(null,
        /*! ./planning/planning.module */
        "./src/app/home/planning/planning.module.ts")).then(function (m) {
          return m.PlanningPageModule;
        });
      }
    }, {
      path: "search",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | search-search-module */
        "search-search-module").then(__webpack_require__.bind(null,
        /*! ./search/search.module */
        "./src/app/home/search/search.module.ts")).then(function (m) {
          return m.SearchPageModule;
        });
      }
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  height: 100%;\n  background-color: #ebebeb;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.box {\n  grid-column: span 1;\n  grid-row: span 4;\n  background-color: #ffffff;\n  margin-top: 10%;\n  margin-left: 5%;\n  margin-bottom: 1%;\n  margin-right: 5%;\n  border-radius: 8px;\n  float: left;\n}\n\n.ic {\n  font-size: 100px;\n  margin-top: 10%;\n  color: #4c8dff;\n}\n\n.tl {\n  font-size: 20px;\n  margin-top: 10%;\n  font-weight: bold;\n  color: #000000;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9iaWcvRTQ5NjlFNzc5NjlFNDlDNi9wcm9qZWN0L2ZhaWwvdHJhdmVsaW5nX3BsYW5uZXIvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBUEc7RUFRSCxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFoQkk7RUFpQkosZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDREY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnOiAjZWJlYmViO1xuJGJnMjogI2ZmZmZmZjtcbiNjb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmJveCB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XG4gIGdyaWQtcm93OiBzcGFuIDQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZzI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5pYyB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgY29sb3I6ICM0YzhkZmY7XG59XG4udGwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuIiwiI2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmJveCB7XG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XG4gIGdyaWQtcm93OiBzcGFuIDQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmljIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBjb2xvcjogIzRjOGRmZjtcbn1cblxuLnRsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomePage = function HomePage() {
      _classCallCheck(this, HomePage);
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map