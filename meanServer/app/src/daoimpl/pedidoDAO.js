let mongoose = require('mongoose');
let pedidoSchema = require('../schema/pedidoSchema');
let pedidoModel = mongoose.model("pedido", pedidoSchema);


function PedidoDAO(){
    this.criarPedido = inserirPedido;
    this.consultarPedido = buscarPedido;
}

function inserirPedido(statusPram, data, usuario, itensPedido, total){
    return new Promise(function(resolve, reject){
        pedidoModel.create({status : statusPram, dataPedido : data, usuario: usuario, itens: itensPedido, totalPedido : total },function(erro, succsess){
            if(erro){
                throw erro;
            }
            resolve(succsess);
        });
    });
}

function buscarPedido(){
    return new Promise(function(resolve, reject){
        pedidoModel.find(function(erro, succsess){
            if(erro){
                throw erro;
            }
            resolve(succsess);
        });
    });
}

module.exports = new PedidoDAO();