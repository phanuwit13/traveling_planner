import Swal from "sweetalert2";
import { HttpService } from "./../../../../services/http.service";
import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-addcategory",
  templateUrl: "./addcategory.page.html",
  styleUrls: ["./addcategory.page.scss"],
})
export class AddcategoryPage implements OnInit {
  public categoryData: Array<any> = null;
  public form_category: FormGroup;
  constructor(
    private http: HttpService,
    public alertController: AlertController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form_category = this.formBuilder.group({
      categoryTH: ["", Validators.required],
      categoryEN: ["", Validators.required],
    });
    this.getCategory();
  }

  async getCategory() {
    let httpResponse: any = await this.http.post("getCategory");
    if (httpResponse.response.success) {
      this.categoryData = await httpResponse.response.data;
      this.categoryData = this.categoryData.filter((item) => {
        return item.categoryNo != "008";
      });
    } else {
      this.categoryData = null;
    }
  }
  async AlertEdit(TH, EN, NO) {
    const alertEdit = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "แก้ไขประเภท!",
      inputs: [
        {
          name: "categoryTH",
          type: "text",
          value: TH,
          placeholder: "",
        },
        {
          name: "categoryEN",
          type: "text",
          value: EN,
          placeholder: "",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            this.editCategory(data.categoryTH, data.categoryEN, NO);
          },
        },
      ],
    });

    await alertEdit.present();
  }
  async AlertAdd() {
    const alertEdit = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "เพิ่มสถานที่!",
      inputs: [
        {
          name: "categoryTH",
          type: "text",
          value: "",
          placeholder: "ชื่อประเภทภาษาไทย",
        },
        {
          name: "categoryEN",
          type: "text",
          value: "",
          placeholder: "ชื่อประเภทภาษาอังกฤษ",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            this.addCategory(data.categoryTH, data.categoryEN);
          },
        },
      ],
    });

    await alertEdit.present();
  }

  async editCategory(categoryTH, categoryEN, categoryNo) {
    let formData = new FormData();
    formData.append("categoryTH", categoryTH);
    formData.append("categoryEN", categoryEN);
    formData.append("categoryNo", categoryNo);
    let httpRespon: any = await this.http.post("editCategory", formData);
    console.log(httpRespon);
    if (httpRespon.response.success) {
      console.log(httpRespon.response.message);
      this.getCategory();
    } else {
      console.log(httpRespon.response.message);
    }
  }
  async addCategory(categoryTH, categoryEN) {
    let formData = new FormData();
    formData.append("categoryTH", categoryTH);
    formData.append("categoryEN", categoryEN);
    let httpRespon: any = await this.http.post("addCategory", formData);
    console.log(httpRespon);
    if (httpRespon.response.success) {
      console.log(httpRespon.response.message);
      this.getCategory();
    } else {
      console.log(httpRespon.response.message);
    }
  }
  async delCategory(categoryNo) {
    Swal.fire({
      title: "คุณแน่ใจว่าต้องการลบประเภท?",
      text: "สถานที่ทั้งหมดที่อยู่ในประเภทนี้จะถูกลบ!",
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
        formData.append("categoryNo", categoryNo);
        let httpRespon: any = await this.http.post("delCategory", formData);
        console.log(httpRespon);
        if (httpRespon.response.success) {
          await Swal.fire(
            "สำเร็จ",
            httpRespon.response.message + " !",
            "success"
          ).then(() => {
            this.getCategory();
          });
        } else {
          Swal.fire("ผิดพลาด", httpRespon.response.message + " !", "error");
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }
}
