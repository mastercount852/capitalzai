import { Component } from '@angular/core';

@Component({
  selector: 'app-painel-manutencao',
  templateUrl: './painel-manutencao.component.html',
  styleUrls: ['./painel-manutencao.component.css']
})
export class PainelManutencaoComponent {
  scrollToNext(): void {
    const next = document.querySelector('app-painel01') as HTMLElement;
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  }
}
