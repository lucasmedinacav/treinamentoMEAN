import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
  moduleId: module.id,
  selector: 'app-listar-produtos',
  templateUrl: 'listar-produtos.component.html'
})


export class ListarProdutosComponent {
  public produtos: any = null;
  public produtosSelecionados = [];;

  constructor(private _http: Http) {
    this.listarProdutos();
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
    } 
  }

  private listarProdutos() {
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });

    this._http.get('http://localhost:3002/produto/buscar').map((res: Response) => res.json()).subscribe(data => {
      this.produtos = data;
      console.log(this.produtos);
    });
  }

}
