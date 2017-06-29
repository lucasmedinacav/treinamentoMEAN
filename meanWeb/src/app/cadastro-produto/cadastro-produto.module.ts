import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CadastroProdutoRoutingModule } from './cadastro-produto-routing.module';
import { CadastroProdutoComponent } from './cadastro-produto.component';
import { CadastroProdutoService } from "./cadastro-produto.service";

@NgModule({
  imports: [CadastroProdutoRoutingModule, HttpModule],
  declarations: [CadastroProdutoComponent],
  exports: [CadastroProdutoComponent],
  providers: [CadastroProdutoService]
})
export class CadastroProdutoModule { }
