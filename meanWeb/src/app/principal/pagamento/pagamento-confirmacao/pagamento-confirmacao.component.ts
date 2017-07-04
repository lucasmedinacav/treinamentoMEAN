import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PagamentoService } from '../pagamento.service';
import { Router } from '@angular/router';
import { CadastroProdutosService} from '../../cadastro-produtos/cadastro-produtos.service'

declare var moip: any;

@Component({
  selector: 'app-cadastra-cartao',
  templateUrl: './pagamento-confirmacao.component.html'
})
export class PagamentoConfirmacaoComponent {

  public enderecoEntrega : string;
  public cep : string;
  public cidade : string;
  public subtotal: number;
  public frete: string;
  public total: number;
 


  constructor(private cadastroProdutoService: CadastroProdutosService){
    cadastroProdutoService.getValoresTotalProdutos();
    this.enderecoEntrega = cadastroProdutoService.enderecoEntrega;
    this.cep = cadastroProdutoService.cep;
    this.cidade = cadastroProdutoService.cidade;
    this.subtotal = cadastroProdutoService.subtotal;
    this.frete = cadastroProdutoService.frete;
    this.total = cadastroProdutoService.total;

  }



  

}
