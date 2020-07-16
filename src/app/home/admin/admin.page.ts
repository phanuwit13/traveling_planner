import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/http.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"],
})
export class AdminPage implements OnInit {
  public form_user: FormGroup;

  constructor(private http: HttpService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form_user = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  async onLogin() {
    let formData = new FormData();

    Object.keys(this.form_user.value).forEach((key) => {
      formData.append(key, this.form_user.controls[key].value);
    });

    let httpRespone: any = await this.http.post("login", formData);
    console.log(httpRespone);
    if (httpRespone.response.success) {
      await Swal.fire("สำเร็จ", httpRespone.response.message + " !", "success");
      this.http.navRouter("/home/admin/homeadmin");
    } else {
      Swal.fire("ผิดพลาด", httpRespone.response.message + " !", "error");
    }
  }
}
