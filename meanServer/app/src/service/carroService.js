var carroDao = require('../daoimpl/carroDAO');
var mongoose = require('mongoose');
let uri = 'mongodb://localhost:27017/mean';
mongoose.connect(uri);
carroDao.inserirCarro([{status:'TESTE', total:50},{status:'TESTE2', total:80}],'FORD', 'Mustang', 1967, 50.000,00);


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