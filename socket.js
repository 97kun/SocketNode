const socketio = require('socket.io');
const io = socketio();

io.on('connection', (socket) => {
  socket.broadcast.emit("news",{message:"hello,everyone"});
  socket.emit('news', {message: 'hi'});
  socket.on('zksend',(data)=>{
    io.sockets.emit('news',data);
  })
});



exports.listen = function (server) {
  io.listen(server)
};
