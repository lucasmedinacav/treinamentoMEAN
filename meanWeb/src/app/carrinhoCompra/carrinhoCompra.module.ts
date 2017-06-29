import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaCarrinhoCompraComponent } from './listaCarrinhoCompra.component';
import { CarrinhoCompraRoutingModule } from './carrinhoCompra-routing.module';

import { CarrinhoServiceModule } from './carrinho.service.module'

@NgModule({
  declarations: [
    ListaCarrinhoCompraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CarrinhoCompraRoutingModule
    
  ],
  exports: [
    ListaCarrinhoCompraComponent
  ],
  providers: [
    CarrinhoServiceModule
  ],
  bootstrap: [ListaCarrinhoCompraComponent]
})
export class CarrinhoCompraModule { }
