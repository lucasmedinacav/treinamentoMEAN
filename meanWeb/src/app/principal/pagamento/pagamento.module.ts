import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartaoComponent } from './cartao.component';
import { PagamentoComponent } from './pagamento.component';
import { PagamentoComprovanteComponent } from './pagamento-comprovante.componente';
import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoService } from './pagamento.service'


@NgModule({
  declarations: [
    PagamentoComponent,
    CartaoComponent,
    PagamentoComprovanteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagamentoRoutingModule    
  ],
  exports: [
    PagamentoComponent,
    CartaoComponent,
    PagamentoComprovanteComponent
  ],
  providers: [
    PagamentoService
  ]
})
export class PagamentoModule { }
