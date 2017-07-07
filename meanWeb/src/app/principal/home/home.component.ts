import { Component, OnInit } from '@angular/core';
import { Produto } from '../cadastro-produtos/produto';
import { CadastroProdutosService } from '../cadastro-produtos/cadastro-produtos.service';
import { ActivatedRoute } from '@angular/router';
import { DetalheModal } from '../cadastro-produtos/detalhe-produtos.component';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: Produto[];
  errorMessage: string;
  produtosSelecionados = [];

  constructor(private cadastroProdutoService: CadastroProdutosService,
    public modal: Modal,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    debugger
    this.cadastroProdutoService.listaProdutos().subscribe(produtos => {
      this.produtos = produtos,
        erro => this.errorMessage = <any>erro
    });
  }

  openLoginModal(produto: any) {
    console.log(`abrindo do header`);
    this.cadastroProdutoService.setProdutoDetalhe(produto);
    return this.modal.open(DetalheModal, overlayConfigFactory({}, BSModalContext));
  }

  public selecionarProduto(produto) {
    if (!this.produtosSelecionados.find(
      (item) => {
        if (item._id == produto._id) {
          item.quantidade++;
          return true;
        }
        return false
      })) {
      produto.quantidade = 1;
      this.produtosSelecionados.push(produto);
      this.cadastroProdutoService.setProdutoCarrinho(produto);
    }
  }

}
