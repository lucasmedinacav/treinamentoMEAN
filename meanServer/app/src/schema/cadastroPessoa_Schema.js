// importa os módulos necessarios
var mongoose = require('../../lib');
var Schema = mongoose.Schema;

//
module.exports = function () {
    // define o schema
    var PessoaSchema = new Schema({
        nome: String,
        sobrenome: String,
        senha: String,
        email: String,
        status: String
    });
    mongoose.model('Pessoa',
        PessoaSchema);
};