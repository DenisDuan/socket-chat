 var socket = io();

 socket.on('connect', function() {
     console.log('Connected to socket.io server!');
 });

 socket.on('message', function(message) {
     console.group('New message:');
     console.log(message.text);
 })

 //Handles submitting new message
 var form = $('#message-form');
 form.on('submit', function (event) {
     event.preventDefault();
     var inputElemObj = form.find('input[name=message]');
     socket.emit('message', {
         text: inputElemObj.val()
     });
     inputElemObj.val(''); 

 });