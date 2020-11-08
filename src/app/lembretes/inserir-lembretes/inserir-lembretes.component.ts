import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lembrete } from '../lembrete.model';
import { takeUntil } from 'rxjs/operators';
import { LembreteService } from '../lembretes.service';
import { Subject } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-inserir-lembretes',
  templateUrl: './inserir-lembretes.component.html',
  styleUrls: ['./inserir-lembretes.component.css'],
})
export class InserirLembretesComponent implements OnInit {

  public Lembrete: Lembrete = { 
    lmbrt_nome: "", 
    data_criar: "",
    data_final: "",
    lmbrt_body: "",
  };
  logado: boolean = false;
  user_ID: number;

  createLembrete = new FormGroup({
    lmbrt_nome: new FormControl('',Validators.nullValidator && Validators.required),
    data_final: new FormControl('',Validators.nullValidator && Validators.required),
    lmbrt_body: new FormControl('',Validators.nullValidator && Validators.required),
    user_ID: new FormControl('',Validators.nullValidator && Validators.required),
  });

  

  constructor(
    public lembreteService: LembreteService,
    public router: ActivatedRoute,
    public route: Router
  ) 
  {
    const user_ID = localStorage.getItem('user_ID')
    if(user_ID == null){
      this.route.navigateByUrl('/login');
    }else{
      this.logado = true;
    }
    this.lembreteService.user_ID.subscribe((value) =>{
      this.user_ID = value;
    });
  } 

  ngOnInit(): void {
    this.router.params.subscribe((data) => { 
      const lembreteId = data['id']
      //se não houver lembretes o OnInit para aqui.
      if(lembreteId == null){
        return false;
      }
      this.lembreteService.getLembrete(lembreteId).pipe(takeUntil(this.destroy$))
      .subscribe((data:Lembrete) => {
        if (data == null) {
          this.route.navigateByUrl('/lista')
        } else {
          const {lmbrt_ID, lmbrt_nome, data_final, lmbrt_body} = data
          this.Lembrete = {
            lmbrt_ID,
            lmbrt_nome,
            data_final: moment(data_final).format('yyyy-MM-DD'),
            lmbrt_body,
          }
          console.log(this.Lembrete)
        }
      });
    })
  }

  destroy$: Subject<boolean> = new Subject<boolean>();
  create_lembrete() {
    // alert(this.createLembrete.value)
    var user_ID  = localStorage.getItem('user_ID');
    console.log(this.Lembrete)
    if(user_ID == ''){
      alert('Você não está logado!')
      this.route.navigateByUrl('/login');
    }else if(this.Lembrete && this.Lembrete.lmbrt_ID != null){
      const lembreteId = this.Lembrete.lmbrt_ID;
      this.lembreteService.EditLembrete(lembreteId, this.Lembrete).pipe(takeUntil(this.destroy$)).subscribe((data) => {
        if (data != null) {
          alert('Lembrete modificado com sucesso');
        } else {
          alert('O lembrete não foi modificado');
        }
        window.location.href = '/dashboard';
      });
    }else{
      var user_ID_num = parseInt(user_ID)
      this.createLembrete.get('user_ID').setValue(user_ID_num); 
      console.log(this.createLembrete.value)   
      this.lembreteService.CreateLembrete(this.createLembrete.value).pipe(takeUntil(this.destroy$)).subscribe((data) => {
          console.log('message::::', data);
          if (data != null) {
            alert('Lembrete cadastrado com sucesso');
          } else {
            alert('O lembrete não foi cadastrado');
          }
          window.location.href = '/dashboard';
        });
    }
  }
}
