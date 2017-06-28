'use restrict';
var produtoRedisDao = require('../cache/produtoRedisDAO');
var produtoMongoseDao = require('../mongose/produtoMongoseDAO');

function ProdutoDAO(){
    this.inserirProduto = inserirProduto;
}

function inserirProduto(nomeProd, desc, valor, quantidade, caminho){
    produtoRedisDao.inserirProdutoCache(omeProd,{nome : nomeProd, descricao : desc, quantidade: quantidade, caminhoImagem : caminho})
    produtoMongoseDao.inserirProdutoMongose({nome : nomeProd, descricao : desc, quantidade: quantidade, caminhoImagem : caminho})
}

module.exports = new ProdutoDAO();