import { HttpService } from "./../../services/http.service";
import { Component, OnInit } from "@angular/core";
import { ModalController, Platform } from "@ionic/angular";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  list = [];
  constructor(
    private modalController: ModalController,
    private http: HttpService
  ) {}

  ngOnInit() {
    this.http.list$.subscribe((list) => (this.list = list));
  }

  async closeModal() {
    await this.modalController.dismiss({
      dismissed: true,
    });
    this.http.removeList(this.list[0]);
  }
}
