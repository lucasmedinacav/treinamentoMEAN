var produtoDao = require('../daoimpl/produtoDAO');
var mongoose = require('mongoose');
let uri = 'mongodb://localhost:27017/mock2';
mongoose.connect(uri);

exports.inserirProduto = function (nomeProd, desc, valor, quantidade, caminho, callback) {
  return produtoDao.inserirProduto(nomeProd, desc, valor, quantidade, caminho, callback);
}

exports.buscarProdutos = function () {
  return new Promise(function (resolve, reject) {
      produtoDao.buscarProdutos().then( response => {
        resolve(response);
      }).catch(erro => {
        console.log('erro na buscar de produtos.')
      });
  });
}

exports.buscarProdutoByID = function (id) {
  return new Promise(function (resolve, reject) {
      produtoDao.buscarProdutoByID(id).then( response => {
        resolve(response);
      }).catch(erro => {
        console.log('erro na buscar de produto.')
      });
  });
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