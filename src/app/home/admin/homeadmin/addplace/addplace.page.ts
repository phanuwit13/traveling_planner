import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpService } from "./../../../../services/http.service";
import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import Compressor from "compressorjs";
declare var google;

import { LoadingController, Platform } from "@ionic/angular";
@Component({
  selector: "app-addplace",
  templateUrl: "./addplace.page.html",
  styleUrls: ["./addplace.page.scss"],
})
export class AddplacePage implements OnInit {
  public form_place: FormGroup;
  public categoryData: Array<any> = null;
  map: any;
  public i = 0;
  public placeAll: Array<any> = null;
  public pathStart: Array<any> = null;
  public pathEnd: Array<any> = null;
  public placeStartAll = [];
  public placeEndAll = [];
  public distance = "";
  public lastNameFile: Array<any> = [];
  public marker: any;
  loading: any;
  public fileName = null;
  public selectedFile: File = null;
  imagePath: any;
  imgURL: any;
  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.form_place = this.formBuilder.group({
      categoryNo: ["", Validators.required],
      placeTH: ["", Validators.required],
      placeEN: ["", Validators.required],
      detail: "",
      latitude: ["", Validators.required],
      longitude: ["", Validators.required],
    });

    this.getCategory();
    this.loadMap();
  }

  async loadMap() {
    //คำนวนระยะทาง
    //this.displayDirection();

    this.loading = await this.loadingCtrl.create({
      message: "Please wait...",
    });
    await this.loading.present();

    this.map = new google.maps.Map(document.getElementById("map_canvas"), {
      zoom: 15,
      center: { lat: 14.9736915, lng: 102.0827157 },
    });
    this.marker = await new google.maps.Marker({
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: { lat: 14.9736915, lng: 102.0827157 },
    });
    this.loading.dismiss();
    this.marker.addListener("dragend", () => {
      console.log(this.marker.getPosition().lat());
      console.log(this.marker.getPosition().lng());
      this.form_place.controls["latitude"].setValue(
        this.marker.getPosition().lat()
      );
      this.form_place.controls["longitude"].setValue(
        this.marker.getPosition().lng()
      );
    });
  }

  async setPlace() {
    this.placeStartAll = [];
    this.placeEndAll = [];
    Swal.fire({
      title: "คุณแน่ใจว่าต้องการเพิ่มสถานที่?",
      text: "คุณจะไม่สามารถยกเลิกสิ่งนี้ได้ !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "ตกลง !",
      cancelButtonText: "ยกเลิก",

      reverseButtons: true,
    }).then(async (result) => {
      if (result.value) {
        let formData = new FormData();
        Object.keys(this.form_place.value).forEach((key) => {
          formData.append(key, this.form_place.value[key]);
        });
        formData.append("img", this.fileName);
        formData.append("image", this.selectedFile, this.fileName);
        let httpRespon: any = await this.http.post("setPlace", formData);
        //console.log(httpRespon);
        if (httpRespon.response.success) {
          await Swal.fire(
            "สำเร็จ",
            httpRespon.response.message + " !",
            "success"
          ).then(() => {
            this.setPath();
            this.form_place.reset();
            this.http.navRouter("/home/admin/homeadmin");
          });
        } else {
          Swal.fire("ผิดพลาด", httpRespon.response.message + " !", "error");
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }
  async getCategory() {
    let httpRespon: any = await this.http.post("getCategory");
    //console.log(httpRespon);
    if (httpRespon.response.success) {
      this.categoryData = await httpRespon.response.data;
    } else {
      this.categoryData = null;
    }
  }

  async setPath() {
    let httpRespon: any = await this.http.post("getPlace");
    //console.log(httpRespon);
    if (httpRespon.response.success) {
      this.placeAll = await httpRespon.response.data;
    } else {
      this.placeAll = null;
    }
    this.placeStartAll.push({
      lat: parseFloat(this.placeAll[this.placeAll.length - 1].latitude),
      lng: parseFloat(this.placeAll[this.placeAll.length - 1].longitude),
    });
    this.placeAll.forEach(async (item, index) => {
      this.placeEndAll.push({
        lat: parseFloat(this.placeAll[index].latitude),
        lng: parseFloat(this.placeAll[index].longitude),
      });
    });
    if (this.placeAll.length > 1) {
      this.setDistanceGo();
      this.setDistanceBlack();
    } else {
      this.setDistanceGo();
    }
  }

  async setDistanceGo() {
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: this.placeStartAll,
        destinations: this.placeEndAll,
        travelMode: "DRIVING",
      },
      async (response, status) => {
        if ((status = "OK")) {
          //console.log(response);
          this.pathStart = await response.rows[0].elements;
          this.pathStart.forEach(async (item, index) => {
            //console.log(item.distance);
            let formData = new FormData();
            let fare: number = await Math.ceil(
              (item.distance.value * 5) / 1000 + 52.5
            );
            formData.append(
              "firstPath",
              this.placeAll[this.placeAll.length - 1].placeNo
            );
            formData.append("endPath", this.placeAll[index].placeNo);
            formData.append("distance", item.distance.value);
            formData.append("distanceText", item.distance.text);
            formData.append("fare", fare + "");

            let httpRespon: any = await this.http.post("setPath", formData);
            //console.log(httpRespon);
            if (httpRespon.response.success) {
              //console.log(httpRespon.response.message);
            } else {
              //console.log(httpRespon.response.message);
            }
          });
        } else {
          //console.log(status);
        }
      }
    );
  }

  async setDistanceBlack() {
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: this.placeEndAll,
        destinations: this.placeStartAll,
        travelMode: "DRIVING",
      },
      (response, status) => {
        if ((status = "OK")) {
          console.log(response);
          this.pathEnd = response.rows;
          this.pathEnd.forEach(async (item, index) => {
            //console.log(item.elements[0].distance);
            let formData = new FormData();
            let fare: number = await Math.ceil(
              (item.elements[0].distance.value * 5) / 1000 + 52.5
            );
            formData.append("firstPath", this.placeAll[index].placeNo);
            formData.append(
              "endPath",
              this.placeAll[this.placeAll.length - 1].placeNo
            );
            formData.append("distance", item.elements[0].distance.value);
            formData.append("distanceText", item.elements[0].distance.text);
            formData.append("fare", fare + "");

            let httpRespon: any = await this.http.post("setPath", formData);
            //console.log(httpRespon);
            if (httpRespon.response.success) {
              //console.log(httpRespon.response.message);
            } else {
              console.log(httpRespon.response.message);
            }
          });
        } else {
          //console.log(status);
        }
        return 0;
      }
    );
  }
  /////////////////////
  async onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    //console.log(event.target.files);
    //console.log(this.selectedFile);
    if (event.target.files.length === 0) return;
    this.lastNameFile = this.selectedFile.name.split(".");
    this.fileName =
      new Date().getTime() +
      "." +
      this.lastNameFile[this.lastNameFile.length - 1];
    //console.log(this.selectedFile.name);
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }
}
