/**
 * Entry point of the socket chat app
 */
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('User connected via socket.io');

    socket.on('message', (message) => {
        console.log(`Message received: ${message.text}`);

        // "io.emit" will send the message to everybody including the sender

        // This will send the message to everyboy excludes the sender
        socket.broadcast.emit('message', message);
    });

    // Trigger message
    socket.emit('message', {
        text: 'Welcome to the chat app!'
    });
});



// Server listens to a port
http.listen(PORT, () => {
    console.log('Server started');
});
