import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentoComponent } from './Pagamento.component';
import { CartaoComponent } from './cartao/cartao.component';
import { PagamentoComprovanteComponent } from './pagamento-comprovante/pagamento-comprovante.componente';

const routes: Routes = [
  {
    path: 'cartao',
    component: CartaoComponent
  },
  {
    path : 'comprovantePagamento',
    component : PagamentoComprovanteComponent
  },
  {
    path: "pagamento",
    component: PagamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }
