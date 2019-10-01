import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { TimeFrame } from "../models/TimeFrame";
import { Serie } from "../models/Serie";

const httpOptions = {
  headers: new HttpHeaders({
    token: "QyfeZcLGnUnNGgudJStCWksRIlQiYAPu"
  })
};

@Injectable({
  providedIn: "root"
})
export class ClimateService {
  url: string =
    "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=PRECIP_15&stationid=COOP:010008&units=metric&startdate=2010-05-01&enddate=2010-05-31";

  series: Serie[] = [
    new Serie("London", [
      3.9,
      4.2,
      5.7,
      8.5,
      11.9,
      15.2,
      17.0,
      16.6,
      14.2,
      10.3,
      6.6,
      4.8
    ]),
    new Serie("japan", [
      5.9,
      4.2,
      2.7,
      4.5,
      1.9,
      15.2,
      17.0,
      20.6,
      14.2,
      4.3,
      6.6,
      4.8
    ])
  ];

  constructor(private http: HttpClient) {}

  getTemperatures(): Observable<any> {
    return this.http.get(this.url, httpOptions);
  }

  getTemperaturesSeries() {
    return this.series;
  }
}
