var beneficiarioDao = require('../daoimpl/beneficiarioDAO');

function BeneficiarioService(){
  
}


function inserirBeneficiario(nome, idMoipl){
  return beneficiarioDao.inserirBeneficiario(nome, idMoipl).then(function(retorno){
      console.log("inserido beneficiario com sucesso");
  }).promise.catch(err => {
      console.log("erro no beneficiario");
  })
}


module.exports = BeneficiarioService();

  


















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