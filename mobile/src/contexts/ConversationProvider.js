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
    const [ conversations , setConversations ] = useLocalStorage( 'conversarions' , [] );
    const [selectedConversationIndex , setSelectedConversationIndex ] = React.useState(0)
    const socket = useSocket();
 
    function createConversation( recipient ){
        setConversations( ( prevCvs ) => {
            return [ ...prevCvs, { recipient , messages:[] } ];
        })
    }
    function sendMessage( recipient, text){

        socket.emit('envia-msg', { recipient, text})

        addMessageToConversation({recipient, text, sender:user})
    }
    const addMessageToConversation = React.useCallback(({ recipients, text, sender }) => {
        setConversations(prevConversations => {
          let madeChange = false
          const newMessage = { sender, text }
          const newConversations = prevConversations.map(conversation => {
            if (arrayEquality(conversation.recipients, recipients)) {
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
              { recipients, messages: [newMessage] }
            ]
          }
        })
    }, [setConversations])

    React.useEffect(()=>{
        if( socket == null) return;

        socket.on('recebe-msg', addMessageToConversation);

        return ( ) => socket.off('recebe-msg');
    },[ socket , addMessageToConversation ]);

    const formatedConversations = conversations.map( (conversation, index ) => {
            const recipient =  {id: recipient};
            const messages = conversation.messages.map( (message) => { 

            const res = api.get(`/users/${message.sender}`);

            const name = ( contact && contact.name) || message.sender;
            const fromMe = id === message.sender;
            return { sender: message.sender, fromMe, text:message.text};
        })
        const selected = index === selectedConversationIndex;
        return {...conversation, messages , selected , recipients};
    })
 
    const output = {
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