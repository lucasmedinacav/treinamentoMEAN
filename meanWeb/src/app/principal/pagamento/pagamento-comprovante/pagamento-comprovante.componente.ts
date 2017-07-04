import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CadastroProdutosService } from '../../cadastro-produtos/cadastro-produtos.service';

declare var moip: any;

@Component({
  moduleId: module.id,
  selector: 'app-cadastra-cartao',
  templateUrl: './pagamento-comprovante.component.html'
})
export class PagamentoComprovanteComponent {
  public produtos = [];
  public valorTotal;
  public subTotal;

  constructor(private cadastroProdutosService : CadastroProdutosService){
    this.produtos = cadastroProdutosService.getProdutosCarrinho();
    this.valorTotal = cadastroProdutosService.total;
    this.subTotal = cadastroProdutosService.subtotal;
  }

}
