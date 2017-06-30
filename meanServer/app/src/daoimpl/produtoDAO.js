'use restrict';
let mongoose = require('mongoose');
let usuarioSchema = require('../schema/produtoSchema')
let model = mongoose.model("usuario", usuarioSchema);
var produtoRedisDao = require('../cache/produtoRedisDAO');

function ProdutoDAO(){
    this.inserirProduto = inserirProduto;
    this.buscarProdutos = buscarProdutos;
    this.buscarProdutoByID = buscarProdutoByID;
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

function buscarProdutos() {
    return new Promise( function (resolve, reject) {
        model.find( function(erro, success) {
            if (erro) {
                throw erro;
            }
            resolve(success);
        });
    });
}

function buscarProdutoByID(id) {
    console.log('id dao ' + id)
    return new Promise( function (resolve, reject) {
        model.findById(id, function(erro, success) {
            if (erro) {
                throw erro;
            }
            resolve(success);
        });
    });
}

module.exports = new ProdutoDAO();