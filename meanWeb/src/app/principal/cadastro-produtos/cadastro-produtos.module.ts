import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CadastroProdutosRoutingModule } from './cadastro-produtos-routing.module';
import { CadastroProdutosComponent } from './cadastro-produtos.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CadastroProdutosService } from './cadastro-produtos.service';

@NgModule({
  imports: [CadastroProdutosRoutingModule, HttpModule, FormsModule, ReactiveFormsModule],
  declarations: [CadastroProdutosComponent],
  exports: [CadastroProdutosComponent],
  providers: [CadastroProdutosService]
})
export class CadastroProdutosModule { }
