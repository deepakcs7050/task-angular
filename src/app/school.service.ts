import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  schoolURL = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json';
  constructor(private http :HttpClient) { }

  getSchoolList(): Observable<any>{
    return this.http.get(this.schoolURL);
  }

  getSubject(){
    return this.http.get('https://data.cityofnewyork.us/resource/f9bf-2cp4.json')
  }
}
