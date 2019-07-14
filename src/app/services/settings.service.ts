import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  weatherAPIKey: string;
  weatherAPI: string;

  constructor() {
    this.weatherAPI = "http://api.openweathermap.org/data/2.5/weather"
    this.weatherAPIKey = ""
  }

  public GetWeatherCurrentURL(id: number): string {
    return this.weatherAPI + "?id=" + id + "&APPID=" + this.weatherAPIKey
  }
}
