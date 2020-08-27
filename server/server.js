require('./config/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

//Carga de rutas restq
app.use(require('./routes/usuario'));

//Conexión a la base de datos
mongoose.connect(process.env.URLDB,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false },
    (err, res) => { if (err) throw err; console.log('base de datos ONLINE'); });

//Puerto del servidor
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})