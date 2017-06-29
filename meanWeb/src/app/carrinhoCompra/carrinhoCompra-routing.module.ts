import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCarrinhoCompraComponent } from './listaCarrinhoCompra.component';

const routes: Routes = [
  {
    path: 'carrinhoCompra',
    component: ListaCarrinhoCompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrinhoCompraRoutingModule { }
