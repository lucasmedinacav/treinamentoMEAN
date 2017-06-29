var express = require('express'); //Importando o modulo do express para trabalhar com rotas
var rotas = express.Router(); //Obtendo objeto de rotas do express

let moipService = require('../../app/src/service/moip/moipService');

rotas.get('/obterordempagamento', function(request, response){ 
    moipService.obterOrdemPagamento().then(function(resultado){
        response.end(resultado);
    })
});

rotas.post('/efetivarpagamento', function(request, response){ 
});



// rotas.put('/alterar', function(request, response){
//     console.log('Rota de alteracao Produto');
//     response.end();
// });

// rotas.delete('/excluir', function(request, response){
//     console.log('Rota de exclusao Produto');
//     response.end();
// });



module.exports = rotas;