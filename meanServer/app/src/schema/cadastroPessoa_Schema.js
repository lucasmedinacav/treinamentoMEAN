// importa os módulos necessarios
var mongoose = require('mongoose');

var pessoa = mongoose.Schema({
    nome: String,
    sobrenome: String,
    senha: String,
    email: String,
    status: String
});

module.exports = pessoa;