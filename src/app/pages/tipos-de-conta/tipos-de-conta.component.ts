import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos-de-conta',
  templateUrl: './tipos-de-conta.component.html',
  styleUrls: ['./tipos-de-conta.component.css']
})
export class TiposDeContaComponent implements OnInit {

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
