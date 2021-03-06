import { HttpService } from "./../../services/http.service";
import { Component, OnInit, HostListener } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Platform, LoadingController } from "@ionic/angular";
import Swal from "sweetalert2";

@Component({
  selector: "app-planning",
  templateUrl: "./planning.page.html",
  styleUrls: ["./planning.page.scss"],
})
export class PlanningPage implements OnInit {
  public form_planning: FormGroup;
  loading: any;
  public placeData: Array<any> = null;
  public categoryData: Array<any> = null;
  public no: Array<any> = [];
  public noSort: Array<any> = [];
  public distance: Array<any> = [];
  public point_start: Array<any> = [];
  public placeToGo: Array<any> = [];
  public placeSus = ""
  public other = { categoryNo: 8, categoryTH: "อื่นๆ" };
  list = [];
  placeDistance = [];
  public cost: number = 0;
  public sumDistance: number = 0;
  constructor(private http: HttpService, private formBuilder: FormBuilder,public loadingCtrl: LoadingController,) {}

  @HostListener("document:ionBackButton", ["$event"])
  private async overrideHardwareBackAction($event: any) {
    this.http.removeList(this.list[0]);
    this.clearData();
  }

  async ngOnInit() {
    this.http.list$.subscribe((list) => (this.list = list));
    this.form_planning = this.formBuilder.group({
      placeNo: "",
      categoryNo: "",
      point_start: "",
    });
    this.getCategory();
  }

  async addPlace() {
    if (this.no.length < 8) {
      let check = 0;
      if (
        this.form_planning.controls["placeNo"].value.placeNo ==
        this.form_planning.controls["point_start"].value.placeNo
      ) {
        check = 1;
        await Swal.fire(
          "คุณเลือกสถานที่ซ้ำ !",
          "กรุณาตรวจสอบสถานที่ท่องเที่ยว",
          "warning"
        );
        return;
      } else {
        if (this.no == null) {
          this.no.push(this.form_planning.controls["placeNo"].value);
          this.placeToGo.push(this.form_planning.controls["placeNo"].value);
        } else {
          this.no.forEach(async (item) => {
            if (item.placeNo == this.form_planning.controls["placeNo"].value.placeNo) {
              check = 1;
              console.log("แก้ใหม่");
              
              await Swal.fire(
                "คุณเลือกสถานที่ซ้ำ !",
                "กรุณาตรวจสอบสถานที่ท่องเที่ยว",
                "warning"
              );
              return;
            }
          });
          if (check != 1) {
            this.no.push(this.form_planning.controls["placeNo"].value);
            this.placeToGo.push(this.form_planning.controls["placeNo"].value);
          }
        }
      }
    } else {
      Swal.fire(
        "เลือกได้สูงสุด 8 สถานที่ !",
        "กรุณาตรวจสอบสถานที่ท่องเที่ยว",
        "warning"
      );
    }
    console.log("สถานที่ทั้งหมด")
    console.log(this.no);
    console.log("สถานที่ ที่จะไป")
    console.log(this.placeToGo)
    
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
  async addItem(value: any) {
    if (value != []) {
      this.http.addNewList(value);
    }
  }
  async getPlace() {
    let httpRespon: any = await this.http.post("getPlace");
    //console.log(httpRespon);
    if (httpRespon.response.data.length > 0) {
      this.placeData = await httpRespon.response.data;
    } else {
      this.placeData = null;
    }
  }
  async getPlaceCategory() {
    let formData = new FormData();
    formData.append(
      "categoryNo",
      this.form_planning.controls["categoryNo"].value
    );
    //console.log(this.form_planning.controls["categoryNo"].value);
    let httpRespon: any = await this.http.post("getPlaceCategory", formData);
    //console.log(httpRespon);
    if (httpRespon.response.success) {
      this.placeData = await httpRespon.response.data;
    } else {
      this.placeData = null;
    }
  }

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
  async testSort() {
    this.loading = await this.loadingCtrl.create({
      message: "Please wait...",
    });
    await this.loading.present();
    this.point_start = this.form_planning.controls["point_start"].value.placeNo;
    this.noSort.push(this.form_planning.controls["point_start"].value);
    for (let i = 0; i < this.no.length; i++) {
      await this.loopPlace(this.point_start);
      //console.log(this.noSort);
    }
    //console.log(this.cost);
    this.http.navRouter("/home/planning/resulte");
    this.sumDistance = this.sumDistance / 1000;
    await this.addItem(this.noSort)
    await this.addItem(this.cost);
    await this.addItem(this.sumDistance.toFixed(2));
    await this.addItem(this.placeDistance);
    this.clearData();
    this.loading.dismiss();
  }

  async loopPlace(start: any) {
    await this.calculateDistance(start);
    for (let i = 0; i < this.distance.length; i++) {
      for (let j = 0; j < this.placeToGo.length; j++) {
        if (
          this.distance[i].endPath == this.placeToGo[j].placeNo &&
          this.distance[i].distance != "0"
        ) {
          this.cost += parseInt(this.distance[i].fare);
          this.sumDistance += parseFloat(this.distance[i].distance);
          this.placeDistance.push((parseFloat(this.distance[i].distance)/1000).toFixed(2));
          console.log(this.sumDistance);
          this.noSort.push(this.placeToGo[j]);
          this.placeSus+=this.placeToGo[j]+","
          this.point_start = await this.placeToGo[j].placeNo;
          this.placeToGo.splice(j, 1);
          i = this.distance.length + 1;
          break;
        }
      }
    }
  }

  async calculateDistance(firstPath: string) {
    let formData = new FormData();
    // var json_arr = JSON.stringify(this.placeSus);
    formData.append("firstPath", firstPath);
    formData.append("placeSus", this.placeSus);
    let httpRespon: any = await this.http.post("getPathSelectOne", formData);
    //console.log(httpRespon);
    if (httpRespon.response.success) {
      this.distance = httpRespon.response.data;
      console.log(this.distance);
    } else {
      this.distance = null;
    }

    // this.distance.sort((a: any, b: any) =>
    //   parseFloat(a.distance) < parseFloat(b.distance) ? -1 : 0
    // );
    // console.log("หลังเรียง");
    // console.log(this.distance);
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
}
