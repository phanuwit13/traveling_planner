import { HttpService } from "src/app/services/http.service";
import { Component, OnInit, NgZone, HostListener } from "@angular/core";
import { Platform, LoadingController } from "@ionic/angular";
import { Geolocation } from "@ionic-native/geolocation/ngx";

declare var google;
@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"],
})
export class MapPage implements OnInit {
  public map: any;
  loading: any;
  marker: any;
  distance: string;
  list = [];
  public directionsService = new google.maps.DirectionsService();
  public directionsRenderer = new google.maps.DirectionsRenderer();
  currentLocation = {
    lat: null,
    lng: null,
  };

  GOOGLE = { lat: 37.422476, lng: -122.08425 };
  constructor(
    public platform: Platform,
    private http: HttpService,
    public loadingCtrl: LoadingController,
    private geolocation: Geolocation
  ) {}

  @HostListener("document:ionBackButton", ["$event"])
  private async overrideHardwareBackAction($event: any) {
    this.list.forEach((item) => {
      this.http.removeList(item);
    });
  }

  async ngOnInit() {
    await this.http.list$.subscribe((list) => (this.list = list));
    this.loadmap();
    //console.log(this.list);
  }

  async loadmap() {
    this.loading = await this.loadingCtrl.create({
      message: "Please wait...",
    });
    await this.loading.present();

    this.map = new google.maps.Map(document.getElementById("map_canvas2"), {
      zoom: 16,
      center: { lat: 14.9736915, lng: 102.0827157 },
    });
    this.marker = await new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: { lat: 14.9736915, lng: 102.0827157 },
    });
    this.myLocation();
    this.loading.dismiss();
  }
  async myLocation() {
    this.loading = await this.loadingCtrl.create({
      message: "Please wait...",
    });
    await this.loading.present();
    this.geolocation.getCurrentPosition().then(async (resp) => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
      //console.log(this.currentLocation);
      this.marker.setPosition(this.currentLocation);
      if (this.list.length != 0) {
        this.marker.setMap(null);
        this.routPath(this.currentLocation);
      }
      console.log(this.list);
      
      this.map.setCenter(this.currentLocation);
      this.loading.dismiss();
    });
  }

  routPath(currentLocation: any) {
    let n = this.list[0].length;
    if (this.directionsRenderer != null) {
      this.directionsRenderer.setMap(null);
      this.directionsRenderer = null;
    }
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(this.map);
    let waypts = [];
    for (let i = 0; i < n; i++) {
      if (i == n - 1) {
      } else {
        waypts.push({
          location: {
            lat: parseFloat(this.list[0][i].latitude),
            lng: parseFloat(this.list[0][i].longitude),
          },
          stopover: true,
        });
      }
    }
    //console.log(waypts);

    this.directionsService.route(
      {
        origin: currentLocation,
        destination: {
          lat: parseFloat(this.list[0][n - 1].latitude),
          lng: parseFloat(this.list[0][n - 1].longitude),
        },
        waypoints: waypts,
        optimizeWaypoints: false,
        travelMode: "DRIVING",
      },
      async (response, status) => {
        if (status === "OK") {
          this.directionsRenderer.setDirections(response);
          //console.log(response);
          this.list.forEach((item) => {
            this.http.removeList(item);
          });
        } else {
          //console.log(status);
        }
      }
    );
  }
}
