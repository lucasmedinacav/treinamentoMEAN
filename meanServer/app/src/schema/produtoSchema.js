'use restrict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var produto = new Schema({
    nome : {type : String, require: true},
    descricao : {type : String, require: true},
    valor : {type : Number, require: true},
    quantidade : {type : Number, require: true},
    urlFoto : {type: String, require: true}
});

module.exports = produto;