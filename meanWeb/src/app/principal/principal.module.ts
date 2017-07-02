import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { HomeComponent } from './home/home.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastroProdutosModule } from './cadastro-produtos/cadastro-produtos.module';

@NgModule({
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    CadastroProdutosModule
  ],
  exports:[HomeComponent],
  declarations: [HomeComponent, CarrinhoComponent],
  providers:[]
})
export class PrincipalModule { }
