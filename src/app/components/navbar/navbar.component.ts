import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  constructor(private translate: TranslateService) { }

  languages = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'zh-TW', label: '中文（繁體）', flag: '🇹🇼' }
  ];

  currentLang = this.languages[0].label; // exibido no topo
  currentFlag = this.languages[0].flag;
  atTop = true;

  private langSub?: Subscription;

  ngOnInit(): void {
    // registra os códigos no translate
    this.translate.addLangs(this.languages.map(l => l.code));
    this.translate.setDefaultLang('pt');

    // idioma inicial: salvo > browser (pt/en/es/ru/zh-TW) > pt
    const saved = localStorage.getItem('lang') || '';
    const browserCulture = this.translate.getBrowserCultureLang() || '';
    const browserSimple = this.translate.getBrowserLang() || '';

    const all = this.languages.map(l => l.code);
    const initial =
      (saved && all.includes(saved)) ? saved :
        (browserCulture && all.includes(browserCulture)) ? browserCulture :
          (browserSimple && all.includes(browserSimple)) ? browserSimple :
            'pt';

    this.translate.use(initial);
    this.updateCurrentLang(initial);

    // mantém flag/label sincronizados quando o lang mudar em outro lugar
    this.langSub = this.translate.onLangChange.subscribe(e => {
      this.updateCurrentLang(e.lang);
    });

    this.onScroll();
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.atTop = (window.scrollY || window.pageYOffset || 0) < 10;
  }

  setLang(lang: { code: string; label: string; flag: string }): void {
    this.translate.use(lang.code);
    localStorage.setItem('lang', lang.code);
    this.updateCurrentLang(lang.code);
  }

  private updateCurrentLang(code: string): void {
    const found = this.languages.find(l => l.code === code) || this.languages[0];
    this.currentLang = found.label;
    this.currentFlag = found.flag;
  }

  closeMenu() {
    const navbar = document.getElementById('mainNav');
    if (navbar?.classList.contains('show')) {
      const bsCollapse = new (window as any).bootstrap.Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    }
  }

  routerLogin() {
    window.open('https://app.capitalzai.com/', '_blank');
  }

  routerCadastro() {
    window.open('https://app.capitalzai.com/user-registration', '_blank');
  }
}
