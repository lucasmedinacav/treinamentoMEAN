//CONFIGURANDO MEU PROJETO EXPRESS
var express = require('express'); //Importando o modulo do express
var app = express(); //Obtem o 'objeto' express que sera usado para configurar a aplicacao

//BUSCANDO ROTAS QUE VAMOS UTILIZAR COM O EXPRESS
var bodyParser = require('body-parser');

var allowCors = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');    
    next();
} 

app.use(allowCors); 

var loginRota = require('./routes/loginroutes/login');
var produtoRota = require('./routes/produtosroutes/produto');
var carrinhoComprasRota = require('./routes/carrinhoroutes/carrinho');

//FALANDO QUE VAMOS UTILIZAR ESSAS ROTAS
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/login", loginRota);
app.use("/produto", produtoRota);
app.use("/carrinho", carrinhoComprasRota);


app.listen(3002, function(){
    console.log('Servidor inicializado');
});
