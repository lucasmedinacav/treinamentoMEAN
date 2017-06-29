import { NgModule } from '@angular/core';
import { CadastroProdutoRoutingModule } from './cadastro-produto-routing.module';
import { CadastroProdutoComponent } from './cadastro-produto.component';

@NgModule({
  imports: [CadastroProdutoRoutingModule],
  declarations: [CadastroProdutoComponent],
  exports: [CadastroProdutoComponent]
})
export class CadastroProdutoModule { }
