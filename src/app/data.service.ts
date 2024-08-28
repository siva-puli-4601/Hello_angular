import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
 url="http://localhost:8001/api/users1/";
 postApi(msg:any,data:any):Observable<any>
  {
    const apiUrl = this.url+msg;
    return this.http.post(apiUrl,data);
  }
  getApi(msg:any):Observable<any>
  {
    const apiUrl = this.url+msg;
    return this.http.get(apiUrl);
  }
}
