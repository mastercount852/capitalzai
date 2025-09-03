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
    window.open('https://app.capitalzai.com/', '_blank');
  }

  routerCadastro() {
    window.open('https://app.capitalzai.com/user-registration', '_blank');
  }

}
