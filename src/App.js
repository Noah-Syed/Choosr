import logo from './logo.svg';
import './App.css';
import { PageRoutes } from './PageRoutes';
import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';


export const SocketContext = React.createContext();


//Connect to our backend
const socket = io('http://172.30.111.41:3001');

function App() {

  const [isFirstUser, setIsFirstUser] = useState(null);
  const [cardStack, setCardStack] = useState([]);
  const [redirectToSwipe, setRedirectToSwipe] = useState(null);
  
  
  useEffect(() => {
    // Listen for the user-status event, and set the isFirstUser bool
    socket.on('user-status', (data) => {
      setIsFirstUser(data.isFirstUser);
    });

    socket.on('card-data', (data) => {
      setCardStack(data.data)
    })

    socket.on('redirect', (data) => {
      setRedirectToSwipe(true)
    })

  }, []);

  return(
    //Give routing component our context for the firstUser
    <SocketContext.Provider value={{ isFirstUser, cardStack, redirectToSwipe, socket }}>
      <PageRoutes />
    </SocketContext.Provider>
  );

}

export default App;
