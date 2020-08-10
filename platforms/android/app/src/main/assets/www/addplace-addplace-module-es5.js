function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addplace-addplace-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addplace/addplace.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addplace/addplace.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeAdminHomeadminAddplaceAddplacePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back-outline\">Black</ion-icon> -->\n      <ion-back-button\n        [routerLink]=\"['/home/admin/homeadmin']\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Place</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content mode=\"ios\" [fullscreen]=\"false\">\n  <div id=\"map_canvas\"></div>\n  <div id=\"container\" text-center>\n    <form action=\"\" [formGroup]=\"form_place\">\n      <div style=\"padding: 5%;\">\n        <span class=\"tl\">Add Place</span>\n      </div>\n      <img src=\"assets/img/icons-image.png\" height=\"200\" *ngIf=\"!imgURL\" />\n      <img [src]=\"imgURL\" height=\"200\" *ngIf=\"imgURL\" />\n      <ion-item>\n        <ion-label>รูปภาพ :</ion-label>\n        <ion-input\n          type=\"file\"\n          accept=\"image/*\"\n          id=\"upload\"\n          (change)=\"onFileSelected($event)\"\n        ></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>ชื่อสถานที่</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>TH :</ion-label>\n        <ion-input formControlName=\"placeTH\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>EN :</ion-label>\n        <ion-input formControlName=\"placeEN\"></ion-input>\n      </ion-item>\n      <ion-item color=\"\">\n        <ion-label>ประเภท</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"categoryNo\"\n          interface=\"action-sheet\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of categoryData\"\n            [value]=\"item.categoryNo\"\n            >{{item.categoryTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>รายละเอียด</ion-label>\n        <ion-textarea\n          formControlName=\"detail\"\n          rows=\"6\"\n          cols=\"20\"\n          placeholder=\"รายละเอียดของสถานที่ท่องเที่ยว...\"\n        ></ion-textarea>\n      </ion-item>\n    </form>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button\n      mode=\"ios\"\n      expand=\"block\"\n      color=\"primary\"\n      (click)=\"setPlace()\"\n      [disabled]=\"form_place.invalid\"\n      >Add</ion-button\n    >\n  </section>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/home/admin/homeadmin/addplace/addplace-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/home/admin/homeadmin/addplace/addplace-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: AddplacePageRoutingModule */

  /***/
  function srcAppHomeAdminHomeadminAddplaceAddplaceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddplacePageRoutingModule", function () {
      return AddplacePageRoutingModule;
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


    var _addplace_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addplace.page */
    "./src/app/home/admin/homeadmin/addplace/addplace.page.ts");

    var routes = [{
      path: "",
      component: _addplace_page__WEBPACK_IMPORTED_MODULE_3__["AddplacePage"]
    }];

    var AddplacePageRoutingModule = function AddplacePageRoutingModule() {
      _classCallCheck(this, AddplacePageRoutingModule);
    };

    AddplacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddplacePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/admin/homeadmin/addplace/addplace.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/home/admin/homeadmin/addplace/addplace.module.ts ***!
    \******************************************************************/

  /*! exports provided: AddplacePageModule */

  /***/
  function srcAppHomeAdminHomeadminAddplaceAddplaceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddplacePageModule", function () {
      return AddplacePageModule;
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


    var _addplace_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addplace-routing.module */
    "./src/app/home/admin/homeadmin/addplace/addplace-routing.module.ts");
    /* harmony import */


    var _addplace_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addplace.page */
    "./src/app/home/admin/homeadmin/addplace/addplace.page.ts");

    var AddplacePageModule = function AddplacePageModule() {
      _classCallCheck(this, AddplacePageModule);
    };

    AddplacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addplace_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddplacePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_addplace_page__WEBPACK_IMPORTED_MODULE_6__["AddplacePage"]]
    })], AddplacePageModule);
    /***/
  },

  /***/
  "./src/app/home/admin/homeadmin/addplace/addplace.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/home/admin/homeadmin/addplace/addplace.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeAdminHomeadminAddplaceAddplacePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  left: 0;\n  right: 0;\n  height: 100%;\n  text-align: center;\n  position: absolute;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.lg {\n  font-size: 100px;\n  margin-top: 10%;\n  color: #4c8dff;\n}\n\n#map_canvas {\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9iaWcvRTQ5NjlFNzc5NjlFNDlDNi9wcm9qZWN0L2ZhaWwvdHJhdmVsaW5nX3BsYW5uZXIvc3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9hZGRwbGFjZS9hZGRwbGFjZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvYWRtaW4vaG9tZWFkbWluL2FkZHBsYWNlL2FkZHBsYWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRtaW4vaG9tZWFkbWluL2FkZHBsYWNlL2FkZHBsYWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubGcge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGNvbG9yOiAjNGM4ZGZmO1xufVxuI21hcF9jYW52YXMge1xuICBoZWlnaHQ6IDkwJTtcbn1cbiIsIiNjb250YWluZXIge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5sZyB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgY29sb3I6ICM0YzhkZmY7XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgaGVpZ2h0OiA5MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/admin/homeadmin/addplace/addplace.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/admin/homeadmin/addplace/addplace.page.ts ***!
    \****************************************************************/

  /*! exports provided: AddplacePage */

  /***/
  function srcAppHomeAdminHomeadminAddplaceAddplacePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddplacePage", function () {
      return AddplacePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AddplacePage = /*#__PURE__*/function () {
      function AddplacePage(http, formBuilder, loadingCtrl) {
        _classCallCheck(this, AddplacePage);

        this.http = http;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.categoryData = null;
        this.i = 0;
        this.placeAll = null;
        this.pathStart = null;
        this.pathEnd = null;
        this.placeStartAll = [];
        this.placeEndAll = [];
        this.distance = "";
        this.lastNameFile = [];
        this.fileName = null;
        this.selectedFile = null;
      }

      _createClass(AddplacePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form_place = this.formBuilder.group({
            categoryNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            placeTH: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            placeEN: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            detail: "",
            latitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            longitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.getCategory();
          this.loadMap();
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: "Please wait..."
                    });

                  case 2:
                    this.loading = _context.sent;
                    _context.next = 5;
                    return this.loading.present();

                  case 5:
                    this.map = new google.maps.Map(document.getElementById("map_canvas"), {
                      zoom: 15,
                      center: {
                        lat: 14.9736915,
                        lng: 102.0827157
                      }
                    });
                    _context.next = 8;
                    return new google.maps.Marker({
                      map: this.map,
                      draggable: true,
                      animation: google.maps.Animation.DROP,
                      position: {
                        lat: 14.9736915,
                        lng: 102.0827157
                      }
                    });

                  case 8:
                    this.marker = _context.sent;
                    this.loading.dismiss();
                    this.marker.addListener("dragend", function () {
                      console.log(_this.marker.getPosition().lat());
                      console.log(_this.marker.getPosition().lng());

                      _this.form_place.controls["latitude"].setValue(_this.marker.getPosition().lat());

                      _this.form_place.controls["longitude"].setValue(_this.marker.getPosition().lng());
                    });

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "setPlace",
        value: function setPlace() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.placeStartAll = [];
                    this.placeEndAll = [];
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                      title: "คุณแน่ใจว่าต้องการเพิ่มสถานที่?",
                      text: "คุณจะไม่สามารถยกเลิกสิ่งนี้ได้ !",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#28a745",
                      cancelButtonColor: "#dc3545",
                      confirmButtonText: "ตกลง !",
                      cancelButtonText: "ยกเลิก",
                      reverseButtons: true
                    }).then(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var _this3 = this;

                        var formData, httpRespon;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (!result.value) {
                                  _context2.next = 21;
                                  break;
                                }

                                formData = new FormData();
                                Object.keys(this.form_place.value).forEach(function (key) {
                                  formData.append(key, _this3.form_place.value[key]);
                                });
                                formData.append("img", this.fileName);
                                formData.append("image", this.selectedFile, this.fileName);
                                _context2.next = 7;
                                return this.loadingCtrl.create({
                                  message: "Please wait..."
                                });

                              case 7:
                                this.loading = _context2.sent;
                                _context2.next = 10;
                                return this.loading.present();

                              case 10:
                                _context2.next = 12;
                                return this.http.post("setPlace", formData);

                              case 12:
                                httpRespon = _context2.sent;

                                if (!httpRespon.response.success) {
                                  _context2.next = 18;
                                  break;
                                }

                                _context2.next = 16;
                                return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("สำเร็จ", httpRespon.response.message + " !", "success").then(function () {
                                  _this3.loading.dismiss();

                                  _this3.setPath();

                                  _this3.form_place.reset();

                                  _this3.http.navRouter("/home/admin/homeadmin");
                                });

                              case 16:
                                _context2.next = 19;
                                break;

                              case 18:
                                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("ผิดพลาด", httpRespon.response.message + " !", "error").then(function () {
                                  _this3.loading.dismiss();
                                });

                              case 19:
                                _context2.next = 22;
                                break;

                              case 21:
                                if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {}

                              case 22:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var httpRespon;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.http.post("getCategory");

                  case 2:
                    httpRespon = _context4.sent;

                    if (!httpRespon.response.success) {
                      _context4.next = 9;
                      break;
                    }

                    _context4.next = 6;
                    return httpRespon.response.data;

                  case 6:
                    this.categoryData = _context4.sent;
                    _context4.next = 10;
                    break;

                  case 9:
                    this.categoryData = null;

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "setPath",
        value: function setPath() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var httpRespon;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.http.post("getPlace");

                  case 2:
                    httpRespon = _context6.sent;

                    if (!httpRespon.response.success) {
                      _context6.next = 9;
                      break;
                    }

                    _context6.next = 6;
                    return httpRespon.response.data;

                  case 6:
                    this.placeAll = _context6.sent;
                    _context6.next = 10;
                    break;

                  case 9:
                    this.placeAll = null;

                  case 10:
                    this.placeStartAll.push({
                      lat: parseFloat(this.placeAll[this.placeAll.length - 1].latitude),
                      lng: parseFloat(this.placeAll[this.placeAll.length - 1].longitude)
                    });
                    this.placeAll.forEach(function (item, index) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                this.placeEndAll.push({
                                  lat: parseFloat(this.placeAll[index].latitude),
                                  lng: parseFloat(this.placeAll[index].longitude)
                                });

                              case 1:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    });

                    if (this.placeAll.length > 1) {
                      this.setDistanceGo();
                      this.setDistanceBlack();
                    } else {
                      this.setDistanceGo();
                    }

                  case 13:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "setDistanceGo",
        value: function setDistanceGo() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this5 = this;

            var service;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    service = new google.maps.DistanceMatrixService();
                    service.getDistanceMatrix({
                      origins: this.placeStartAll,
                      destinations: this.placeEndAll,
                      travelMode: "DRIVING"
                    }, function (response, status) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                        var _this6 = this;

                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                if (!(status = "OK")) {
                                  _context8.next = 7;
                                  break;
                                }

                                _context8.next = 3;
                                return response.rows[0].elements;

                              case 3:
                                this.pathStart = _context8.sent;
                                this.pathStart.forEach(function (item, index) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                                    var formData, fare, httpRespon;
                                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                      while (1) {
                                        switch (_context7.prev = _context7.next) {
                                          case 0:
                                            //console.log(item.distance);
                                            formData = new FormData();
                                            _context7.next = 3;
                                            return Math.ceil(item.distance.value * 5 / 1000 + 52.5);

                                          case 3:
                                            fare = _context7.sent;
                                            formData.append("firstPath", this.placeAll[this.placeAll.length - 1].placeNo);
                                            formData.append("endPath", this.placeAll[index].placeNo);
                                            formData.append("distance", item.distance.value);
                                            formData.append("distanceText", item.distance.text);
                                            formData.append("fare", fare + "");
                                            _context7.next = 11;
                                            return this.http.post("setPath", formData);

                                          case 11:
                                            httpRespon = _context7.sent;

                                            //console.log(httpRespon);
                                            if (httpRespon.response.success) {//console.log(httpRespon.response.message);
                                            } else {//console.log(httpRespon.response.message);
                                              }

                                          case 13:
                                          case "end":
                                            return _context7.stop();
                                        }
                                      }
                                    }, _callee7, this);
                                  }));
                                });
                                _context8.next = 7;
                                break;

                              case 7:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "setDistanceBlack",
        value: function setDistanceBlack() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this7 = this;

            var service;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    service = new google.maps.DistanceMatrixService();
                    service.getDistanceMatrix({
                      origins: this.placeEndAll,
                      destinations: this.placeStartAll,
                      travelMode: "DRIVING"
                    }, function (response, status) {
                      if (status = "OK") {
                        console.log(response);
                        _this7.pathEnd = response.rows;

                        _this7.pathEnd.forEach(function (item, index) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                            var formData, fare, httpRespon;
                            return regeneratorRuntime.wrap(function _callee10$(_context10) {
                              while (1) {
                                switch (_context10.prev = _context10.next) {
                                  case 0:
                                    //console.log(item.elements[0].distance);
                                    formData = new FormData();
                                    _context10.next = 3;
                                    return Math.ceil(item.elements[0].distance.value * 5 / 1000 + 52.5);

                                  case 3:
                                    fare = _context10.sent;
                                    formData.append("firstPath", this.placeAll[index].placeNo);
                                    formData.append("endPath", this.placeAll[this.placeAll.length - 1].placeNo);
                                    formData.append("distance", item.elements[0].distance.value);
                                    formData.append("distanceText", item.elements[0].distance.text);
                                    formData.append("fare", fare + "");
                                    _context10.next = 11;
                                    return this.http.post("setPath", formData);

                                  case 11:
                                    httpRespon = _context10.sent;

                                    //console.log(httpRespon);
                                    if (httpRespon.response.success) {//console.log(httpRespon.response.message);
                                    } else {
                                      console.log(httpRespon.response.message);
                                    }

                                  case 13:
                                  case "end":
                                    return _context10.stop();
                                }
                              }
                            }, _callee10, this);
                          }));
                        });
                      } else {//console.log(status);
                      }

                      return 0;
                    });

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        } /////////////////////

      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this8 = this;

            var mimeType, reader;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.selectedFile = event.target.files[0]; //console.log(event.target.files);
                    //console.log(this.selectedFile);

                    if (!(event.target.files.length === 0)) {
                      _context12.next = 4;
                      break;
                    }

                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("กรุณาเลือกไฟล์", "", "error");
                    return _context12.abrupt("return");

                  case 4:
                    mimeType = event.target.files[0].type;

                    if (!(mimeType.match(/image\/*/) == null)) {
                      _context12.next = 8;
                      break;
                    }

                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("กรุณาเลือกไฟล์รูปภาพ", "", "error");
                    return _context12.abrupt("return");

                  case 8:
                    this.lastNameFile = this.selectedFile.name.split(".");
                    this.fileName = new Date().getTime() + "." + this.lastNameFile[this.lastNameFile.length - 1]; //console.log(this.selectedFile.name);

                    reader = new FileReader();
                    this.imagePath = event.target.files;
                    reader.readAsDataURL(event.target.files[0]);

                    reader.onload = function (_event) {
                      _this8.imgURL = reader.result;
                    };

                  case 14:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }]);

      return AddplacePage;
    }();

    AddplacePage.ctorParameters = function () {
      return [{
        type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }];
    };

    AddplacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-addplace",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./addplace.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addplace/addplace.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./addplace.page.scss */
      "./src/app/home/admin/homeadmin/addplace/addplace.page.scss"))["default"]]
    })], AddplacePage);
    /***/
  }
}]);
//# sourceMappingURL=addplace-addplace-module-es5.js.map