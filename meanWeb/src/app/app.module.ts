import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { FormsModule } from '@angular/forms';

import { CarrinhoCompraModule } from './carrinhoCompra/carrinhoCompra.module';
import { CadastraCartaoModule } from './cartoes/cadastraCartao.module';
import { ProdutosModule } from './produtos/produtos.module'
import { Http} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import "../polyfills";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    CarrinhoCompraModule,
    CadastraCartaoModule,
    ProdutosModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
