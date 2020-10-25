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
  public placeNo = [];
  public distance = "";
  public lastNameFile: Array<any> = [];
  public other = { categoryNo: 8, categoryTH: "อื่นๆ" };
  public marker: any;
  loading: any;
  public fileName = null;
  public selectedFile: File = null;
  imagePath: any;
  imgURL: any;
  public key = "";
  public rows: number;
  public cols: number;
  public geocoder: any;
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

    this.geocoder = new google.maps.Geocoder();

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
        this.form_place.controls["latitude"].setValue(
          this.marker.getPosition().lat()
        );
        this.form_place.controls["longitude"].setValue(
          this.marker.getPosition().lng()
        );
      } else {
        console.log(status);
      }
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
        if (this.fileName != null) {
          formData.append("image", this.selectedFile, this.fileName);
          formData.append("img", this.fileName);
        }
        this.loading = await this.loadingCtrl.create({
          message: "Please wait...",
        });
        await this.loading.present();
        let httpRespon: any = await this.http.post("setPlace", formData);
        //console.log(httpRespon);
        if (httpRespon.response.success) {
          this.setPath().then(async () => {
            this.loading.dismiss();
            await Swal.fire(
              "สำเร็จ",
              httpRespon.response.message + " !",
              "success"
            ).then(() => {
              this.form_place.reset();
              this.http.navRouter("/home/admin/homeadmin");
            });
          });
        } else {
          Swal.fire(
            "ผิดพลาด",
            httpRespon.response.message + " !",
            "error"
          ).then(() => {
            this.loading.dismiss();
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
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

  async getCategory() {
    let httpRespon: any = await this.http.post("getCategory");
    //console.log(httpRespon);
    if (httpRespon.response.success) {
      this.categoryData = await httpRespon.response.data;
      this.categoryData = this.categoryData.filter((item) => {
        return item.categoryNo != 8;
      });
      this.categoryData.push(this.other);
    } else {
      this.categoryData = null;
    }
    console.log(this.categoryData);
    
  }

  async setPath() {
    let httpRespon: any = await this.http.post("getPlace");
    //console.log(httpRespon);
    if (httpRespon.response.success) {
      this.placeAll = await httpRespon.response.data;
    } else {
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

    this.placeAll.forEach(async (item, index) => {
      if (index % 20 == 0 && index != 0) {
        n++;
      }
      this.placeNo[n].push(this.placeAll[index].placeNo);
      this.placeEndAll[n].push({
        lat: parseFloat(this.placeAll[index].latitude),
        lng: parseFloat(this.placeAll[index].longitude),
      });
    });
    if (this.placeAll.length > 1) {
      let p = 0;
      await this.setPathGoBlack(p);
    } else {
      let p = 0;
      await this.setPathGo(p);
    }
    return true;
  }

  async setPathGoBlack(p) {
    for (let item of this.placeEndAll) {
      await this.setDistanceGo(this.placeEndAll[p], this.placeNo[p]);
      await this.sleep(3000);
      await this.setDistanceBlack(this.placeEndAll[p], this.placeNo[p]);
      await this.sleep(3000);
      p++;
    }
    return true;
  }
  async setPathGo(p) {
    for (let item of this.placeEndAll) {
      await this.setDistanceGo(this.placeEndAll[p], this.placeNo[p]);
      await this.sleep(500);
      p++;
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async setDistanceGo(placeEnd, placeNo) {
    var service = new google.maps.DistanceMatrixService();

    //console.log(placeEnd);
    service.getDistanceMatrix(
      {
        origins: this.placeStartAll,
        destinations: placeEnd,
        travelMode: "DRIVING",
      },
      (response, status) => {
        if ((status = "OK")) {
          console.log("ขาไป" + response);
          //console.log(status);
          this.pathStart = response.rows[0].elements;

          this.pathStart.forEach(async (item, index) => {
            //console.log(item.distance);
            let formData = new FormData();
            let fare: number = await Math.ceil(
              (item.distance.value * 6) / 1000 + 52.5
            );
            formData.append(
              "firstPath",
              this.placeAll[this.placeAll.length - 1].placeNo
            );
            formData.append("endPath", placeNo[index]);
            formData.append("distance", item.distance.value);
            formData.append("distanceText", item.distance.text);
            formData.append("fare", fare + "");

            let httpRespon: any = await this.http.post("setPath", formData);
            //console.log(httpRespon);
            if (httpRespon.response.success) {
              console.log(
                "first : " +
                  this.placeAll[this.placeAll.length - 1].placeNo +
                  " end : " +
                  placeNo[index]
              );
              //console.log(httpRespon.response.message);
            } else {
              console.log(httpRespon.response.message);
            }
          });
        } else {
          //console.log(status);
        }
      }
    );
  }

  async setDistanceBlack(placeEnd, placeNo) {
    var service = new google.maps.DistanceMatrixService();
    //console.log(placeEnd);
    service.getDistanceMatrix(
      {
        origins: placeEnd,
        destinations: this.placeStartAll,
        travelMode: "DRIVING",
      },
      (response, status) => {
        if ((status = "OK")) {
          console.log("ขากลับ" + response);
          this.pathEnd = response.rows;
          this.pathEnd.forEach(async (item, index) => {
            //console.log(item.elements[0].distance);
            let formData = new FormData();
            let fare: number = await Math.ceil(
              (item.elements[0].distance.value * 6) / 1000 + 52.5
            );
            formData.append("firstPath", placeNo[index]);
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
              console.log(
                "first : " +
                  placeNo[index] +
                  " end : " +
                  this.placeAll[this.placeAll.length - 1].placeNo
              );
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
    if (event.target.files.length === 0) {
      Swal.fire("กรุณาเลือกไฟล์", "", "error");
      return;
    }
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      Swal.fire("กรุณาเลือกไฟล์รูปภาพ", "", "error");
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
  }
}
