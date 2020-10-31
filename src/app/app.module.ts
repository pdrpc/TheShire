import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LembretesListaComponent } from './lembretes/lembretes-lista/lembretes-lista.component';
import { LembretesInserirComponent } from './lembretes/lembretes-inserir/lembretes-inserir.component';
import { InserirLembretesComponent } from './lembretes/inserir-lembretes/inserir-lembretes.component';

@NgModule({
  declarations: [
    AppComponent,
    LembretesListaComponent,
    LembretesInserirComponent,
    InserirLembretesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
