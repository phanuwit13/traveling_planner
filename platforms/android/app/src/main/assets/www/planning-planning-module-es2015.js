(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planning-planning-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/planning/planning.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/planning/planning.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-icon name=\"chevron-back-outline\">Black</ion-icon> -->\n      <ion-back-button\n        (click)=\"closeList()\"\n        [routerLink]=\"['/home']\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Planning</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"false\">\n  <div id=\"container\">\n    <form\n      [formGroup]=\"form_planning\"\n      style=\"padding-top: 15px; font-size: 18px;\"\n    >\n      <ion-label slot=\"start\">จุดเริ่มต้น</ion-label>\n      <ion-item color=\"\">\n        <ion-label>ประเภท</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"categoryNo\"\n          interface=\"action-sheet\"\n          (ionChange)=\"getPlaceCategory()\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of categoryData\"\n            [value]=\"item.categoryNo\"\n            >{{item.categoryTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-item color=\"\">\n        <ion-label>สถานที่</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"point_start\"\n          interface=\"action-sheet\"\n        >\n          <ion-select-option *ngFor=\"let item of placeData \" [value]=\"item\"\n            >{{item.placeTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-item\n        color=\"\"\n        *ngIf=\"this.form_planning.controls['point_start'].value != ''\"\n      >\n        <ion-label\n          >{{'จุดเริ่มต้น'+\"\n          \"+this.form_planning.controls['point_start'].value.placeTH}}</ion-label\n        >\n      </ion-item>\n\n      <div style=\"padding-top: 15px;\">\n        <ion-label>โปรดเลือกสถานที่ ที่ต้องการไป</ion-label>\n      </div>\n      <ion-item color=\"\">\n        <ion-label>ประเภท</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"categoryNo\"\n          interface=\"action-sheet\"\n          (ionChange)=\"getPlaceCategory()\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of categoryData\"\n            [value]=\"item.categoryNo\"\n            >{{item.categoryTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-item color=\"\">\n        <ion-label>สถานที่</ion-label>\n        <ion-select\n          type=\"md\"\n          formControlName=\"placeNo\"\n          interface=\"action-sheet\"\n          (ionChange)=\"addPlace()\"\n        >\n          <ion-select-option *ngFor=\"let item of placeData\" [value]=\"item\"\n            >{{item.placeTH}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n\n      <ion-item-sliding *ngFor=\"let x of no ; let i = index\">\n        <ion-item color=\"\">\n          <ion-label>{{(i+1)+\". \"+x.placeTH}}</ion-label>\n        </ion-item>\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"delPlace(x)\"\n            >Delete</ion-item-option\n          >\n        </ion-item-options>\n      </ion-item-sliding>\n    </form>\n  </div>\n</ion-content>\n<ion-footer>\n  <section class=\"full-width\">\n    <ion-button\n      mode=\"ios\"\n      expand=\"block\"\n      color=\"primary\"\n      (click)=\"testSort() \"\n      [disabled]=\"this.no.length ==0 || this.form_planning.controls['point_start'].value =='' \"\n      >Plan</ion-button\n    >\n  </section>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/home/planning/planning-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/planning/planning-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: PlanningPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningPageRoutingModule", function() { return PlanningPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _planning_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./planning.page */ "./src/app/home/planning/planning.page.ts");




const routes = [
    {
        path: '',
        component: _planning_page__WEBPACK_IMPORTED_MODULE_3__["PlanningPage"]
    },
    {
        path: 'resulte',
        loadChildren: () => __webpack_require__.e(/*! import() | resulte-resulte-module */ "resulte-resulte-module").then(__webpack_require__.bind(null, /*! ./resulte/resulte.module */ "./src/app/home/planning/resulte/resulte.module.ts")).then(m => m.ResultePageModule)
    }
];
let PlanningPageRoutingModule = class PlanningPageRoutingModule {
};
PlanningPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlanningPageRoutingModule);



/***/ }),

/***/ "./src/app/home/planning/planning.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/planning/planning.module.ts ***!
  \**************************************************/
/*! exports provided: PlanningPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningPageModule", function() { return PlanningPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _planning_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./planning-routing.module */ "./src/app/home/planning/planning-routing.module.ts");
/* harmony import */ var _planning_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planning.page */ "./src/app/home/planning/planning.page.ts");







let PlanningPageModule = class PlanningPageModule {
};
PlanningPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _planning_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlanningPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_planning_page__WEBPACK_IMPORTED_MODULE_6__["PlanningPage"]],
    })
], PlanningPageModule);



/***/ }),

/***/ "./src/app/home/planning/planning.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home/planning/planning.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\nion-title {\n  font-size: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9iaWcvRTQ5NjlFNzc5NjlFNDlDNi9wcm9qZWN0L2ZhaWwvdHJhdmVsaW5nX3BsYW5uZXIvc3JjL2FwcC9ob21lL3BsYW5uaW5nL3BsYW5uaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9wbGFubmluZy9wbGFubmluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGxhbm5pbmcvcGxhbm5pbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnOiAjZmZmZmZmO1xuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/planning/planning.page.ts":
/*!************************************************!*\
  !*** ./src/app/home/planning/planning.page.ts ***!
  \************************************************/
