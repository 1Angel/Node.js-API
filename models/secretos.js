const {model,Schema, Types} = require('mongoose')


const SecretoSchema = Schema({
    nombre:{type:String, require:true},
    descripcion:{type:String, require:true},
    usuario:[{
        type:Schema.Types.ObjectId,
        ref: 'usuarios'
    }]
})

module.exports = model('secretos', SecretoSchema);