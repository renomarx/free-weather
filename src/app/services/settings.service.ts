import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  weatherAPIKey: string;
  weatherAPI: string;

  constructor(private storage: Storage) {
    this.weatherAPI = "http://api.openweathermap.org/data/2.5/weather"
    this.weatherAPIKey = ""
    this.Load()
  }

  public async Load() :Promise<number> {
    const val = await this.storage.get('weather_api_key');
    console.log('Weather map api key: ', val);
    if (val) {
      this.weatherAPIKey = val;
    }
    return Promise.resolve(val);
  }

  public GetWeatherCurrentURL(id: number): string {
    return this.weatherAPI + "?id=" + id + "&APPID=" + this.weatherAPIKey
  }

  public Save() {
    this.storage.set("weather_api_key", this.weatherAPIKey)
  }
}
