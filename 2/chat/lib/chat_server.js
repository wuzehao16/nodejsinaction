const socketio = require('socket.io');
var io;
var guestNumber = 1;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};

export.listen = function (server) {
  io = socketio.listen(server);
  io.set('log level', 1)
  io.socket.on('connection', (socket) => {
    guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);
    joinRoom(socket, 'Noob');
    handleMessageBroadcasting(socket, nickNames);
    handleRoomJoining(socket);
    socket.on('rooms', function () {
      socket.emit('rooms',io.sockets.manager.rooms);
    }
    handlerClientDisconnection(socket, nickNames, namesUsed)
  })
}
