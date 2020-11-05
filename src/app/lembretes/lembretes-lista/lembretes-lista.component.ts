import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Lembrete } from '../lembrete.model';
import { LembreteService } from '../lembretes.service';
import { Subscription, Observable, from } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


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

  GetLembrete(){
    this.lembreteService.GetLembrete(this.lembretes.value).pipe(takeUntil(this.destroy$)).subscribe((data) =>{

    })
  }

  // this.authService.GetUser(this.loginForm.value).pipe(takeUntil(this.destroy$)).subscribe((data) => {

  EditarLembrete(lmbrt_ID){
    var EditarId = {}
    EditarId = {"idLembrete": lmbrt_ID };
  }

  DeleteLembrete(lmbrt_ID){
    var DeletarId = {}
    DeletarId = {"idLembrete": lmbrt_ID };
  }
}
