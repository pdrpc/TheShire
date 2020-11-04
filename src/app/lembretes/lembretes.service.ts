import { Injectable } from '@angular/core';
import { Lembrete } from  './lembrete.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor() { }

  private lembretes: Lembrete [] = [];
  private listaLembretesAtualizada = new Subject<{lembretes: Lembrete[], maxLembretes: number}>();


  getLembretes(pagesize: number, page: number): void {
    const parametros = `?pagesize=${pagesize}&page=${page}`;
    this.httpClient.get <{mensagem: string, lembretes: any, maxLembretes: number }>(`http://localhost:3000/api/lembretes${parametros}`).
    pipe(map((dados) => {
      return {
        lembretes: dados.lembretes.map(lembrete => {
          return {
            titulo: lembrete.titulo,
            dataCad: lembrete.dataCad,
            dataAtv: lembrete.dataAtv,
            body: lembrete.body
          }
        }),
        maxLembretes: dados.maxLembretes
      }
    })).
    subscribe(
      (dados) => {
        this.lembretes = dados.lembretes;
        this.listaLembretesAtualizada.next({lembrete: [...this.lembretes], maxLembretes:dados.maxLembretes });
      }
    )
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

  getLembrete (titulo: string){
    return this.httpClient.get<{
      titulo: string, dataCad: Date, dataAtv: Date,
    }>(`http://localhost:3000/api/lembretes/${titulo}`);
  }

  getListaDeLembretesAtualizadaObservable(){
    return this.listaLembretesAtualizada.asObservable();
  }

  removerLembrete (titulo: string){
    return this.httpClient.delete (`http://localhost:3000/api/lembretes/${id}`);

  }

  atualizarLembrete (titulo: string, dataCad: Date, dataAtv: Date, body: string){
    let lembreteData: Lembrete | FormData;
      lembreteData = {
        titulo: titulo,
        dataCad: dataCad,
        dataAtv: dataAtv,
        body: body
      }
    }

}
