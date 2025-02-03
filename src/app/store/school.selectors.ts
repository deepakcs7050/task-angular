import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SchoolState } from './school.reducer';

export const selectSchoolState = createFeatureSelector<SchoolState>('school');

export const selectSchools = createSelector(
  selectSchoolState,
  (state) => state.schools
);

export const selectSelectedSchool = createSelector(
  selectSchoolState,
  (state) => state.selectedSchool
);

export const selectSatScores = createSelector(
  selectSchoolState,
  (state) => state.satScores
);

export const selectLoading = createSelector(
  selectSchoolState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectSchoolState,
  (state) => state.error
);

export const selectSchoolsLoaded = createSelector(
  selectSchools,
  (schools) => schools && schools.length > 0
);
