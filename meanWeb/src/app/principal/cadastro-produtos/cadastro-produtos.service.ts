import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { Produto } from "./produto";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class CadastroProdutosService {

    public enderecoEntrega : string = "Av. Brigadeiro Faria Lima, 999";
    public cep : string = "01452-000";
    public cidade : string = "São Paulo";
    public subtotal: number;
    public frete: string;
    public total: number;

    private _cadastroUrl = 'http://127.0.0.1:3002/produto/';

    public produtos = [];   
    constructor(private _http: Http) { }

    insertProduto(produto) { 
        var headers = new Headers();
        console.log(produto);
        headers.append("Content-Type", "application/json");
        return this._http.post(this._cadastroUrl + 'inserirProduto', JSON.stringify(produto), { headers: headers }).subscribe(() => {
                console.log("Insercao de produto" + JSON.stringify(produto));
            }, erro => console.log(erro));

    }

    listaProdutos(): Observable<Produto[]> {
        return this._http.get(this._cadastroUrl + 'listaProdutos')
            .map((response: Response) => <Produto[]> response.json())
            .catch(this.handleError);

    }

    buscarProduto(id: string): Observable<Produto> {
        return this._http.get(this._cadastroUrl + 'buscarProduto/' + id)
        .map((response: Response) => <Produto> response.json())
        .catch(this.handleError);

    }
    getValoresTotalProdutos(){
        this.total = 0;
        for(let produto of this.produtos){
            this.total += (produto.valor * produto.quantidade);
            
        }
        this.subtotal = this.total;
        return this.total;
    }


    setProdutoCarrinho(produto){
        this.produtos.push(produto);
    }

    getProdutosCarrinho(){
        return this.produtos;
    }
 

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}