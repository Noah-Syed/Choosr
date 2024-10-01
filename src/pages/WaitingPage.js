import '../App.css';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import {SocketContext} from '../App' 
import maroonLogo from '../images/maroonlogo2.png'

export const WaitingPage = () => {
  const {redirectToSwipe} = useContext(SocketContext)
  const [ellipsis, setDots] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
        setDots((prevDots) => {
            if (prevDots.length < 3) {
                return prevDots + '.';
            } else {
                return '';
            }
        });
    }, 500); 

    return () => clearInterval(interval);
}, []);

  if(redirectToSwipe){
    navigate('/swipe');
  }
  
  return(
    <div className="waiting-container">
      <img src={maroonLogo} alt="Logo" className="waiting-name-image"/>
      <div>
        <h2>Waiting for host to decide{ellipsis}</h2>
      </div>
    </div>
  );

}
