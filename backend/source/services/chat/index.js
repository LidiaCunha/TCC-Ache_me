const io = require('socket.io')(5000)

io.on('connection', socket => {
    const id = socket.handshake.query.id;
    socket.join(id);

    socket.on( 'envia-msg' , ({ recipient , text })=>{

        socket.to(recipient.id).emit( 'recebe-msg' , { recipient, sender: id , text } );
    		
    	console.log({ recipient, sender: id , text })
    } )
})