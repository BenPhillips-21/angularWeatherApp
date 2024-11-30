import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./components/home-page/home-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'weatherApp';
}
