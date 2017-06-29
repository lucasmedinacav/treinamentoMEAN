import { Component, OnInit } from '@angular/core';
import { CadastroProdutoService } from "./cadastro-produto.service";
import { Produto } from "./produto";

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private _produtoService: CadastroProdutoService) { }

  ngOnInit() {
  }

  insertProduto(){
    this._produtoService.insertProduto(this.produto);
  }

}
