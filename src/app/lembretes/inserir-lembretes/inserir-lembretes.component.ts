import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LembreteService } from '../lembretes.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inserir-lembretes',
  templateUrl: './inserir-lembretes.component.html',
  styleUrls: ['./inserir-lembretes.component.css']
})
export class InserirLembretesComponent{
  logado : boolean;
  constructor(public lembreteService: LembreteService) {
    this.lembreteService.logado.subscribe( value => {
      this.logado = value;
    });
  }


    ngOnInit(): void {}

      destroy$: Subject<boolean> = new Subject<boolean>();
      create_lembrete(){
        this.authService.CreateLembrete(this.createLembrete.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
          console.log('message::::', data);
          if(data!=null){
            alert("Lembrete cadastrado com sucesso");
          }
          else{
            alert("O lembrete não foi cadastrado");
          }
        });
      }
}
