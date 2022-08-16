const { CrearSecreto, SecretosPorUsuarios } = require('../controllers/secretos');

const {verificarJWT}= require('../middlewares/verificarJWT');

const routes = require('express').Router();

routes.post('/crear', [
    verificarJWT
],CrearSecreto);


routes.get('/secretos/:id', verificarJWT,SecretosPorUsuarios);


module.exports = routes;