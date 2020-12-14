import React from 'react';
import { useSocket } from './socketProvider';
import { api } from '../services/api'

const ConversationsContext = React.createContext();

export const useConversarion = () => {
    return React.useContext(ConversationsContext);
}

export const ConversationProvider = ({children}) => {
    const socket = useSocket();
 
    async function sendMessage( recipient, message , image ){
      socket.emit('envia-msg', { recipient: recipient.id, text:message, image});
      
      if(image){
        const nameImage = image.uri.split('/').pop();
        const ext = nameImage.split(".").pop();

        var imageToSend = {
            uri: image.uri,
            type: image.type + "/" + ext,
  //          type:"jpeg/"+ext,
            name: nameImage
        }
      }
      
      const data = new FormData();

      data.append( "message" , message.msg );
      imageToSend && data.append( "photo" , imageToSend );
      
      const res = await api.post(`/message/to/${recipient.id}` , data, {
        headers: {
            "Content-type": `multipart/form-data`,
        }
      });
      
      return res.status == 201 ? true : false;
    }
    
    return (
        <ConversationsContext.Provider value={sendMessage}>
            {children}
        </ConversationsContext.Provider>
    );
}
