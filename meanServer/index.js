var express = require('express'); //Importando o modulo do express
var app = express(); //Obtem o 'objeto' express que sera usado para configurar a aplicacao

var bodyParser = require('body-parser');

var loginRota = require('./routes/loginroutes/login');
var produtoRota = require('./routes/produtosroutes/produto');
var carrinhoComprasRota = require('./routes/carrinhoroutes/carrinho');

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
