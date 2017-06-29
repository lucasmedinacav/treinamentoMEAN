'use restrict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let pedidoSchema = require('../schema/pedidoSchema')


var pagamento = new Schema({
    razaoPagamento : {type : String, require: true},
    statusPagamento : {type : String, require: true},
    tipoPagamento : {type : String, require: true},
    codigoTransacao : {type : Number, require: true},
    dataHora : {type : Date, require: true},
    valorTotal : {type : Number, require: true},
    valorTaxa : {type : Number, require: true},
    valorliquido : {type : Number, require: true},
    usuario: {type : String, require: true},
    beneficiarios : [{ _idMoip: Schema.Types.ObjectId }],
    pedido : {type : pedidoSchema},
});

module.exports = pagamento;