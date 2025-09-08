import { Component, OnDestroy, OnInit } from '@angular/core';

interface Testimonial {
  author: string;
  date: string;
  time: string;
  rating: number;  // 0..5
  text: string;
}

@Component({
  selector: 'app-painel06',
  templateUrl: './painel06.component.html',
  styleUrls: ['./painel06.component.css']
})
export class Painel06Component implements OnInit, OnDestroy {

  testimonials: Testimonial[] = [
    {
      author: 'James Walker',
      date: '2025-05-24',
      time: '22:34',
      rating: 5,
      text:
        'Deposit via PIX was instant and I could start trading right away. The platform is straightforward, orders execute fast and I closed the week profitable without hassle.'
    },
    {
      author: 'Lucía Fernández',
      date: '2025-06-08',
      time: '10:12',
      rating: 5,
      text:
        'Onboarding sencillo, verificación en minutos e interfaz intuitiva. En pocos días ya tenía buen rendimiento y retiraba parte de las ganancias fácilmente.'
    },
    {
      author: 'Dmitry Ivanov',
      date: '2025-07-03',
      time: '18:51',
      rating: 4,
      text:
        'Стабильное исполнение, конкурентные спреды и мгновенные депозиты. Кривая обучения была короткой, и результаты появились с самого начала.'
    },
    {
      author: 'Katrin Müller',
      date: '2025-07-21',
      time: '09:27',
      rating: 5,
      text:
        'Einfache Risikowerkzeuge und klare Berichte. Ich habe meine Disziplin verbessert und die Trades wurden dadurch konsistenter profitabel.'
    },
    {
      author: 'Carlos Pereira',
      date: '2025-08-10',
      time: '15:06',
      rating: 5,
      text:
        'Depósito e saque sem fricção. Opero no celular e no desktop com a mesma agilidade. Estou satisfeito com a performance e a transparência nas taxas.'
    },
    {
      author: 'Sophie Miller',
      date: '2025-02-18',
      time: '08:42',
      rating: 5,
      text:
        'Started with a small amount to test. Execution was fast and support answered within seconds. Closed the month with good gains and withdrawal approved same day.'
    },
    {
      author: 'Diego Martínez',
      date: '2025-03-05',
      time: '21:10',
      rating: 4,
      text:
        'La sincronización entre web y app es impecable. Entradas y salidas rápidas me ayudaron a capturar movimientos y mantener resultados diarios positivos.'
    },
    {
      author: 'Anna Petrova',
      date: '2025-03-22',
      time: '13:55',
      rating: 5,
      text:
        'Мгновенные депозиты, лёгкая платформа и достаточные индикаторы для моего сетапа. За несколько недель удалось безопасно увеличить капитал.'
    },
    {
      author: 'Sebastian Fischer',
      date: '2025-04-02',
      time: '11:03',
      rating: 5,
      text:
        'Keine Abstürze in Spitzenzeiten und großartige Ausführungsgeschwindigkeit. Einfaches Risikomanagement spiegelte sich direkt in meinem Nettogewinn wider.'
    },
    {
      author: 'Camila Rocha',
      date: '2025-04-19',
      time: '16:20',
      rating: 5,
      text:
        'Relatórios de P/L e métricas por ativo ajudaram a ajustar meu portfólio. Resultado: operações mais assertivas e retiradas semanais sem burocracia.'
    },
    {
      author: 'Liam Thompson',
      date: '2025-05-01',
      time: '19:14',
      rating: 5,
      text:
        'The VIP program brought excellent conditions. The difference in costs and support had a direct impact on my final results.'
    },
    {
      author: 'Valentina Gómez',
      date: '2025-05-16',
      time: '07:28',
      rating: 4,
      text:
        'Incluso con 4G, todo fluye bien. Deposité, operé y retiré parte de las ganancias en el mismo día. Solo me gustaría más widgets en el panel.'
    },
    {
      author: 'Sergey Volkov',
      date: '2025-06-01',
      time: '12:47',
      rating: 5,
      text:
        'Интегрированный экономический календарь и уведомления экономят время. Лучшие результаты и меньше стресса при управлении сделками.'
    },
    {
      author: 'Markus Keller',
      date: '2025-06-15',
      time: '20:05',
      rating: 5,
      text:
        'Einzahlungen per Karte und PIX ohne Überraschungen bei den Gebühren. Alles im Verlauf nachvollziehbar und Gewinne schnell ausgezahlt.'
    },
    {
      author: 'Tatiane Silva',
      date: '2025-06-28',
      time: '14:11',
      rating: 4,
      text:
        'Interface clara e atalhos úteis. Com poucos cliques monto minha ordem e consigo gerenciar stops. Meu desempenho mensal melhorou.'
    },
    {
      author: 'Matthew Clark',
      date: '2025-07-07',
      time: '09:39',
      rating: 5,
      text:
        'Support replied in three minutes and solved the issue. Execution remains fast and deposits hit the account instantly.'
    },
    {
      author: 'Carolina Álvarez',
      date: '2025-07-19',
      time: '22:02',
      rating: 5,
      text:
        'Plataforma estable, costos competitivos y retiros cumplidos en plazo. Logré consistencia y retiré ganancias sin complicación.'
    },
    {
      author: 'Andrei Morozov',
      date: '2025-08-03',
      time: '17:26',
      rating: 5,
      text:
        'Институциональные инструменты и быстрая реализация изменили мои стратегии. Неделя завершена с отличным результатом.'
    },
    {
      author: 'Laura Neumann',
      date: '2025-08-17',
      time: '06:58',
      rating: 5,
      text:
        'Einfache Einrichtung täglicher Verlustlimits. Das brachte Disziplin und half, über den Monat hinweg konstant profitabel zu bleiben.'
    },
    {
      author: 'Felipe Araújo',
      date: '2025-09-01',
      time: '11:32',
      rating: 5,
      text:
        'Depositei, testei a plataforma e já no primeiro ciclo tive retorno acima do esperado. O saque caiu rápido e sem taxas ocultas.'
    }
  ];




  index = 0;
  current = this.testimonials[0];
  private timerId?: any;
  five = Array(5); // para renderizar as estrelas

  ngOnInit(): void {
    this.startAuto();
  }

  ngOnDestroy(): void {
    this.stopAuto();
  }

  next(): void {
    this.index = (this.index + 1) % this.testimonials.length;
    this.current = this.testimonials[this.index];
  }

  prev(): void {
    this.index = (this.index - 1 + this.testimonials.length) % this.testimonials.length;
    this.current = this.testimonials[this.index];
  }

  private startAuto(): void {
    this.stopAuto();
    this.timerId = setInterval(() => this.next(), 6000); // troca a cada 6s
  }

  private stopAuto(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = undefined;
    }
  }

  pause(): void { this.stopAuto(); }
  resume(): void { this.startAuto(); }

  routerLogin() {
    window.location.href = 'https://app.capitalzai.com/';
  }

  routerCadastro() {
    window.location.href = 'https://app.capitalzai.com/user-registration';
  }
}
