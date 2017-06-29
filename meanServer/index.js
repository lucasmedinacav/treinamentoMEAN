var express = require('express'); //Importando o modulo do express
var app = express(); //Obtem o 'objeto' express que sera usado para configurar a aplicacao

var mongoose = require('mongoose');
let uri = 'mongodb://localhost:27017/mock';
mongoose.connect(uri);

var loginRota = require('./routes/loginroutes/login');
var produtoRota = require('./routes/produtosroutes/produto'); 
var moipRota = require('./routes/moiproutes/moip'); 

app.use("/login", loginRota); 
app.use("/produto", produtoRota); 
app.use("/moip", moipRota);
app.use("/", function(request, response){
    response.end("Rota invalida");
});  

app.listen(3002, function(){
    console.log('Servidor inicializado');
});
