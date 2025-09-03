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
    window.open('https://app.capitalzai.com/', '_blank');
  }

  routerCadastro() {
    window.open('https://app.capitalzai.com/user-registration', '_blank');
  }
}
