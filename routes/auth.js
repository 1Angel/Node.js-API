const { check } = require('express-validator');
const { Register, Login, Busqueda, SaberSecretosUsuarios } = require('../controllers/auth');
const { EmailExiste } = require('../helpers/db-validator');
const {validarCampos} = require('../middlewares/validarCampos')
const routes = require('express').Router();


routes.post('/register',[
    check('username', 'el username es obligatorio').not().isEmpty(),
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('apellido', 'el apellido es obligatorio').not().isEmpty(),
    check('correo', 'el correo es obligatorio').not().isEmpty(),
    check('password', 'la password debe ser mayor de 6 caracteres').isLength({min:6}),
    check('correo').custom(EmailExiste),
    validarCampos
],Register);

routes.post('/login', Login);


routes.get('/search/:palabra', Busqueda);

routes.get('/searchxd/:id', SaberSecretosUsuarios);


module.exports = routes;