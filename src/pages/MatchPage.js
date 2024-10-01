import React, { useState, useEffect, useContext } from 'react';
import heartLogo from '../images/Heart_Logo.png';
import xLogo from '../images/CircleX.png'
import choosrLogo from '../images/choosrlogo.png'
import nameLogo from '../images/name.png'
import check from '../images/check.png'
import youMatched from '../images/youMatched.png'
import { SocketContext } from '../App'

export const MatchPage = () => {
    const [showCard, setShowCard] = useState(false);
    const [showCheckmark, setShowCheckmark] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCard(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if(showCard) {
            const checkmarkTimer = setTimeout(() => {
                setShowCheckmark(true);
        }, 4000);
        return () => clearTimeout(checkmarkTimer);
        }
    }, [showCard]);

    return (
        <div className="App">
          <div className="content-container">
            <img draggable = "false"
            src={nameLogo} alt="App Logo" className="app-logo" />
                {!showCard ? (
                    <div className="flashing-image-container">
                       <img src={youMatched} alt="Matched" className="flasing-image"/>
                    </div> 
                ) : (
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
            )}
          </div>
        </div> 
    );
}