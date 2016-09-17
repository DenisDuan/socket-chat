/**
 * Entry point of the socket chat app
 */
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', () => {
    console.log('User connected via socket.io');
});

// Server listens to a port
http.listen(PORT, () => {
    console.log('Server started');
});
