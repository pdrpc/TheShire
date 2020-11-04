import { Component, OnInit} from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Lembrete } from '../lembrete.model';
import { LembreteService } from '../lembretes.service';

@Component({
  selector: 'app-inserir-lembretes',
  templateUrl: './inserir-lembretes.component.html',
  styleUrls: ['./inserir-lembretes.component.css']
})
export class InserirLembretesComponent implements OnInit{

  private modo: string = 'criar';
  private titulo: string;
  public Lembrete: Lembrete;
  public estaCarregando: boolean = false;
  form: FormGroup;

  constructor(
    public lembreteService: LembreteService,
    public route: ActivatedRoute
    ){}


    ngOnInit() {
        this.form = new FormGroup({
          titulo: new FormControl(null, {
            validators: [Validators.required, Validators.minLength(3)],
          }),
          dataCad: new FormControl(null, {
            validators: [Validators.required],
          }),
          dataAtv: new FormControl(null, {
            validators: [Validators.required],
          }),
          body: new FormControl(null, {
            validators: [Validators.required],
          })
        });

        this.route.paramMap.subscribe((paramMap) => {
          if (paramMap.has('titulo')) {
            this.modo = 'editar';
            this.titulo = paramMap.get('titulo');
            this.estaCarregando = true;
            this.lembreteService.getLembretes(this.titulo).subscribe((dadosList) => {
              this.estaCarregando = false;
              this.Lembrete = {
                titulo: dadosList.titulo,
                dataCad: dadosList.dataCad,
                dataAtv: dadosList.dataAtv,
                body: dadosList.body,
              };
              this.form.setValue({
                titulo: this.Lembrete.titulo,
                dataCad: this.Lembrete.dataCad,
                dataAtv: this.Lembrete.dataAtv,
                body: this.Lembrete.body
              });
            });
          } else {
            this.modo = 'criar';
            this.titulo = null;
          }
        });
      }


    onAdicionarLembretes(form: NgForm) {
      if (this.form.invalid) return;
      this.estaCarregando = true;
      if (this.modo === 'criar') {
        this.lembreteService.adicionarLembrete(
          this.form.value.titulo,
          this.form.value.dataCad,
          this.form.value.dataAtv,
          this.form.value.body
        );
      } else {
        this.lembreteService.atualizarLembrete(
          this.form.value.titulo,
          this.form.value.dataCad,
          this.form.value.dataAtv,
          this.form.value.body
        );
      }
    this.form.reset();
  }
}
