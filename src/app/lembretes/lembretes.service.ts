import { Injectable } from '@angular/core';
import { Lembrete } from  './lembrete.model'

import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {
  public logado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userMail: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

  private listaLembretesAtualizada = new Subject<Lembrete[]>();

  private lembretes: Lembrete [] = [];

  getLembretes(): Lembrete[] {
    return [...this.lembretes];
  }

  adicionarLembrete (titulo: string, dataCad: Date, dataAtv: Date, body: string): void{
    const lembrete: Lembrete = {
        titulo: titulo,
        dataCad: dataCad,
        dataAtv: dataAtv,
        body: body
    };
    this.lembretes.push(lembrete);
    this.listaLembretesAtualizada.next([...this.lembretes]);
  }

  getListaDeLembretesAtualizadaObservable(){
    return this.listaLembretesAtualizada.asObservable();
  }



}
