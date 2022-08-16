const mongoose = require('mongoose');
const { MONGO_URI } = require('../config');

const dbconexion =()=>{
    try{
        mongoose.connect(MONGO_URI,{
            useNewUrlParser:true
        });
        console.log('**Base de datos conectada**')
    }
    catch{
        console.log(error);
    }
}


module.exports = {
    dbconexion
}