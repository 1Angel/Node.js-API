const jwt = require('jsonwebtoken');
const { CLAVESECRETA } = require('../config');

const Usuarios =require('../models/usuarios')

const verificarJWT =async (req,res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(400).json({
            msg: "no hay token en la peticion"
        })
    };

    try{
        const {id} = jwt.verify(token, CLAVESECRETA);
        const usuarios = await Usuarios.findById(id);
    
        req.usuarios = usuarios;
        next();

    }
    catch(errror){
        res.json({
            msg: "token invalido"
        })
    }


};


module.exports = {
    verificarJWT
}