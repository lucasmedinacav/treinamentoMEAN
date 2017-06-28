'use restrict';
let mongoose = require('mongoose');
let carroSchema = require('../schema/carroSchema');
let Schema = mongoose.Schema;

var pedido = new Schema({    
    status : {type : String, require: true},
    data : {type : Date},
    total : {type : Number, require: true}
    
});

module.exports = pedido;