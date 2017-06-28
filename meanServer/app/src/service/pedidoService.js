
var pedidoDao = require('../daoimpl/pedidoDao');

var mongoose = require('mongoose');
let uri = 'mongodb://localhost:27017/gojohny';

mongoose.connect(uri);

function PedidoService(){

}

function inserirPedido(statusPram, data, itensPedido, total){
  return pedidoDao.inserirPedido(statusPram, data, itensPedido, total)
    .then(function (params) {
      console.log('deu erro'); 
    })
    .catch(function() {
      console.log('deu erro'); 
    })
}

module.exports = PedidoService();