/**
 * Entry point of the socket chat app
 */
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const moment = require('moment');

app.use(express.static(__dirname + '/public'));

var clientInfo = {};

io.on('connection', (socket) => {

    console.log('User connected via socket.io');

    // Listen to the event that a new user join a chat room, "req" object is in the format of {name, room}
    socket.on('joinRoom', function(req) {
        clientInfo[socket.id] = req;
        socket.join(req.room);
        socket.broadcast.to(req.room).emit('message', {
            name: 'System',
            text: req.name + ' has joined!',
            timestamp: moment().valueOf()
        });
    });

    // Listen to the event when a new message incomming
    socket.on('message', (message) => {

        console.log(`Message received: ${message.text}`);

        // add timestamp to the message
        message.timestamp = moment().valueOf();
        // "io.emit" will send the message to everybody including the sender
        io.to(clientInfo[socket.id].room).emit('message', message);

        // This will send the message to everyboy excludes the sender
        // socket.broadcast.emit('message', message);
    });

    // Trigger message
    socket.emit('message', {
        text: 'Welcome to the chat app!',
        name: 'System',
        timestamp: moment().valueOf()
    });
});



// Server listens to a port
http.listen(PORT, () => {
    console.log('Server started');
});