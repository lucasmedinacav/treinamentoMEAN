import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarrinhoCompraModule } from './carrinhoCompra/carrinhoCompra.module';

import { CadastraCartaoModule } from './cartoes/cadastraCartao.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import "../polyfills";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarrinhoCompraModule,
    CadastraCartaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
