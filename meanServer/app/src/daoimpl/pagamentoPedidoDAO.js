'use restrict';
let mongoose = require('mongoose');
let pagamentoPedidoSchema = require('../schema/pagamentoPedidoSchema')
let model = mongoose.model("pagamentoPedido", pagamentoPedidoSchema);

function PagamentoPedidoDAO(){
    this.inserirPagamentoPedido = inserirPagamentoPedido;
}


function inserirPagamentoPedido(dthr, vlr, tppag, quantidade, sts){
    model.create({dataHora : dthr, valor : vlr, tipoPagamento: tppag, status : sts})
}

module.exports = new PagamentoPedidoDAO();