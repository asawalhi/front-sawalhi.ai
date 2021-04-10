import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../_services/weather.service';
import { SportsService } from '../_services/sports.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherForecastData: any;
  userLocation: any
  errorMessage: any
  sportsView = false
  firstSportsType: any
  secondSportsType: any
  thirdSportsType: any
  firstSportsTypeDtlsView = false
  secondSportsTypeDtlsView = false
  thirdSportsTypeDtlsView = false
  sportTypes: any
  aboutusView: any
  contactusView: any
  homeView= true





  constructor(private _weatherService: WeatherService, private _sportsService: SportsService) { }

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

  //View control
  openHomeView(){
    this.sportsView = false
    this.aboutusView = false
    this.contactusView = false
    this.homeView = true
  }

  openSportsView(){
    this.aboutusView = false
    this.contactusView = false
    this.homeView = true
    this.sportsView = true

    let randomIndex1 = Math.floor(Math.random() * 11);
    let randomIndex2 = Math.floor(Math.random() * 12);
    let randomIndex3 = Math.floor(Math.random() * 9);

    this._sportsService.getSportTypes().subscribe(data=>{
      this._sportsService.sportsCollection = JSON.stringify(data)
      this.sportTypes = data
      console.log("this.sportTypes = data" + data)
      this.firstSportsType = this.sportTypes.sports[randomIndex1]
      this.secondSportsType = this.sportTypes.sports[randomIndex2]
      this.thirdSportsType = this.sportTypes.sports[randomIndex3]
      
    })
  }

  openfirstSportsTypeDtls(){
    this.firstSportsTypeDtlsView = true
  }

  opensecondSportsTypeDtls(){
    this.secondSportsTypeDtlsView = true
  }

  openthirdSportsTypeDtls(){
    this.thirdSportsTypeDtlsView = true
  }

}
