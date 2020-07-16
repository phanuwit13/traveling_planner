import { Component, OnInit, HostListener } from "@angular/core";
import { HttpService } from "../../../services/http.service";
@Component({
  selector: "app-resulte",
  templateUrl: "./resulte.page.html",
  styleUrls: ["./resulte.page.scss"],
})
export class ResultePage implements OnInit {
  asd = [1, 2, 3];
  list = [];
  constructor(private http: HttpService) {}
  @HostListener("document:ionBackButton", ["$event"])
  private async overrideHardwareBackAction($event: any) {
    this.http.removeList(this.list[0]);
  }
  async ngOnInit() {
    await this.http.list$.subscribe((list) => (this.list = list));
    console.log(this.list[0]);
  }

  closePlan() {
    this.http.removeList(this.list[0]);
  }
}
