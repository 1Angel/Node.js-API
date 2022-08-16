const jwt = require('jsonwebtoken');
const { CLAVESECRETA } = require('../config');

const generarJWT = (id,correo, rol)=>{
  return jwt.sign({
    id:id,
    correo:correo, 
    rol:rol
  },CLAVESECRETA,{
    expiresIn:"365d"
  });
}

module.exports = {
    generarJWT
}