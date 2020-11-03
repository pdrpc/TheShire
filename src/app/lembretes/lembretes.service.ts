import { Injectable } from '@angular/core';
import { Lembrete } from  './lembrete.model'
<<<<<<< HEAD
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
=======

import { BehaviorSubject, Subject } from 'rxjs';
>>>>>>> Gilmour

@Injectable({
  providedIn: 'root'
})
export class LembreteService {
  public logado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
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
