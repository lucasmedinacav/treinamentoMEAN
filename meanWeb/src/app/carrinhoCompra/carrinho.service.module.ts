import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarrinhoServiceModule{

    private url = "https://api.github.com/users/leoweverton";

    constructor(private http : Http){}

    getOrdemPagamento(){
        return this.http.get(this.url)
            .map((res:Response) => res.json());
    } 
}