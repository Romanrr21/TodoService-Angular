import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private id= null;
  constructor() { }
  getUserId(){
    return this.id;
  }
  setUserId(id){
    console.log("Setting user id in service:" ,id);
    this.id= id;
  }
}
