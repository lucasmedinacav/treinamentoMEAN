let express = require('express');
let rotas = express.Router(); 

let beneficiarioService = require('../../app/src/service/beneficiarioService');

rotas.get('/', function(request, response){
    console.log('Nao existem rotas para beneficiario')
});

module.exports = rotas;