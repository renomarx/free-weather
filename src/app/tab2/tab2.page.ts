import { Component } from '@angular/core';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public locationService: LocationService, public weatherService: WeatherService) {}

  public SelectCity(idx: number) {
    console.log("Selected city #" + idx)
    this.locationService.SelectCity(idx)
    this.weatherService.GetCurrentWeather()
  }

}
