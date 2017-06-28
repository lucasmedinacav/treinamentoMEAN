var express = require('express'); //Importando o modulo do express
var app = express(); //Obtem o 'objeto' express que sera usado para configurar a aplicacao

var loginRota = require('./routes/loginroutes/login');
var produtoRota = require('./routes/produtosroutes/produto');
var carrinhoComprasRota = require('./routes/carrinhoroutes/carrinho');
var pedidoRota = require('./routes/pedidosroutes/pedido');

app.use("/login", loginRota);
app.use("/produto", produtoRota);
app.use("/carrinho", carrinhoComprasRota);
app.use("/pedido", pedidoRota)

app.listen(3002, function(){
    console.log('Servidor inicializado');
});
