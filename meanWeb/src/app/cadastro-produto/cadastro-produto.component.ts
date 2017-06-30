import { Component, OnInit } from '@angular/core';
import { CadastroProdutoService } from "./cadastro-produto.service";
import { Produto } from "./produto";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  formProduto: FormGroup;

  constructor(private _produtoService: CadastroProdutoService, private fb: FormBuilder) {
    this.formProduto = fb.group ({
      nomeProd: ['', Validators.required],
      desc: ['', Validators.required],
      valor: ['', Validators.required],
      quantidade: ['', Validators.required],
      caminho: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  insertProduto(){
    console.log("component inserir");
    this._produtoService.insertProduto(this.produto);
  }

}
