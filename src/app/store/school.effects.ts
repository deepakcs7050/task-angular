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

  loadSchools$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSchools, refreshSchools),
      withLatestFrom(this.store.pipe(select(selectSchoolsLoaded))),
      mergeMap(([action, schoolsLoaded]) => {
        if (schoolsLoaded && action.type !== '[School] Refresh Schools') {
          return of();
        }
        return this.schoolService.getSchools().pipe(
          map((schools) => loadSchoolsSuccess({ schools })),
          catchError((error) => of(loadSchoolsFailure({ error })))
        );
      })
    )
  );

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
