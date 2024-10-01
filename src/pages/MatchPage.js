import React, { useState, useEffect, useContext } from 'react';
import heartLogo from '../images/Heart_Logo.png';
import xLogo from '../images/CircleX.png'
import choosrLogo from '../images/choosrlogo.png'
import nameLogo from '../images/name.png'
import check from '../images/check.png'
import { SocketContext } from '../App'

export const MatchPage = () => {
    const [matchedCard, setMatchedCard] = useState(null);
    return (
        <div className="App">
          <div className="content-container">
            <img draggable = "false"
            src={nameLogo} alt="App Logo" className="app-logo" />
                <div className="card"> 
                <div className="content-wrapper">
                    <img draggable = "false"
                    src={choosrLogo} alt="Activity" className="activity-image"/>
                    <h1 className="activity-name">Activity</h1>
                <div className="tag-container">
                  <span className="tag">$$$</span>
                  <span className="tag">distance</span>
                </div>
                <div className="description-container">
                  <p className="activity-description">Hi</p>
                </div>
                <img draggable = "false"
                src={check} alt="checkmark" className="checkmark"/>
              </div>
            </div>
          </div>
        </div> 
      );
}