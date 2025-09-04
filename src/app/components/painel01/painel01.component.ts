import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel01',
  templateUrl: './painel01.component.html',
  styleUrls: ['./painel01.component.css']
})
export class Painel01Component implements OnInit {

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
