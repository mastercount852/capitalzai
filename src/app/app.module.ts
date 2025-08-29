import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Painel01Component } from './components/painel01/painel01.component';
import { Painel02Component } from './components/painel02/painel02.component';
import { Painel03Component } from './components/painel03/painel03.component';
import { Painel04Component } from './components/painel04/painel04.component';
import { Painel05Component } from './components/painel05/painel05.component';
import { Painel06Component } from './components/painel06/painel06.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TiposDeContaComponent } from './pages/tipos-de-conta/tipos-de-conta.component';
import { Painel07Component } from './components/painel07/painel07.component';
import { Painel08Component } from './components/painel08/painel08.component';
import { Painel09Component } from './components/painel09/painel09.component';
import { Painel010Component } from './components/painel010/painel010.component';
import { AtivosComponent } from './pages/ativos/ativos.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Painel01Component,
    Painel02Component,
    Painel03Component,
    Painel04Component,
    Painel05Component,
    Painel06Component,
    FooterComponent,
    NavbarComponent,
    TiposDeContaComponent,
    Painel07Component,
    Painel08Component,
    Painel09Component,
    Painel010Component,
    AtivosComponent,
    SobreNosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
