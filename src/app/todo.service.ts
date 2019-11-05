import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private REST_API_SERVER = "http://localhost:8090/todo";
  constructor(private httpClient: HttpClient) { }
getTodoByUserId(id){
  const todoGetUrl=this.REST_API_SERVER+"?userId="+id;
  return this.httpClient.get<any>(todoGetUrl,{observe:"response"});
    
}
}
