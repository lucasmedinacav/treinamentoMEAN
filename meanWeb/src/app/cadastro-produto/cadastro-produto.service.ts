import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CadastroProdutoService{
    private _cadastroUrl = '';

    constructor(private _http: Http){}

    insertProdutos(): Observable<Produto> {
        return this._http.put(this._cadastroUrl)
                    .map((response: Response) => <Produto>)???????
    } 
}