/*! exports provided: PlanningPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanningPage", function() { return PlanningPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let PlanningPage = class PlanningPage {
    constructor(http, formBuilder) {
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
    overrideHardwareBackAction($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.http.removeList(this.list[0]);
            this.clearData();
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.http.list$.subscribe((list) => (this.list = list));
            this.form_planning = this.formBuilder.group({
                placeNo: "",
                categoryNo: "",
                point_start: "",
            });
            this.getCategory();
        });
    }
    addPlace() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.no.length < 8) {
                let check = 0;
                if (this.form_planning.controls["placeNo"].value.placeNo ==
                    this.form_planning.controls["point_start"].value.placeNo) {
                    check = 1;
                    yield sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("คุณเลือกสถานที่ซ้ำ !", "กรุณาตรวจสอบสถานที่ท่องเที่ยว", "warning");
                    return;
                }
                else {
                    if (this.no == null) {
                        this.no.push(this.form_planning.controls["placeNo"].value);
                        this.placeToGo.push(this.form_planning.controls["placeNo"].value);
                    }
                    else {
                        this.no.forEach((item) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (item == this.form_planning.controls["placeNo"].value) {
                                check = 1;
                                yield sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("คุณเลือกสถานที่ซ้ำ !", "กรุณาตรวจสอบสถานที่ท่องเที่ยว", "warning");
                                return;
                            }
                        }));
                        if (check != 1) {
                            this.no.push(this.form_planning.controls["placeNo"].value);
                            this.placeToGo.push(this.form_planning.controls["placeNo"].value);
                        }
                    }
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("เลือกได้สูงสุด 8 สถานที่ !", "กรุณาตรวจสอบสถานที่ท่องเที่ยว", "warning");
            }
        });
    }
    delPlace(value) {
        this.no.forEach((item, index) => {
            if (item == value) {
                this.no.splice(index, 1);
                return;
            }
        });
    }
    closeList() {
        this.http.removeList(this.list[0]);
    }
    addItem(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (value != []) {
                this.http.addNewList(value);
            }
        });
    }
    getPlace() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let httpRespon = yield this.http.post("getPlace");
            //console.log(httpRespon);
            if (httpRespon.response.data.length > 0) {
                this.placeData = yield httpRespon.response.data;
            }
            else {
                this.placeData = null;
            }
        });
    }
    getPlaceCategory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append("categoryNo", this.form_planning.controls["categoryNo"].value);
            //console.log(this.form_planning.controls["categoryNo"].value);
            let httpRespon = yield this.http.post("getPlaceCategory", formData);
            //console.log(httpRespon);
            if (httpRespon.response.success) {
                this.placeData = yield httpRespon.response.data;
            }
            else {
                this.placeData = null;
            }
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
    testSort() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.point_start = this.form_planning.controls["point_start"].value.placeNo;
            this.noSort.push(this.form_planning.controls["point_start"].value);
            for (let i = 0; i < this.no.length; i++) {
                yield this.loopPlace(this.point_start);
                //console.log(this.noSort);
            }
            //console.log(this.cost);
            this.http.navRouter("/home/planning/resulte");
            this.sumDistance = yield Math.ceil(this.sumDistance / ((this.noSort.length - 1) * 1000));
            yield this.addItem(this.noSort);
            yield this.addItem(this.cost);
            this.addItem(this.sumDistance);
            this.clearData();
        });
    }
    loopPlace(start) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.calculateDistance(start);
            for (let i = 0; i < this.distance.length; i++) {
                for (let j = 0; j < this.placeToGo.length; j++) {
                    if (this.distance[i].endPath == this.placeToGo[j].placeNo &&
                        this.distance[i].distance != "0") {
                        this.cost += parseInt(this.distance[i].fare);
                        this.sumDistance += parseInt(this.distance[i].distance);
                        this.noSort.push(this.placeToGo[j]);
                        this.point_start = yield this.placeToGo[j].placeNo;
                        this.placeToGo.splice(j, 1);
                        i = this.distance.length + 1;
                        break;
                    }
                }
            }
        });
    }
    calculateDistance(firstPath) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append("firstPath", firstPath);
            //formData.append("endPath", endPath);
            let httpRespon = yield this.http.post("getPathSelectOne", formData);
            //console.log(httpRespon);
            if (httpRespon.response.success) {
                this.distance = httpRespon.response.data;
            }
            else {
                this.distance = null;
            }
            this.distance.sort((a, b) => parseFloat(a.distance) < parseFloat(b.distance) ? -1 : 0);
            //console.log(this.distance);
        });
    }
    clearData() {
        this.no = [];
        this.noSort = [];
        this.distance = [];
        this.point_start = [];
        this.placeToGo = [];
        this.cost = 0;
        this.sumDistance = 0;
    }
};
PlanningPage.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:ionBackButton", ["$event"])
], PlanningPage.prototype, "overrideHardwareBackAction", null);
PlanningPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-planning",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./planning.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/planning/planning.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./planning.page.scss */ "./src/app/home/planning/planning.page.scss")).default]
    })
], PlanningPage);



/***/ })

}]);
//# sourceMappingURL=planning-planning-module-es2015.js.map