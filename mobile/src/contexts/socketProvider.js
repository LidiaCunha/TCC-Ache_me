
import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
import { useAuth } from './auth'

const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ children }) {
  const { user, signed } = useAuth();

  const [socket, setSocket] = useState();
  
  const id = signed ? user.id : -1;
  
  useEffect( ( ) => {
      const newSocket = io(
        'https://acheme.herokuapp.com:5000',
        {query:{ id }}
      )
      
      setSocket(newSocket)

      return () => newSocket.close()
  }, [id]) 
  
  return (
      <SocketContext.Provider value={socket}>
        {children}
      </SocketContext.Provider>
    )
}