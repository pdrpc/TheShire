import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LembretesListaComponent } from './lembretes/lembretes-lista/lembretes-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    LembretesListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
