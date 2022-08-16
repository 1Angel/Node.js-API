const express =require('express');
const { PORT } = require('./config');
const { dbconexion } = require('./database');
const app = express();
const cors =require('cors');

dbconexion();

app.use(cors());

app.use(express.json());

app.use('/api/auth', require('./routes/auth'))

app.use('/api/secreto', require('./routes/Secretos'));

app.listen(PORT, ()=>{
    console.log(`app corriendo en el server ${PORT}`)
})