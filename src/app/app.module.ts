import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LembretesListaComponent } from './lembretes/lembretes-lista/lembretes-lista.component';
import { InserirLembretesComponent } from './lembretes/inserir-lembretes/inserir-lembretes.component';

@NgModule({
  declarations: [
    AppComponent,
    LembretesListaComponent,
    InserirLembretesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
