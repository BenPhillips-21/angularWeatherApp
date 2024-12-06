import { Component, inject, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service';
import { tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { TuiCardLarge } from '@taiga-ui/layout';
import { TuiAppearance } from '@taiga-ui/core';
import { CurrentWeatherImageComponent } from '../current-weather-image/current-weather-image.component';

@Component({
  selector: 'app-current-weather',
  imports: [AsyncPipe, TuiAppearance, TuiCardLarge, CurrentWeatherImageComponent],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.less',
  standalone: true
})
export class CurrentWeatherComponent {
  private weatherService = inject(WeatherServiceService);

  protected weatherData$ = this.weatherService.getObservationByCity();
}
