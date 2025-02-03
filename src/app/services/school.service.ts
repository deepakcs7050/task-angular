import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SatScores, School } from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private schoolsApiUrl = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json';
  private satScoresApiUrl = 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json';

  constructor(private http: HttpClient) {}

  getSchools(): Observable<School[]> {
    return this.http.get<School[]>(this.schoolsApiUrl);
  }

  getSatScores(dbn: string): Observable<SatScores[]> {
    return this.http.get<SatScores[]>(`${this.satScoresApiUrl}?dbn=${dbn}`);
  }

}
