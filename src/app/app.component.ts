import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighSchoolsComponent } from "./high-schools/high-schools.component";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'photon-task';
}
