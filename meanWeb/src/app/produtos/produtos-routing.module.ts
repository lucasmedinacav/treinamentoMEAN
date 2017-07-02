import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CadastrarProdutosComponent } from './cadastrar-produtos.component';
import { ListarProdutosComponent } from './listar-produtos.component'; 

const routes: Routes = [
  {
    path: 'cadastrarProdutos',
    component: CadastrarProdutosComponent
  },
  {
    path: 'listarProdutos',
    component: ListarProdutosComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
