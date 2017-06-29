'use restrict';
let mongoose = require('mongoose');
let usuarioSchema = require('../schema/produtoSchema')
let model = mongoose.model("usuario", usuarioSchema);
var produtoRedisDao = require('../cache/produtoRedisDAO');

function ProdutoMongoseDAO(){
    this.inserirProduto = inserirProduto;
}

function inserirProduto(nomeProd, desc, valor, quantidade, caminho, callback){
    //produtoRedisDao.inserirProdutoCache(omeProd,{nome : nomeProd, descricao : desc, quantidade: quantidade, caminhoImagem : caminho})
    model.create({nome : nomeProd, descricao : desc, valor : valor, quantidade: quantidade, urlFoto : caminho}, function (error, produto) {
        if (error) {
            callback({error: 'Não foi possivel salvar a compra.'});
        } else {
            callback(produto);
        }
    });
}

module.exports = new ProdutoMongoseDAO();