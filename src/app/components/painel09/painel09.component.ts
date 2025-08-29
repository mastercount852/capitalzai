import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel09',
  templateUrl: './painel09.component.html',
  styleUrls: ['./painel09.component.css']
})
export class Painel09Component implements OnInit {
  active = 0; // 0 = primeiro aberto; use -1 para todos fechados

  ngOnInit(): void { }

  toggle(i: number): void {
    this.active = this.active === i ? -1 : i;
  }
}
