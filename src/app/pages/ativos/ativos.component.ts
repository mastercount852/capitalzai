import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css']
})
export class AtivosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  routerLogin() {
    window.open('https://app.capitalzai.com/', '_blank');
  }

  routerCadastro() {
    window.open('https://app.capitalzai.com/user-registration', '_blank');
  }
}
