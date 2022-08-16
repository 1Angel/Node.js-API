const Usuarios = require('../models/usuarios');

const EmailExiste = async(correo='')=>{
    const usuarios =await Usuarios.findOne({correo});
    if(usuarios){
        throw new Error(`el email ${correo} ya existe`)
    }
}


module.exports = {
    EmailExiste
}