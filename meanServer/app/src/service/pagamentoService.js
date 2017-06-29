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