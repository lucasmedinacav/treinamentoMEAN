import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "home/:code",
    component: HomeComponent
  },
  {
    path: "carrinho",
    component: CarrinhoComponent
  },
  {
    path : 'callback',
    component : HomeComponent
  },
  {
    path: "logado",
    component: AppComponent
  },
  {
    path: "logout",
    component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
