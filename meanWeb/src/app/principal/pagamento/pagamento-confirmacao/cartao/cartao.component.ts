import { Component } from '@angular/core';
import { Location } from '@angular/common'; 
import { PagamentoService } from '../../pagamento.service';
import { Router } from '@angular/router';

import { CadastroProdutosService } from '../../../cadastro-produtos/cadastro-produtos.service';

@Component({
  moduleId: module.id,
  selector: 'app-pagamento-cartao',
  templateUrl: './cartao.component.html',
  
})
export class CartaoComponent { 
  
  public numeroCartao: string = "";
  public nomeImpressoCartao: string = "";
  public validade: string = "";
  public codigoSeguranca: Number;
  public quantidadeParcelas: number;

constructor(
    private location: Location,
    private pagamentoService: PagamentoService,
    private rota: Router,
    private cadastroProdutoService: CadastroProdutosService
  ) {
 
   }

  voltarParaListaProdutos(): void {
    this.location.back();
  }

  pagarComCartaoCredito() { 
    var settings = {
      Forma: "CartaoCredito",
      Instituicao: "Visa",
      Parcelas: "1",
      Recebimento: "AVista",
      CartaoCredito: {
        Numero: this.numeroCartao,
        Expiracao: this.validade,
        CodigoSeguranca: this.codigoSeguranca,
        Portador: {
          Nome: "Lyoto Machida",
          DataNascimento: "17/11/1988",
          Telefone: "(12)9999-9999",
          Identidade: "888.457.824-84"
        }
      }
    };
    this.pagamentoService.efeturarPagamentoPorCartaoCredito(settings,"Leo e Carol","emailcarol@gmail.com", "CartaoCredito" ,"100.00");
    this.rota.navigateByUrl("/comprovantePagamento");
    
  }

  
 

}
