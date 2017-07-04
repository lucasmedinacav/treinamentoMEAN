import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PagamentoService } from '../../pagamento.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-pagamento-boleto',
  templateUrl: './boleto.component.html',
  
})
export class BoletoComponent {
constructor(private pagamentoService: PagamentoService, private rota: Router){}

  pagarComBoleto() { 
    var settings = {
      "Forma": "BoletoBancario"
    }; 
    this.pagamentoService.efeturarPagamentoPorBoleto(settings, "Leo e Carol","emailcarol@gmail.com", "BoletoBancario" ,"100.00");
    this.rota.navigateByUrl("/comprovantePagamento");
  }
}
