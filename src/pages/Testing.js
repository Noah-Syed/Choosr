import '../App.css';
import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import {SocketContext} from '../App' 

export const WaitingPage = () => {
  const {redirectToSwipe} = useContext(SocketContext)
  
  const navigate = useNavigate();

  if(redirectToSwipe){
    navigate('/swipe');
  }
  
  return(
    <div>
      <h1> TOO SLOW LOL! You gotta wait!!! </h1>
    </div>
    
  );

}
