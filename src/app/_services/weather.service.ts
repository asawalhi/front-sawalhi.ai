import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  baseUrl : string;
  appId: string;
  units: string;
  url! : string;
  forecast: any;
  ipv4:any
  backendUrl: any
  backendres : any
  userCity: any
  userCountry: any
  
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://api.openweathermap.org/data/2.5/';
    this.backendUrl = 'http://localhost:2900/'
    this.appId = 'b5ea0f92c5b8deb13ccec7d557ac6a4d';
    this.units = 'metric';
   }

   
   getLocation(){
    return this.http.get(this.backendUrl)
   }
   
   getWeatherForecast(cx:string): Observable<any> {
     
    this.url = this.baseUrl + 'forecast?q=' + cx + '&appid=' + this.appId + '&units=' + this.units  ;     
    return this.http.get(this.url)
   //return this.forecast;
     //.catch(this.handleError);
 }


}
