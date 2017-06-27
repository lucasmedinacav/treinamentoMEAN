var express = require('express'); //Importando o modulo do express para trabalhar com rotas
var rotas = express.Router(); //Obtendo objeto de rotas do express

rotas.get('/user', function(request, response){


}).post('/user', function(request, response){


}).put('/user', function(request, response){


}).delete('/user', function(request, response){


}).get('/teste', function(request, response){
    console.log('Rota de teste Login');
    response.end();
});

module.exports = rotas;