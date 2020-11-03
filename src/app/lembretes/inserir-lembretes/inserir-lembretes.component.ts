import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LembreteService } from '../lembretes.service';

@Component({
  selector: 'app-inserir-lembretes',
  templateUrl: './inserir-lembretes.component.html',
  styleUrls: ['./inserir-lembretes.component.css']
})
export class InserirLembretesComponent implements OnInit{
  islogged = false;

  constructor(public lembreteService: LembreteService) {


  }
  ngOnInit(): void {
    alert(sessionStorage.getItem('isLoggedIn') + " " + this.islogged);
    if(sessionStorage.getItem('isLoggedIn') == 'true'){
      this.islogged= true;
    }
  }

    onAdicionarLembretes(form: NgForm) {
    if (form.invalid) return;
    this.lembreteService.adicionarLembrete(
      form.value.titulo,
      form.value.dataCad,
      form.value.dataAtv,
      form.value.body
    );
    form.resetForm();
  }
}


/*titulo: titulo,
  dataCad: dataCad,
  dataAtv: dataAtv,
  body: body*/
