import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { loadSchools, refreshSchools } from 'src/app/store/school.actions';
import { selectLoading, selectSchools, selectSchoolsLoaded } from 'src/app/store/school.selectors';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schools$!: Observable<any>;
  loading$!: Observable<boolean>;
  schoolsLoaded$!: Observable<boolean>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.schools$ = this.store.pipe(select(selectSchools));
    this.loading$ = this.store.pipe(select(selectLoading));

    // Ensure that we only load data once
    this.store.pipe(select(selectSchoolsLoaded), take(1)).subscribe((loaded) => {
      if (!loaded) {
        this.store.dispatch(loadSchools());
      }
    });
  }

  selectSchool(dbn: string): void {
    // Navigate using Router instead of window.location.href
    this.router.navigate(['/schools', dbn]);
  }

  refreshSchools(): void {
    this.store.dispatch(refreshSchools());
  }
}
