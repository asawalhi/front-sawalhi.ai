import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../_services/weather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherForecastData: any;
  errorMessage: any



  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {
    this._weatherService.getWeatherForecast()
    .subscribe(data => { 
      this.weatherForecastData = data
      console.log("this.weatherForecastData = "+this.weatherForecastData)
    }, error => 
    this.errorMessage = <any>error 
    );
  }

}
