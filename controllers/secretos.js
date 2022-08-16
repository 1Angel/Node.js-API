const Secretos = require('../models/secretos');


const CrearSecreto = async(req,res)=>{
    const {nombre, descripcion} = req.body;
    const secretos = await Secretos({nombre, descripcion,usuario:req.usuarios._id});

    await secretos.save();

    res.json({
        msg: "secreto guardado",
        secretos
    })
}
const SecretosPorUsuarios = async(req,res)=>{
    const {id} = req.params;

    const secretos = await Secretos.findById(id).populate('usuario', 'nombre');

    res.json({
        msg: "secretos de este usuario",
        secretos
    })
}





module.exports = {
    CrearSecreto, SecretosPorUsuarios
}