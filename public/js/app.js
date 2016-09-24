 var socket = io();

 // Trigger the 'connet' event that informs the server that user connected
 socket.on('connect', function () {
     socket.emit('welcome', {});
 });

 // listent to the rooms object
 socket.on('activeRoom', function (res) {
     var rooms = res.rooms;
     var roomsElem = $('.rooms');
     if (typeof rooms !== 'undefined' && rooms.length > 0) {
         roomsElem.empty();
         rooms.forEach(function (roomName) {
             // Adds the new incoming message to the page
             roomsElem.append('<div><strong>' + roomName + ' </strong></div>');
         })
     }
 });