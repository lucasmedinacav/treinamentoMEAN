import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Form } from '@angular/forms';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Facebook, Google, LinkedIn } from 'ng2-cordova-oauth/core';
import { OauthBrowser } from 'ng2-cordova-oauth/platform/browser';
import { Router } from '@angular/router';
import { CadastroProdutosService } from './cadastro-produtos.service';


export class DetalheModalContext extends BSModalContext { }

@Component({
  styles: [],
  templateUrl: 'detalhe-produtos.component.html',
  styleUrls: ['detalhe-produtos.component.css']
})
export class DetalheModal implements CloseGuard, ModalComponent<DetalheModalContext> {
  public produtoDetalhe: any;

  constructor(public dialog : DialogRef<DetalheModalContext>, private router: Router, private cadastroProdutosService: CadastroProdutosService) {
    this.produtoDetalhe = cadastroProdutosService.getProdutoDetalhe();
  }

    close():void {
    this.dialog.close();
  }

}
