import { Component, OnInit } from '@angular/core';

interface FaqItem { q: string; a: string; }

@Component({
  selector: 'app-painel09',
  templateUrl: './painel09.component.html',
  styleUrls: ['./painel09.component.css']
})
export class Painel09Component implements OnInit {
  faqs: FaqItem[] = [
    {
      q: 'O que é a TradeMax Pro e que mercados posso operar?',
      a: 'Somos uma corretora de mercados financeiros que oferece acesso a Forex, Ações, Índices, Commodities e Cripto. Você opera via Web Trader e apps iOS/Android com execução rápida, spreads competitivos e ferramentas profissionais.'
    },
    {
      q: 'Como faço para abrir conta e quanto é o depósito mínimo?',
      a: 'Basta se cadastrar, concluir o KYC e efetuar um depósito. O valor mínimo depende do tipo de conta (ex.: Standard a partir de $50 e Pro a partir de $100). Você pode começar com pouco e aumentar conforme sua estratégia.'
    },
    {
      q: 'Quais métodos de depósito e saque estão disponíveis?',
      a: 'PIX, cartão, transferência bancária e carteiras digitais. Os depósitos costumam ser imediatos; saques são processados com prioridade em até 24h úteis (o prazo final depende do método/banco).'
    },
    {
      q: 'Há taxas em depósitos ou saques?',
      a: 'Não cobramos tarifas para depósitos e saques nos métodos suportados. O seu banco ou emissor do cartão pode aplicar custos próprios.'
    },
    {
      q: 'Quais são os custos de negociação (spreads e comissões)?',
      a: 'Você paga o spread (diferença entre compra e venda) e, conforme o tipo de conta, uma comissão por lote negociado (ex.: conta Pro cobra $5 por lote redondo). Consultas detalhadas ficam na página de “Taxas & Spreads”.'
    },
    {
      q: 'Qual a alavancagem disponível e quais os riscos?',
      a: 'Até 1:500 dependendo do instrumento e do perfil de risco. Alavancagem amplia ganhos e perdas; use gestão de risco (stops, tamanho de posição, limites diários) e opere com responsabilidade.'
    },
    {
      q: 'Posso fazer scalping, hedging e usar EAs (robôs)?',
      a: 'Sim. Estratégias como scalping e hedging são permitidas, e você pode integrar EAs/algoritmos conforme as políticas de uso justo e latência.'
    },
    {
      q: 'Vocês oferecem conta islâmica (swap-free)?',
      a: 'Sim, a conta islâmica está disponível mediante solicitação após a abertura. A estrutura de custos muda de swap para uma taxa administrativa quando aplicável.'
    },
    {
      q: 'Como a segurança dos meus fundos é garantida?',
      a: 'Usamos criptografia SSL, autenticação reforçada, segregação de fundos de clientes e monitoração contínua de risco operacional.'
    },
    {
      q: 'A plataforma é fácil de usar para iniciantes?',
      a: 'Sim. O layout é intuitivo, com relatórios de P/L, alertas, calendário econômico e tutoriais. Você também pode começar pela conta demo para praticar sem risco.'
    }
  ];

  active = 0; // índice aberto por padrão (0 = primeiro); use -1 para todos fechados

  ngOnInit(): void { }

  toggle(i: number): void {
    this.active = this.active === i ? -1 : i;
  }
}
