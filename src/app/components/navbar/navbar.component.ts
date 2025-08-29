import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  atTop = true;

  // declare primeiro
  languages = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh-Hant', label: '中文（繁體）', flag: '🇹🇼' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  ];

  // agora pode usar
  currentLang: string = this.languages[0].label;
  currentFlag: string = this.languages[0].flag;

  ngOnInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.atTop = (window.scrollY || window.pageYOffset || 0) < 10;
  }

  setLang(lang: { code: string; label: string; flag: string }): void {
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
