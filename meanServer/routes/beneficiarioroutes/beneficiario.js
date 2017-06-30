let express = require('express');
let rotas = express.Router(); 

let beneficiarioService = require('../../app/src/service/beneficiarioService');

rotas.get('/', function(request, response){
    beneficiarioService.consultarBeneficiario().then(function(resposta){
        console.log(response);
        response.json(resposta);
    });
});

module.exports = rotas;