'use restrict';
let mongoose = require('mongoose');
let usuarioSchema = require('../schema/produtoSchema')
let model = mongoose.model("usuario", usuarioSchema);

function ProdutoMongoseDAO(){
    this.inserirProdutoMongose = inserirProdutoMongose;
}


function inserirProdutoMongose(nomeProd, desc, valor, quantidade, caminho){
    model.create({nome : nomeProd, descricao : desc, quantidade: quantidade, caminhoImagem : caminho})
}

module.exports = new ProdutoMongoseDAO();