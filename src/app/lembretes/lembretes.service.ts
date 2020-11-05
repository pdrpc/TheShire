import { Injectable } from '@angular/core';
import { Lembrete } from  './lembrete.model'

import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {
  public logado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userMail: BehaviorSubject<string> = new BehaviorSubject<string>("");

  CreateLembrete(lembrete: any){
    return this.http.post("/api/lembretes-lembrete-create", lembrete);
  }


}
