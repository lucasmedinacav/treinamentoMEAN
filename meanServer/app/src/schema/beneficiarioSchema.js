'use restrict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var beneficiario = new Schema({    
    nome : {type: String, require : true},
    idProprioMoip : {type : String, require : true}
});

module.exports = beneficiario;