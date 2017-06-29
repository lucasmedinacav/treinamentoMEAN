'use restrict';
let mongoose = require('mongoose');
let usuarioSchema = require('../schema/produtoSchema')
let model = mongoose.model("usuario", usuarioSchema);

function ProdutoMongoseDAO(){
    this.inserirProdutoMongose = inserirProdutoMongose;
}

function inserirProdutoMongose(nomeProd, desc, valor, quantidade, caminho, callback){
    model.create({nome : nomeProd, descricao : desc, valor : valor, quantidade: quantidade, urlFoto : caminho}, function (error, produto) {
        if (error) {
            callback({error: 'Não foi possivel salvar a compra.'});
        } else {
            callback(produto);
        }
    });
}

module.exports = new ProdutoMongoseDAO();