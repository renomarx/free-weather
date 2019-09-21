import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public settings: SettingsService, public weatherService: WeatherService) {}

  public Save() {
    this.settings.Save()
    this.weatherService.GetCurrentWeather()
  }

}
