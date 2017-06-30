import { Component, OnInit } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { LoginModalContext, LoginModal } from './../login-modal/login-modal.component';
import { Usuario } from './user.object';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public usuario: Usuario;
  public senhaConfirmacao: string;
  public showMsgError: boolean;
  public msgError: string;

  constructor(public modal: Modal) {
    this.usuario = new Usuario;
  }

  ngOnInit() { }

  public cadastrar(): void {

    if (this.usuario.nome == null || this.usuario.sobrenome == null || this.usuario.senha == null || this.usuario.email == null || this.senhaConfirmacao == null) {
      this.addMsgError();
    }

    this.showMsgError = this.msgError != null;

    if (!this.showMsgError) {
      console.log('cadastrado');
    }
  }

  public openLoginModal() {
    return this.modal.open(LoginModal, overlayConfigFactory({}, BSModalContext));
  }

  public onChangeNome() {
    let regex = /^(([A-Z]{1})[a-z]+)$/;
    let test = this.usuario.nome != undefined && regex.test(this.usuario.nome);
    this.trataValidacao(document.getElementById("nome_form"), test);
  }

  public onChangeSobrenome() {
    let regex = /^((([A-Z]{1})([a-z])+(\s)?)+)$/;
    let test = this.usuario.sobrenome != undefined && regex.test(this.usuario.sobrenome);
    this.trataValidacao(document.getElementById("sobrenome_form"), test);
  }

  public onChangeEmail() {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let test = this.usuario.email != undefined && regex.test(this.usuario.email);
    this.trataValidacao(document.getElementById("email_form"), test);
  }

  public onChangeSenha() {
    console.log("senha: " + this.usuario.senha);
    let regex = /^.{8,}$/;
    let test = this.usuario.senha != undefined && regex.test(this.usuario.senha);
    this.trataValidacao(document.getElementById("senha_form"), test);
  }

  public onChangeSenhaConfirmacao() {
    let regex = /^.{8,}$/;
    let test = this.senhaConfirmacao != undefined && regex.test(this.senhaConfirmacao) && this.usuario.senha == this.senhaConfirmacao;
    this.trataValidacao(document.getElementById("senhaConfirmacao_form"), test);
  }

  private trataValidacao(form, test) {
    this.msgError = null;
    if (test) {
      form.classList.remove("has-error");
      form.classList.add("has-success");
      this.showMsgError = false;
    } else {
      form.classList.remove("has-success");
      form.classList.add("has-error");
      this.addMsgError();
    }
  }

  private addMsgError() {
    this.msgError = "Por favor, corrija os campos abaixo corretamente.";
  }

}
