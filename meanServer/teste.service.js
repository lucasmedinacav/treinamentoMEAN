let benService = require("./app/src/service/beneficiarioService");
let produtoService = require("./app/src/service/produtoService");
let pedidoService = require("./app/src/service/pedidoService");
// let pagamentoService = require("./app/src/service/pagamentoService");

var mongoose = require('mongoose');
let uri = 'mongodb://localhost:27017/mock2';
mongoose.connect(uri);


// benService.criarBeneficiario("Sr. Weverton", "leo.weverton_moip").then(info => {
//     console.log(info);
// });

// benService.consultarBeneficiario().then(info => {
//     console.log(info);
// });

//produtoService.criarProduto("Bicicleta", "Bicicleta Caloi", 130.00, 3, "http://thumbs.buscape.com.br/__PUr-f0d4_2.jpg").then(resultado => console.log(resultado));
// produtoService.consultarProduto().then(resultado=> {
//     var produto = resultado[0];
//     var itens = [
//               {produto, 
//                quantidade: 10, 
//                valorUnitario : 4.0,
//                valorTotal : 50.2
//               },
//               {produto, 
//                quantidade: 10, 
//                valorUnitario : 4.0,
//                valorTotal : 50.2
//               }
//             ] ; 

//     pedidoService.criarPedido("MOCK OK", new Date(), "Leo Santos", itens, 50000.00).then(info => {
//     console.log(info);
// });
// });

// pedidoService.consultarPedido().then(info => {
//     console.log(info);


// });



 