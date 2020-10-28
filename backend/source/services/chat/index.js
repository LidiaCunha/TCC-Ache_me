const io = require('socket.io')(5000);

//const messagesController = require('./controller/messages')

io.on('connection', socket => {
    const id = socket.handshake.query.id;
    socket.join(id);

    socket.on( 'envia-msg' , ({ recipient , text })=>{

        socket.to(recipient).emit( 'recebe-msg' , { recipient, sender: id , text } );
    	console.log({ recipient, sender: id , text })
    	//const res = messagesController.sendMessage(id, recipient, text);

    	//console.log(res)
    } )
})