'use restrict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


var pagamentoPedido = new Schema({
    dataHora : {type : Date, require: true},
    valor : {type : Number, require: true},
    tipoPagamento : {type : String, require: true},
    status : {type : String, require: true},
    beneficiario : [{ _idMoip: Schema.Types.ObjectId }]
});

module.exports = pagamentoPedido;