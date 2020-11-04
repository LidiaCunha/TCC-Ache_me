import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useSocket } from './socketProvider';
import { useAuth } from './auth';
import { api } from '../services/api'

const ConversationsContext = React.createContext();

export const useConversarion = () => {
    return React.useContext(ConversationsContext);
}

export const ConversationProvider = ({children}) => {
    const { user } = useAuth();
    const socket = useSocket();
    const [ conversations , setConversations ] = useLocalStorage( 'conversarions' , [] );
    const [selectedConversationIndex , setSelectedConversationIndex ] =React.useState(0);
    
    function createConversation( recipient ){
        setConversations((pc) => { return [ pc , { recipient , messages:[] } ]});
    }

    async function sendMessage( recipient, message , image ){
      socket.emit('envia-msg', { recipient: recipient.id, text:message});

      addMessageToConversation({recipient, text:message, sender:user});

      const data = new FormData();

      data.append( "message" , message.msg );
      image && data.append( "photo" , image );
      
      const res = await api.post(`/message/to/${recipient.id}` , data, {
        headers: {
            "Content-type": `multipart/form-data`,
        }
      });

      return res.status == 201 ? true : false;
    }
    
    const addMessageToConversation = React.useCallback(({ recipient, text, sender }) => {
        setConversations(prevConversations => {
          let madeChange = false
          const newMessage = { sender, text }
          const newConversations = prevConversations.map(conversation => {
            if ( conversation.recipient === recipient ) {
              madeChange = true
              return {
                ...conversation,
                messages: [...conversation.messages, newMessage]
              }
            }
            return conversation
          })
    
          if (madeChange) {
            return newConversations
          } else {
            return [
              ...prevConversations,
              { recipient, messages: [newMessage] }
            ]
          }
        })
    }, [setConversations])

    React.useEffect(()=>{
        if( socket == null) return;

        socket.on('recebe-msg', addMessageToConversation);

        return ( ) => socket.off('recebe-msg');
    },[ socket , addMessageToConversation ]);  
   
    const output = {
        conversations,
        selectedConversationIndex: setSelectedConversationIndex,
        createConversation,
        sendMessage
    }
    
    return (
        <ConversationsContext.Provider value={output}>
            {children}
        </ConversationsContext.Provider>
    );


}
