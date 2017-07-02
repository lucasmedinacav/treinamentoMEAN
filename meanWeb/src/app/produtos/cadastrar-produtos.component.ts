import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { NgModel } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch'

import { FileUploader } from 'ng2-file-upload'; 
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-cadastrar-produtos',
  templateUrl: 'cadastrar-produtos.component.html'
})


export class CadastrarProdutosComponent { 

  public uploader:FileUploader = new FileUploader({url:'http://localhost:3002/upload'});
  
  public campoNome :string = "";
  public descricao:string = "";
  public valor:number;
  public quantidade:number; 

  constructor(private _http: Http, private location : Location) {}

  private cadastrarProduto() { 

    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers });

    this._http.post("http://localhost:3002/produto/inserir", 
    {nome: this.campoNome, descricao: this.descricao, valor : this.valor, quantidade : this.quantidade}
    , options).map(res => {
                        console.log(res);
                        
                      }).subscribe();
                      
                      this.location.back();
  }
  

}
