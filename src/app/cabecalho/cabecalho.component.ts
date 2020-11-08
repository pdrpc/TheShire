import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LembreteService } from '../lembretes/lembretes.service';
import { LoginService } from '../login/login.service'

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {

  userMail: string;
  logado: boolean = false;

  constructor(public lembreteService: LembreteService, private loginService: LoginService, private router: Router) {
    
    const user_ID = localStorage.getItem('user_ID')
    const userMail = localStorage.getItem('user_mail')
    if(user_ID == null){
      this.router.navigateByUrl('/login');
    }else{
      Object.assign(this,{
        logado: true,
        userMail, 
      })
    }
  }

  logout() {
    this.loginService.logout();
    this.logado = false;
    localStorage.clear();
    console.log(this.logado)
    this.router.navigateByUrl('/login');
  }

  
}
