import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-cadastra-cartao',
  templateUrl: './pagamento.component.html',
  
})
export class PagamentoComponent {

  public enderecoEntrega:string = "Avenida: Interlagos, 3501";
  public cep : string = "02229-020";
  public cidade : string = "São Paulo - SP";

  public subtotal:number = 166.90;
  public frete : string;
  public total : number = 166.90;

  public numeroCartao:string = "";
  public nomeImpressoCartao:string= "";
  public validade:string= "";
  public codigoSeguranca:Number;
  public quantidadeParcelas:number;



   constructor(
      private location : Location
    ){}


    voltarParaListaProdutos() : void {
      this.location.back();   
    }
}
