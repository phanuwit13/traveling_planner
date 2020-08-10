function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/search/search.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/search/search.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeSearchSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [routerLink]=\"['/home']\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Search</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode=\"ios\" [fullscreen]=\"true\">\n  <ion-refresher mode=\"md\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div id=\"container\">\n    <ion-searchbar\n      [formControl]=\"key\"\n      (ionChange)=\"getPlaceSearch()\"\n    ></ion-searchbar>\n    <ion-list>\n      <ion-list-header>\n        สถานที่ท่องเที่ยวใน อำเภอเมืองนครราชสีมา\n      </ion-list-header>\n\n      <ion-item\n        *ngFor=\"let item of place ;let i = index\"\n        (click)=\"openModal();addItem(item)\"\n      >\n        <ion-thumbnail slot=\"start\">\n          <img\n            *ngIf=\"item.img ==''\"\n            src=\"https://i.picsum.photos/id/496/200/200.jpg?hmac=Asy6Q8R1Y6wu0nrV_ymC5JGqktniSVnGqoYvNcHdzBI\"\n          />\n          <img\n            *ngIf=\"item.img !=''\"\n            src=\"http://cpe.rmuti.ac.th/project/traveling_planner/api/img/{{item.img}}\"\n          />\n        </ion-thumbnail>\n\n        <ion-label>\n          <h2>{{item.placeTH}}</h2>\n          <h3>{{item.categoryTH}}</h3>\n          <p>{{item.detail}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home/search/search-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/home/search/search-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: SearchPageRoutingModule */

  /***/
  function srcAppHomeSearchSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function () {
      return SearchPageRoutingModule;
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


    var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search.page */
    "./src/app/home/search/search.page.ts");

    var routes = [{
      path: '',
      component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }];

    var SearchPageRoutingModule = function SearchPageRoutingModule() {
      _classCallCheck(this, SearchPageRoutingModule);
    };

    SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/search/search.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/home/search/search.module.ts ***!
    \**********************************************/

  /*! exports provided: SearchPageModule */

  /***/
  function srcAppHomeSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPageModule", function () {
      return SearchPageModule;
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


    var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-routing.module */
    "./src/app/home/search/search-routing.module.ts");
    /* harmony import */


    var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search.page */
    "./src/app/home/search/search.page.ts");

    var SearchPageModule = function SearchPageModule() {
      _classCallCheck(this, SearchPageModule);
    };

    SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })], SearchPageModule);
    /***/
  },

  /***/
  "./src/app/home/search/search.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/home/search/search.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeSearchSearchPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9iaWcvRTQ5NjlFNzc5NjlFNDlDNi9wcm9qZWN0L2ZhaWwvdHJhdmVsaW5nX3BsYW5uZXIvc3JjL2FwcC9ob21lL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuIiwiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/search/search.page.ts":
  /*!********************************************!*\
    !*** ./src/app/home/search/search.page.ts ***!
    \********************************************/

  /*! exports provided: SearchPage */

  /***/
  function srcAppHomeSearchSearchPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
      return SearchPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _modals_detail_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../modals/detail/detail.page */
    "./src/app/modals/detail/detail.page.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var SearchPage = /*#__PURE__*/function () {
      function SearchPage(http, modalController, loadingCtrl) {
        _classCallCheck(this, SearchPage);

        this.http = http;
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.place = null;
        this.key = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.list = [];
      }

      _createClass(SearchPage, [{
        key: "overrideHardwareBackAction",
        value: function overrideHardwareBackAction($event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.dismiss();

                  case 2:
                    this.list.forEach(function (item) {
                      _this.http.removeList(item);
                    });

                  case 3:
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
                    this.getPlace();
                    this.loading.dismiss();
                    this.http.list$.subscribe(function (list) {
                      return _this2.list = list;
                    });

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getPlace",
        value: function getPlace() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var httpRespon;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.http.post("getPlace");

                  case 2:
                    httpRespon = _context3.sent;

                    if (httpRespon.response.success) {
                      this.place = httpRespon.response.data;
                    } else {
                      this.place = httpRespon.response.message;
                    }

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getPlaceSearch",
        value: function getPlaceSearch() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var formData, httpRespon;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    formData = new FormData();
                    formData.append("key", this.key.value);
                    _context4.next = 4;
                    return this.http.post("getPlaceSearch", formData);

                  case 4:
                    httpRespon = _context4.sent;

                    if (!httpRespon.response.success) {
                      _context4.next = 11;
                      break;
                    }

                    _context4.next = 8;
                    return httpRespon.response.data;

                  case 8:
                    this.place = _context4.sent;
                    _context4.next = 12;
                    break;

                  case 11:
                    this.place = null;

                  case 12:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } //รีเฟช

      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this3 = this;

          setTimeout(function () {
            _this3.getPlace();

            event.target.complete();
          }, 1000);
          this.place = null;
          this.key.setValue("");
        } //เปิดโมเดล

      }, {
        key: "openModal",
        value: function openModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            var modal, _yield$modal$onWillDi, data;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _modals_detail_detail_page__WEBPACK_IMPORTED_MODULE_4__["DetailPage"]
                    });

                  case 2:
                    modal = _context5.sent;
                    _context5.next = 5;
                    return modal.present();

                  case 5:
                    _context5.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    _yield$modal$onWillDi = _context5.sent;
                    data = _yield$modal$onWillDi.data;

                    if (data.dismissed) {
                      this.list.forEach(function (item) {
                        _this4.http.removeList(item);
                      });
                    }

                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "addItem",
        value: function addItem(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.http.addNewList(item);

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return SearchPage;
    }();

    SearchPage.ctorParameters = function () {
      return [{
        type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:ionBackButton", ["$event"])], SearchPage.prototype, "overrideHardwareBackAction", null);
    SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-search",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/search/search.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search.page.scss */
      "./src/app/home/search/search.page.scss"))["default"]]
    })], SearchPage);
    /***/
  }
}]);
//# sourceMappingURL=search-search-module-es5.js.map