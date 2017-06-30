var express = require('express'); //Importando o modulo do express para trabalhar com rotas
var rotas = express.Router(); //Obtendo objeto de rotas do express

let pessoaService = require('../../app/src/service/pessoaService');

rotas.get('/', function (request, response) {
    console.log('Rota de teste Login2');
    response.end();
}).post('/user', function (request, response) {


}).put('/user', function (request, response) {


}).delete('/user', function (request, response) {


}).get('/teste', function (request, response) {
    console.log('Rota de teste Login2');
    response.end();
}).post('/cadastrapessoa', function (request, response) {
    console.log('Ta funcionando o cadastro');
    pessoaService.cadastraPessoa().then(function (resposta) {
        console.log(response);
        response.json(resposta);

    });
    
});


module.exports = rotas;