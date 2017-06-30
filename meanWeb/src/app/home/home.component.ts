import { Component, OnInit } from '@angular/core';
import { Produto } from '../cadastro-produto/produto';
import { CadastroProdutoService } from '../cadastro-produto/cadastro-produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos: Produto [];
  errorMessage: string;

  constructor(private cadastroProdutoService: CadastroProdutoService) { }

  ngOnInit() {
    this.cadastroProdutoService.listaProdutos().subscribe(produtos => {
      this.produtos = produtos,
      erro => this.errorMessage = <any> erro
    });
  }

}
