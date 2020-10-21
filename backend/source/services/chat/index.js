const io = require('socket.io')(5000)

io.on('connection', socket => {
    const id = socket.handshake.query.id;
    socket.join(id);

    socket.on( 'envia-msg' , ({ recipients , text })=>{
        recipients.forEach(recipent => {
            const newRecipient = recipients.filter(r => r !== recipients );

            newRecipient.push(id);

            socket.broadcast.to(recipent).emit( 'recebe-msg' , { recipients: newRecipient, sender: id , text } );
        })
    } )
})