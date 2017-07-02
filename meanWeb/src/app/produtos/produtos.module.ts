import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { CadastrarProdutosComponent } from './cadastrar-produtos.component';
import { ListarProdutosComponent } from './listar-produtos.component';

@NgModule({
  declarations: [
    CadastrarProdutosComponent,
    ListarProdutosComponent,
    FileSelectDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProdutosRoutingModule    
  ],
  exports: [
    CadastrarProdutosComponent,
    ListarProdutosComponent,
    FileSelectDirective
  ],
  providers: [
  ]
})
export class ProdutosModule { }
