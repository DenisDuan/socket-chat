 var socket = io();
 var name = getQueryVariable('name') || 'Anonymous';
 var room = getQueryVariable('room') || 'Room';

 // Set up the room name
 console.log(name + ' wants to join the ' + room);
 $('h1.room-title').text(room);

 // Trigger the 'connet' event that informs the server that user connected
 socket.on('connect', function() {
     console.log('Connected to socket.io server!');
 });

 // Listens to the 'message' event from server 
 socket.on('message', function(message) {

     // Get the timestamp in utc
     var momentTimestamp = moment.utc(message.timestamp);
     var messageElemObj = $('.messages');

     console.group('New message:');
     console.log(message.text);

    // Adds the new incoming message to the page
     messageElemObj.append('<p><strong>' + message.name + ' ' + 
        momentTimestamp.local().format('h:mm:ss a') + ': </strong></p>');
     messageElemObj.append('<p>' + message.text + '</p>');
 })

 //Handles submitting new message
 var form = $('#message-form');
 form.on('submit', function(event) {
     event.preventDefault();
     var inputElemObj = form.find('input[name=message]');
     socket.emit('message', {
         name: name,
         text: inputElemObj.val()
     });

     // Clean up the text field after commit
     inputElemObj.val('');
 });