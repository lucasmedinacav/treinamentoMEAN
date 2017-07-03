import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentoConfirmacaoComponent } from './pagamento-confirmacao/pagamento-confirmacao.component';
import { CartaoComponent } from './pagamento-confirmacao/cartao/cartao.component';
import { PagamentoComprovanteComponent } from './pagamento-comprovante/pagamento-comprovante.componente';
import { BoletoComponent } from './pagamento-confirmacao/boleto/boleto.component';

const routes: Routes = [
  {
    path: "pagamento",
    component: PagamentoConfirmacaoComponent,
    children: [
      {
        path: '', redirectTo: 'cartao', pathMatch: 'full',
      },
      {
        path: 'cartao',
        component: CartaoComponent
      },
      {
        path: 'boleto',
        component: BoletoComponent
      },
    ]
  },

  {
    path: 'comprovantePagamento',
    component: PagamentoComprovanteComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }
