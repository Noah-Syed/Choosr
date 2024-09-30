import '../App.css';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {SocketContext} from '../App'
import { useNavigate } from 'react-router-dom'
import maroonLogo from '../images/maroonlogo2.png'

export const SearchPage = () => {
  const [inputName, setInputName] = useState('');
  
  const {redirectToSwipe} = useContext(SocketContext)

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputName);  // Check if inputName has the correct value
    axios.post('http://localhost:3001/submit-form', { inputName })
    .then(response => {
      navigate('/swipe');
    })
    .catch(error => {
      console.error('There was an error submitting the form:', error);
    });
  };

  return (
    <div className="search-bar-container">
      <img src={maroonLogo} alt="Logo" className="name-image"/>
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search through site content"
          id="inputName"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}  // Update state on input change
        />
        <button type="submit">
          <svg viewBox="0 0 1024 1024"><path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
        </button>
      </form>
    </div>
  );
};

