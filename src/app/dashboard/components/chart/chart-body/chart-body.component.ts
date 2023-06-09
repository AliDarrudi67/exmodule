import {Component} from '@angular/core';

@Component({
  selector: 'app-chart-body',
  templateUrl: './chart-body.component.html',
  styleUrls: ['./chart-body.component.scss']
})
export class ChartBodyComponent {
  chartOptions = {
    backgroundColor: "transparent",
    legend: {
      horizontalAlign: "right",
      verticalAlign: "top"
    },
    axisX: {
      valueFormatString: "YYYY/MM/DD HH:MM:SS",
      labelWrap: true,
      labelMaxWidth:60,
      labelTextAlign:"center",
      labelFontColor: "#fff",
      crosshair: {
        enabled: true,
        valueFormatString: "MMM YYYY",
        snapToDataPoint: true
      }
    },
    axisY: {
      labelFontColor: "#fff",
      crosshair: {
        enabled: true
      }
    },
    data:[{
      type: "candlestick",
      risingColor: "#F6B0D0",
      fallingColor:"#62DCC0",
      yValueFormatString: "$##.##",
      xValueFormatString: "MMM YYYY",
      dataPoints: [
        { x: new Date(2006, 0, 1), y: [737.708374, 1467.784912, 718.109497, 1314.986206] },
        { x: new Date(2005, 1, 2), y: [1314.855225, 2036.286499, 1274.357788, 1416.04895] },
        { x: new Date(2004, 2, 3), y: [1417.151123, 1947.837769, 1416.416138, 1918.362061] },
        { x: new Date(2003, 3, 4), y: [1919.157227, 2797.972412, 1912.178467, 2773.207031] },
        { x: new Date(2002, 4, 5), y: [2772.838379, 4362.350586, 1737.46875, 2714.945313] },
        { x: new Date(2001, 5, 6), y: [2707.560547, 2891.254883, 1707.600586, 2274.547607] },
        { x: new Date(2000, 6, 7), y: [2274.397461, 2551.161133, 1722.050781, 2536.209961] },
        { x: new Date(1999, 7, 8), y: [2530.462891, 3466.992188, 2449.353516, 3433.732666] },
        { x: new Date(1998, 8, 9), y: [3430.762451, 4022.469238, 2676.407471, 3001.678955] },
        { x: new Date(1997, 9, 10), y: [3001.129395, 4455.735352, 2978.654297, 4288.074219] },
        { x: new Date(1996, 10, 11), y: [4288.217285, 4891.70459, 3933.506592, 4631.479004] },
        { x: new Date(1995, 11, 12), y: [4623.679688, 4780.732422, 3525.494141, 3682.632813] },
        { x: new Date(1994, 0, 13), y: [1623.679688, 1780.732422, 1525.494141, 1682.632813] },
        { x: new Date(1993, 1, 14), y: [1314.855225, 2036.286499, 1274.357788, 1416.04895] },
        { x: new Date(1992, 2, 15), y: [3417.151123, 4947.837769, 3416.416138, 4918.362061] },
        { x: new Date(1991, 3, 16), y: [1919.157227, 2797.972412, 1912.178467, 2773.207031] },
        { x: new Date(1990, 4, 17), y: [2772.838379, 4362.350586, 1737.46875, 2714.945313] },

        { x: new Date(2007, 5, 18), y: [2772.838379, 4362.350586, 1737.46875, 2714.945313] },
        { x: new Date(2008, 6, 19), y: [2707.560547, 2891.254883, 1707.600586, 2274.547607] },
        { x: new Date(2009, 7, 20), y: [2274.397461, 2551.161133, 1722.050781, 2536.209961] },
        { x: new Date(2010, 8, 21), y: [2530.462891, 3466.992188, 2449.353516, 3433.732666] },
        { x: new Date(2011, 9, 22), y: [3430.762451, 4022.469238, 2676.407471, 3001.678955] },

        { x: new Date(2012, 10, 1), y: [2772.838379, 4362.350586, 1737.46875, 2714.945313] },
        { x: new Date(2013, 11, 1), y: [2707.560547, 2891.254883, 1707.600586, 2274.547607] },
        { x: new Date(2014, 0, 1), y: [2274.397461, 2551.161133, 1722.050781, 2536.209961] },
        { x: new Date(2015, 1, 1), y: [2530.462891, 3466.992188, 2449.353516, 3433.732666] },
        { x: new Date(2016, 2, 1), y: [3430.762451, 4022.469238, 2676.407471, 3001.678955] },
      ]
    }]
  }
}
