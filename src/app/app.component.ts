import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pt']);
    translate.setDefaultLang('en');

    const saved = localStorage.getItem('lang');
    const browser = translate.getBrowserLang();
    const initial = (saved && ['en', 'pt'].includes(saved)) ? saved
      : (browser && ['en', 'pt'].includes(browser)) ? browser
        : 'en';

    translate.use(initial);
  }
}
