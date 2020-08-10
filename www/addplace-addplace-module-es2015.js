(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addplace-addplace-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addplace/addplace.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addplace/addplace.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back-outline\">Black</ion-icon> -->\n      <ion-back-button\n        [routerLink]=\"['/home/admin/homeadmin']\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Place</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content mode=\"ios\" [fullscreen]=\"false\">\n  <div id=\"map_canvas\"></div>\n  <div id=\"container\" text-center>\n    <form action=\"\" [formGroup]=\"form_place\">\n      <div style=\"padding: 5%;\">\n        <span class=\"tl\">Add Place</span>\n      </div>\n      <img src=\"assets/img/icons-image.png\" height=\"200\" *ngIf=\"!imgURL\" />\n      <img [src]=\"imgURL\" height=\"200\" *ngIf=\"imgURL\" />\n      <ion-item>\n        <ion-label>รูปภาพ :</ion-label>\n        <ion-input\n          type=\"file\"\n          accept=\"image/*\"\n          id=\"upload\"\n          (change)=\"onFileSelected($event)\"\n        ></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>ชื่อสถานที่</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>TH :</ion-label>\n        <ion-input formControlName=\"placeTH\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>EN :</ion-label>\n        <ion-input formControlName=\"placeEN\"></ion-input>\n      </ion-item>\n      <ion-item color=\"\">\n        <ion-label>ประเภท</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"categoryNo\"\n          interface=\"action-sheet\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of categoryData\"\n            [value]=\"item.categoryNo\"\n            >{{item.categoryTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>รายละเอียด</ion-label>\n        <ion-textarea\n          formControlName=\"detail\"\n          rows=\"6\"\n          cols=\"20\"\n          placeholder=\"รายละเอียดของสถานที่ท่องเที่ยว...\"\n        ></ion-textarea>\n      </ion-item>\n    </form>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button\n      mode=\"ios\"\n      expand=\"block\"\n      color=\"primary\"\n      (click)=\"setPlace()\"\n      [disabled]=\"form_place.invalid\"\n      >Add</ion-button\n    >\n  </section>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/home/admin/homeadmin/addplace/addplace-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/admin/homeadmin/addplace/addplace-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AddplacePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddplacePageRoutingModule", function() { return AddplacePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addplace_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addplace.page */ "./src/app/home/admin/homeadmin/addplace/addplace.page.ts");




const routes = [
    {
        path: "",
        component: _addplace_page__WEBPACK_IMPORTED_MODULE_3__["AddplacePage"],
    },
];
let AddplacePageRoutingModule = class AddplacePageRoutingModule {
};
AddplacePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddplacePageRoutingModule);



/***/ }),

/***/ "./src/app/home/admin/homeadmin/addplace/addplace.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/admin/homeadmin/addplace/addplace.module.ts ***!
  \******************************************************************/
/*! exports provided: AddplacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddplacePageModule", function() { return AddplacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addplace_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addplace-routing.module */ "./src/app/home/admin/homeadmin/addplace/addplace-routing.module.ts");
/* harmony import */ var _addplace_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addplace.page */ "./src/app/home/admin/homeadmin/addplace/addplace.page.ts");







let AddplacePageModule = class AddplacePageModule {
};
AddplacePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addplace_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddplacePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_addplace_page__WEBPACK_IMPORTED_MODULE_6__["AddplacePage"]],
    })
], AddplacePageModule);



/***/ }),

