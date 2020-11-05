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
  private authService : LembreteService;
  createLembrete = new FormGroup({
    titulo: new FormControl('', Validators.nullValidator && Validators.required),
    dataAtv: new FormControl('', Validators.nullValidator && Validators.required),
    body : new FormControl('', Validators.nullValidator && Validators.required)
  });

  constructor(
    public lembreteService: LembreteService,
    public route: ActivatedRoute
    ){}


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
