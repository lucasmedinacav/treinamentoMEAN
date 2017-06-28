var produtoDao = require('../daoimpl/produtoDAO');
var pedidoDao = require('../daoimpl/pedidoDao');

var mongoose = require('mongoose');
let uri = 'mongodb://localhost:27017/gojohny';



mongoose.connect(uri);
// produtoDao.inserirProduto("TV", "TV 42 polegadas", 2000.20, 7, "caminho_indefinido");
// produtoDao.inserirProduto("DVD", "Dvd novo Com visor", 150.99, 30, "caminho_indefinido");
produtoDao.bucarProduto().then(function(data){
  var produto = data[0];
  var itens = [
              {produto, 
               quantidade: 10, 
               valorUnitario : 4.0,
               valorTotal : 50.2
              },
              {produto, 
               quantidade: 10, 
               valorUnitario : 4.0,
               valorTotal : 50.2
              }
            ] ;
            console.log(itens);

            pedidoDao.inserirPedido("Ok", new Date(), itens,50.00)
});        



  


















mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + uri);
});

mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + uri);
});

mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected');
});

mongoose.connection.on('open', function () {  
  console.log('Mongoose default connection is open');
});