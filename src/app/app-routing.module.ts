import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TiposDeContaComponent } from './pages/tipos-de-conta/tipos-de-conta.component';
import { Painel09Component } from './components/painel09/painel09.component';
import { Painel010Component } from './components/painel010/painel010.component';
import { AtivosComponent } from './pages/ativos/ativos.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { ComoFuncionaComponent } from './pages/como-funciona/como-funciona.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Account-types', component: TiposDeContaComponent },
  { path: 'faq', component: Painel09Component },
  { path: 'contact', component: Painel010Component },
  { path: 'actives', component: AtivosComponent },
  { path: 'about-us', component: SobreNosComponent },
  { path: 'How-it-works', component: ComoFuncionaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
