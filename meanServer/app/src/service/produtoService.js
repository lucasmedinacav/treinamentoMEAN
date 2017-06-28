var produtoDao = require('../daoimpl/produtoDAO');
var mongoose = require('mongoose');
let uri = 'mongodb://localhost:27017/mean';
mongoose.connect(uri);

exports.inserirProduto = function (nomeProd, desc, valor, quantidade, caminho, callback) {
  return produtoDao.inserirProduto(nomeProd, desc, valor, quantidade, caminho, callback);
}

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