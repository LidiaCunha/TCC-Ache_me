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
    const [selectedConversationIndex , setSelectedConversationIndex ] =React.useState(0)
    
    function createConversation( recipient ){
        setConversations((pc) => { return [ pc , { recipient , messages:[] } ]})
    }

    function sendMessage( recipient, text){
      socket.emit('envia-msg', { recipient: recipient.id, text})

      addMessageToConversation({recipient, text, sender:user})
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
    
    var output = {};
    
    const formatedConversations = conversations.length ?  conversations.map( (conversation, index ) => {
     
      var messages = []
      var recipient;
      conversation.messages != undefined && conversation.messages.length ? 
        conversation.messages.forEach( async(message) => {
          recipient= conversation.recipient.id
          const fromMe = conversation.recipient.id === message.sender;
          
          messages[messages.length]= { ...message , fromMe}
        }) 
      : conversation.messages;

      const selected = recipient == selectedConversationIndex;
     // console.log({...conversation, messages , selected , recipient})
      return {...conversation, messages , selected , ...conversation.recipient};

    }) : conversations;

      output = {
       conversations : formatedConversations,
       selectedConversation:formatedConversations[selectedConversationIndex],
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

const arrayEquality = (a,b) =>{
    if( a.length !== b.length ) return false

    a.sort();
    b.sort();

    return a.every( ( el , index ) => {
        return el === b[index]
    } )
}