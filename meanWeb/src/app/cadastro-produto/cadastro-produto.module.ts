import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CadastroProdutoRoutingModule } from './cadastro-produto-routing.module';
import { CadastroProdutoComponent } from './cadastro-produto.component';
import { CadastroProdutoService } from "./cadastro-produto.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CadastroProdutoRoutingModule, HttpModule, FormsModule, ReactiveFormsModule ],
  declarations: [CadastroProdutoComponent],
  exports: [CadastroProdutoComponent],
  providers: [CadastroProdutoService]
})
export class CadastroProdutoModule { }
