 var socket = io();

 socket.on('connect', function() {
     console.log('Connected to socket.io server!');
 });

 socket.on('message', function(message) {

     // Get the timestamp in utc
     var momentTimestamp = moment.utc(message.timestamp);
     console.group('New message:');
     console.log(message.text);

     $('.messages').append('<p><strong>' + momentTimestamp.local().format('h:mm:ss a') + ': </strong>' + message.text + '</p>');
 })

 //Handles submitting new message
 var form = $('#message-form');
 form.on('submit', function (event) {
     event.preventDefault();
     var inputElemObj = form.find('input[name=message]');
     socket.emit('message', {
         text: inputElemObj.val()
     });

     // Clean up the text field after commit
     inputElemObj.val(''); 

 });