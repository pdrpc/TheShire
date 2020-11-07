import { Component, OnInit } from '@angular/core';
import { Lembrete } from './lembretes/lembrete.model';
import { Routes, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router : Router){}

  mgOnInit(): void{
    this.router.navigate(['/login']);
  }
  
  lembretes: Lembrete[] = [];
  onLembreteAdicionado(Lembrete){
    this.lembretes = [...this.lembretes, Lembrete];
  }
}
