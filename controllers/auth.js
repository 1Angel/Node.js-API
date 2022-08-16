const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/generarJWT');
const Usuarios = require('../models/usuarios')

const Register = async(req,res)=>{
    const {username,nombre,apellido,correo,password,sexo,rol} = req.body;
    const usuarios = Usuarios({username,nombre,apellido,correo,password,sexo,rol});

    usuarios.password = bcrypt.hashSync(password)

    usuarios.save();

    res.json({
        msg: "registro exitoso",
        usuarios
    })
}   


const Login = async(req,res)=>{
    const {correo, password}=req.body;

    try{
        const usuarios = await Usuarios.findOne({correo});
        if(!usuarios){
            return res.status(400).json({
                msg: "el correo no existe"
            })
        }
        const validarpassword = bcrypt.compareSync(password, usuarios.password);
        if(!validarpassword){
            return res.status(400).json({
                msg: "las password no coinciden"
            })
        }
        const payload = generarJWT(usuarios.id,usuarios.correo,usuarios.rol)

        res.json({
            msg: "login exitoso",
            payload
        })
    }
    catch{
        res.json({
            msg: "login invalido"
        })
    }
}


const Busqueda = async(req,res)=>{
    const {palabra} = req.params;
    const usuarios = await Usuarios.find({
        $or:[
            {
                nombre: {$regex:palabra}
            }
        ]
    });

    res.json({
        msg: 'resultado busqueda',
        resultado:[
            usuarios
        ]
    })
}


const SaberSecretosUsuarios = async(req,res)=>{
    const {id} = req.params;
    const secreto = await Usuarios.findById({id}).populate('secretos');
}


module.exports = {
    Register, Login, Busqueda, SaberSecretosUsuarios
}