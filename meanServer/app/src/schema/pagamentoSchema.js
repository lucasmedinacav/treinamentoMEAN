'use restrict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let pedidoSchema = require('../schema/pedidoSchema')


var pagamento = new Schema({
    dataHora : {type : Date, require: true},
    status : {type : String, require: true},
    tipoPagamento : {type : String, require: true},
    valor : {type : Number, require: true},
    beneficiarios : [{ _idMoip: Schema.Types.ObjectId }],
    pedido : {type : pedidoSchema}
});

module.exports = pagamento;