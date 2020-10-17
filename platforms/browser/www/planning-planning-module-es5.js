function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planning-planning-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/planning/planning.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/planning/planning.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePlanningPlanningPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back-outline\">Black</ion-icon> -->\n      <ion-back-button\n        (click)=\"closeList()\"\n        [routerLink]=\"['/home']\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Planning</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"false\">\n  <div id=\"container\">\n    <form\n      [formGroup]=\"form_planning\"\n      style=\"padding-top: 15px; font-size: 18px;\"\n    >\n      <ion-label slot=\"start\">จุดเริ่มต้น</ion-label>\n      <ion-item color=\"\">\n        <ion-label>ประเภท</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"categoryNo\"\n          interface=\"action-sheet\"\n          (ionChange)=\"getPlaceCategory()\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of categoryData\"\n            [value]=\"item.categoryNo\"\n            >{{item.categoryTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-item color=\"\">\n        <ion-label>สถานที่</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"point_start\"\n          interface=\"action-sheet\"\n        >\n          <ion-select-option *ngFor=\"let item of placeData \" [value]=\"item\"\n            >{{item.placeTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-item\n        color=\"\"\n        *ngIf=\"this.form_planning.controls['point_start'].value != ''\"\n      >\n        <ion-label\n          >{{'จุดเริ่มต้น'+\"\n          \"+this.form_planning.controls['point_start'].value.placeTH}}</ion-label\n        >\n      </ion-item>\n\n      <div style=\"padding-top: 15px;\">\n        <ion-label>โปรดเลือกสถานที่ ที่ต้องการไป</ion-label>\n      </div>\n      <ion-item color=\"\">\n        <ion-label>ประเภท</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"categoryNo\"\n          interface=\"action-sheet\"\n          (ionChange)=\"getPlaceCategory()\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of categoryData\"\n            [value]=\"item.categoryNo\"\n            >{{item.categoryTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-item color=\"\">\n        <ion-label>สถานที่</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"placeNo\"\n          interface=\"action-sheet\"\n          (ionChange)=\"addPlace()\"\n        >\n          <ion-select-option *ngFor=\"let item of placeData\" [value]=\"item\"\n            >{{item.placeTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-item-sliding *ngFor=\"let x of no ; let i = index\">\n        <ion-item color=\"\">\n          <ion-label>{{(i+1)+\". \"+x.placeTH}}</ion-label>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"delPlace(x)\"\n            >Delete</ion-item-option\n          >\n        </ion-item-options>\n      </ion-item-sliding>\n    </form>\n  </div>\n</ion-content>\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button\n      mode=\"ios\"\n      expand=\"block\"\n      color=\"primary\"\n      (click)=\"testSort() \"\n      [disabled]=\"this.no.length ==0 || this.form_planning.controls['point_start'].value =='' \"\n      >Plan</ion-button\n    >\n  </section>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/home/planning/planning-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home/planning/planning-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: PlanningPageRoutingModule */

  /***/
  function srcAppHomePlanningPlanningRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanningPageRoutingModule", function () {
      return PlanningPageRoutingModule;
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


    var _planning_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./planning.page */
    "./src/app/home/planning/planning.page.ts");

    var routes = [{
      path: '',
      component: _planning_page__WEBPACK_IMPORTED_MODULE_3__["PlanningPage"]
    }, {
      path: 'resulte',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | resulte-resulte-module */
        "resulte-resulte-module").then(__webpack_require__.bind(null,
        /*! ./resulte/resulte.module */
        "./src/app/home/planning/resulte/resulte.module.ts")).then(function (m) {
          return m.ResultePageModule;
        });
      }
    }];

    var PlanningPageRoutingModule = function PlanningPageRoutingModule() {
      _classCallCheck(this, PlanningPageRoutingModule);
    };

    PlanningPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlanningPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/planning/planning.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/home/planning/planning.module.ts ***!
    \**************************************************/

  /*! exports provided: PlanningPageModule */

  /***/
  function srcAppHomePlanningPlanningModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanningPageModule", function () {
      return PlanningPageModule;
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


    var _planning_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./planning-routing.module */
    "./src/app/home/planning/planning-routing.module.ts");
    /* harmony import */


    var _planning_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./planning.page */
    "./src/app/home/planning/planning.page.ts");

    var PlanningPageModule = function PlanningPageModule() {
      _classCallCheck(this, PlanningPageModule);
    };

    PlanningPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _planning_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlanningPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_planning_page__WEBPACK_IMPORTED_MODULE_6__["PlanningPage"]]
    })], PlanningPageModule);
    /***/
  },

  /***/
  "./src/app/home/planning/planning.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/home/planning/planning.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePlanningPlanningPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wbGFubmluZy9DOlxccHJvamVjdFxcZmFpbFxcdHJhdmVsaW5nX3BsYW5uZXIvc3JjXFxhcHBcXGhvbWVcXHBsYW5uaW5nXFxwbGFubmluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvcGxhbm5pbmcvcGxhbm5pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL3BsYW5uaW5nL3BsYW5uaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiZzogI2ZmZmZmZjtcblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuIiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/planning/planning.page.ts":
  /*!************************************************!*\
    !*** ./src/app/home/planning/planning.page.ts ***!
    \************************************************/

  /*! exports provided: PlanningPage */

  /***/
  function srcAppHomePlanningPlanningPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlanningPage", function () {
      return PlanningPage;
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var PlanningPage = /*#__PURE__*/function () {
      function PlanningPage(http, formBuilder) {
        _classCallCheck(this, PlanningPage);

        this.http = http;
        this.formBuilder = formBuilder;
        this.placeData = null;
        this.categoryData = null;
        this.no = [];
        this.noSort = [];
        this.distance = [];
        this.point_start = [];
        this.placeToGo = [];
        this.list = [];
        this.cost = 0;
        this.sumDistance = 0;
      }

      _createClass(PlanningPage, [{
        key: "overrideHardwareBackAction",
        value: function overrideHardwareBackAction($event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.http.removeList(this.list[0]);
                    this.clearData();

                  case 2:
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
                    this.http.list$.subscribe(function (list) {
                      return _this.list = list;
                    });
                    this.form_planning = this.formBuilder.group({
                      placeNo: "",
                      categoryNo: "",
                      point_start: ""
                    });
                    this.getCategory();

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addPlace",
        value: function addPlace() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var check;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this.no.length < 8)) {
                      _context4.next = 12;
                      break;
                    }

                    check = 0;

                    if (!(this.form_planning.controls["placeNo"].value.placeNo == this.form_planning.controls["point_start"].value.placeNo)) {
                      _context4.next = 9;
                      break;
                    }

                    check = 1;
                    _context4.next = 6;
                    return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("คุณเลือกสถานที่ซ้ำ !", "กรุณาตรวจสอบสถานที่ท่องเที่ยว", "warning");

                  case 6:
                    return _context4.abrupt("return");

                  case 9:
                    if (this.no == null) {
                      this.no.push(this.form_planning.controls["placeNo"].value);
                      this.placeToGo.push(this.form_planning.controls["placeNo"].value);
                    } else {
                      this.no.forEach(function (item) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  if (!(item == this.form_planning.controls["placeNo"].value)) {
                                    _context3.next = 5;
                                    break;
                                  }

                                  check = 1;
                                  _context3.next = 4;
                                  return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("คุณเลือกสถานที่ซ้ำ !", "กรุณาตรวจสอบสถานที่ท่องเที่ยว", "warning");

                                case 4:
                                  return _context3.abrupt("return");

                                case 5:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      });

                      if (check != 1) {
                        this.no.push(this.form_planning.controls["placeNo"].value);
                        this.placeToGo.push(this.form_planning.controls["placeNo"].value);
                      }
                    }

                  case 10:
                    _context4.next = 13;
                    break;

                  case 12:
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("เลือกได้สูงสุด 8 สถานที่ !", "กรุณาตรวจสอบสถานที่ท่องเที่ยว", "warning");

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "delPlace",
        value: function delPlace(value) {
          var _this3 = this;

          this.no.forEach(function (item, index) {
            if (item == value) {
              _this3.no.splice(index, 1);

              return;
            }
          });
        }
      }, {
        key: "closeList",
        value: function closeList() {
          this.http.removeList(this.list[0]);
        }
      }, {
        key: "addItem",
        value: function addItem(value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (value != []) {
                      this.http.addNewList(value);
                    }

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getPlace",
        value: function getPlace() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var httpRespon;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.http.post("getPlace");

                  case 2:
                    httpRespon = _context6.sent;

                    if (!(httpRespon.response.data.length > 0)) {
                      _context6.next = 9;
                      break;
                    }

                    _context6.next = 6;
                    return httpRespon.response.data;

                  case 6:
                    this.placeData = _context6.sent;
                    _context6.next = 10;
                    break;

                  case 9:
                    this.placeData = null;

                  case 10:
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
                    this.placeData = _context7.sent;
                    _context7.next = 12;
                    break;

                  case 11:
                    this.placeData = null;

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
        key: "testSort",
        value: function testSort() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var i;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.point_start = this.form_planning.controls["point_start"].value.placeNo;
                    this.noSort.push(this.form_planning.controls["point_start"].value);
                    i = 0;

                  case 3:
                    if (!(i < this.no.length)) {
                      _context9.next = 9;
                      break;
                    }

                    _context9.next = 6;
                    return this.loopPlace(this.point_start);

                  case 6:
                    i++;
                    _context9.next = 3;
                    break;

                  case 9:
                    //console.log(this.cost);
                    this.http.navRouter("/home/planning/resulte");
                    this.sumDistance = this.sumDistance / 1000;
                    _context9.next = 13;
                    return this.addItem(this.noSort);

                  case 13:
                    _context9.next = 15;
                    return this.addItem(this.cost);

                  case 15:
                    this.addItem(this.sumDistance.toFixed(2));
                    this.clearData();

                  case 17:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "loopPlace",
        value: function loopPlace(start) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var i, j;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.calculateDistance(start);

                  case 2:
                    i = 0;

                  case 3:
                    if (!(i < this.distance.length)) {
                      _context10.next = 23;
                      break;
                    }

                    j = 0;

                  case 5:
                    if (!(j < this.placeToGo.length)) {
                      _context10.next = 20;
                      break;
                    }

                    if (!(this.distance[i].endPath == this.placeToGo[j].placeNo && this.distance[i].distance != "0")) {
                      _context10.next = 17;
                      break;
                    }

                    this.cost += parseInt(this.distance[i].fare);
                    this.sumDistance += parseFloat(this.distance[i].distance);
                    console.log(this.sumDistance);
                    this.noSort.push(this.placeToGo[j]);
                    _context10.next = 13;
                    return this.placeToGo[j].placeNo;

                  case 13:
                    this.point_start = _context10.sent;
                    this.placeToGo.splice(j, 1);
                    i = this.distance.length + 1;
                    return _context10.abrupt("break", 20);

                  case 17:
                    j++;
                    _context10.next = 5;
                    break;

                  case 20:
                    i++;
                    _context10.next = 3;
                    break;

                  case 23:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "calculateDistance",
        value: function calculateDistance(firstPath) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var formData, httpRespon;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    formData = new FormData();
                    formData.append("firstPath", firstPath); //formData.append("endPath", endPath);

                    _context11.next = 4;
                    return this.http.post("getPathSelectOne", formData);

                  case 4:
                    httpRespon = _context11.sent;

                    //console.log(httpRespon);
                    if (httpRespon.response.success) {
                      this.distance = httpRespon.response.data;
                    } else {
                      this.distance = null;
                    }

                    this.distance.sort(function (a, b) {
                      return parseFloat(a.distance) < parseFloat(b.distance) ? -1 : 0;
                    }); //console.log(this.distance);

                  case 7:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "clearData",
        value: function clearData() {
          this.no = [];
          this.noSort = [];
          this.distance = [];
          this.point_start = [];
          this.placeToGo = [];
          this.cost = 0;
          this.sumDistance = 0;
        }
      }]);

      return PlanningPage;
    }();

    PlanningPage.ctorParameters = function () {
      return [{
        type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:ionBackButton", ["$event"])], PlanningPage.prototype, "overrideHardwareBackAction", null);
    PlanningPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-planning",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./planning.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/planning/planning.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./planning.page.scss */
      "./src/app/home/planning/planning.page.scss"))["default"]]
    })], PlanningPage);
    /***/
  }
}]);
//# sourceMappingURL=planning-planning-module-es5.js.map