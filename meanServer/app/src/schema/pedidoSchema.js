'use restrict';
let mongoose = require('mongoose');
let produtoSchema = require('./produtoSchema');
let Schema = mongoose.Schema;

var pedido = new Schema({    
    status : {type : String, require: true},
    dataPedido : {type : Date},
    usuario: {type : String, require: true},
    itens : {type : [{  produto : produtoSchema, 
                        quantidade: Number, 
                        valorUnitario : Number, 
                        valorTotal : Number}], 
                        require : true},
    totalPedido : {type : Number , require : true}
});

module.exports = pedido;