import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(public lembreteService: LembreteService, private loginService: LoginService, private router: Router) {
    this.lembreteService.userMail.subscribe((value) => {
      this.userMail = value;
      // alert(this.userMail)
    });
    this.lembreteService.logado.subscribe((value) => {
      this.logado = value;
    });
  }

  logout() {
    this.loginService.logout();
    this.logado = false;
    localStorage.setItem('user_ID', '');
    console.log(this.logado)
    this.router.navigateByUrl('/login');
    alert('Tenha um bom dia!')
  }

  ngOnInit(): void {}
}
