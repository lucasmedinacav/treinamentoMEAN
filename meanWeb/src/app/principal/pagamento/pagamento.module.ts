import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartaoComponent } from './cartao.component'
import { PagamentoComponent } from './pagamento.component';
import { PagamentoRoutingModule } from './pagamento-routing.module';



@NgModule({
  declarations: [
    PagamentoComponent,
    CartaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagamentoRoutingModule    
  ],
  exports: [
    PagamentoComponent,
    CartaoComponent
  ],
  providers: []
})
export class PagamentoModule { }
