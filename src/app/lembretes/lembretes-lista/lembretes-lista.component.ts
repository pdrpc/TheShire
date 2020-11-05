import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Lembrete } from '../lembrete.model';
import { LembreteService } from '../lembretes.service';
import { Subscription, Observable, from, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as moment from 'moment';
import { DatePipe } from '@angular/common'



@Component({
  selector: 'app-lembretes-lista',
  templateUrl: './lembretes-lista.component.html',
  styleUrls: ['./lembretes-lista.component.css'],
})
export class LembretesListaComponent implements OnInit, OnDestroy {

  
  logado : boolean;

  private lembretesSubscription: Subscription;
  private authObserver: Subscription;
  public lembrete
  lmbrt_nome;
  data_criar;
  data_final;
  lmbrt_body;

  constructor(public lembreteService: LembreteService) {
    this.lembreteService.logado.subscribe( value => {
      this.logado = value;
    });
  }

  ngOnInit(): void {
    this.getLembretes();
  }


  ngOnDestroy(): void{
    this.lembretesSubscription.unsubscribe();
    this.authObserver.unsubscribe();
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  getLembretes() {
    console.log('entrou no metodo?')
    this.lembreteService.GetLembretes().subscribe(
      data => { this.lembrete = data, console.log("Valor que vem da api " + data)
        console.log(data)
      },    
  
      err => console.error(err),
      () => console.log('getting lembretes')
    );
      for (let index = 0; index < this.lembrete; index++) {
        this.lmbrt_nome = this.lmbrt_nome[index]['lmbrt_nome'];
        this.data_criar = this.data_criar[index]['data_criar'];
        this.data_final = this.data_final[index]['data_final'];
        this.lmbrt_body = this.lmbrt_body[index]['lmbrt_body'];
      }
      this.data_criar = moment(this.data_criar).format("MMM Do YY");
      this.data_final = moment(this.data_final).format("MMM Do YY");
      alert(this.data_criar + " " + this.data_final);
      console.log('Saiu do for?')
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
