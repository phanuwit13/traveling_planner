(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addplace-addplace-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addplace/addplace.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/admin/homeadmin/addplace/addplace.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back-outline\">Black</ion-icon> -->\n      <ion-back-button\n        [routerLink]=\"['/home/admin/homeadmin']\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Add Place</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content mode=\"ios\" [fullscreen]=\"false\">\n  <!-- Animated Searchbar -->\n  <ion-searchbar\n    [(ngModel)]=\"key\"\n    (keyup.enter)=\"getAddress()\"\n    animated\n  ></ion-searchbar>\n\n  <div id=\"map_canvas\"></div>\n  <div id=\"container\" text-center>\n    <form action=\"\" [formGroup]=\"form_place\">\n      <div style=\"padding: 5%;\">\n        <span class=\"tl\">Add Place</span>\n      </div>\n      <img src=\"assets/img/icons-image.png\" height=\"200\" *ngIf=\"!imgURL\" />\n      <img [src]=\"imgURL\" height=\"200\" *ngIf=\"imgURL\" />\n      <ion-item>\n        <ion-label>รูปภาพ :</ion-label>\n        <ion-input\n          type=\"file\"\n          accept=\"image/*\"\n          id=\"upload\"\n          (change)=\"onFileSelected($event)\"\n        ></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>ชื่อสถานที่</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>TH :</ion-label>\n        <ion-input formControlName=\"placeTH\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>EN :</ion-label>\n        <ion-input formControlName=\"placeEN\"></ion-input>\n      </ion-item>\n      <ion-item color=\"\">\n        <ion-label>ประเภท</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"categoryNo\"\n          interface=\"action-sheet\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of categoryData\"\n            [value]=\"item.categoryNo\"\n            >{{item.categoryTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>รายละเอียด</ion-label>\n        <ion-textarea\n          formControlName=\"detail\"\n          rows=\"6\"\n          cols=\"20\"\n          placeholder=\"รายละเอียดของสถานที่ท่องเที่ยว...\"\n        ></ion-textarea>\n      </ion-item>\n    </form>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button\n      mode=\"ios\"\n      expand=\"block\"\n      color=\"primary\"\n      (click)=\"setPlace()\"\n      [disabled]=\"form_place.invalid\"\n      >Add</ion-button\n    >\n  </section>\n</ion-footer>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  left: 0;\n  right: 0;\n  height: 100%;\n  text-align: center;\n  position: absolute;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.lg {\n  font-size: 100px;\n  margin-top: 10%;\n  color: #4c8dff;\n}\n\n#map_canvas {\n  height: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZG1pbi9ob21lYWRtaW4vYWRkcGxhY2UvQzpcXHByb2plY3RcXGZhaWxcXHRyYXZlbGluZ19wbGFubmVyL3NyY1xcYXBwXFxob21lXFxhZG1pblxcaG9tZWFkbWluXFxhZGRwbGFjZVxcYWRkcGxhY2UucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9hZGRwbGFjZS9hZGRwbGFjZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FkbWluL2hvbWVhZG1pbi9hZGRwbGFjZS9hZGRwbGFjZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmxnIHtcbiAgZm9udC1zaXplOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBjb2xvcjogIzRjOGRmZjtcbn1cbiNtYXBfY2FudmFzIHtcbiAgaGVpZ2h0OiA4MCU7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubGcge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGNvbG9yOiAjNGM4ZGZmO1xufVxuXG4jbWFwX2NhbnZhcyB7XG4gIGhlaWdodDogODAlO1xufSJdfQ== */");

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
        this.placeNo = [];
        this.distance = "";
        this.lastNameFile = [];
        this.other = { categoryNo: 8, categoryTH: "อื่นๆ" };
        this.fileName = null;
        this.selectedFile = null;
        this.key = "";
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
            this.geocoder = new google.maps.Geocoder();
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
    getAddress() {
        console.log(this.key);
        this.geocoderAddress(this.geocoder, this.map);
    }
    geocoderAddress(geocoder, map) {
        geocoder.geocode({ address: this.key }, (results, status) => {
            if (status == "OK") {
                map.setCenter(results[0].geometry.location);
                map.setZoom(18);
                this.marker.setPosition(results[0].geometry.location);
                console.log(this.marker.getPosition().lat());
                console.log(this.marker.getPosition().lng());
                this.form_place.controls["latitude"].setValue(this.marker.getPosition().lat());
                this.form_place.controls["longitude"].setValue(this.marker.getPosition().lng());
            }
            else {
                console.log(status);
            }
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
                    if (this.fileName != null) {
                        formData.append("image", this.selectedFile, this.fileName);
                        formData.append("img", this.fileName);
                    }
                    this.loading = yield this.loadingCtrl.create({
                        message: "Please wait...",
                    });
                    yield this.loading.present();
                    let httpRespon = yield this.http.post("setPlace", formData);
                    //console.log(httpRespon);
                    if (httpRespon.response.success) {
                        this.setPath().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.loading.dismiss();
                            yield sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("สำเร็จ", httpRespon.response.message + " !", "success").then(() => {
                                this.form_place.reset();
                                this.http.navRouter("/home/admin/homeadmin");
                            });
                        }));
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
    // async getCategory() {
    //   let httpRespon: any = await this.http.post("getCategory");
    //   //console.log(httpRespon);
    //   if (httpRespon.response.success) {
    //     this.categoryData = await httpRespon.response.data;
    //   } else {
    //     this.categoryData = null;
    //   }
    // }
    getCategory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let httpRespon = yield this.http.post("getCategory");
            //console.log(httpRespon);
            if (httpRespon.response.success) {
                this.categoryData = yield httpRespon.response.data;
                this.categoryData = this.categoryData.filter((item) => {
                    return item.categoryNo != 8;
                });
                this.categoryData.push(this.other);
            }
            else {
                this.categoryData = null;
            }
            console.log(this.categoryData);
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
            this.rows = Math.ceil(this.placeAll.length / 20);
            for (let i = 0; i < this.rows; i++) {
                this.placeNo.push([]);
                this.placeEndAll.push([]);
            }
            this.placeStartAll.push({
                lat: parseFloat(this.placeAll[this.placeAll.length - 1].latitude),
                lng: parseFloat(this.placeAll[this.placeAll.length - 1].longitude),
            });
            let n = 0;
            this.placeAll.forEach((item, index) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (index % 20 == 0 && index != 0) {
                    n++;
                }
                this.placeNo[n].push(this.placeAll[index].placeNo);
                this.placeEndAll[n].push({
                    lat: parseFloat(this.placeAll[index].latitude),
                    lng: parseFloat(this.placeAll[index].longitude),
                });
            }));
            if (this.placeAll.length > 1) {
                let p = 0;
                yield this.setPathGoBlack(p);
            }
            else {
                let p = 0;
                yield this.setPathGo(p);
            }
            return true;
        });
    }
    setPathGoBlack(p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let item of this.placeEndAll) {
                yield this.setDistanceGo(this.placeEndAll[p], this.placeNo[p]);
                yield this.sleep(3000);
                yield this.setDistanceBlack(this.placeEndAll[p], this.placeNo[p]);
                yield this.sleep(3000);
                p++;
            }
            return true;
        });
    }
    setPathGo(p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (let item of this.placeEndAll) {
                yield this.setDistanceGo(this.placeEndAll[p], this.placeNo[p]);
                yield this.sleep(500);
                p++;
            }
        });
    }
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    setDistanceGo(placeEnd, placeNo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var service = new google.maps.DistanceMatrixService();
            //console.log(placeEnd);
            service.getDistanceMatrix({
                origins: this.placeStartAll,
                destinations: placeEnd,
                travelMode: "DRIVING",
            }, (response, status) => {
                if ((status = "OK")) {
                    console.log("ขาไป" + response);
                    //console.log(status);
                    this.pathStart = response.rows[0].elements;
                    this.pathStart.forEach((item, index) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        //console.log(item.distance);
                        let formData = new FormData();
                        let fare = yield Math.ceil((item.distance.value * 6) / 1000 + 52.5);
                        formData.append("firstPath", this.placeAll[this.placeAll.length - 1].placeNo);
                        formData.append("endPath", placeNo[index]);
                        formData.append("distance", item.distance.value);
                        formData.append("distanceText", item.distance.text);
                        formData.append("fare", fare + "");
                        let httpRespon = yield this.http.post("setPath", formData);
                        //console.log(httpRespon);
                        if (httpRespon.response.success) {
                            console.log("first : " +
                                this.placeAll[this.placeAll.length - 1].placeNo +
                                " end : " +
                                placeNo[index]);
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
            });
        });
    }
    setDistanceBlack(placeEnd, placeNo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var service = new google.maps.DistanceMatrixService();
            //console.log(placeEnd);
            service.getDistanceMatrix({
                origins: placeEnd,
                destinations: this.placeStartAll,
                travelMode: "DRIVING",
            }, (response, status) => {
                if ((status = "OK")) {
                    console.log("ขากลับ" + response);
                    this.pathEnd = response.rows;
                    this.pathEnd.forEach((item, index) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        //console.log(item.elements[0].distance);
                        let formData = new FormData();
                        let fare = yield Math.ceil((item.elements[0].distance.value * 6) / 1000 + 52.5);
                        formData.append("firstPath", placeNo[index]);
                        formData.append("endPath", this.placeAll[this.placeAll.length - 1].placeNo);
                        formData.append("distance", item.elements[0].distance.value);
                        formData.append("distanceText", item.elements[0].distance.text);
                        formData.append("fare", fare + "");
                        let httpRespon = yield this.http.post("setPath", formData);
                        //console.log(httpRespon);
                        if (httpRespon.response.success) {
                            console.log("first : " +
                                placeNo[index] +
                                " end : " +
                                this.placeAll[this.placeAll.length - 1].placeNo);
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