import Swal from "sweetalert2";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpService } from "./../../services/http.service";
import { Component, OnInit } from "@angular/core";
import { ModalController, LoadingController } from "@ionic/angular";
import Compressor from "compressorjs";
@Component({
  selector: "app-edit-place",
  templateUrl: "./edit-place.page.html",
  styleUrls: ["./edit-place.page.scss"],
})
export class EditPlacePage implements OnInit {
  list = [];
  public form_place: FormGroup;
  public categoryData: Array<any> = null;
  loading: any;
  public fileName = null;
  public selectedFile: File = null;
  public lastNameFile: Array<any> = [];
  imagePath: any;
  imgURL: any;
  constructor(
    private modalController: ModalController,
    private http: HttpService,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    this.form_place = this.formBuilder.group({
      placeNo: ["", Validators.required],
      categoryNo: ["", Validators.required],
      placeTH: ["", Validators.required],
      placeEN: ["", Validators.required],
      detail: "",
      img: "",
    });
    this.loading = await this.loadingCtrl.create({
      message: "Please wait...",
    });
    await this.loading.present();
    this.http.list$.subscribe((list) => (this.list = list));
    this.getCategory();
    await this.setEdit();
    this.loading.dismiss();
  }
  async setEdit() {
    this.form_place.controls["placeNo"].setValue(this.list[0].placeNo);
    this.form_place.controls["categoryNo"].setValue(this.list[0].categoryNo);
    this.form_place.controls["placeTH"].setValue(this.list[0].placeTH);
    this.form_place.controls["placeEN"].setValue(this.list[0].placeEN);
    this.form_place.controls["detail"].setValue(this.list[0].detail);
    this.form_place.controls["img"].setValue(this.list[0].img);
    //console.log(this.form_place.controls["img"].value);
  }
  async closeModal() {
    await this.modalController.dismiss({
      dismissed: true,
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
        });
        if (this.fileName != null) {
          formData.append("image", this.selectedFile, this.fileName);
          formData.append("img", this.fileName);
        }
        //console.log(this.selectedFile);
        let httpRespon: any = await this.http.post("setPlaceEdit", formData);
        //console.log(httpRespon);
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
