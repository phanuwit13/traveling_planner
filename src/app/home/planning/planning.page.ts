import { HttpService } from "./../../services/http.service";
import { Component, OnInit, HostListener } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "app-planning",
  templateUrl: "./planning.page.html",
  styleUrls: ["./planning.page.scss"],
})
export class PlanningPage implements OnInit {
  public form_planning: FormGroup;
  public placeData: Array<any> = null;
  public categoryData: Array<any> = null;
  public no: Array<any> = [];
  public noSort: Array<any> = [];
  public distance: Array<any> = [];
  public point_start: Array<any> = [];
  public placeToGo: Array<any> = [];
  list = [];
  constructor(private http: HttpService, private formBuilder: FormBuilder) {}

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
            if (item == this.form_planning.controls["placeNo"].value) {
              check = 1;
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
  async addItem() {
    if (this.noSort != []) {
      this.http.addNewList(this.noSort);
    }
  }
  async getPlace() {
    let httpRespon: any = await this.http.post("getPlace");
    console.log(httpRespon);
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
    console.log(this.form_planning.controls["categoryNo"].value);
    let httpRespon: any = await this.http.post("getPlaceCategory", formData);
    console.log(httpRespon);
    if (httpRespon.response.success) {
      this.placeData = await httpRespon.response.data;
    } else {
      this.placeData = null;
    }
  }
  async getCategory() {
    let httpRespon: any = await this.http.post("getCategory");
    console.log(httpRespon);
    if (httpRespon.response.success) {
      this.categoryData = await httpRespon.response.data;
    } else {
      this.categoryData = null;
    }
  }

  async testSort() {
    this.point_start = this.form_planning.controls["point_start"].value.placeNo;
    this.noSort.push(this.form_planning.controls["point_start"].value);
    for (let i = 0; i < this.no.length; i++) {
      await this.loopPlace(this.point_start);
      console.log(this.noSort);
    }
    this.http.navRouter("/home/planning/resulte");
    this.addItem();
    this.clearData();
  }

  async loopPlace(start: any) {
    await this.calculateDistance(start);
    for (let i = 0; i < this.distance.length; i++) {
      for (let j = 0; j < this.placeToGo.length; j++) {
        if (
          this.distance[i].endPath == this.placeToGo[j].placeNo &&
          this.distance[i].distance != "0"
        ) {
          this.noSort.push(this.placeToGo[j]);
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
    formData.append("firstPath", firstPath);
    //formData.append("endPath", endPath);
    let httpRespon: any = await this.http.post("getPathSelectOne", formData);
    console.log(httpRespon);
    if (httpRespon.response.success) {
      this.distance = httpRespon.response.data;
    } else {
      this.distance = null;
    }

    this.distance.sort((a: any, b: any) =>
      parseFloat(a.distance) < parseFloat(b.distance) ? -1 : 0
    );
    console.log(this.distance);
  }
  clearData() {
    this.no = [];
    this.noSort = [];
    this.distance = [];
    this.point_start = [];
    this.placeToGo = [];
  }
}
