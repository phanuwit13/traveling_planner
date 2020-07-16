import Swal from "sweetalert2";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpService } from "./../../services/http.service";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-edit-place",
  templateUrl: "./edit-place.page.html",
  styleUrls: ["./edit-place.page.scss"],
})
export class EditPlacePage implements OnInit {
  list = [];
  public form_place: FormGroup;
  public categoryData: Array<any> = null;

  constructor(
    private modalController: ModalController,
    private http: HttpService,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit() {
    this.form_place = this.formBuilder.group({
      placeNo: ["", Validators.required],
      categoryNo: ["", Validators.required],
      placeTH: ["", Validators.required],
      placeEN: ["", Validators.required],
      detail: "",
    });
    await this.http.list$.subscribe((list) => (this.list = list));
    await this.getCategory();
    this.setEdit();
  }
  async setEdit() {
    this.form_place.controls["placeNo"].setValue(this.list[0].placeNo);
    this.form_place.controls["categoryNo"].setValue(this.list[0].categoryNo);
    this.form_place.controls["placeTH"].setValue(this.list[0].placeTH);
    this.form_place.controls["placeEN"].setValue(this.list[0].placeEN);
    this.form_place.controls["detail"].setValue(this.list[0].detail);
  }
  async closeModal() {
    await this.modalController.dismiss({
      dismissed: true,
    });
    this.http.removeList(this.list[0]);
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
  async setPlaceEdit() {
    Swal.fire({
      title: "คุณแน่ใจว่าจะแก้ไขข้อมูล?",
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
          console.log(key + " : " + this.form_place.value[key]);
        });
        let httpRespon: any = await this.http.post("setPlaceEdit", formData);
        console.log(httpRespon);
        if (httpRespon.response.success) {
          await Swal.fire("สำเร็จ", httpRespon.response.message, "success");
          this.closeModal();
        } else {
          Swal.fire("ผิดพลาด", httpRespon.response.message, "error");
        }
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
      }
    });
  }
}
