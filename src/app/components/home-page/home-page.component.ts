import { Component } from '@angular/core';
import { LocationSearchComponent } from '../location-search/location-search.component'
import { CurrentWeatherComponent } from '../current-weather/current-weather.component';
import { ForecastWeatherComponent } from '../forecast-weather/forecast-weather.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home-page',
  imports: [LocationSearchComponent, CurrentWeatherComponent, ForecastWeatherComponent, HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
