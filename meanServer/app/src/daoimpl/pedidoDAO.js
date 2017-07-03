let mongoose = require('mongoose');
let pedidoSchema = require('../schema/pedidoSchema');
let pedidoModel = mongoose.model("pedido", pedidoSchema);


function PedidoDAO(){
    this.inserirPedido = inserirPedido;
    this.buscarPedido = buscarPedido;
}

function inserirPedido(statusPram, data, itensPedido, total){
    pedidoModel.create({status : statusPram, dataPedido : data, itens: itensPedido, totalPedido : total },function(erro, succsess){
        if(erro){
            throw erro;
        }
        console.log(sucsess);
    });
}

function buscarPedido(){
    pedidoModel.find(function(erro, succsess){
        if(erro){
            throw erro;
        }
        console.log(sucsess);
    });
}

module.exports = new PedidoDAO();