import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideStore} from '@ngrx/store';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MyFeactureReducer } from './state/reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({myFeature: MyFeactureReducer}),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(), provideRouter(routes),
    provideAnimationsAsync(),

  ]
};
