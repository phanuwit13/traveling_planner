import { HttpService } from "./../../services/http.service";
import { Component, OnInit, HostListener } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DetailPage } from "../../modals/detail/detail.page";
import { ModalController, Platform, LoadingController } from "@ionic/angular";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"],
})
export class SearchPage implements OnInit {
  public place: Array<any> = null;
  public key = new FormControl();
  list = [];
  loading: any;

  constructor(
    private http: HttpService,
    private modalController: ModalController,
    public loadingCtrl: LoadingController
  ) {}

  @HostListener("document:ionBackButton", ["$event"])
  private async overrideHardwareBackAction($event: any) {
    await this.modalController.dismiss();
    this.list.forEach((item) => {
      this.http.removeList(item);
    });
  }

  async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: "Please wait...",
    });
    await this.loading.present();
    this.getPlace();
    this.loading.dismiss();
    this.http.list$.subscribe((list) => (this.list = list));
  }

  async getPlace() {
    let httpRespon: any = await this.http.post("getPlace");

    if (httpRespon.response.success) {
      this.place = httpRespon.response.data;
    } else {
      this.place = httpRespon.response.message;
    }
  }

  async getPlaceSearch() {
    let formData = new FormData();

    formData.append("key", this.key.value);
    let httpRespon: any = await this.http.post("getPlaceSearch", formData);

    if (httpRespon.response.success) {
      this.place = await httpRespon.response.data;
    } else {
      this.place = null;
    }
  }
  //รีเฟช
  doRefresh(event) {
    setTimeout(() => {
      this.getPlace();
      event.target.complete();
    }, 1000);
    this.place = null;
    this.key.setValue("");
  }
  //เปิดโมเดล
  async openModal() {
    const modal = await this.modalController.create({
      component: DetailPage,
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data.dismissed) {
      this.list.forEach((item) => {
        this.http.removeList(item);
      });
    }
  }

  async addItem(item) {
    this.http.addNewList(item);
  }
}
