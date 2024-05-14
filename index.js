'use strict';

const port = process.env.PORT || 3000;

const io = require('socket.io')(port);

// Automatically triggered anytime a client connects
io.on('connection', (socket) => {
  console.log('Connected', socket.id);

  // Eyes will emit this event ...
  socket.on('light', payload => {
    console.log("Recieved light event, with payload: ", payload);
    io.emit('brightness', payload);
  })

});
