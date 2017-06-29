var beneficiarioDao = require('../daoimpl/beneficiarioDAO');

function BeneficiarioService(){
  this.criarBeneficiario = inserirBeneficiario;
  this.consultarBeneficiario = buscarBeneficiario;
}


function inserirBeneficiario(nome, idMoip){ 
   return new Promise(function(resolve, reject){ 

      beneficiarioDao.inserirBeneficiario(nome, idMoip).then( response => {
          resolve(response); 
      }).catch(erro =>{
          console.log("ERRO GENERICO");
      }); 

   });
}

function buscarBeneficiario(){
   return new Promise(function(resolve, reject){ 
      
      beneficiarioDao.buscarBeneficiario().then( response => {
          resolve(response);
      }).catch(erro =>{
          console.log("ERRO GENERICO");
      });

      

   });
}



module.exports = new BeneficiarioService();