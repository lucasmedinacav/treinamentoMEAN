var pagamentoDAO = require('../daoimpl/pagamentoDAO');

function PagamentoService(){
}

function inserirPagamento(dataComHora, statusPagamento, tipoPag, vlr, beneficiariosPagamento, quantidade){
  return pagamentoDAO.inserirBeneficiario().then().promise.catch(err => {
      console.log("Passou!!!");
  })
}






module.exports = PagamentoService();


  


















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