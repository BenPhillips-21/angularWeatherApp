import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  private selectedCity = new BehaviorSubject<string>('')
  selectedCity$ = this.selectedCity.asObservable();
  constructor() { }

  updateSelectedCity(city: string) {
    this.selectedCity.next(city);
  }
}
