import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../_services/weather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherForecastData: any;
  userLocation: any
  errorMessage: any





  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this._weatherService.getLocation()
    .subscribe(data => { 
      this.userLocation = data
      console.log(this.userLocation)
      
      this._weatherService.getWeatherForecast(this.userLocation.city)
      .subscribe(data => { 
      this.weatherForecastData = data
      console.log("this.weatherForecastData = "+this.weatherForecastData)
      }, error => 
      this.errorMessage = <any>error 
      );
    
    })


    
  }

}
