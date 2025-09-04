import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel08',
  templateUrl: './painel08.component.html',
  styleUrls: ['./painel08.component.css']
})
export class Painel08Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  routerLogin() {
    window.location.href = 'https://app.capitalzai.com/';
  }

  routerCadastro() {
    window.location.href = 'https://app.capitalzai.com/user-registration';
  }
}
