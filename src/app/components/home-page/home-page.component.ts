import { Component } from '@angular/core';
import { LocationSearchComponent } from '../location-search/location-search.component'

@Component({
  selector: 'app-home-page',
  imports: [LocationSearchComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
