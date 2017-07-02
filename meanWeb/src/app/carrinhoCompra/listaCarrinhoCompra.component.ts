import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'

import { CarrinhoServiceModule } from './carrinho.service.module'

@Component({
  moduleId: module.id,
  selector: 'app-lista-carrinho',
  templateUrl: 'listaCarrinhoCompra.component.html'
})


export class ListaCarrinhoCompraComponent {
  public produtos: any = null;
  constructor(private _http: Http) {
      this.listarProdutos();
  }

  private listarProdutos() {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });
    
    this._http.get('http://localhost:3002/produto/buscar').map((res: Response) => res.json())
      .subscribe(data => {
        this.produtos = data;
        console.log(this.produtos);
      });
  }

  ordemPagamento() {
    
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
}
