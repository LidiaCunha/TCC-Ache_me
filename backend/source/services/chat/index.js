const io = require('socket.io')(5000);
console.log("SOCKET SERVER NA PORTA 5000")
io.on('connection', socket => {
    const id = socket.handshake.query.id;
    socket.join(id);

    socket.on( 'envia-msg' , ({ recipient , text , image})=>{

        socket.to(recipient).emit( 'recebe-msg' , { recipient, sender: id , text, image } );
      
    } )
})