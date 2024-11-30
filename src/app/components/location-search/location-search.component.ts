import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TUI_DEFAULT_MATCHER, TuiLet } from '@taiga-ui/cdk';
import { TuiDataList, TuiInitialsPipe } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/legacy';
import type { Observable } from 'rxjs';
import { map, of, startWith, switchMap } from 'rxjs';
import { majorCities } from '../../data';
import { LocationServiceService } from '../../services/location-service.service';

@Component({
  selector: 'app-location-search',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    TuiAvatar,
    TuiDataList,
    TuiInitialsPipe,
    TuiInputModule,
    TuiLet,
  ],
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationSearchComponent {
  private locationService = inject(LocationServiceService)
  protected readonly locationInput = new FormControl('');

  protected selectedCity$ = this.locationService.selectedCity$;

  protected readonly filteredLocations$ = this.locationInput.valueChanges.pipe(
    startWith(''),
    switchMap((value) =>
      this.request(value ?? '').pipe(
        map((response) => {
          if (
            response.length === 1 &&
            response[0] &&
            String(response[0]) === value
          ) {
            this.onClick(response[0]);
            return [];
          }

          return response;
        })
      )
    ),
    startWith(majorCities)
  );

  protected onClick(location: string): void {
    this.locationService.updateSelectedCity(location)
  }

  private request(query: string): Observable<readonly string[]> {
    // TODO: Use an actual locations API
    return of(majorCities.filter((item) => TUI_DEFAULT_MATCHER(item, query)));
  }
}
