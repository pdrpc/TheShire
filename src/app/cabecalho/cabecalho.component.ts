import { Component, OnInit } from '@angular/core';
import { LembreteService } from '../lembretes/lembretes.service';
import { LoginService } from '../login/login.service'

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  userMail: string;
  logado;
  constructor(public lembreteService: LembreteService, private loginService: LoginService) {
    this.lembreteService.userMail.subscribe((value) => {
      this.userMail = value;
      // alert(this.userMail)
    });
    this.lembreteService.logado.subscribe((value) => {
      this.logado = value;
    });
  }

  logout() {
    alert('loged out')
    this.loginService.logout();
    this.logado = false;
    localStorage.setItem('user_ID', '');
    console.log(this.logado)
  }

  ngOnInit(): void {}
}
