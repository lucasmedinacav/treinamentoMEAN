'use restrict';
let mongoose = require('mongoose');
let produtoSchema = require('../schema/produtoSchema')
let produtoModel = mongoose.model("produto", produtoSchema);

function ProdutoDAO(){
    this.inserirProduto = inserirProduto;
    this.bucarProduto = bucarProduto;
}


function inserirProduto(nomeProd, desc, valor, quantidade, caminho){
    return new Promise(function(resolve, reject){
        produtoModel.create({nome : nomeProd, descricao : desc, quantidade: quantidade, caminhoImagem : caminho}, function(erro, succsess){
            if(erro){
                throw erro;
            }
            resolve(succsess);
        })
    })    
}

function bucarProduto(){
    return new Promise(function(resolve, reject){
        produtoModel.find(function(erro, succsess){
        if(erro){
            throw erro;
        }
        resolve(succsess);
        });
        
    })
}

module.exports = new ProdutoDAO();