import { Component, OnInit } from '@angular/core';
import { Lembrete } from './lembretes/lembrete.model';
import { Routes, RouterModule, Router } from '@angular/router';
import { LembreteService } from './lembretes/lembretes.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logado;
  
  constructor(private router : Router,
    public lembreteService: LembreteService){
      this.lembreteService.logado.subscribe((value) => {
        this.logado = value;
        });
    }

  mgOnInit(): void{
    this.router.navigate(['/login']);
  }
  
  lembretes: Lembrete[] = [];
  onLembreteAdicionado(Lembrete){
    this.lembretes = [...this.lembretes, Lembrete];
  }
}
// logado;

//   constructor(public lembreteService: LembreteService){

//     this.lembreteService.logado.subscribe((value) => {
//       this.logado = value;
//     });

//   }