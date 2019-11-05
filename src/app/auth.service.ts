import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private REST_API_SERVER = "http://localhost:8080/user";
  constructor(private httpClient: HttpClient) { }

  public login(userInfo: User){
    console.log("User is logging in");
    const loginUrl= this.REST_API_SERVER + "/login?username="+userInfo.username +"&password="+userInfo.password;
    return this.httpClient.get<any>(loginUrl,{observe:"response"});
    
    // localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}