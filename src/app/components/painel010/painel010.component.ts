import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel010',
  templateUrl: './painel010.component.html',
  styleUrls: ['./painel010.component.css']
})
export class Painel010Component implements OnInit, OnDestroy {
  countries = [
    { code: 'BR', name: 'Brasil', flag: '🇧🇷' },
    { code: 'PT', name: 'Portugal', flag: '🇵🇹' },
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'ES', name: 'España', flag: '🇪🇸' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'DE', name: 'Deutschland', flag: '🇩🇪' }
  ];

  subjects = [
    'Abertura de conta',
    'Depósitos e saques',
    'Verificação / KYC',
    'Plataforma / App',
    'Parcerias e Afiliados',
    'Outros'
  ];

  // Modal state
  showModal = false;
  isLoading = false;
  sent = false;
  private timerId: any = null;

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.timerId) clearTimeout(this.timerId);
  }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    const form = ev.target as HTMLFormElement;

    // Validação HTML5
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Simular envio
    this.showModal = true;
    this.isLoading = true;
    this.sent = false;

    // simula 3 a 7 segundos
    const delay = 3000 + Math.floor(Math.random() * 4000);
    this.timerId = setTimeout(() => {
      this.isLoading = false;
      this.sent = true;
      form.reset();
    }, delay);
  }

  closeModal(): void {
    this.showModal = false;
    this.isLoading = false;
    this.sent = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  overlayClick(evt: MouseEvent): void {
    // não fecha enquanto estiver carregando
    if (!this.isLoading) this.closeModal();
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    if (this.showModal && !this.isLoading) this.closeModal();
  }
}
