var pedidoDAO = require('../daoimpl/pedidoDAO');
 
function PedidoService(){
  this.criarPedido = inserirPedido;
  this.consultarPedido = buscarPedido;
}

function inserirPedido(statusPram, data, usuario, itensPedido, total){
  return new Promise(function(resolve, reject){ 

      pedidoDAO.criarPedido(statusPram, data, usuario, itensPedido, total).then( response => {
          resolve(response); 
      }).catch(erro =>{
          console.log("ERRO GENERICO");
      }); 

   });
}

function buscarPedido(){
  return new Promise(function(resolve, reject){ 

      pedidoDAO.consultarPedido().then( response => {
          resolve(response); 
      }).catch(erro =>{
          console.log("ERRO GENERICO");
      }); 

   });
}

module.exports = new PedidoService();