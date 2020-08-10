function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homeadmin-homeadmin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/homeadmin.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/homeadmin.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeAdminHomeadminHomeadminPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back-outline\">Black</ion-icon> -->\n      <ion-back-button [routerLink]=\"['/home']\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Place Manager</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher mode=\"md\" slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"start\">\n      <ion-button size=\"default\" color=\"dark\" [routerLink]=\"['addplace']\"\n        >สถานที่</ion-button\n      >\n      <ion-button size=\"default\" color=\"dark\" [routerLink]=\"['addcategory']\"\n        >ประเภท</ion-button\n      >\n    </ion-fab-list>\n  </ion-fab>\n  <div id=\"container\">\n    <form action=\"\" [formGroup]=\"form_planning\">\n      <ion-item color=\"\">\n        <ion-label>ประเภท</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"categoryNo\"\n          interface=\"action-sheet\"\n          (ionChange)=\"getPlaceCategory()\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of categoryData\"\n            [value]=\"item.categoryNo\"\n            >{{item.categoryTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-searchbar\n        [formControl]=\"key\"\n        (ionChange)=\"getPlaceSearch()\"\n      ></ion-searchbar>\n    </form>\n    <ion-item-sliding *ngFor=\"let item of place ;let i = index\">\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <img\n            *ngIf=\"item.img ==''\"\n            src=\"https://i.picsum.photos/id/496/200/200.jpg?hmac=Asy6Q8R1Y6wu0nrV_ymC5JGqktniSVnGqoYvNcHdzBI\"\n          />\n          <img\n            *ngIf=\"item.img !=''\"\n            src=\"http://cpe.rmuti.ac.th/project/traveling_planner/api/img/{{item.img}}\"\n          />\n        </ion-thumbnail>\n\n        <ion-label>\n          <h2>{{item.placeTH}}</h2>\n          <h3>{{item.categoryTH}}</h3>\n          <p>{{item.detail}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item-options>\n        <ion-item-option\n          style=\"color: #ffffff;\"\n          (click)=\"openModal();addItem(item)\"\n          color=\"warning\"\n        >\n          <ion-icon slot=\"start\" name=\"color-wand\"></ion-icon>\n          แก้ไข\n        </ion-item-option>\n        <ion-item-option (click)=\"delPlace(item.placeNo)\" color=\"danger\">\n          <ion-icon slot=\"start\" name=\"trash-bin\"></ion-icon>\n\n          ลบ\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home/admin/homeadmin/homeadmin-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/home/admin/homeadmin/homeadmin-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: HomeadminPageRoutingModule */

  /***/
  function srcAppHomeAdminHomeadminHomeadminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeadminPageRoutingModule", function () {
      return HomeadminPageRoutingModule;
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


    var _homeadmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./homeadmin.page */
    "./src/app/home/admin/homeadmin/homeadmin.page.ts");

    var routes = [{
      path: "",
      component: _homeadmin_page__WEBPACK_IMPORTED_MODULE_3__["HomeadminPage"]
    }, {
      path: "addplace",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | addplace-addplace-module */
        "addplace-addplace-module").then(__webpack_require__.bind(null,
        /*! ./addplace/addplace.module */
        "./src/app/home/admin/homeadmin/addplace/addplace.module.ts")).then(function (m) {
          return m.AddplacePageModule;
        });
      }
    }, {
      path: 'addcategory',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | addcategory-addcategory-module */
        "addcategory-addcategory-module").then(__webpack_require__.bind(null,
        /*! ./addcategory/addcategory.module */
        "./src/app/home/admin/homeadmin/addcategory/addcategory.module.ts")).then(function (m) {
          return m.AddcategoryPageModule;
        });
      }
    }];

    var HomeadminPageRoutingModule = function HomeadminPageRoutingModule() {
      _classCallCheck(this, HomeadminPageRoutingModule);
    };

    HomeadminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomeadminPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/admin/homeadmin/homeadmin.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home/admin/homeadmin/homeadmin.module.ts ***!
    \**********************************************************/

  /*! exports provided: HomeadminPageModule */

  /***/
  function srcAppHomeAdminHomeadminHomeadminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeadminPageModule", function () {
      return HomeadminPageModule;
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


    var _homeadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./homeadmin-routing.module */
    "./src/app/home/admin/homeadmin/homeadmin-routing.module.ts");
    /* harmony import */


    var _homeadmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./homeadmin.page */
    "./src/app/home/admin/homeadmin/homeadmin.page.ts");

    var HomeadminPageModule = function HomeadminPageModule() {
      _classCallCheck(this, HomeadminPageModule);
    };

    HomeadminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _homeadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeadminPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_homeadmin_page__WEBPACK_IMPORTED_MODULE_6__["HomeadminPage"]]
    })], HomeadminPageModule);
    /***/
  },

  /***/
  "./src/app/home/admin/homeadmin/homeadmin.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/home/admin/homeadmin/homeadmin.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeAdminHomeadminHomeadminPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9iaWcvRTQ5NjlFNzc5NjlFNDlDNi9wcm9qZWN0L2ZhaWwvdHJhdmVsaW5nX3BsYW5uZXIvc3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9ob21lYWRtaW4ucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9ob21lYWRtaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9ob21lYWRtaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuIiwiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/admin/homeadmin/homeadmin.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/admin/homeadmin/homeadmin.page.ts ***!
    \********************************************************/

  /*! exports provided: HomeadminPage */

  /***/
  function srcAppHomeAdminHomeadminHomeadminPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeadminPage", function () {
      return HomeadminPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modals_edit_place_edit_place_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../modals/edit-place/edit-place.page */
    "./src/app/modals/edit-place/edit-place.page.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var HomeadminPage = /*#__PURE__*/function () {
      function HomeadminPage(http, modalController, formBuilder) {
        _classCallCheck(this, HomeadminPage);

        this.http = http;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.place = null;
        this.key = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.categoryData = null;
        this.list = [];
      }

      _createClass(HomeadminPage, [{
        key: "overrideHardwareBackAction",
        value: function overrideHardwareBackAction($event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.dismiss();

                  case 2:
                    this.http.removeList(this.list[0]);

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
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.form_planning = this.formBuilder.group({
                      placeNo: "",
                      categoryNo: "",
                      point_start: ""
                    });
                    this.http.list$.subscribe(function (list) {
                      return _this.list = list;
                    });
                    this.getPlace();
                    this.getCategory();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onload",
        value: function onload() {}
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

                    //console.log(httpRespon);
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
                    formData = new FormData(); //console.log(this.key.value);

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
          var _this2 = this;

          //console.log("Begin async operation");
          setTimeout(function () {
            //console.log("Async operation has ended");
            _this2.getPlace();

            event.target.complete();
          }, 1000);
          this.place = null;
          this.key.setValue("");
        } //เปิดโมเดล

      }, {
        key: "openModal",
        value: function openModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var modal, _yield$modal$onWillDi, data;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _modals_edit_place_edit_place_page__WEBPACK_IMPORTED_MODULE_3__["EditPlacePage"]
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
                      this.getPlace();
                      this.http.removeList(this.list[0]);
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
      }, {
        key: "getPlaceCategory",
        value: function getPlaceCategory() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var formData, httpRespon;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    formData = new FormData();
                    formData.append("categoryNo", this.form_planning.controls["categoryNo"].value); //console.log(this.form_planning.controls["categoryNo"].value);

                    _context7.next = 4;
                    return this.http.post("getPlaceCategory", formData);

                  case 4:
                    httpRespon = _context7.sent;

                    if (!httpRespon.response.success) {
                      _context7.next = 11;
                      break;
                    }

                    _context7.next = 8;
                    return httpRespon.response.data;

                  case 8:
                    this.place = _context7.sent;
                    _context7.next = 12;
                    break;

                  case 11:
                    this.place = null;

                  case 12:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var httpRespon;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.http.post("getCategory");

                  case 2:
                    httpRespon = _context8.sent;

                    if (!httpRespon.response.success) {
                      _context8.next = 9;
                      break;
                    }

                    _context8.next = 6;
                    return httpRespon.response.data;

                  case 6:
                    this.categoryData = _context8.sent;
                    _context8.next = 10;
                    break;

                  case 9:
                    this.categoryData = null;

                  case 10:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "delPlace",
        value: function delPlace(placeNo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                      title: "คุณแน่ใจว่าต้องการลบสถานที่?",
                      text: "คุณจะไม่สามารถยกเลิกสิ่งนี้ได้!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#28a745",
                      cancelButtonColor: "#dc3545",
                      confirmButtonText: "ตกลง !",
                      cancelButtonText: "ยกเลิก",
                      reverseButtons: true
                    }).then(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                        var _this4 = this;

                        var formData, httpRespon;
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                if (!result.value) {
                                  _context9.next = 14;
                                  break;
                                }

                                formData = new FormData();
                                formData.append("placeNo", placeNo);
                                _context9.next = 5;
                                return this.http.post("delPlace", formData);

                              case 5:
                                httpRespon = _context9.sent;

                                if (!httpRespon.response.success) {
                                  _context9.next = 11;
                                  break;
                                }

                                _context9.next = 9;
                                return sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("สำเร็จ", httpRespon.response.message + " !", "success").then(function () {
                                  _this4.getPlace();
                                });

                              case 9:
                                _context9.next = 12;
                                break;

                              case 11:
                                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("ผิดพลาด", httpRespon.response.message + " !", "error");

                              case 12:
                                _context9.next = 15;
                                break;

                              case 14:
                                if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.DismissReason.cancel) {}

                              case 15:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));
        }
      }]);

      return HomeadminPage;
    }();

    HomeadminPage.ctorParameters = function () {
      return [{
        type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:ionBackButton", ["$event"])], HomeadminPage.prototype, "overrideHardwareBackAction", null);
    HomeadminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-homeadmin",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./homeadmin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/homeadmin.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./homeadmin.page.scss */
      "./src/app/home/admin/homeadmin/homeadmin.page.scss"))["default"]]
    })], HomeadminPage);
    /***/
  }
}]);
//# sourceMappingURL=homeadmin-homeadmin-module-es5.js.map