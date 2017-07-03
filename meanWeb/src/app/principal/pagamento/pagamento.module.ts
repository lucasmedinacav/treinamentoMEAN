import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartaoComponent } from './pagamento-confirmacao/cartao/cartao.component';
import { PagamentoConfirmacaoComponent } from './pagamento-confirmacao/pagamento-confirmacao.component';
import { PagamentoComprovanteComponent } from './pagamento-comprovante/pagamento-comprovante.componente';
import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoService } from './pagamento.service'
import { BoletoComponent } from './pagamento-confirmacao/boleto/boleto.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagamentoRoutingModule
  ], 
  declarations: [
    CartaoComponent,
    PagamentoComprovanteComponent,
    BoletoComponent,
    PagamentoConfirmacaoComponent
  ],
  providers: [
    PagamentoService
  ]
})
export class PagamentoModule { }


