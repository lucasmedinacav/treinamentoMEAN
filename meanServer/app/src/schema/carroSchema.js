'use restrict';
let mongoose = require('mongoose');
let pedidoSchema = require('../schema/pedidoSchema')
let Schema = mongoose.Schema;

var carro = new Schema({
    produtos: [pedidoSchema],
    marca : {type : String, require: true},
    modelo : {type : String, require: true},
    ano : {type : Number, require: true},
    valor : {type: Number, require: true}
});

module.exports = carro;