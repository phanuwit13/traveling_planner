import Swal from "sweetalert2";
import { HttpService } from "./../../../../services/http.service";
import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-updatefare",
  templateUrl: "./updatefare.page.html",
  styleUrls: ["./updatefare.page.scss"],
})
export class UpdatefarePage implements OnInit {
  public formInput: FormGroup;
  public disableBtn = { start: false, end: false };
  public disableTime = { start: true, end: true };
  public baseFare = 0;
  public nextFare = 0;
  constructor(private http: HttpService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getFare();
    this.formInput = this.formBuilder.group({
      baseFare: ["", Validators.required],
      nextFare: ["", Validators.required],
    });
  }

  async getFare() {
    let httpRespon: any = await this.http.post("getFare");
    console.log(httpRespon.response.data);
    if (httpRespon.response.success) {
      this.baseFare = parseFloat(httpRespon.response.data[0].baseFare);
      this.nextFare = parseFloat(httpRespon.response.data[0].nextFare);
      this.formInput.controls['baseFare'].setValue(this.baseFare)
      this.formInput.controls['nextFare'].setValue(this.nextFare)
    } else {
      this.baseFare = 0;
      this.nextFare = 0;
    }
    console.log(this.baseFare + " : " + this.nextFare);
  }

  async updateFare() {
    let httpRespon: any = await this.http.post("updateFare");
    console.log(httpRespon.response.data);
    if (httpRespon.response.success) {
      this.baseFare = parseFloat(httpRespon.response.data[0].baseFare);
      this.nextFare = parseFloat(httpRespon.response.data[0].nextFare);
    } else {
      this.baseFare = 0;
      this.nextFare = 0;
    }
    console.log(this.baseFare + " : " + this.nextFare);
  }

  editTime = async (value) => {
    this.disableTime[value] = !this.disableTime[value];
    this.changeDisable(value);
  };
  canseltimeSet(value) {
    this.disableTime[value] = !this.disableTime[value];
    this.changeDisable(value);
  }
  changeDisable(value) {
    this.disableBtn[value] = !this.disableBtn[value];
  }
  setBaseFare = async () => {
    console.log(this.formInput.value['baseFare'] +" : "+this.formInput.value['nextFare'])
    let formData = new FormData();
    formData.append("baseFare", this.formInput.value['baseFare'] );
    formData.append("nextFare", this.formInput.value['nextFare'] );
    console.log(this.formInput.value['baseFare'] +" : "+this.formInput.value['nextFare'])
    let httpRespone = await this.http.post("/updateFare", formData);
    console.log(httpRespone);
    await this.getFare();
    this.canseltimeSet("start");
  };

  setNextFare = async () => {
    let formData = new FormData();
    formData.append("baseFare", this.formInput.value['baseFare'] );
    formData.append("nextFare", this.formInput.value['nextFare'] );
    let httpRespone = await this.http.post("/updateFare", formData);
    console.log(httpRespone);
    await this.getFare();
    this.canseltimeSet("end");
  };
}
