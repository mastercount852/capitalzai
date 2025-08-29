import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private translate: TranslateService) { }

  languages = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'zh-TW', label: '中文（繁體）', flag: '🇹🇼' }
  ];


  currentLang = this.languages[0].label;
  currentFlag = this.languages[0].flag;
  atTop = true;

  ngOnInit(): void {
    this.onScroll();

    // sincroniza o rótulo/emoji com o idioma atual
    const code = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
    const found = this.languages.find(l => l.code === code) ?? this.languages[1]; // en
    this.currentLang = found.label;
    this.currentFlag = found.flag;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.atTop = (window.scrollY || window.pageYOffset || 0) < 10;
  }

  setLang(lang: { code: string; label: string; flag: string }): void {
    this.translate.use(lang.code);       // <<< muda o idioma de fato
    localStorage.setItem('lang', lang.code);
    this.currentLang = lang.label;
    this.currentFlag = lang.flag;
  }

  closeMenu() {
    const navbar = document.getElementById('mainNav');
    if (navbar?.classList.contains('show')) {
      // Fecha o collapse do Bootstrap
      const bsCollapse = new (window as any).bootstrap.Collapse(navbar, {
        toggle: false
      });
      bsCollapse.hide();
    }
  }

}
