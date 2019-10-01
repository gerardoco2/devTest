import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { ClimateService } from "./../services/climate.service";
import { TimeFrame } from "./../models/TimeFrame";
import { Serie } from "./../models/serie";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.css"]
})
export class ChartsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions = {
    chart: {
      type: "spline"
    },
    title: {
      text: "Monthly Average Temperature"
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    },
    yAxis: {
      title: {
        text: "Temperature °C"
      }
    },
    tooltip: {
      valueSuffix: " °C"
    },
    series: []
  };

  timeFrames: TimeFrame[] = [];
  series: any[] = [];

  constructor(private climateService: ClimateService) {}

  ngOnInit() {
    this.climateService.getTemperatures().subscribe(response => {
      const data = response.results;
      for (let d of data) {
        this.series.push(d.value);
      }
    });
    this.chartOptions.series.push(
      { name: "ger", data: this.series },
      { name: "ger", data: this.series }
    );
    console.log(this.chartOptions.series);
  }

  setTemperatures() {}
}
