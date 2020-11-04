import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { from } from 'rxjs';
import { Lembrete } from '../lembrete.model';
import { LembreteService } from '../lembretes.service';
import { Subscription, Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-lembretes-lista',
  templateUrl: './lembretes-lista.component.html',
  styleUrls: ['./lembretes-lista.component.css'],
})
export class LembretesListaComponent implements OnInit, OnDestroy {

  lembretes: Lembrete[] = [];

  private lembretesSubscription: Subscription;
  public estaCarregando: boolean = false;
  public totalDeLembretes: number = 0;
  public totalDeLembretesPorPagina: number = 2;
  public paginaAtual: number = 1;
  public opcoesTotalDeLembretesPorPagina: number[] = [2, 5, 10];
  public autenticado: boolean = false;
  private authObserver: Subscription;

  constructor(public lembreteService: LembreteService) {

  }

  ngOnInit(): void {
    this.estaCarregando = true;
    this.lembreteService.getLembretes(this.totalDeLembretesPorPagina, this.paginaAtual);
    this.lembretesSubscription = this.lembreteService
      .getListaDeLembretesAtualizadaObservable()
      .subscribe((dados: { lembretes: [], maxLembretes: number }) => {
        this.estaCarregando = false;
        this.lembretes = dados.lembretes;
        this.totalDeLembretes = dados.maxLembretes
      })
    /*this.autenticado = this.lembreteService.isAutenticado();
    this.authObserver = this.lembreteService.getStatusSubject().subscribe(autenticado => {
      this.autenticado = autenticado
    })  aqui eu n entendi o code n:-:*/
  }

  onDelete(titulo: string): void {
    this.estaCarregando = true;
    this.lembreteService.removerLembrete(titulo).subscribe(() => {
      this.lembreteService.getLembretes(this.totalDeLembretesPorPagina, this.paginaAtual);
    });
  }

  onPaginaAlterada(dadosPagina: PageEvent) {
    //console.log(dadosPagina);
    this.estaCarregando = true;
    this.paginaAtual = dadosPagina.pageIndex + 1;
    this.totalDeLembretesPorPagina = dadosPagina.pageSize;
    this.lembreteService.getLembretes(this.totalDeLembretesPorPagina, this.paginaAtual);
  }

  ngOnDestroy(): void{
    this.lembretesSubscription.unsubscribe();
    this.authObserver.unsubscribe();
  }
}
