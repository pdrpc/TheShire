import { Injectable } from '@angular/core';
import { Lembrete } from  './lembrete.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


import { BehaviorSubject, Subject } from 'rxjs';
import { ɵBrowserGetTestability } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {
  public logado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public user_ID: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public userMail: BehaviorSubject<string> = new BehaviorSubject<string>("");
  constructor(private http: HttpClient, private router: Router) { }

  CreateLembrete(lembrete: any){ 
    return this.http.post("/api/lembretes-lembrete-create", lembrete);
  }

  public GetLembretes(user_Id) {
    return this.http.post("/api/lembretes-lembrete-get",user_Id);
  }


}
