var express = require('express'); //Importando o modulo do express para trabalhar com rotas
var rotas = express.Router(); //Obtendo objeto de rotas do express
var produtoService = require('../../app/src/service/produtoService');

rotas.get('/teste', function(request, response){
    console.log('Rota de teste Produto');
    response.end();
});

rotas.post('/inserirProduto', function(req, res){
    console.log('body = ' + req.body.nomeProd);
    var produto = req.body;
    var nomeProd = produto.nomeProd;
    var desc =  produto.desc;
    var valor =  produto.valor;
    var quantidade =  produto.quantidade;
    var caminho =  produto.caminho;

    produtoService.inserirProduto(nomeProd, desc, valor, quantidade, caminho, function (resp) {
        res.json(resp);
    });
});

module.exports = rotas;