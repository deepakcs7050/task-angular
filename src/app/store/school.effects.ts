import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { SchoolService } from '../services/school.service';
import {
  loadSatScores,
  loadSatScoresFailure,
  loadSatScoresSuccess,
  loadSchools,
  loadSchoolsFailure,
  loadSchoolsSuccess,
  refreshSchools,
} from './school.actions';
import { selectSchoolsLoaded } from './school.selectors';

@Injectable()
export class SchoolEffects {
  constructor(
    private actions$: Actions,
    private schoolService: SchoolService,
    private store: Store
  ) {}

  // ✅ Load Schools Effect (Prevents Unnecessary API Calls)
  loadSchools$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSchools, refreshSchools), // ✅ Trigger on both load and refresh
      withLatestFrom(this.store.pipe(select(selectSchoolsLoaded))), // ✅ Check if schools are already loaded
      mergeMap(([action, schoolsLoaded]) => {
        if (schoolsLoaded && action.type !== '[School] Refresh Schools') {
          return of(); // 🚀 Prevent API call unless it's a refresh
        }
        return this.schoolService.getSchools().pipe(
          map((schools) => loadSchoolsSuccess({ schools })),
          catchError((error) => of(loadSchoolsFailure({ error })))
        );
      })
    )
  );

  // ✅ Load SAT Scores Effect (Always Fetch Fresh Data)
  loadSatScores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSatScores),
      mergeMap(({ dbn }) =>
        this.schoolService.getSatScores(dbn).pipe(
          map((satScores) => loadSatScoresSuccess({ satScores: satScores[0] })),
          catchError((error) => of(loadSatScoresFailure({ error })))
        )
      )
    )
  );
}
