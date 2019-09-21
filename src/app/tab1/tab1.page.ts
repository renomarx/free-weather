import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../services/weather.service';
import { LocationService } from '../services/location.service';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(
    public locationService: LocationService,
    public settings: SettingsService,
    public weatherService: WeatherService
  ) {
    this.weatherService.GetCurrentWeather()
  }

}
