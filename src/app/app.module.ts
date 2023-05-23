import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardModule} from "./dashboard/dashboard.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import {MockService} from "./core/services/mock.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
