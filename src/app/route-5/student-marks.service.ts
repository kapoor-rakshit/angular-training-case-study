import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StudentMarksService {

  public _serverURL = "http://localhost:3000";     /* URL of JSON server + name of key having array */

  constructor(private _http: HttpClient) { }

  getAllStudents() {
    return this._http.get(`${this._serverURL}/students`).pipe(catchError((err: Error) => { return throwError(err) }));
  }
}
