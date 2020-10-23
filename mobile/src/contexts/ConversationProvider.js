import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
//import { useCtts } from './ContactsProvider';
import { useSocket } from './socketProvider';
import { useAuth } from './auth';
import { api } from '../services/api';

const ConversationsContext = React.createContext();

export const useConversarion = () => {
    return React.useContext(ConversationsContext);
}

export const ConversationProvider = ({children}) => {
    const { user } = useAuth();
    const socket = useSocket();
    const [ conversations , setConversations ] = useLocalStorage( 'conversarions' , [] );
    const [selectedConversationIndex , setSelectedConversationIndex ] = React.useState(0)
    
    function createConversation( recipient ){
        setConversations( ( prevCvs ) => {
            return [ ...prevCvs, { recipient , messages:[] } ];
        })
    }
    function sendMessage( recipient, text){

        socket.emit('envia-msg', { recipient, text})

        addMessageToConversation({recipient, text, sender:user})
    }
    const addMessageToConversation = React.useCallback(({ recipient, text, sender }) => {
        setConversations(prevConversations => {
          console.log(prevConversations)
          //let madeChange = false
          const newMessage = { sender, text }

          // const newConversations = prevConversations?.map(conversation => {
          //   madeChange = true
              
          //   return {
          //     ...conversation,
          //     messages: [...conversation.messages, newMessage]
          //   }
          // })
  
          // if (madeChange) {
          //   return newConversations
          // } else {
            const n = [
               ...prevConversations,
             { recipient ,newMessage }
            ]
            return n
          //}
        })
    }, [setConversations])

    React.useEffect(()=>{
        if( socket == null) return;

        socket.on('recebe-msg', addMessageToConversation);

        return ( ) => socket.off('recebe-msg');
    },[ socket , addMessageToConversation ]);  
    
    var output = {};
    if(conversations ==='undefined'){    
      const formatedConversations = conversations.map( (conversation, index ) => {

        const recipient =  {id: recipient};
            
          const messages = conversation.messages.map( (message) => { 
            const res = api.get(`/users/${message.sender}`);

            const name = ( contact && contact.name) || message.sender;
              
            const fromMe = id === message.sender;
              
            return { sender: message.sender, fromMe, text:message.text};
          });
        
        const selected = index === selectedConversationIndex;
        
        return {...conversation, messages , selected , recipients};
      })
 
      output = {
        conversations : formatedConversations,
        selectedConversation:formatedConversations[selectedConversationIndex],
        selectedConversationIndex: setSelectedConversationIndex,
        createConversation,
        sendMessage
      }
    }else{
      
      output = {
        selectedConversationIndex: setSelectedConversationIndex,
        createConversation,
        sendMessage
      }
    }
    return (
        <ConversationsContext.Provider value={output}>
            {children}
        </ConversationsContext.Provider>
    );


}

const arrayEquality = (a,b) =>{
    if( a.length !== b.length ) return false

    a.sort();
    b.sort();

    return a.every( ( el , index ) => {
        return el === b[index]
    } )
}