import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { HomeComponent } from './home/home.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@NgModule({
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ],
  exports:[HomeComponent],
  declarations: [HomeComponent, CadastroProdutosComponent, CarrinhoComponent]
})
export class PrincipalModule { }
