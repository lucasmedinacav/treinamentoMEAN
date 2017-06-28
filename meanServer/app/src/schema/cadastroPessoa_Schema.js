// importa os módulos necessarios
var mongoose = require('mongoose');

    var pessoaSchema = mongoose.Schema({
        nome: String,
        sobrenome: String,
        senha: String,
        email: String,
        status: String
    });

module.exports = mongoose.model("pessoa",pessoaSchema);