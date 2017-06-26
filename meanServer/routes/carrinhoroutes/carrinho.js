var express = require('express'); //Importando o modulo do express para trabalhar com rotas
var rotas = express.Router(); //Obtendo objeto de rotas do express

rotas.get('/teste', function(request, response){
    console.log('Rota de teste Carrinho');
    response.end();
})

module.exports = rotas;