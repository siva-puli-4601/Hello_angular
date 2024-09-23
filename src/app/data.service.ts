import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

 constructor(private http: HttpClient) { }
 url=`http://172.17.10.128:3000/api/users1/`;
//  url1="http://172.17.10.128:3000/"
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
