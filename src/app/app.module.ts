import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { LembretesListaComponent } from './lembretes/lembretes-lista/lembretes-lista.component';
import { InserirLembretesComponent } from './lembretes/inserir-lembretes/inserir-lembretes.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { SigninComponent } from './login/signin/signin.component';
import { LembreteService } from './lembretes/lembretes.service';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LembretesListaComponent,
    InserirLembretesComponent,
    CabecalhoComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
