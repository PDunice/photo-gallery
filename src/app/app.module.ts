import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceMotion } from '@ionic-native/device-motion/ngx';
import {ScreenOrientation} from "@ionic-native/screen-orientation/ngx";
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DeviceMotion, ScreenOrientation],
  bootstrap: [AppComponent],
})
export class AppModule { }
