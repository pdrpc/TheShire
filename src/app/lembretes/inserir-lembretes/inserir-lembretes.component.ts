import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Lembrete } from '../lembrete.model';
import { takeUntil } from 'rxjs/operators';
import { LembreteService } from '../lembretes.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inserir-lembretes',
  templateUrl: './inserir-lembretes.component.html',
  styleUrls: ['./inserir-lembretes.component.css'],
})
export class InserirLembretesComponent implements OnInit {
  public Lembrete: Lembrete;
  createLembrete = new FormGroup({
    lmbrt_nome: new FormControl(
      '',
      Validators.nullValidator && Validators.required
    ),
    data_final: new FormControl(
      '',
      Validators.nullValidator && Validators.required
    ),
    lmbrt_body: new FormControl(
      '',
      Validators.nullValidator && Validators.required
    ),
    user_ID: new FormControl(
      '',
      Validators.nullValidator && Validators.required
    ),
  });

  logado: boolean;
  user_ID: number;
  constructor(public lembreteService: LembreteService) {
    this.lembreteService.logado.subscribe((value) => {
      this.logado = value;
    });
    this.lembreteService.user_ID.subscribe((value) =>{
      this.user_ID = value;
    });
  }

  ngOnInit(): void {}

  destroy$: Subject<boolean> = new Subject<boolean>();
  create_lembrete() {
    // alert(this.createLembrete.value)
    var user_ID  = localStorage.getItem('user_ID');
    if(user_ID == ''){
      alert('Você não está logado!')
    }else{
      var user_ID_num = parseInt(user_ID)
      this.createLembrete.get('user_ID').setValue(user_ID_num);    
      this.lembreteService
        .CreateLembrete(this.createLembrete.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data) => {
          console.log('message::::', data);
          if (data != null) {
            alert('Lembrete cadastrado com sucesso');
          } else {
            alert('O lembrete não foi cadastrado');
          }
        });
    }
  }
}
