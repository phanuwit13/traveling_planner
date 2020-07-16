import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Subject, BehaviorSubject, Observable } from "rxjs";

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  Environment,
  GoogleMapsMapTypeId,
} from "@ionic-native/google-maps";
import { Platform } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  public rootPath: string =
    "http://cpe.rmuti.ac.th/project/traveling_planner/api/index.php/";
  private userLogin: any = null;
  rawData = [];
  private list = new BehaviorSubject<string[]>([]);
  readonly list$ = this.list.asObservable();

  map: GoogleMap;
  public headers = new Headers();

  constructor(
    private http: HttpClient,
    private router: Router,
    private platform: Platform
  ) {}

  public post = (path: string, formdata: any = null) => {
    return new Promise((resolve) => {
      this.http
        .post(this.rootPath + path, formdata)
        .toPromise()
        .then((value) => {
          resolve({ connect: true, response: value });
        })
        .catch((reason) => {
          resolve({ connect: false, response: reason });
        });
    });
  };

  public get = (path: string) => {
    return new Promise((resolve) => {
      this.http
        .get(this.rootPath + path)
        .toPromise()
        .then((value) => {
          resolve({ connect: true, response: value });
        })
        .catch((reason) => {
          resolve({ connect: false, response: reason });
        });
    });
  };
  public localStorage = {
    get: (key: string) => {
      return JSON.parse(window.localStorage.getItem(key));
    },
    set: (key: string, value: any) => {
      value = JSON.stringify(value);
      window.localStorage.setItem(key, value);
    },
    clear: () => {
      window.localStorage.clear();
    },
  };

  public setUserLogin = (data: any) => {
    this.userLogin = data;
    this.localStorage.set("userLogin", data);
  };

  public navRouter = (path: string, params: any = {}) => {
    this.router.navigate([`${path}`], { queryParams: params });
  };

  addNewList(list) {
    console.log(list);
    this.rawData.push(list);
    this.list.next(this.rawData);
  }

  removeList(list) {
    this.rawData = this.rawData.filter((v) => v !== list);
    this.list.next(this.rawData);
  }

  async attachMap(
    divId: string,
    options?: GoogleMapOptions
  ): Promise<GoogleMap> {
    options = options || {};

    if (this.map) {
      await new Promise((resolve) => {
        const instance: any = setInterval(() => {
          if (document.querySelectorAll("#" + divId).length > 0) {
            clearInterval(instance);
            resolve();
          }
        }, 100);
      });
      await this.map.setDiv(divId);
      await new Promise((resolve) => {
        setTimeout(resolve, 100);
      });
      if (options) {
        options.mapType = options.mapType || GoogleMapsMapTypeId.NORMAL;
        await this.map.setOptions(options);
      }
    } else {
      await this.platform.ready();
      await this._loadMap(divId, options);
    }
    return Promise.resolve(this.map);
  }

  _loadMap(divId: string, options?: GoogleMapOptions) {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: "AIzaSyCNIzQ5m0sNY6MichBonktQITHgjXK9UAU",
      API_KEY_FOR_BROWSER_DEBUG: "AIzaSyCNIzQ5m0sNY6MichBonktQITHgjXK9UAU", // optional
    });

    let mapOptions: GoogleMapOptions = options || {};
    this.map = GoogleMaps.create(divId, options);
    return new Promise((resolve) => {
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        resolve();
      });
    });
  }

  detachMap() {
    if (!this.map) return;
    this.map.setDiv();
    this.map.off();
    this.map.setOptions({
      mapType: GoogleMapsMapTypeId.NONE,
      camera: {
        target: {
          lat: 0,
          lng: 0,
        },
        zoom: 1,
        bearing: 0,
        tilt: 0,
        padding: 0,
      },
      gestures: {
        scroll: true,
        tilt: true,
        rotate: true,
        zoom: true,
      },
      controls: {
        compass: true,
        indoorPicker: true,
        myLocationButton: true,
        myLocation: true, // (blue dot)
        zoom: true, // android only
        mapToolbar: true,
      },
      preferences: {
        zoom: null, // reset min,max zoom
        building: true,
        clickableIcons: false, // POI icons clickable = false
        restriction: null, // reset restriction
      },
    });
    this.map.clear();
  }
}
