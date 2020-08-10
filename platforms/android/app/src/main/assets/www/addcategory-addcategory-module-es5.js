function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addcategory-addcategory-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addcategory/addcategory.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addcategory/addcategory.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeAdminHomeadminAddcategoryAddcategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        [routerLink]=\"['/home/admin/homeadmin']\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content mode=\"ios\" [fullscreen]=\"false\">\n  <form id=\"container\">\n    <div style=\"padding: 5%;\">\n      <span>ประเภทของสถานที่</span>\n    </div>\n    <ion-item-sliding *ngFor=\"let item of categoryData\">\n      <ion-item>\n        <ion-label>\n          {{item.categoryTH}}\n          <br />\n          {{item.categoryEN}}\n        </ion-label>\n      </ion-item>\n      <ion-item-options>\n        <ion-item-option\n          style=\"color: #ffffff;\"\n          (click)=\"AlertEdit(item.categoryTH,item.categoryEN,item.categoryNo)\"\n          color=\"warning\"\n        >\n          <ion-icon slot=\"start\" name=\"color-wand\"></ion-icon>\n          แก้ไข\n        </ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"delCategory(item.categoryNo)\">\n          <ion-icon slot=\"start\" name=\"trash-bin\"></ion-icon>\n          ลบ\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button mode=\"ios\" (click)=\"AlertAdd()\" expand=\"block\" color=\"primary\"\n      >Add</ion-button\n    >\n  </section>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/home/admin/homeadmin/addcategory/addcategory-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/home/admin/homeadmin/addcategory/addcategory-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: AddcategoryPageRoutingModule */

  /***/
  function srcAppHomeAdminHomeadminAddcategoryAddcategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcategoryPageRoutingModule", function () {
      return AddcategoryPageRoutingModule;
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


    var _addcategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addcategory.page */
    "./src/app/home/admin/homeadmin/addcategory/addcategory.page.ts");

    var routes = [{
      path: '',
      component: _addcategory_page__WEBPACK_IMPORTED_MODULE_3__["AddcategoryPage"]
    }];

    var AddcategoryPageRoutingModule = function AddcategoryPageRoutingModule() {
      _classCallCheck(this, AddcategoryPageRoutingModule);
    };

    AddcategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddcategoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/admin/homeadmin/addcategory/addcategory.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/home/admin/homeadmin/addcategory/addcategory.module.ts ***!
    \************************************************************************/

  /*! exports provided: AddcategoryPageModule */

  /***/
  function srcAppHomeAdminHomeadminAddcategoryAddcategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcategoryPageModule", function () {
      return AddcategoryPageModule;
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


    var _addcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addcategory-routing.module */
    "./src/app/home/admin/homeadmin/addcategory/addcategory-routing.module.ts");
    /* harmony import */


    var _addcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addcategory.page */
    "./src/app/home/admin/homeadmin/addcategory/addcategory.page.ts");

    var AddcategoryPageModule = function AddcategoryPageModule() {
      _classCallCheck(this, AddcategoryPageModule);
    };

    AddcategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddcategoryPageRoutingModule"]],
      declarations: [_addcategory_page__WEBPACK_IMPORTED_MODULE_6__["AddcategoryPage"]]
    })], AddcategoryPageModule);
    /***/
  },

  /***/
  "./src/app/home/admin/homeadmin/addcategory/addcategory.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/home/admin/homeadmin/addcategory/addcategory.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeAdminHomeadminAddcategoryAddcategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n#container {\n  left: 0;\n  right: 0;\n  height: 100%;\n  text-align: center;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9iaWcvRTQ5NjlFNzc5NjlFNDlDNi9wcm9qZWN0L2ZhaWwvdHJhdmVsaW5nX3BsYW5uZXIvc3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9hZGRjYXRlZ29yeS9hZGRjYXRlZ29yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvYWRtaW4vaG9tZWFkbWluL2FkZGNhdGVnb3J5L2FkZGNhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hZG1pbi9ob21lYWRtaW4vYWRkY2F0ZWdvcnkvYWRkY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuI2NvbnRhaW5lciB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIiwiaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4jY29udGFpbmVyIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/admin/homeadmin/addcategory/addcategory.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/home/admin/homeadmin/addcategory/addcategory.page.ts ***!
    \**********************************************************************/

  /*! exports provided: AddcategoryPage */

  /***/
  function srcAppHomeAdminHomeadminAddcategoryAddcategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcategoryPage", function () {
      return AddcategoryPage;
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


    var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../services/http.service */
    "./src/app/services/http.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddcategoryPage = /*#__PURE__*/function () {
      function AddcategoryPage(http, alertController, formBuilder) {
        _classCallCheck(this, AddcategoryPage);

        this.http = http;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        this.categoryData = null;
      }

      _createClass(AddcategoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form_category = this.formBuilder.group({
            categoryTH: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            categoryEN: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.getCategory();
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var httpResponse;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.http.post("getCategory");

                  case 2:
                    httpResponse = _context.sent;

                    if (!httpResponse.response.success) {
                      _context.next = 10;
                      break;
                    }

                    _context.next = 6;
                    return httpResponse.response.data;

                  case 6:
                    this.categoryData = _context.sent;
                    this.categoryData = this.categoryData.filter(function (item) {
                      return item.categoryNo != "008";
                    });
                    _context.next = 11;
                    break;

                  case 10:
                    this.categoryData = null;

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "AlertEdit",
        value: function AlertEdit(TH, EN, NO) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var alertEdit;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: "my-custom-class",
                      header: "แก้ไขประเภท!",
                      inputs: [{
                        name: "categoryTH",
                        type: "text",
                        value: TH,
                        placeholder: ""
                      }, {
                        name: "categoryEN",
                        type: "text",
                        value: EN,
                        placeholder: ""
                      }],
                      buttons: [{
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler() {
                          console.log("Confirm Cancel");
                        }
                      }, {
                        text: "Ok",
                        handler: function handler(data) {
                          _this.editCategory(data.categoryTH, data.categoryEN, NO);
                        }
                      }]
                    });

                  case 2:
                    alertEdit = _context2.sent;
                    _context2.next = 5;
                    return alertEdit.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "AlertAdd",
        value: function AlertAdd() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var alertEdit;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      cssClass: "my-custom-class",
                      header: "เพิ่มสถานที่!",
                      inputs: [{
                        name: "categoryTH",
                        type: "text",
                        value: "",
                        placeholder: "ชื่อประเภทภาษาไทย"
                      }, {
                        name: "categoryEN",
                        type: "text",
                        value: "",
                        placeholder: "ชื่อประเภทภาษาอังกฤษ"
                      }],
                      buttons: [{
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: function handler() {
                          console.log("Confirm Cancel");
                        }
                      }, {
                        text: "Ok",
                        handler: function handler(data) {
                          _this2.addCategory(data.categoryTH, data.categoryEN);
                        }
                      }]
                    });

                  case 2:
                    alertEdit = _context3.sent;
                    _context3.next = 5;
                    return alertEdit.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "editCategory",
        value: function editCategory(categoryTH, categoryEN, categoryNo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var formData, httpRespon;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    formData = new FormData();
                    formData.append("categoryTH", categoryTH);
                    formData.append("categoryEN", categoryEN);
                    formData.append("categoryNo", categoryNo);
                    _context4.next = 6;
                    return this.http.post("editCategory", formData);

                  case 6:
                    httpRespon = _context4.sent;
                    console.log(httpRespon);

                    if (httpRespon.response.success) {
                      console.log(httpRespon.response.message);
                      this.getCategory();
                    } else {
                      console.log(httpRespon.response.message);
                    }

                  case 9:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "addCategory",
        value: function addCategory(categoryTH, categoryEN) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var formData, httpRespon;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    formData = new FormData();
                    formData.append("categoryTH", categoryTH);
                    formData.append("categoryEN", categoryEN);
                    _context5.next = 5;
                    return this.http.post("addCategory", formData);

                  case 5:
                    httpRespon = _context5.sent;
                    console.log(httpRespon);

                    if (httpRespon.response.success) {
                      console.log(httpRespon.response.message);
                      this.getCategory();
                    } else {
                      console.log(httpRespon.response.message);
                    }

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "delCategory",
        value: function delCategory(categoryNo) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                      title: "คุณแน่ใจว่าต้องการลบประเภท?",
                      text: "สถานที่ทั้งหมดที่อยู่ในประเภทนี้จะถูกลบ!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#28a745",
                      cancelButtonColor: "#dc3545",
                      confirmButtonText: "ตกลง !",
                      cancelButtonText: "ยกเลิก",
                      reverseButtons: true
                    }).then(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        var _this4 = this;

                        var formData, httpRespon;
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                if (!result.value) {
                                  _context6.next = 15;
                                  break;
                                }

                                formData = new FormData();
                                formData.append("categoryNo", categoryNo);
                                _context6.next = 5;
                                return this.http.post("delCategory", formData);

                              case 5:
                                httpRespon = _context6.sent;
                                console.log(httpRespon);

                                if (!httpRespon.response.success) {
                                  _context6.next = 12;
                                  break;
                                }

                                _context6.next = 10;
                                return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("สำเร็จ", httpRespon.response.message + " !", "success").then(function () {
                                  _this4.getCategory();
                                });

                              case 10:
                                _context6.next = 13;
                                break;

                              case 12:
                                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("ผิดพลาด", httpRespon.response.message + " !", "error");

                              case 13:
                                _context6.next = 16;
                                break;

                              case 15:
                                if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.DismissReason.cancel) {}

                              case 16:
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
      }]);

      return AddcategoryPage;
    }();

    AddcategoryPage.ctorParameters = function () {
      return [{
        type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    AddcategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-addcategory",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./addcategory.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addcategory/addcategory.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./addcategory.page.scss */
      "./src/app/home/admin/homeadmin/addcategory/addcategory.page.scss"))["default"]]
    })], AddcategoryPage);
    /***/
  }
}]);
//# sourceMappingURL=addcategory-addcategory-module-es5.js.map