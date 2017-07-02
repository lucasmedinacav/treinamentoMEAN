import { Component, OnInit } from '@angular/core';
import { Produto } from "./produto";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CadastroProdutosService } from './cadastro-produtos.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  produto: Produto = new Produto();

  formProduto: FormGroup;

  constructor(private _produtoService: CadastroProdutosService, private fb: FormBuilder) {
    this.formProduto = fb.group ({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      quantidade: ['', Validators.required],
      urlFoto: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  insertProduto(){
    console.log("component inserir");
    this._produtoService.insertProduto(this.produto);
  }

}
