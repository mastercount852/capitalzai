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
    window.open('https://app.capitalzai.com/', '_blank');
  }

  routerCadastro() {
    window.open('https://app.capitalzai.com/user-registration', '_blank');
  }
}
