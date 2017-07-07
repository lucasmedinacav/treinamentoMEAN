import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ModalModule, OverlayRenderer, DOMOverlayRenderer, Overlay } from 'angular2-modal';
import { CadastroProdutosRoutingModule } from './cadastro-produtos-routing.module';
import { CadastroProdutosComponent } from './cadastro-produtos.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CadastroProdutosService } from './cadastro-produtos.service';
import { DetalheModal } from './detalhe-produtos.component';

@NgModule({
  imports: [
    CadastroProdutosRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule],
  declarations: [
    CadastroProdutosComponent,
    DetalheModal],
  exports: [CadastroProdutosComponent],
  providers: [CadastroProdutosService],
  entryComponents: [DetalheModal]
})
export class CadastroProdutosModule { }
