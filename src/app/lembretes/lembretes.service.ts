import { Injectable } from '@angular/core';
import { Lembrete } from  './lembrete.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {
  public logado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  CreateLembrete(lembrete: any){
    return this.http.post("/api/lembretes-lembrete-create", lembrete);
  }


}
