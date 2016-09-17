/**
 * Entry point of the socket chat app
 */
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

// Server listens to a port
http.listen(PORT, () => {
    console.log('Server started');
});