/***/ "./src/app/home/admin/homeadmin/addplace/addplace.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/home/admin/homeadmin/addplace/addplace.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  left: 0;\n  right: 0;\n  height: 100%;\n  text-align: center;\n  position: absolute;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.lg {\n  font-size: 100px;\n  margin-top: 10%;\n  color: #4c8dff;\n}\n\n#map_canvas {\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9iaWcvRTQ5NjlFNzc5NjlFNDlDNi9wcm9qZWN0L2ZhaWwvdHJhdmVsaW5nX3BsYW5uZXIvc3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9hZGRwbGFjZS9hZGRwbGFjZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvYWRtaW4vaG9tZWFkbWluL2FkZHBsYWNlL2FkZHBsYWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRtaW4vaG9tZWFkbWluL2FkZHBsYWNlL2FkZHBsYWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubGcge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGNvbG9yOiAjNGM4ZGZmO1xufVxuI21hcF9jYW52YXMge1xuICBoZWlnaHQ6IDkwJTtcbn1cbiIsIiNjb250YWluZXIge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5sZyB7XG4gIGZvbnQtc2l6ZTogMTAwcHg7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgY29sb3I6ICM0YzhkZmY7XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgaGVpZ2h0OiA5MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/admin/homeadmin/addplace/addplace.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/admin/homeadmin/addplace/addplace.page.ts ***!
  \****************************************************************/
