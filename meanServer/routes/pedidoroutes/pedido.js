var express = require('express'); //Importando o modulo do express para trabalhar com rotas
var rotas = express.Router(); //Obtendo objeto de rotas do express

rotas.get('/buscar', function(request, response){
    console.log('Rota de busca Pedido');
    response.end();
})

rotas.post('/incluir', function(request, response){
    console.log('Rota de inclusao Pedido');
    response.end();
})

rotas.put('/alterar', function(request, response){
    console.log('Rota de alteracao Pedido');
    response.end();
})

// rotas.delete('/excluir', function(request, response){
//     console.log('Rota de exclusao Pedido');
//     response.end();
// })

module.exports = rotas;