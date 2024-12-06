import { Component, input, computed, OnInit, OnChanges, SimpleChange, SimpleChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-current-weather-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-weather-image.component.html',
  styleUrl: './current-weather-image.component.css',
})
export class CurrentWeatherImageComponent implements OnChanges {
  private basePath = '/public/assets/'
  @Input() weatherDescription: string = '';

  weatherLink: string = this.basePath

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchWeatherImage()
  }

  ngOnInit() {
    this.fetchWeatherImage()
  }

  fetchWeatherImage() {
    switch (this.weatherDescription) {
      case "Overcast Clouds":
        this.weatherLink = this.basePath + "overcast";
        break;
      case "Clear sky":
        this.weatherLink = this.basePath + "sunny";
        break;
      default:
        this.weatherLink = this.basePath + "default";
    }
}
}
