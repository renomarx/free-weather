import { Injectable } from '@angular/core';

interface City {
  id: number
  name: string
  country: string
  coord: {
    lon: number
    lat: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  SelectedCity: City;
  cities: City[];

  constructor() {
    this.cities = [
      {
        "id": 6456451,
        "name": "Le Havre",
        "country": "FR",
        "coord": {
          "lon": 0.13333,
          "lat": 49.5
        }
      },
      {
        "id": 519188,
        "name": "Novinki",
        "country": "RU",
        "coord": {
          "lon": 37.666668,
          "lat": 55.683334
        }
      },
      {
        "id": 1283378,
        "name": "Gorkhā",
        "country": "NP",
        "coord": {
          "lon": 84.633331,
          "lat": 28
        }
      }
    ]
    this.SelectedCity = this.cities[0]
  }

  public SelectCity(idx: number) {
    this.SelectedCity = this.cities[idx]
  }

}
