var express = require('express'); //Importando o modulo do express para trabalhar com rotas
var rotas = express.Router(); //Obtendo objeto de rotas do express
var bodyParser = require('body-parser');
let produtoService = require('../../app/src/service/produtoService');


rotas.use(bodyParser.json());

rotas.get('/buscar', function (request, response) {
    produtoService.consultarProduto().then(function (resultado) {
        response.json(resultado);
    });
});

rotas.post('/inserir', function (req, res) {
    var nome = req.body.nome;
    var descricao = req.body.descricao;
    var quantidade = req.body.quantidade;
    var valor = req.body.valor;
    
    produtoService.criarProduto(nome, descricao, valor, quantidade, "http://pt.seaicons.com/wp-content/uploads/2016/03/palet-03-icon.png")

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