import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel03',
  templateUrl: './painel03.component.html',
  styleUrls: ['./painel03.component.css']
})
export class Painel03Component implements OnInit {

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
