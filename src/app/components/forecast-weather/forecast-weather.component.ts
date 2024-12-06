import { Component, inject } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-forecast-weather',
  imports: [AsyncPipe],
  templateUrl: './forecast-weather.component.html',
  styleUrl: './forecast-weather.component.css'
})
export class ForecastWeatherComponent {
  private weatherService = inject(WeatherServiceService)

  protected weatherForecast$ = this.weatherService.getForecast();
}
