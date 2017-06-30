var express = require('express'); //Importando o modulo do express para trabalhar com rotas
var rotas = express.Router(); //Obtendo objeto de rotas do express
var produtoService = require('../../app/src/service/produtoService');

rotas.get('/listaProdutos', function(request, response){
         console.log('iniciando busca de produtos');
        produtoService.buscarProdutos().then(function(resposta){
        console.log('busca de produto ok' + resposta);
        response.json(resposta);
    });
});

rotas.get('/buscarProduto/:id', function(request, response){
        let id = request.params.id;
        console.log('busca do produto id = ' + id);
        produtoService.buscarProdutoByID(id).then(function(resposta){
        
        response.json(resposta);
    });
});

rotas.post('/inserirProduto', function(req, res){
    console.log('body = ' + req.body.nomeProd);
    var produto = req.body;
    var nomeProd = produto.nome;
    var desc =  produto.descricao;
    var valor =  produto.valor;
    var quantidade =  produto.quantidade;
    var caminho =  produto.urlFoto;

    produtoService.inserirProduto(nomeProd, desc, valor, quantidade, caminho, function (resp) {
        res.json(resp);
    });
});

module.exports = rotas;