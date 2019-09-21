import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationService } from '../services/location.service';
import { SettingsService } from '../services/settings.service';

interface Weather {
  City: string
  Main: string
  Description: string
  Icon: string
  Temperature: number
  Pressure: number
  Humidity: number
  TempMin: number
  TempMax: number
}

interface WeatherAPIResult {
  id: number
  name: string
  coord: {
    lon: number
    lat: number
  }
  main: {
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  weather: {
    description: string
    icon: string
    main: string
  }[]
  clouds: {
    all: number
  }
  wind: {
    speed: number
    deg: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather: Weather;

  constructor(public locationService: LocationService, private http: HttpClient, public settings: SettingsService) {
  }

  public GetCurrentWeather() {
    let city = this.locationService.SelectedCity
    if (this.settings.weatherAPIKey != "") {
      this.settings.Load().then((val) => {
        console.log("settings loaded : ", val)
        let apiUrl = this.settings.GetWeatherCurrentURL(city.id)
        this.http.get(apiUrl).subscribe((response: WeatherAPIResult) => {
          console.log(response);
          this.weather = {
            City: city.name,
            Main: response.weather[0].main,
            Description: response.weather[0].description,
            Icon: response.weather[0].icon,
            Temperature: this.kelvinToCelsius(response.main.temp),
            Pressure: response.main.pressure,
            Humidity: response.main.humidity,
            TempMin: this.kelvinToCelsius(response.main.temp_min),
            TempMax: this.kelvinToCelsius(response.main.temp_max)
          }
        })
      }).catch((err) => { console.log(err)})
    }
  }

  private farenheitToCelsius(temp: number): number {
    return (temp - 32) * 5 / 9
  }

  private kelvinToCelsius(temp: number): number {
    return temp - 273.15
  }
}
