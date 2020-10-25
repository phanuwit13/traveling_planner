import { Component, OnInit, HostListener } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { LoadingController, ModalController } from "@ionic/angular";
import { DetailPage } from "../../../modals/detail/detail.page";
@Component({
  selector: "app-resulte",
  templateUrl: "./resulte.page.html",
  styleUrls: ["./resulte.page.scss"],
})
export class ResultePage implements OnInit {
  list = [];
  place: any = [];
  cost: any;
  distance: any;
  loading: any;
  placeDistance = [];
  constructor(
    private http: HttpService,
    public loadingCtrl: LoadingController,
    private modalController: ModalController
  ) {}
  @HostListener("document:ionBackButton", ["$event"])
  private async overrideHardwareBackAction($event: any) {
    await this.modalController.dismiss();
    this.list.forEach((item, index) => {
      this.http.removeList(this.list[index]);
    });
  }
  async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: "Please wait...",
    });
    await this.loading.present();
    this.http.list$.subscribe((list) => {
      this.list = list;
    });
    this.place = this.list[0];
    this.cost = this.list[1];
    this.distance = this.list[2];
    this.placeDistance = this.list[3];
    this.loading.dismiss().then((result) => {
      this.closePlan();
    });
    console.log("ใหม่");
    console.log(this.placeDistance);
    
  }

  closePlan() {
    this.list.forEach((item) => {
      this.http.removeList(item);
    });
  }

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
    console.log(this.place);
  }

  async addItem(item) {
    this.http.addNewList(item);
  }
  addItemLast() {
    this.http.addNewList(this.place);
  }
}
