import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SigninComponent } from './login/signin/signin.component';
import {LembretesListaComponent} from './lembretes/lembretes-lista/lembretes-lista.component';
import {InserirLembretesComponent} from './lembretes/inserir-lembretes/inserir-lembretes.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'inserir', component: InserirLembretesComponent},
  { path: 'lista', component: LembretesListaComponent}
 
];


@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
