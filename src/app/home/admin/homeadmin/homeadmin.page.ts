import { HttpService } from "../../../services/http.service";
import { Component, OnInit, HostListener } from "@angular/core";
import { EditPlacePage } from "../../../modals/edit-place/edit-place.page";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ModalController, LoadingController } from "@ionic/angular";
import Swal from "sweetalert2";

@Component({
  selector: "app-homeadmin",
  templateUrl: "./homeadmin.page.html",
  styleUrls: ["./homeadmin.page.scss"],
})
export class HomeadminPage implements OnInit {
  public form_planning: FormGroup;
  public place: Array<any> = null;
  public key = new FormControl();
  public categoryData: Array<any> = null;
  public other = { categoryNo: 8, categoryTH: "อื่นๆ" };
  list = [];
  constructor(
    private http: HttpService,
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {}

  @HostListener("document:ionBackButton", ["$event"])
  private async overrideHardwareBackAction($event: any) {
    await this.modalController.dismiss();
    this.http.removeList(this.list[0]);
  }

  async ngOnInit() {
    this.form_planning = this.formBuilder.group({
      placeNo: "",
      categoryNo: "",
      point_start: "",
    });
    this.http.list$.subscribe((list) => (this.list = list));

    this.getPlace();
    this.getCategory();
  }
  onload() {}
  async getPlace() {
    let httpRespon: any = await this.http.post("getPlace");
    //console.log(httpRespon);
    if (httpRespon.response.success) {
      this.place = httpRespon.response.data;
    } else {
      this.place = httpRespon.response.message;
    }
  }

  async getPlaceSearch() {
    let formData = new FormData();
    //console.log(this.key.value);
    formData.append("key", this.key.value);
    let httpRespon: any = await this.http.post("getPlaceSearch", formData);
    //console.log(httpRespon);
    if (httpRespon.response.success) {
      this.place = await httpRespon.response.data;
    } else {
      this.place = null;
    }
  }
  //รีเฟช
  doRefresh(event) {
    //console.log("Begin async operation");
    setTimeout(() => {
      //console.log("Async operation has ended");
      this.getPlace();
      this.getCategory();
      event.target.complete();
    }, 1000);
    this.place = null;
    this.key.setValue("");
  }
  //เปิดโมเดล
  async openModal() {
    const modal = await this.modalController.create({
      component: EditPlacePage,
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data.dismissed) {
      this.getPlace();
      this.http.removeList(this.list[0]);
    }
  }

  async addItem(item) {
    this.http.addNewList(item);
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
      this.place = await httpRespon.response.data;
    } else {
      this.place = null;
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
  }
  async delPlace(placeNo) {
    Swal.fire({
      title: "คุณแน่ใจว่าต้องการลบสถานที่?",
      text: "คุณจะไม่สามารถยกเลิกสิ่งนี้ได้!",
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
        formData.append("placeNo", placeNo);
        let httpRespon: any = await this.http.post("delPlace", formData);
        //console.log(httpRespon);
        if (httpRespon.response.success) {
          await Swal.fire(
            "สำเร็จ",
            httpRespon.response.message + " !",
            "success"
          ).then(() => {
            this.getPlace();
          });
        } else {
          Swal.fire("ผิดพลาด", httpRespon.response.message + " !", "error");
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }
}
