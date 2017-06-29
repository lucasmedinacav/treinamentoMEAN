import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastraCartaoComponent } from './cadastraCartao.component';
import { CadastraCartaoRoutingModule } from './cadastraCartao-routing.module';



@NgModule({
  declarations: [
    CadastraCartaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CadastraCartaoRoutingModule
    
  ],
  exports: [
    CadastraCartaoComponent
  ],
  providers: [],
  bootstrap: [CadastraCartaoComponent]
})
export class CadastraCartaoModule { }
