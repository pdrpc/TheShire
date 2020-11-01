import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { from } from 'rxjs';
import { Lembrete } from '../lembrete.model';
import { LembreteService } from '../lembretes.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-lembretes-lista',
  templateUrl: './lembretes-lista.component.html',
  styleUrls: ['./lembretes-lista.component.css'],
})
export class LembretesListaComponent implements OnInit, OnDestroy {

  lembretes: Lembrete[] = [];

  private lembretesSubscription: Subscription;

  constructor(public lembreteService: LembreteService) {

  }

  ngOnInit(): void {
    this.lembretes = this.lembreteService.getLembretes();
    this.lembretesSubscription = this.lembreteService.getListaDeLembretesAtualizadaObservable().subscribe((lembretes:Lembrete[])=>{
    this.lembretes = lembretes;
    });
  }

  ngOnDestroy(): void{
    this.lembretesSubscription.unsubscribe();
  }
}
