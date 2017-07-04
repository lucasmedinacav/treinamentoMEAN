import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

declare var moip: any;


@Injectable()
export class PagamentoService {
    private _cadastroUrl = 'http://127.0.0.1:3002/moip/';

    public produtos = [];
    constructor(private _http: Http) { }

    efeturarPagamentoPorCartaoCredito(settings, nome, email, formaPagamento, valor) {
        var urlMontadaRequisicao = '?nomeComprador='+nome+'&emailComprador='+email+'&formaPagamento='+formaPagamento+'&valorPagamento='+valor;
        return this._http.get(this._cadastroUrl + 'obterordempagamento'+urlMontadaRequisicao).map((res: Response) => res.json()).subscribe(data => {
            var ordemPagamento = JSON.stringify(data);
            var strResposta = "{"+ data.substring(90,238)+ "}";
            var objResposta = JSON.parse(strResposta); 
            this.efeturarPagamento(settings, objResposta)
        });
    }
    
    efeturarPagamentoPorBoleto(settings,  nome, email, formaPagamento, valor) {
        var urlMontadaRequisicao = '?nomeComprador='+nome+'&emailComprador='+email+'&formaPagamento='+formaPagamento+'&valorPagamento='+valor;
        return this._http.get(this._cadastroUrl + 'obterordempagamento'+urlMontadaRequisicao).map((res: Response) => res.json()).subscribe(data => {
            var ordemPagamento = JSON.stringify(data);
            var strResposta = "{"+ data.substring(90,238)+ "}";
            var objResposta = JSON.parse(strResposta); 
            this.efeturarPagamento(settings, objResposta)
        });
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    efeturarPagamento(settings, resposta){  
        var token = resposta['Resposta'][0]['Token'][0];
        moip.efetuarPagamento(settings, token); 
    } 
}