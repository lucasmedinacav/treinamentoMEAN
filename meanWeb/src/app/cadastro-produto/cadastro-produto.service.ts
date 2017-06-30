import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { Produto } from "./produto";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CadastroProdutoService {
    private _cadastroUrl = 'http://127.0.0.1:3002/produto/inserirProduto';

    constructor(private _http: Http) { }

    insertProduto(produto: Produto) {
        console.log("inicio do metodo");
        var headers = new Headers();
        console.log(produto);
        headers.append("Content-Type", "aplication/json");
        return this._http.post(this._cadastroUrl, JSON.stringify(produto), { headers: headers })
            .subscribe(() => {
                console.log("Insercao de produto" + JSON.stringify(produto));
            }, erro => console.log(erro));

    }
}