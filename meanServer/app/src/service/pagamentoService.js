var pagamentoDAO = require('../daoimpl/pagamentoDAO');

function PagamentoService(){
}

function inserirPagamento(razaoPagamento ,statusPagamento, tipoPagamento, codigoTransacao, dataHora,
                             valorTotal, valorTaxa, valorliquido, usuario, beneficiarios, pedido){
  return new Promise(function(resolve, reject){ 

      pagamentoDAO.inserirPagamento(razaoPagamento ,statusPagamento, tipoPagamento, codigoTransacao, dataHora,
                             valorTotal, valorTaxa, valorliquido, usuario, beneficiarios, pedido).then( response => {
          resolve(response); 
      }).catch(erro =>{
          console.log("ERRO GENERICO");
      }); 

   });
}


function buscaPagamento(){
    return new Promise(function(resolve, reject){ 

      pagamentoDAO.buscarPagamento().then( response => {
          resolve(response); 
      }).catch(erro =>{
          console.log("ERRO GENERICO");
      }); 

   });
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