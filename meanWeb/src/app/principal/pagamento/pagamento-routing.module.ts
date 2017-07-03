import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentoComponent } from './Pagamento.component';

import { CartaoComponent } from './cartao.component';

const routes: Routes = [
  {
    path: 'cartao',
    component: CartaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }
