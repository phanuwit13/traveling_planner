function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back-outline\">Black</ion-icon> -->\n      <ion-back-button\n        [routerLink]=\"['/home/admin/homeadmin']\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Place</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content mode=\"ios\" [fullscreen]=\"false\">\n  <!-- Animated Searchbar -->\n  <ion-searchbar\n    [(ngModel)]=\"key\"\n    (keyup.enter)=\"getAddress()\"\n    animated\n  ></ion-searchbar>\n\n  <div id=\"map_canvas\"></div>\n  <div id=\"container\" text-center>\n    <form action=\"\" [formGroup]=\"form_place\">\n      <div style=\"padding: 5%;\">\n        <span class=\"tl\">Add Place</span>\n      </div>\n      <img src=\"assets/img/icons-image.png\" height=\"200\" *ngIf=\"!imgURL\" />\n      <img [src]=\"imgURL\" height=\"200\" *ngIf=\"imgURL\" />\n      <ion-item>\n        <ion-label>รูปภาพ :</ion-label>\n        <ion-input\n          type=\"file\"\n          accept=\"image/*\"\n          id=\"upload\"\n          (change)=\"onFileSelected($event)\"\n        ></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>ชื่อสถานที่</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>TH :</ion-label>\n        <ion-input formControlName=\"placeTH\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>EN :</ion-label>\n        <ion-input formControlName=\"placeEN\"></ion-input>\n      </ion-item>\n      <ion-item color=\"\">\n        <ion-label>ประเภท</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"categoryNo\"\n          interface=\"action-sheet\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of categoryData\"\n            [value]=\"item.categoryNo\"\n            >{{item.categoryTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>รายละเอียด</ion-label>\n        <ion-textarea\n          formControlName=\"detail\"\n          rows=\"6\"\n          cols=\"20\"\n          placeholder=\"รายละเอียดของสถานที่ท่องเที่ยว...\"\n        ></ion-textarea>\n      </ion-item>\n    </form>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button\n      mode=\"ios\"\n      expand=\"block\"\n      color=\"primary\"\n      (click)=\"setPlace()\"\n      [disabled]=\"form_place.invalid\"\n      >Add</ion-button\n    >\n  </section>\n</ion-footer>\n";
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


    __webpack_exports__["default"] = "#container {\n  left: 0;\n  right: 0;\n  height: 100%;\n  text-align: center;\n  position: absolute;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.lg {\n  font-size: 100px;\n  margin-top: 10%;\n  color: #4c8dff;\n}\n\n#map_canvas {\n  height: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZG1pbi9ob21lYWRtaW4vYWRkcGxhY2UvQzpcXHByb2plY3RcXGZhaWxcXHRyYXZlbGluZ19wbGFubmVyL3NyY1xcYXBwXFxob21lXFxhZG1pblxcaG9tZWFkbWluXFxhZGRwbGFjZVxcYWRkcGxhY2UucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9hZGRwbGFjZS9hZGRwbGFjZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9hZGRwbGFjZS9hZGRwbGFjZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmxnIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBjb2xvcjogIzRjOGRmZjtcbn1cbiNtYXBfY2FudmFzIHtcbiAgaGVpZ2h0OiA4MCU7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubGcge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGNvbG9yOiAjNGM4ZGZmO1xufVxuXG4jbWFwX2NhbnZhcyB7XG4gIGhlaWdodDogODAlO1xufSJdfQ== */";
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
        this.placeNo = [];
        this.distance = "";
        this.lastNameFile = [];
        this.fileName = null;
        this.selectedFile = null;
        this.key = "";
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
                    this.geocoder = new google.maps.Geocoder();
                    _context.next = 9;
                    return new google.maps.Marker({
                      map: this.map,
                      draggable: true,
                      animation: google.maps.Animation.DROP,
                      position: {
                        lat: 14.9736915,
                        lng: 102.0827157
                      }
                    });

                  case 9:
                    this.marker = _context.sent;
                    this.loading.dismiss();
                    this.marker.addListener("dragend", function () {
                      console.log(_this.marker.getPosition().lat());
                      console.log(_this.marker.getPosition().lng());

                      _this.form_place.controls["latitude"].setValue(_this.marker.getPosition().lat());

                      _this.form_place.controls["longitude"].setValue(_this.marker.getPosition().lng());
                    });

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          console.log(this.key);
          this.geocoderAddress(this.geocoder, this.map);
        }
      }, {
        key: "geocoderAddress",
        value: function geocoderAddress(geocoder, map) {
          var _this2 = this;

          geocoder.geocode({
            address: this.key
          }, function (results, status) {
            if (status == "OK") {
              map.setCenter(results[0].geometry.location);
              map.setZoom(18);

              _this2.marker.setPosition(results[0].geometry.location);

              console.log(_this2.marker.getPosition().lat());
              console.log(_this2.marker.getPosition().lng());

              _this2.form_place.controls["latitude"].setValue(_this2.marker.getPosition().lat());

              _this2.form_place.controls["longitude"].setValue(_this2.marker.getPosition().lng());
            } else {
              console.log(status);
            }
          });
        }
      }, {
        key: "setPlace",
        value: function setPlace() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
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
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this4 = this;

                        var formData, httpRespon;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!result.value) {
                                  _context3.next = 15;
                                  break;
                                }

                                formData = new FormData();
                                Object.keys(this.form_place.value).forEach(function (key) {
                                  formData.append(key, _this4.form_place.value[key]);
                                });

                                if (this.fileName != null) {
                                  formData.append("image", this.selectedFile, this.fileName);
                                  formData.append("img", this.fileName);
                                }

                                _context3.next = 6;
                                return this.loadingCtrl.create({
                                  message: "Please wait..."
                                });

                              case 6:
                                this.loading = _context3.sent;
                                _context3.next = 9;
                                return this.loading.present();

                              case 9:
                                _context3.next = 11;
                                return this.http.post("setPlace", formData);

                              case 11:
                                httpRespon = _context3.sent;

                                //console.log(httpRespon);
                                if (httpRespon.response.success) {
                                  this.setPath().then(function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                                      var _this5 = this;

                                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                        while (1) {
                                          switch (_context2.prev = _context2.next) {
                                            case 0:
                                              this.loading.dismiss();
                                              _context2.next = 3;
                                              return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("สำเร็จ", httpRespon.response.message + " !", "success").then(function () {
                                                _this5.form_place.reset();

                                                _this5.http.navRouter("/home/admin/homeadmin");
                                              });

                                            case 3:
                                            case "end":
                                              return _context2.stop();
                                          }
                                        }
                                      }, _callee2, this);
                                    }));
                                  });
                                } else {
                                  sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("ผิดพลาด", httpRespon.response.message + " !", "error").then(function () {
                                    _this4.loading.dismiss();
                                  });
                                }

                                _context3.next = 16;
                                break;

                              case 15:
                                if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {}

                              case 16:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 3:
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
        key: "setPath",
        value: function setPath() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this6 = this;

            var httpRespon, i, n, p, _p;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.http.post("getPlace");

                  case 2:
                    httpRespon = _context7.sent;

                    if (!httpRespon.response.success) {
                      _context7.next = 9;
                      break;
                    }

                    _context7.next = 6;
                    return httpRespon.response.data;

                  case 6:
                    this.placeAll = _context7.sent;
                    _context7.next = 10;
                    break;

                  case 9:
                    this.placeAll = null;

                  case 10:
                    this.rows = Math.ceil(this.placeAll.length / 20);

                    for (i = 0; i < this.rows; i++) {
                      this.placeNo.push([]);
                      this.placeEndAll.push([]);
                    }

                    this.placeStartAll.push({
                      lat: parseFloat(this.placeAll[this.placeAll.length - 1].latitude),
                      lng: parseFloat(this.placeAll[this.placeAll.length - 1].longitude)
                    });
                    n = 0;
                    this.placeAll.forEach(function (item, index) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                if (index % 20 == 0 && index != 0) {
                                  n++;
                                }

                                this.placeNo[n].push(this.placeAll[index].placeNo);
                                this.placeEndAll[n].push({
                                  lat: parseFloat(this.placeAll[index].latitude),
                                  lng: parseFloat(this.placeAll[index].longitude)
                                });

                              case 3:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    });

                    if (!(this.placeAll.length > 1)) {
                      _context7.next = 21;
                      break;
                    }

                    p = 0;
                    _context7.next = 19;
                    return this.setPathGoBlack(p);

                  case 19:
                    _context7.next = 24;
                    break;

                  case 21:
                    _p = 0;
                    _context7.next = 24;
                    return this.setPathGo(_p);

                  case 24:
                    return _context7.abrupt("return", true);

                  case 25:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "setPathGoBlack",
        value: function setPathGoBlack(p) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _iterator, _step, item;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _iterator = _createForOfIteratorHelper(this.placeEndAll);
                    _context8.prev = 1;

                    _iterator.s();

                  case 3:
                    if ((_step = _iterator.n()).done) {
                      _context8.next = 16;
                      break;
                    }

                    item = _step.value;
                    _context8.next = 7;
                    return this.setDistanceGo(this.placeEndAll[p], this.placeNo[p]);

                  case 7:
                    _context8.next = 9;
                    return this.sleep(3000);

                  case 9:
                    _context8.next = 11;
                    return this.setDistanceBlack(this.placeEndAll[p], this.placeNo[p]);

                  case 11:
                    _context8.next = 13;
                    return this.sleep(3000);

                  case 13:
                    p++;

                  case 14:
                    _context8.next = 3;
                    break;

                  case 16:
                    _context8.next = 21;
                    break;

                  case 18:
                    _context8.prev = 18;
                    _context8.t0 = _context8["catch"](1);

                    _iterator.e(_context8.t0);

                  case 21:
                    _context8.prev = 21;

                    _iterator.f();

                    return _context8.finish(21);

                  case 24:
                    return _context8.abrupt("return", true);

                  case 25:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[1, 18, 21, 24]]);
          }));
        }
      }, {
        key: "setPathGo",
        value: function setPathGo(p) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _iterator2, _step2, item;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _iterator2 = _createForOfIteratorHelper(this.placeEndAll);
                    _context9.prev = 1;

                    _iterator2.s();

                  case 3:
                    if ((_step2 = _iterator2.n()).done) {
                      _context9.next = 12;
                      break;
                    }

                    item = _step2.value;
                    _context9.next = 7;
                    return this.setDistanceGo(this.placeEndAll[p], this.placeNo[p]);

                  case 7:
                    _context9.next = 9;
                    return this.sleep(500);

                  case 9:
                    p++;

                  case 10:
                    _context9.next = 3;
                    break;

                  case 12:
                    _context9.next = 17;
                    break;

                  case 14:
                    _context9.prev = 14;
                    _context9.t0 = _context9["catch"](1);

                    _iterator2.e(_context9.t0);

                  case 17:
                    _context9.prev = 17;

                    _iterator2.f();

                    return _context9.finish(17);

                  case 20:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this, [[1, 14, 17, 20]]);
          }));
        }
      }, {
        key: "sleep",
        value: function sleep(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }, {
        key: "setDistanceGo",
        value: function setDistanceGo(placeEnd, placeNo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var _this7 = this;

            var service;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    service = new google.maps.DistanceMatrixService(); //console.log(placeEnd);

                    service.getDistanceMatrix({
                      origins: this.placeStartAll,
                      destinations: placeEnd,
                      travelMode: "DRIVING"
                    }, function (response, status) {
                      if (status = "OK") {
                        console.log("ขาไป" + response); //console.log(status);

                        _this7.pathStart = response.rows[0].elements;

                        _this7.pathStart.forEach(function (item, index) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                            var formData, fare, httpRespon;
                            return regeneratorRuntime.wrap(function _callee10$(_context10) {
                              while (1) {
                                switch (_context10.prev = _context10.next) {
                                  case 0:
                                    //console.log(item.distance);
                                    formData = new FormData();
                                    _context10.next = 3;
                                    return Math.ceil(item.distance.value * 6 / 1000 + 52.5);

                                  case 3:
                                    fare = _context10.sent;
                                    formData.append("firstPath", this.placeAll[this.placeAll.length - 1].placeNo);
                                    formData.append("endPath", placeNo[index]);
                                    formData.append("distance", item.distance.value);
                                    formData.append("distanceText", item.distance.text);
                                    formData.append("fare", fare + "");
                                    _context10.next = 11;
                                    return this.http.post("setPath", formData);

                                  case 11:
                                    httpRespon = _context10.sent;

                                    //console.log(httpRespon);
                                    if (httpRespon.response.success) {
                                      console.log("first : " + this.placeAll[this.placeAll.length - 1].placeNo + " end : " + placeNo[index]); //console.log(httpRespon.response.message);
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
                    });

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "setDistanceBlack",
        value: function setDistanceBlack(placeEnd, placeNo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this8 = this;

            var service;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    service = new google.maps.DistanceMatrixService(); //console.log(placeEnd);

                    service.getDistanceMatrix({
                      origins: placeEnd,
                      destinations: this.placeStartAll,
                      travelMode: "DRIVING"
                    }, function (response, status) {
                      if (status = "OK") {
                        console.log("ขากลับ" + response);
                        _this8.pathEnd = response.rows;

                        _this8.pathEnd.forEach(function (item, index) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                            var formData, fare, httpRespon;
                            return regeneratorRuntime.wrap(function _callee12$(_context12) {
                              while (1) {
                                switch (_context12.prev = _context12.next) {
                                  case 0:
                                    //console.log(item.elements[0].distance);
                                    formData = new FormData();
                                    _context12.next = 3;
                                    return Math.ceil(item.elements[0].distance.value * 6 / 1000 + 52.5);

                                  case 3:
                                    fare = _context12.sent;
                                    formData.append("firstPath", placeNo[index]);
                                    formData.append("endPath", this.placeAll[this.placeAll.length - 1].placeNo);
                                    formData.append("distance", item.elements[0].distance.value);
                                    formData.append("distanceText", item.elements[0].distance.text);
                                    formData.append("fare", fare + "");
                                    _context12.next = 11;
                                    return this.http.post("setPath", formData);

                                  case 11:
                                    httpRespon = _context12.sent;

                                    //console.log(httpRespon);
                                    if (httpRespon.response.success) {
                                      console.log("first : " + placeNo[index] + " end : " + this.placeAll[this.placeAll.length - 1].placeNo); //console.log(httpRespon.response.message);
                                    } else {
                                      console.log(httpRespon.response.message);
                                    }

                                  case 13:
                                  case "end":
                                    return _context12.stop();
                                }
                              }
                            }, _callee12, this);
                          }));
                        });
                      } else {//console.log(status);
                      }

                      return 0;
                    });

                  case 2:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        } /////////////////////

      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this9 = this;

            var mimeType, reader;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this.selectedFile = event.target.files[0]; //console.log(event.target.files);
                    //console.log(this.selectedFile);

                    if (!(event.target.files.length === 0)) {
                      _context14.next = 4;
                      break;
                    }

                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("กรุณาเลือกไฟล์", "", "error");
                    return _context14.abrupt("return");

                  case 4:
                    mimeType = event.target.files[0].type;

                    if (!(mimeType.match(/image\/*/) == null)) {
                      _context14.next = 8;
                      break;
                    }

                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("กรุณาเลือกไฟล์รูปภาพ", "", "error");
                    return _context14.abrupt("return");

                  case 8:
                    this.lastNameFile = this.selectedFile.name.split(".");
                    this.fileName = new Date().getTime() + "." + this.lastNameFile[this.lastNameFile.length - 1]; //console.log(this.selectedFile.name);

                    reader = new FileReader();
                    this.imagePath = event.target.files;
                    reader.readAsDataURL(event.target.files[0]);

                    reader.onload = function (_event) {
                      _this9.imgURL = reader.result;
                    };

                  case 14:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
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