import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  userEmail: any;


  constructor(
    private http: HttpClient
  ) { }

  //broken because the POST request is expecting JSON information, but we're sending a string as defined in the params i'm stupid
  registerEmail(userEmail: string){
    let jsonEmail = JSON.stringify({email: userEmail})
    let regUrl = 'http://localhost:3000/users/notifyme';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(regUrl, jsonEmail, httpOptions)
  }

}
