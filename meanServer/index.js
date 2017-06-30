var express = require('express'); //Importando o modulo do express
var app = express(); //Obtem o 'objeto' express que sera usado para configurar a aplicacao

var mongoose = require('mongoose');
let uri = 'mongodb://localhost:27017/mock';
mongoose.connect(uri);


app.use(function (req, res, next) {
    console.log("GO")
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var loginRota = require('./routes/loginroutes/login');
var produtoRota = require('./routes/produtosroutes/produto'); 
var moipRota = require('./routes/moiproutes/moip'); 

var beneficiarioRota = require('./routes/beneficiarioroutes/beneficiario'); 

app.use("/login", loginRota); 
app.use("/produto", produtoRota); 
app.use("/moip", moipRota);
app.use("/beneficiario", beneficiarioRota);

app.use("/", function(request, response){
    response.end("Rota invalida");
});  

app.listen(3002, function(){
    console.log('Servidor inicializado');
});

