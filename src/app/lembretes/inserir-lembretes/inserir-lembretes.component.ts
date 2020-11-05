import { Component, OnInit} from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Lembrete } from '../lembrete.model';
import { takeUntil } from 'rxjs/operators';
import { LembreteService } from '../lembretes.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inserir-lembretes',
  templateUrl: './inserir-lembretes.component.html',
  styleUrls: ['./inserir-lembretes.component.css']
})
export class InserirLembretesComponent implements OnInit{

  public Lembrete: Lembrete;
  createLembrete = new FormGroup({
    lmbrt_nome: new FormControl('', Validators.nullValidator && Validators.required),
    data_final: new FormControl('', Validators.nullValidator && Validators.required),
    lmbrt_body : new FormControl('', Validators.nullValidator && Validators.required)
  });
  
  logado : boolean;
  constructor(public lembreteService: LembreteService) {
    this.lembreteService.logado.subscribe( value => {
      this.logado = value;
    });
  }


    ngOnInit(): void {}

      destroy$: Subject<boolean> = new Subject<boolean>();
      create_lembrete(){
        // alert(this.createLembrete.value)
        this.lembreteService.CreateLembrete(this.createLembrete.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
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
