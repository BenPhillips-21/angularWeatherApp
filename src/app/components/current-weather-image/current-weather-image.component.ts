import {
  Component,
  input,
  OnChanges,
  SimpleChanges,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-weather-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-weather-image.component.html',
  styleUrl: './current-weather-image.component.css',
})
export class CurrentWeatherImageComponent implements OnChanges {
  private basePath = signal<string>('assets/animated/');
  weatherLink = signal<string>(this.basePath());

  weatherDescription = input.required<string>();
  partOfDay = input.required<string>();

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchWeatherImage();
  }

  ngOnInit() {
    this.fetchWeatherImage();
  }

  fetchWeatherImage() {
    const weatherNoSpaces = this.weatherDescription().split(' ').join('');
    let weatherPath;

    switch (this.weatherDescription()) {
      case 'Overcast clouds':
      case 'thunder':
        weatherPath = `${weatherNoSpaces}.svg`;
        break;
      case 'Flurries':
        weatherPath = `LightSnow${this.partOfDay()}.svg`;
        break;
      default:
        weatherPath = `${weatherNoSpaces}${this.partOfDay()}.svg`;
    }

    this.weatherLink.set(this.basePath() + weatherPath);
  }
}
