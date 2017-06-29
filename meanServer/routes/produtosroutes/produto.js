var express = require('express'); //Importando o modulo do express para trabalhar com rotas
var rotas = express.Router(); //Obtendo objeto de rotas do express
var produtoService = require('../../app/src/service/produtoService');

rotas.get('/teste', function(request, response){
    console.log('Rota de teste Produto');
    response.end();
});

rotas.post('/inserirProduto', function(req, res){
    console.log('body = ' + req.body.nomeProd);
    console.log('body = ' + req.body.desc);
    console.log('body = ' + req.body.valor);
    console.log('body = ' + req.body.quantidade);
    console.log('body = ' + req.body.caminho);
    var nomeProd = req.body.nomeProd;
    var desc = req.body.desc;
    var valor = req.body.valor;
    var quantidade = req.body.quantidade;
    var caminho = req.body.caminho;

     console.log(nomeProd);

    produtoService.inserirProduto(nomeProd, desc, valor, quantidade, caminho, function (resp) {
        res.json(resp);
    });
});

module.exports = rotas;