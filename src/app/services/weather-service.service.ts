import { inject, Injectable } from '@angular/core';
import { LocationServiceService } from './location-service.service';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, filter, Observable, switchMap, tap } from 'rxjs';
import { WeatherData } from '../../types';
import { API_KEY } from '../environment';

const baseUrl = 'http://api.weatherbit.io/v2.0';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  private http = inject(HttpClient);
  private locationService = inject(LocationServiceService);
  protected selectedCity$ = this.locationService.selectedCity$;

  getObservationByCity(): Observable<WeatherData> {
    return this.selectedCity$.pipe(
      filter(city => city.trim().length > 0),  
      switchMap(city => 
        this.http.get<WeatherData>(`${baseUrl}/current?city=${encodeURIComponent(city)}&key=${API_KEY}`).pipe(
          catchError(error => {
            console.error(`Request failed for ${city}:`, error);
            return EMPTY;
          })
        )
      )
    );
  }

  getForecast(): Observable<WeatherData> {
    return this.selectedCity$.pipe(
      filter(city => city.trim().length > 0),  
      switchMap(city => 
        this.http.get<WeatherData>(`${baseUrl}/forecast/daily?city=${encodeURIComponent(city)}&key=${API_KEY}`).pipe(
          catchError(error => {
            console.error(`Request failed for ${city}:`, error);
            return EMPTY;
          })
        )
      )
    );
  }
}
