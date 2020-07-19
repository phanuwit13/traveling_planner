import { Component, OnInit, HostListener } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { LoadingController } from "@ionic/angular";
@Component({
  selector: "app-resulte",
  templateUrl: "./resulte.page.html",
  styleUrls: ["./resulte.page.scss"],
})
export class ResultePage implements OnInit {
  list = [];
  loading: any;
  constructor(
    private http: HttpService,
    public loadingCtrl: LoadingController
  ) {}
  @HostListener("document:ionBackButton", ["$event"])
  private async overrideHardwareBackAction($event: any) {
    this.list.forEach((item, index) => {
      this.http.removeList(this.list[index]);
    });
  }
  async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: "Please wait...",
    });
    await this.loading.present();
    this.http.list$.subscribe((list) => (this.list = list));

    this.loading.dismiss();
  }

  closePlan() {
    this.list.forEach((item) => {
      this.http.removeList(item);
    });
  }
}
