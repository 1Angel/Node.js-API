

const verificarRole =(req,res,next)=>{

    const {rol, correo} = req.usuarios;
    if(rol !=='ADMIN'){
        return res.status(400).json({
            msg: `el usuario de correo ${correo} no es admin`
        })
    }
    next();
}

module.exports = {

    verificarRole
}