import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {HeaderComponent} from './components/header/header.component';
import {ConditionsComponent} from './components/conditions/conditions.component';
import {SettingComponent} from './components/setting/setting.component';
import {RsiComponent} from './components/setting/rsi/rsi.component';
import {PsarComponent} from './components/setting/psar/psar.component';
import {ChartComponent} from './components/chart/chart.component';
import {ChartHeaderComponent} from './components/chart/chart-header/chart-header.component';
import {ChartBodyComponent} from './components/chart/chart-body/chart-body.component';
import {ChartResultComponent} from './components/chart/chart-result/chart-result.component';
import {TradeListComponent} from './components/trade-list/trade-list.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {SharedModule} from "../shared/shared.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";

import * as CanvasJSAngularChart from '../../assets/canvasjs.angular.component';
import {NgApexchartsModule} from "ng-apexcharts";
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    ConditionsComponent,
    SettingComponent,
    RsiComponent,
    PsarComponent,
    ChartComponent,
    ChartHeaderComponent,
    ChartBodyComponent,
    ChartResultComponent,
    TradeListComponent,
    CanvasJSChart
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSlideToggleModule,
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    NgApexchartsModule
  ]
})
export class DashboardModule {
}
