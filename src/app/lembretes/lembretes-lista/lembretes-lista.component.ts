import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Lembrete } from '../lembrete.model';
import { LembreteService } from '../lembretes.service';
import { Subscription, Observable, from, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as moment from 'moment';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';



@Component({
  selector: 'app-lembretes-lista',
  templateUrl: './lembretes-lista.component.html',
  styleUrls: ['./lembretes-lista.component.css'],
})
export class LembretesListaComponent implements OnInit, OnDestroy {

  
  logado : boolean = false;

  private lembretesSubscription: Subscription;private authObserver: Subscription;public lembrete;public  lista_vazia;public ver_lista;
  lmbrt_nome;
  data_criar;
  data_final;
  lmbrt_body;
  lmbrt_ID;


  constructor(public lembreteService: LembreteService,
    private router : Router) {
      const user_ID = localStorage.getItem('user_ID')
      if(user_ID == null){
        this.router.navigateByUrl('/login');
      }else{
        this.logado = true;
      }
  }

  ngOnInit(): void {
    this.getLembretes();
  }


  ngOnDestroy(): void{
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  getLembretes() {
    var user_ID  = localStorage.getItem('user_ID');
    var user_ID_num = parseInt(user_ID)
    var dict_user = { }
    dict_user = {"user_ID" : user_ID_num}
    this.lembreteService.GetLembretes(dict_user).subscribe(
      data => { this.lembrete = data
      if (data  ==  '') { this.lista_vazia  = "Você não tem lembretes adicionados"; this.ver_lista=false}
      else{this.ver_lista = true;}
      },    
  
      err => console.error(err),
      () => console.log('getting lembretes')
    );
      for (let index = 0; index < this.lembrete; index++) {
        this.lmbrt_nome = this.lmbrt_nome[index]['lmbrt_nome'];
        this.data_criar = this.data_criar[index]['data_criar'];
        this.data_final = this.data_final[index]['data_final'];
        this.lmbrt_body = this.lmbrt_body[index]['lmbrt_body'];
        this.lmbrt_ID = this.lmbrt_ID[index]['lmbrt_ID']
      } 
  }

  EditarLembrete(lmbrt_ID, lembIndex){
    this.router.navigate(['/editar', lmbrt_ID])
  }

  DeleteLembrete(lmbrt_ID, lembIndex){
    this.lembreteService.deleteLembrete(lmbrt_ID).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (data != null) {
        this.lembrete.splice(lembIndex, 1)
        alert('Lembrete deletado com sucesso')
        window.location.reload();
      }
    });
  }
}
