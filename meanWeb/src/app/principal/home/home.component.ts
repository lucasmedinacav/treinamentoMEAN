import { Component, OnInit } from '@angular/core';
import { Produto } from '../cadastro-produtos/produto';
import { CadastroProdutosService } from '../cadastro-produtos/cadastro-produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: Produto[];
  errorMessage: string;  
  produtosSelecionados = []; 

  constructor(private cadastroProdutoService: CadastroProdutosService) { }

  ngOnInit() {
    this.cadastroProdutoService.listaProdutos().subscribe(produtos => {
      this.produtos = produtos,
        erro => this.errorMessage = <any>erro
    });
  }

  public selecionarProduto(produto) {
    if (!this.produtosSelecionados.find(
      (item) => {
        if (item._id == produto._id) {
          item.quantidade++;
          return true;
        }
        return false
      })) {
      produto.quantidade = 1;
      this.produtosSelecionados.push(produto);
      this.cadastroProdutoService.setProdutoCarrinho(produto); 
    } 
  }

}
