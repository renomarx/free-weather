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
        "id": 3000902,
        "name": "Les Gets",
        "country": "FR",
        "coord": {
          "lon": 6.66492,
          "lat": 46.15522
        }
      },
      {
        "id": 6455259,
        "name": "Paris",
        "country": "FR",
        "coord": {
          "lon": 2.35236,
          "lat": 48.856461
        }
      },
      {
        "id": 6443060,
        "name": "Taninges",
        "country": "FR",
        "coord": {
          "lon": 6.59077,
          "lat": 46.108471
        }
      },
      {
        "id": 6455058,
        "name": "Bordeaux",
        "country": "FR",
        "coord": {
          "lon": -0.56667,
          "lat": 44.833328
        }
      },
    ]
    this.SelectedCity = this.cities[0]
  }

  public SelectCity(idx: number) {
    this.SelectedCity = this.cities[idx]
  }

}
