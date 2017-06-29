import { Component, OnInit } from '@angular/core';
import { Usuario } from './user.object';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public usuario: Usuario;
  public senhaConfirmacao: string;

  constructor() {
    this.usuario = new Usuario;
   }

  ngOnInit() { }

  cadastrar(): void {
    console.log('cadastrado');
  }

}
