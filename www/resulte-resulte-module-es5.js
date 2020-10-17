function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resulte-resulte-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/planning/resulte/resulte.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/planning/resulte/resulte.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePlanningResulteResultePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back-outline\">Black</ion-icon> -->\n      <ion-back-button\n        (click)=\"closePlan()\"\n        [routerLink]=\"['/home/planning']\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Resulte</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content mode=\"md\" [fullscreen]=\"false\">\n  <div id=\"container\">\n    <div class=\"detail\">\n      <div class=\"box left\">\n        <div class=\"one\"><ion-icon name=\"car-sport-sharp\"></ion-icon></div>\n        <div class=\"two\"><h3 style=\"color: white;\">{{list[2]}} กม.</h3></div>\n      </div>\n      <div class=\"box right\">\n        <div class=\"one\"><ion-icon name=\"logo-usd\"></ion-icon></div>\n        <div class=\"two\" *ngIf=\"list != []\">\n          <h3 style=\"color: white;\">{{list[1]}} บาท</h3>\n        </div>\n      </div>\n    </div>\n    <div *ngFor=\"let item of list[0] ;let i = index\">\n      <ion-card>\n        <ion-item>\n          <ion-thumbnail class=\"img\" slot=\"start\">\n            <img\n              src=\"http://cpe.rmuti.ac.th/project/traveling_planner/api/img/{{item.img}}\"\n            />\n          </ion-thumbnail>\n          <ion-label>\n            <h2>{{item.placeTH}}</h2>\n            <h3>{{item.categoryTH}}</h3>\n            <p>{{item.detail}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-card>\n\n      <ion-icon\n        *ngIf=\"i+1 != list[0].length \"\n        style=\"font-size: 30px; color: #4c8dff;\"\n        name=\"arrow-down-outline\"\n      ></ion-icon>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button\n      [routerLink]=\"['/home/map']\"\n      mode=\"ios\"\n      expand=\"block\"\n      color=\"primary\"\n      >Get Route</ion-button\n    >\n  </section>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/home/planning/resulte/resulte-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/home/planning/resulte/resulte-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ResultePageRoutingModule */

  /***/
  function srcAppHomePlanningResulteResulteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultePageRoutingModule", function () {
      return ResultePageRoutingModule;
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


    var _resulte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resulte.page */
    "./src/app/home/planning/resulte/resulte.page.ts");

    var routes = [{
      path: '',
      component: _resulte_page__WEBPACK_IMPORTED_MODULE_3__["ResultePage"]
    }];

    var ResultePageRoutingModule = function ResultePageRoutingModule() {
      _classCallCheck(this, ResultePageRoutingModule);
    };

    ResultePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResultePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/planning/resulte/resulte.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/home/planning/resulte/resulte.module.ts ***!
    \*********************************************************/

  /*! exports provided: ResultePageModule */

  /***/
  function srcAppHomePlanningResulteResulteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultePageModule", function () {
      return ResultePageModule;
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


    var _resulte_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resulte-routing.module */
    "./src/app/home/planning/resulte/resulte-routing.module.ts");
    /* harmony import */


    var _resulte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./resulte.page */
    "./src/app/home/planning/resulte/resulte.page.ts");

    var ResultePageModule = function ResultePageModule() {
      _classCallCheck(this, ResultePageModule);
    };

    ResultePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resulte_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResultePageRoutingModule"]],
      declarations: [_resulte_page__WEBPACK_IMPORTED_MODULE_6__["ResultePage"]]
    })], ResultePageModule);
    /***/
  },

  /***/
  "./src/app/home/planning/resulte/resulte.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/home/planning/resulte/resulte.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePlanningResulteResultePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  background: #ebebeb;\n  height: 100%;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.img {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 100px !important;\n  max-height: 100px !important;\n}\n\n.detail {\n  height: 50px;\n}\n\n.box {\n  width: 50%;\n  float: left;\n  height: 50px;\n}\n\n.left {\n  background-color: #3880ff;\n}\n\n.right {\n  background-color: #2dd36f;\n}\n\n.one {\n  height: 50px;\n  width: 30%;\n  float: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.two {\n  height: 50px;\n  width: 60%;\n  float: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-icon {\n  font-size: 30px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wbGFubmluZy9yZXN1bHRlL0M6XFxwcm9qZWN0XFxmYWlsXFx0cmF2ZWxpbmdfcGxhbm5lci9zcmNcXGFwcFxcaG9tZVxccGxhbm5pbmdcXHJlc3VsdGVcXHJlc3VsdGUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3BsYW5uaW5nL3Jlc3VsdGUvcmVzdWx0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFQRztFQVFILFlBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDREY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FERUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtBQ0dGOztBRERBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QURGQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wbGFubmluZy9yZXN1bHRlL3Jlc3VsdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnOiAjZWJlYmViO1xuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAkYmc7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5pbWcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDBweCAhaW1wb3J0YW50OyAvL2FueSBzaXplXG4gIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbn1cbi5kZXRhaWwge1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uYm94IHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogNTBweDtcbn1cbi5sZWZ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBmZjtcbn1cbi5yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZGQzNmY7XG59XG4ub25lIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMzAlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udHdvIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNjAlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuIiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kZXRhaWwge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5ib3gge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmY7XG59XG5cbi5yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZGQzNmY7XG59XG5cbi5vbmUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAzMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnR3byB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDYwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/planning/resulte/resulte.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/planning/resulte/resulte.page.ts ***!
    \*******************************************************/

  /*! exports provided: ResultePage */

  /***/
  function srcAppHomePlanningResulteResultePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultePage", function () {
      return ResultePage;
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


    var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ResultePage = /*#__PURE__*/function () {
      function ResultePage(http, loadingCtrl) {
        _classCallCheck(this, ResultePage);

        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.list = [];
      }

      _createClass(ResultePage, [{
        key: "overrideHardwareBackAction",
        value: function overrideHardwareBackAction($event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.list.forEach(function (item, index) {
                      _this.http.removeList(_this.list[index]);
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
                    return this.loadingCtrl.create({
                      message: "Please wait..."
                    });

                  case 2:
                    this.loading = _context2.sent;
                    _context2.next = 5;
                    return this.loading.present();

                  case 5:
                    this.http.list$.subscribe(function (list) {
                      return _this2.list = list;
                    });
                    this.loading.dismiss();

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "closePlan",
        value: function closePlan() {
          var _this3 = this;

          this.list.forEach(function (item) {
            _this3.http.removeList(item);
          });
        }
      }]);

      return ResultePage;
    }();

    ResultePage.ctorParameters = function () {
      return [{
        type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:ionBackButton", ["$event"])], ResultePage.prototype, "overrideHardwareBackAction", null);
    ResultePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-resulte",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./resulte.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/planning/resulte/resulte.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./resulte.page.scss */
      "./src/app/home/planning/resulte/resulte.page.scss"))["default"]]
    })], ResultePage);
    /***/
  }
}]);
//# sourceMappingURL=resulte-resulte-module-es5.js.map