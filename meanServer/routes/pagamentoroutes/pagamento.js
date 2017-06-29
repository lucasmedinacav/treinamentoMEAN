let express = require('express');
let rotas = express.Router(); 

let beneficiarioService = require('../../app/src/service/beneficiarioService');


rotas.get('/', function(request, response){
});

rotas.get('/buscar', function(request, response){
    console.log('Rota de busca Produto');
    response.end();
})

rotas.post('/incluir', function(request, response){
    console.log('Rota de inclusao Produto');
    response.end();
})

rotas.put('/alterar', function(request, response){
    console.log('Rota de alteracao Produto');
    response.end();
})

// rotas.delete('/excluir', function(request, response){
//     console.log('Rota de exclusao Produto');
//     response.end();
// })


module.exports = rotas;