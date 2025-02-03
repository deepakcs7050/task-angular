import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadSatScores } from 'src/app/store/school.actions';
import { Store } from '@ngrx/store';
import { selectLoading, selectSatScores } from 'src/app/store/school.selectors';
import { Observable } from 'rxjs';
import { SatScores } from 'src/app/models/school.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})
export class SchoolDetailsComponent {
  // Observables for SAT scores and loading state
  satScores$: Observable<SatScores | null>;
  loading$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store: Store,private location: Location) {
    // Initialize observables from the store
    this.satScores$ = this.store.select(selectSatScores);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    // Get the school's DBN (unique identifier) from the route parameters
    const dbn = this.route.snapshot.paramMap.get('dbn');
    if (dbn) {
      // Dispatch the action to load SAT scores for the selected school
      this.store.dispatch(loadSatScores({ dbn }));
    }
  }

  goBack(): void {
    this.location.back(); // Navigates back to the school list
  }

}
