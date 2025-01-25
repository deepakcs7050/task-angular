import { Component } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {

  itmesList:any;
  constructor (private schoolService:SchoolService){

  }

  ngOnInit(): void {
    this.getSubject();

  }
  getSubject(){
    this.schoolService.getSubject().subscribe( resp =>{
     this.itmesList = resp;
    })
  }
}
