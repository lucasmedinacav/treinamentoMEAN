import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { CarrinhoCompraModule } from './carrinhoCompra/carrinhoCompra.module';

import { CadastraCartaoModule } from './cartoes/cadastraCartao.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import "../polyfills";
import { Http} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    CarrinhoCompraModule,
    CadastraCartaoModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
