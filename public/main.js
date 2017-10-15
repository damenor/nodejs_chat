$(()=>{

    // Conexión de un nuevo socket
    var socket = io();
    
    // Variables
    var message = $('#chat-message');
    var chat = $('#chat');

    // Focus en el textarea cuando inicie la aplicación
    message.focus();

    $('#message-box').submit((event)=>{
        event.preventDefault();

        // No mostrar mensajes vacios
        if(message.val() === '') return;

        // Enviar mensaje al servidor
        socket.emit('mensaje-del-cliente', message.val());
        // Limpiar input
        message.val('');
    });

    // Escuchar evento del servidor
    socket.on('mensaje-del-servidor', (data)=>{
        chat.append(data + "<br>")
    });

});