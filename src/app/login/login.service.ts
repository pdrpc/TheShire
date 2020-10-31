import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  
  logout() :void {    
    sessionStorage.setItem('isLoggedIn','false');    
    sessionStorage.removeItem('token');    
  }    
   
  CreateUser(user: any){
    return this.http.post("/api/lembretes-user-create", user);
  }
  public GetUser(user: any){
    console.log(user)
    return this.http.post("/api/lembretes-user-login", user);
  }
 
}
