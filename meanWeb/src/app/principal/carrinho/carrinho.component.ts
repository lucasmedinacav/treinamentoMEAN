import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import { CadastroProdutosService } from '../cadastro-produtos/cadastro-produtos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  
  produtos: any = null;  
  errorMessage: string;  
  produtosSelecionados = [];

  constructor(private _http: Http, private router : Router, private cadastroProdutoService: CadastroProdutosService) {
      this.produtos = this.cadastroProdutoService.getProdutosCarrinho(); 
  }

  ngOnInit() {
  }

  

  private listarProdutos() {
    this.cadastroProdutoService.listaProdutos().subscribe(produtos => {
      this.produtos = produtos,
        erro => this.errorMessage = <any>erro
    });
  }

  getValorTotal() {
    let total = 0;
    if(this.produtos != undefined && this.produtos != null){
      this.produtos.forEach(produto => {
        total += (produto.quantidade * produto.valor);
      });
      return total;
    }
    
    
    return total;
  }

  onComprar(){
    this.cadastroProdutoService.total = this.getValorTotal();
    this.router.navigateByUrl('/pagamento');
  }
  

}