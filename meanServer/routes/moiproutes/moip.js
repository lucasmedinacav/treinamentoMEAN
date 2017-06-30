var express = require('express');
var rotas = express.Router();

let moipService = require('../../app/src/service/moip/moipService');

rotas.get('/obterordempagamento', function(request, response){ 
    moipService.obterOrdemPagamento().then(function(resultado){
        response.end(resultado);
    })
});

rotas.post('/efetivarpagamento', function(request, response){ 
});

module.exports = rotas;