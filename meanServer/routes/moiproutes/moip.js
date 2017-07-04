var express = require('express');
var rotas = express.Router();

let moipService = require('../../app/src/service/moip/moipService');

rotas.get('/obterordempagamento', function(request, response){ 
    var nomeComprador = request.query.nomeComprador;
    var emailComprador = request.query.emailComprador; 
    var formaPagamento = request.query.formaPagamento;
    var valorPagamento = request.query.valorPagamento;
    

    moipService.obterOrdemPagamento(nomeComprador, emailComprador, formaPagamento, valorPagamento).then(function(resultado){
        response.json(resultado);
    })
});

rotas.post('/efetivarpagamento', function(request, response){ 
});

module.exports = rotas;