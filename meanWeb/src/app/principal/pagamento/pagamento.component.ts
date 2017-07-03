import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PagamentoService } from './pagamento.service';
import { Router } from '@angular/router'

declare var moip: any;

@Component({
  moduleId: module.id,
  selector: 'app-cadastra-cartao',
  templateUrl: './pagamento.component.html'
})
export class PagamentoComponent {

  public enderecoEntrega: string = "Avenida: Interlagos, 3501";
  public cep: string = "02229-020";
  public cidade: string = "São Paulo - SP";

  public subtotal: number = 166.90;
  public frete: string;
  public total: number = 166.90;

  public numeroCartao: string = "";
  public nomeImpressoCartao: string = "";
  public validade: string = "";
  public codigoSeguranca: Number;
  public quantidadeParcelas: number;



  constructor(
    private location: Location,
    private pagamentoService: PagamentoService,
    private rota : Router
  ) {

   
    
  }


  voltarParaListaProdutos(): void {
    this.location.back();
  }

  pagarComCartaoCredito(){
     //Boleto bancario
    // var settings = {
    //   "Forma": "BoletoBancario"
    // };


   // Cartao de credito
    var settings = {
      Forma: "CartaoCredito" , 
      Instituicao: "Visa" , 
      Parcelas : "1" , 
      Recebimento:"AVista" , 
      CartaoCredito:{
                    Numero: this.numeroCartao , 
                    Expiracao: "10/18" , 
                    CodigoSeguranca: this.codigoSeguranca , 
                    Portador : {
                                Nome: "Lyoto Machida",
                                DataNascimento: "17/11/1988",
                                Telefone: "(12)9999-9999",
                                Identidade: "888.457.824-84"}}
    };
    this.pagamentoService.efeturarPagamentoPorCartaoCredito(settings);
    this.rota.navigateByUrl("/comprovantePagamento");
  }


}
