import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

import { CarrinhoServiceModule } from './carrinho.service.module'

@Component({
  moduleId: module.id,
  selector: 'app-lista-carrinho',
  templateUrl: 'listaCarrinhoCompra.component.html'
})


export class ListaCarrinhoCompraComponent {
  data: any = null;
  constructor(private _http: Http) {
      this.ordemPagamento();
  }

  ordemPagamento() {
    return this._http.get('http://localhost:3002/moip/obterordempagamento').map((res: Response) => res.json())
      .subscribe(data => {
        this.data = data;
        console.log(this.data);
      });
  }

}
