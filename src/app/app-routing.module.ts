import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { SchoolDetailsComponent } from './components/school-details/school-details.component';

const routes: Routes = [
  { path: 'schools', component: SchoolListComponent },
  { path: 'schools/:dbn', component: SchoolDetailsComponent },
  { path: '', redirectTo: '/schools', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
