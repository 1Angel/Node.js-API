const {Schema, model} = require('mongoose');



const UsuarioSchema = Schema({
    username: {type:String, required:[true, 'el username es obligatorio']},
    nombre:{type:String, required:[true, 'el nombre es obligatorio']},
    apellido:{type:String, required:[true, 'el apellido es obligatorio']},
    correo:{type:String, required:[true, 'el correo es obligatorio']},
    password:{type:String, required:[true, 'el password es obligatorio']},
    sexo:{type:String, require:true, enum:['Masculino','Femenino', 'No especificar'], default:'No especificar'},
    rol:{type:String, require:true, enum:['ADMIN','USER'], default:'USER'}
});

module.exports = model('usuarios', UsuarioSchema);