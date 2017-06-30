import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  moduleId: module.id,
  selector: 'app-cadastra-cartao',
  templateUrl: './cadastraCartao.component.html',
  
})
export class CadastraCartaoComponent {
   constructor(
      private location : Location
    ){}


    voltarParaListaProdutos() : void {
      this.location.back();
    }
}
