'use restrict';
let mongoose = require('mongoose');
let usuarioSchema = require('../schema/produtoSchema')
let model = mongoose.model("usuario", usuarioSchema);

function ProdutoDAO(){
    this.inserirProduto = inserirProduto;
}


function inserirProduto(nomeProd, desc, valor, quantidade, caminho){
    model.create({nome : nomeProd, descricao : desc, quantidade: quantidade, caminhoImagem : caminho})
}

module.exports = new ProdutoDAO();