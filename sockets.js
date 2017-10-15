const socket_io = require('socket.io');

module.exports = function(server){

    // Nuevo socket a la escucha del servidor
    var sockets = socket_io.listen(server);
    
    // Cuando el nuevo socket se conecte
    sockets.on('connection', (socket)=>{
        console.log('Nuevo socket conectado');
        // Recibir el mensaje del cliente
        socket.on('mensaje-del-cliente', (data)=>{
            sockets.emit('mensaje-del-servidor', data);
        });
    });

}