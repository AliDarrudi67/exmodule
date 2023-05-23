import {Component, ViewChild} from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  colors: string[];
  labels: string[] | number[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

declare global {
  interface Window {
    Apex: any;
  }
}

const sparkLineData = [
  47,
  45,
  54,
  38,
  56,
  24,
  65,
  31,
  37,
  39,
  62,
  51,
  35,
  41,
  35,
  27,
  93,
  53,
  61,
  27,
  54,
  43,
  19,
  46
];

@Component({
  selector: 'app-chart-header',
  templateUrl: './chart-header.component.html',
  styleUrls: ['./chart-header.component.scss']
})
export class ChartHeaderComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartAreaSparkline1Options: Partial<ChartOptions> | any;
  public commonAreaSparlineOptions: Partial<ChartOptions> | any = {
    chart: {
      type: "area",
      height: 35,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: "straight"
    },
    fill: {
      opacity: 1,
      colors:['#2277F7'],
    },
    yaxis: {
      min: 0
    }
  };

  constructor() {
    // setting global apex options which are applied on all charts on the page
    window.Apex = {
      stroke: {
        width: 0
      },
      markers: {
        size: 0
      },
      tooltip: {
        fixed: {
          enabled: true
        }
      }
    };

    this.chartAreaSparkline1Options = {
      series: [
        {
          name: "chart-big-sparkline",
          data: this.randomizeArray(sparkLineData)
        }
      ],
      title: {
        text: "",
        offsetX: 0,
        style: {
          fontSize: "24px"
        }
      },
      subtitle: {
        text: "",
        offsetX: 0,
        style: {
          fontSize: "14px"
        }
      }
    };

  }

  public randomizeArray(arg:any): number[] {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
