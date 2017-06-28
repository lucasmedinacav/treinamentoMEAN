var pagamentoDAO = require('../daoimpl/pagamentoDAO');

function PagamentoService(){
}

function inserirPagamento(dataComHora, statusPagamento, tipoPag, vlr, beneficiariosPagamento, quantidade){
  return pagamentoDAO.inserirBeneficiario(dataComHora, statusPagamento, tipoPag, vlr, beneficiariosPagamento, quantidade).then(function(retorno){]
                  
        console.log("Consulta Efetuada");        
      }).promise.catch(err => {
        console.log("erro");
  })
}


function buscaPagamento(){
    return pagamentoDAO.buscarPagamento().then(function(retorno){
        console.log("consulta efetuada com sucesso");
     }).catch();
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