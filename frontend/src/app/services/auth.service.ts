import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  userEmail: any;

  constructor(
    private http: Http
  ) { }

  registerEmail(userEmail){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let opts = {headers: headers}
    return this.http.post('http://localhost:3000/users/notifyme', userEmail, {headers: headers})
      .map(res => res.json())
  }

}
