import { Injectable } from '@angular/core';
import { Lembrete } from  './lembrete.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {
  public logado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userMail: BehaviorSubject<string> = new BehaviorSubject<string>("");
  constructor(private http: HttpClient, private router: Router) { }

  CreateLembrete(lembrete: any){
    return this.http.post("/api/lembretes-lembrete-create", lembrete);
  }

  public GetLembrete(lembrete: any) {
    return this.http.get("/api/lembretes-lembrete-create", lembrete);
  }


}
