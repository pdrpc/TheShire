import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { lembretesService } from '../lembretes.service';

@Component({
  selector: 'app-inserir-lembretes',
  templateUrl: './inserir-lembretes.component.html',
  styleUrls: ['./inserir-lembretes.component.css']
})
export class InserirLembretesComponent{

  constructor(public lembretesService: lembretesService) {

  }

    onAdicionarLembretes(form: NgForm) {
    if (form.invalid) return;
    this.lembretesService.adicionarLembrete(
      form.value.titulo,
      // aqui eu real n sei:-: form.value.getDate(),
      form.value.data,
      form.value.body;
    );
    form.resetForm();
  }
}
