import { createReducer, on } from '@ngrx/store';
import { SatScores, School } from '../models/school.model';
import { loadSatScores, loadSatScoresFailure, loadSatScoresSuccess, loadSchools, loadSchoolsFailure, loadSchoolsSuccess, refreshSchools } from './school.actions';

export interface SchoolState {
  schools: School[];
  selectedSchool: School | null;
  satScores: SatScores | null;
  loading: boolean;
  error: any;
}

export const initialState: SchoolState = {
  schools: [],
  selectedSchool: null,
  satScores: null,
  loading: false,
  error: null,
};

export const schoolReducer = createReducer(
  initialState,

  // Load Schools
  on(loadSchools, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadSchoolsSuccess, (state, { schools }) => ({
    ...state,
    schools,
    loading: false,
  })),
  on(loadSchoolsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  // Load SAT Scores
  on(loadSatScores, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadSatScoresSuccess, (state, { satScores }) => ({
    ...state,
    satScores,
    loading: false,
  })),
  on(loadSatScoresFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(refreshSchools, (state) => ({
    ...state,
    schools: [],
  }))
);
