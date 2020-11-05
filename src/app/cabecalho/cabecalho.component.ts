import { Component, OnInit } from '@angular/core';
import { LembreteService } from '../lembretes/lembretes.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  userMail: string;
  constructor(public lembreteService: LembreteService) {
    this.lembreteService.userMail.subscribe((value) => {
      this.userMail = value;
      // alert(this.userMail)
    });
  }

  ngOnInit(): void {}
}
