 var socket = io();

 socket.on('connect', function() {
     console.log('Connected to socket.io server!');
 });

 socket.on('message', function(message) {
     console.group('New message:');
     console.log(message.text);
 })