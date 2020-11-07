import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { LoginService } from '../login.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: LoginService,

  ) { }

  ngOnInit(): void {
  }

  createUser = new FormGroup({
    nome: new FormControl('', Validators.nullValidator && Validators.required),
    email: new FormControl('', Validators.nullValidator && Validators.required),
    senha: new FormControl('', Validators.nullValidator && Validators.required),
    // nick: new FormControl('', Validators.nullValidator && Validators.required),
  });

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

}
