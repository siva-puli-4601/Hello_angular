import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
 
  addData(data:any):Observable<any>
  {
    const apiUrl = 'http://localhost:8001/api/users1/register';
    return this.http.post(apiUrl,data);
  }
  checkUser(user:any):Observable<any>
  {
    const apiUrl = 'http://localhost:8001/api/users1/login';
    return this.http.post(apiUrl,user);
  }
  getUserProfile(data:any):Observable<any>
  {
    console.log("profile getting data");
    const apiUrl = 'http://localhost:8001/api/users1/profile';
    return this.http.post(apiUrl,data);
  }
  getReason(data:any):Observable<any>
  {
    const apiUral='http://localhost:8001/api/users1/genratereason';
    return this.http.post(apiUral,data);
  }
}
