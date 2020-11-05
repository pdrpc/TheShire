import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Lembrete } from '../lembrete.model';
import { LembreteService } from '../lembretes.service';
import { Subscription, Observable, from } from 'rxjs';

@Component({
  selector: 'app-lembretes-lista',
  templateUrl: './lembretes-lista.component.html',
  styleUrls: ['./lembretes-lista.component.css'],
})
export class LembretesListaComponent implements OnInit, OnDestroy {

  lembretes : Lembrete[] = [];
  logado : boolean;

  private lembretesSubscription: Subscription;
  private authObserver: Subscription;

  constructor(public lembreteService: LembreteService) {
    this.lembreteService.logado.subscribe( value => {
      this.logado = value;
    });
  }

  ngOnInit(): void {}


  ngOnDestroy(): void{
    this.lembretesSubscription.unsubscribe();
    this.authObserver.unsubscribe();
  }

  EditarLembrete(lembrete_id){
    var EditarId = {}
    EditarId = {"idLembrete": lembrete_id };
  }

  DeleteLembrete(lembrete_id){
    var DeletarId = {}
    DeletarId = {"idLembrete": lembrete_id };
  }
}
