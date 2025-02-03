import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { SchoolDetailsComponent } from './components/school-details/school-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {MatCardModule} from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { SchoolEffects } from './store/school.effects';
import { schoolReducer } from './store/school.reducer';
import { SchoolEffects } from './store/school.effects';
@NgModule({
  declarations: [
    AppComponent,
    SchoolListComponent,
    SchoolDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ school: schoolReducer }), //  Register the reducer
    EffectsModule.forRoot([SchoolEffects]), // Register the effects
    MatListModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
