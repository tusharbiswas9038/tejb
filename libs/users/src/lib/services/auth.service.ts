import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURLUser = environment.apiURL + 'users';
  constructor(private http: HttpClient, private jwtToken: LocalstorageService, private router:Router) { }

  login(email:string, password:string): Observable<User>{
   return this.http.post<User>(`${this.apiURLUser}/login`,{email, password});
  }

  logout(){
    this.jwtToken.removeToken();
    this.router.navigateByUrl('/login');

  }

}