/*! exports provided: AddplacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddplacePage", function() { return AddplacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let AddplacePage = class AddplacePage {
    constructor(http, formBuilder, loadingCtrl) {
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
    ngOnInit() {
        this.form_place = this.formBuilder.group({
            categoryNo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            placeTH: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            placeEN: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            detail: "",
            latitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            longitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.getCategory();
        this.loadMap();
    }
    loadMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //คำนวนระยะทาง
            //this.displayDirection();
            this.loading = yield this.loadingCtrl.create({
                message: "Please wait...",
            });
            yield this.loading.present();
            this.map = new google.maps.Map(document.getElementById("map_canvas"), {
                zoom: 15,
                center: { lat: 14.9736915, lng: 102.0827157 },
            });
            this.marker = yield new google.maps.Marker({
                map: this.map,
                draggable: true,
                animation: google.maps.Animation.DROP,
                position: { lat: 14.9736915, lng: 102.0827157 },
            });
            this.loading.dismiss();
            this.marker.addListener("dragend", () => {
                console.log(this.marker.getPosition().lat());
                console.log(this.marker.getPosition().lng());
                this.form_place.controls["latitude"].setValue(this.marker.getPosition().lat());
                this.form_place.controls["longitude"].setValue(this.marker.getPosition().lng());
            });
        });
    }
    setPlace() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
                reverseButtons: true,
            }).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.value) {
                    let formData = new FormData();
                    Object.keys(this.form_place.value).forEach((key) => {
                        formData.append(key, this.form_place.value[key]);
                    });
                    formData.append("img", this.fileName);
                    formData.append("image", this.selectedFile, this.fileName);
                    this.loading = yield this.loadingCtrl.create({
                        message: "Please wait...",
                    });
                    yield this.loading.present();
                    let httpRespon = yield this.http.post("setPlace", formData);
                    //console.log(httpRespon);
                    if (httpRespon.response.success) {
                        yield sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("สำเร็จ", httpRespon.response.message + " !", "success").then(() => {
                            this.loading.dismiss();
                            this.setPath();
                            this.form_place.reset();
                            this.http.navRouter("/home/admin/homeadmin");
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("ผิดพลาด", httpRespon.response.message + " !", "error").then(() => {
                            this.loading.dismiss();
                        });
                    }
                }
                else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) {
                }
            }));
        });
    }
    getCategory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let httpRespon = yield this.http.post("getCategory");
            //console.log(httpRespon);
            if (httpRespon.response.success) {
                this.categoryData = yield httpRespon.response.data;
            }
            else {
                this.categoryData = null;
            }
        });
    }
    setPath() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let httpRespon = yield this.http.post("getPlace");
            //console.log(httpRespon);
            if (httpRespon.response.success) {
                this.placeAll = yield httpRespon.response.data;
            }
            else {
                this.placeAll = null;
            }
            this.placeStartAll.push({
                lat: parseFloat(this.placeAll[this.placeAll.length - 1].latitude),
                lng: parseFloat(this.placeAll[this.placeAll.length - 1].longitude),
            });
            this.placeAll.forEach((item, index) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.placeEndAll.push({
                    lat: parseFloat(this.placeAll[index].latitude),
                    lng: parseFloat(this.placeAll[index].longitude),
                });
            }));
            if (this.placeAll.length > 1) {
                this.setDistanceGo();
                this.setDistanceBlack();
            }
            else {
                this.setDistanceGo();
            }
        });
    }
    setDistanceGo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix({
                origins: this.placeStartAll,
                destinations: this.placeEndAll,
                travelMode: "DRIVING",
            }, (response, status) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if ((status = "OK")) {
                    //console.log(response);
                    this.pathStart = yield response.rows[0].elements;
                    this.pathStart.forEach((item, index) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        //console.log(item.distance);
                        let formData = new FormData();
                        let fare = yield Math.ceil((item.distance.value * 6) / 1000 + 52.5);
                        formData.append("firstPath", this.placeAll[this.placeAll.length - 1].placeNo);
                        formData.append("endPath", this.placeAll[index].placeNo);
                        formData.append("distance", item.distance.value);
                        formData.append("distanceText", item.distance.text);
                        formData.append("fare", fare + "");
                        let httpRespon = yield this.http.post("setPath", formData);
                        //console.log(httpRespon);
                        if (httpRespon.response.success) {
                            //console.log(httpRespon.response.message);
                        }
                        else {
                            //console.log(httpRespon.response.message);
                        }
                    }));
                }
                else {
                    //console.log(status);
                }
            }));
        });
    }
    setDistanceBlack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix({
                origins: this.placeEndAll,
                destinations: this.placeStartAll,
                travelMode: "DRIVING",
            }, (response, status) => {
                if ((status = "OK")) {
                    console.log(response);
                    this.pathEnd = response.rows;
                    this.pathEnd.forEach((item, index) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        //console.log(item.elements[0].distance);
                        let formData = new FormData();
                        let fare = yield Math.ceil((item.elements[0].distance.value * 5) / 1000 + 52.5);
                        formData.append("firstPath", this.placeAll[index].placeNo);
                        formData.append("endPath", this.placeAll[this.placeAll.length - 1].placeNo);
                        formData.append("distance", item.elements[0].distance.value);
                        formData.append("distanceText", item.elements[0].distance.text);
                        formData.append("fare", fare + "");
                        let httpRespon = yield this.http.post("setPath", formData);
                        //console.log(httpRespon);
                        if (httpRespon.response.success) {
                            //console.log(httpRespon.response.message);
                        }
                        else {
                            console.log(httpRespon.response.message);
                        }
                    }));
                }
                else {
                    //console.log(status);
                }
                return 0;
            });
        });
    }
    /////////////////////
    onFileSelected(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedFile = event.target.files[0];
            //console.log(event.target.files);
            //console.log(this.selectedFile);
            if (event.target.files.length === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("กรุณาเลือกไฟล์", "", "error");
                return;
            }
            var mimeType = event.target.files[0].type;
            if (mimeType.match(/image\/*/) == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("กรุณาเลือกไฟล์รูปภาพ", "", "error");
                return;
            }
            this.lastNameFile = this.selectedFile.name.split(".");
            this.fileName =
                new Date().getTime() +
                    "." +
                    this.lastNameFile[this.lastNameFile.length - 1];
            //console.log(this.selectedFile.name);
            var reader = new FileReader();
            this.imagePath = event.target.files;
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (_event) => {
                this.imgURL = reader.result;
            };
        });
    }
};
AddplacePage.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
AddplacePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-addplace",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addplace.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addplace/addplace.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addplace.page.scss */ "./src/app/home/admin/homeadmin/addplace/addplace.page.scss")).default]
    })
], AddplacePage);



/***/ })

}]);
//# sourceMappingURL=addplace-addplace-module-es2015.js.map