import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastraCartaoComponent } from './cadastraCartao.component';

const routes: Routes = [
  {
    path: 'cadastroCartao',
    component: CadastraCartaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastraCartaoRoutingModule { }
