const http = require('http');
const express = require('express');
const morgan = require('morgan');

// Iniciar express
const app = express();

// Crear un nuevo server
const server = http.createServer(app);

// Indicarle el puerto de la aplicación
app.set('port', 3000);
// Para saber el tipo de petición
app.use(morgan('dev'));
// Indicarle los archivos a enviar al cliente
app.use(express.static(__dirname + "/public"));

// Poner el servidor a la escucha
server.listen(app.get('port'), ()=>{
    console.log('Servidor iniciado');
});

// Logica de los sockets
require('./sockets')(server);