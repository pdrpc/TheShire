import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginService } from './login.service';
import { takeUntil } from 'rxjs/operators';
import { LembreteService } from '../lembretes/lembretes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    // private router : Router,
    private authService: LoginService,
    private lembrete_service: LembreteService
  ) // private dataSharingService : ProdutosHeaderServiceService
  {}
  message: string;
  returnUrl: string;
  submitted: boolean;
  public user_size;
  id_usuario;
  senha;
  logado = false;

  loginForm = new FormGroup({
    id_usuario: new FormControl(
      '',
      Validators.nullValidator && Validators.required
    ),
    senha: new FormControl('', Validators.nullValidator && Validators.required),
  });
  createUser = new FormGroup({
    nome: new FormControl('', Validators.nullValidator && Validators.required),
    email: new FormControl('', Validators.nullValidator && Validators.required),
    senha: new FormControl('', Validators.nullValidator && Validators.required),
    // nick: new FormControl('', Validators.nullValidator && Validators.required),
  });

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   id_usuario: ['', Validators.required],
    //   senha: ['', Validators.required]
    // });
    // this.authService.logout();
  }
  get f() {
    return this.loginForm.controls;
  }
  login() {
    if (this.loginForm.invalid) {
      alert(this.loginForm);
      return;
    } else {
      this.authService.GetUser(this.loginForm.value).pipe(takeUntil(this.destroy$)).subscribe((data) => {
          console.log('message::::', data);
          if (data != null) {
            this.user_size = data;
            alert(this.user_size);
            for (let index = 0; index < this.user_size.length; index++) {
              this.id_usuario = this.user_size[index]['user_mail'];
              this.senha = this.user_size[index]['user_pass'];
              var nome = this.user_size[index]['nome_usuario'];
            }
            if (
              this.f.id_usuario.value == this.id_usuario &&
              this.f.senha.value == this.senha
            ) {
              console.log('Logado');
              this.submitted = true;
              sessionStorage.setItem('isLoggedIn', 'true');
              sessionStorage.setItem('user_ID', this.f.id_usuario.value);
              this.logado = true;
              this.lembrete_service.logado.next(true);
              this.lembrete_service.userMail.next(this.id_usuario);
              // alert(this.id_usuario)
              // this.dataSharingService.isUserLoggedIn.next(true);
              // this.lembrete_service.nomeUser.next(nome);
              // this.router.navigate([this.returnUrl]);
            } else {
              this.message = 'Email ou senha incorretos!';
            }
          }
        });
    }
  }

  destroy$: Subject<boolean> = new Subject<boolean>();
  create_user() {
    this.authService
      .CreateUser(this.createUser.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log('message::::', data);
        if (data != null) {
          alert('Usuario inserido com sucesso');
        }
      });
  }

  logout() {
    this.authService.logout();
    this.logado = false;
    this.lembrete_service.logado.next(false);
    this.lembrete_service.userMail.next("");
    sessionStorage.setItem('user_ID', '');
  }

  
}
