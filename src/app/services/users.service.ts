import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:3000/api/users/";
  }

  register(pForm: { username: string, email: string, password: string }): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.post<any>(this.baseUrl + 'register', pForm, httpOptions).toPromise();
  }


  login(pFormValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpClient.post<any>(this.baseUrl + 'login', pFormValue, httpOptions).toPromise();
  }

}
