import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FacedetectComponent } from './facedetect/facedetect.component';
import { WebcamModule } from 'ngx-webcam'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacedetectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WebcamModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
