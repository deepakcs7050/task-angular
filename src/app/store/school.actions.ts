import { createAction, props } from '@ngrx/store';
import { SatScores, School } from '../models/school.model';

// Load Schools
export const loadSchools = createAction('[School] Load Schools');
export const loadSchoolsSuccess = createAction(
  '[School] Load Schools Success',
  props<{ schools: School[] }>()
);
export const loadSchoolsFailure = createAction(
  '[School] Load Schools Failure',
  props<{ error: any }>()
);

// Load SAT Scores
export const loadSatScores = createAction(
  '[School] Load SAT Scores',
  props<{ dbn: string }>()
);
export const loadSatScoresSuccess = createAction(
  '[School] Load SAT Scores Success',
  props<{ satScores: SatScores }>()
);
export const loadSatScoresFailure = createAction(
  '[School] Load SAT Scores Failure',
  props<{ error: any }>()
);
export const refreshSchools = createAction('[School] Refresh Schools');
