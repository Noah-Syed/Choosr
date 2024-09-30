import React, { useState, useEffect } from 'react';
import heartLogo from '../images/Heart_Logo.png';
import xLogo from '../images/CircleX.png'
import choosrLogo from '../images/choosrlogo.png'
import nameLogo from '../images/name.png'
export const SwipePage = () => {
  // State variables for tracking movement and rotation
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handleStart = (event) => {
    setIsDragging(true);
    setStartX(event.type === 'mousedown' ? event.clientX : event.touches[0].clientX);
  };

  const handleMove = (event) => {
    if (!isDragging) return;

    const x = event.type === 'mousemove' ? event.clientX : event.touches[0].clientX;
    const deltaX = x - startX;
    setCurrentX(deltaX);

    // Calculate rotation based on horizontal movement
    if(deltaX > 0){
      deltaX/10 < 20 ? setRotation(deltaX / 10) : setRotation(20);
    }
    else if(deltaX < 0){
      deltaX/10 > -20 ? setRotation(deltaX / 10) : setRotation(-20);
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100; // Threshold for triggering swipe action
    if (Math.abs(currentX) > threshold) {
      // Animate card out of view based on direction
      const direction = currentX > 0 ? 1 : -1;
      setCurrentX(direction * 1000); // Move off-screen

      if(direction == 1){
        console.log("User Swiped Right");
      }
      else{
        console.log("User Swiped Left");
      }

      // Reset the card after animation
      setTimeout(() => {
        setCurrentX(0);
        setRotation(0);
      }, 500);
    } else {
      // Snap back if swipe was too short
      setCurrentX(0);
      setRotation(0);
    }
  };

  //automatically swipes the card right if the user clicks on the heart button
  const handleHeartClick = () => {
    setCurrentX(1000);
    setRotation(20);
    console.log("User Swiped Right");

    setTimeout(() => {
      setCurrentX(0);
      setRotation(0);
    }, 500);
  };

  //automatically swipes the card left if the user clicks on the x button
  const handleXClick = () => {
    setCurrentX(-1000);
    setRotation(-20);
    console.log("User Swiped Left");

    setTimeout(() => {
      setCurrentX(0);
      setRotation(0);
    }, 500);
  };

  useEffect(() => {
    // Add event listeners for mouse/touch events
    const handleMouseMove = (e) => handleMove(e);
    const handleMouseUp = () => handleEnd();
    const handleTouchMove = (e) => handleMove(e);
    const handleTouchEnd = () => handleEnd();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, currentX, startX, rotation]);
  return (
    <div className="App">
      <div className="content-container">
      <img src={nameLogo} alt="App Logo" className="app-logo" />
        <div
          className="card"
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          style={{
            transform: `translateX(${currentX}px) rotate(${rotation}deg)`,
            transition: !isDragging ? 'transform 0.3s ease-out' : 'none', // Smooth transition when releasing
          }}
        >
          <img src={choosrLogo} alt="Activity" className="activity-image"/>
          <h1 className="activity-name">Activity Name</h1>
          <div className="tag-container">
            <span className="tag">Type</span>
            <span className="tag">$$$</span>
            <span className="tag">Distance</span>
            <span className="tag">Hours</span>
          </div>
          
          <div className="like-dislike-container">
            <img src={xLogo} alt="Dislike" className="like-dislike" onClick={handleXClick}/>
            <img src={heartLogo} alt="Love this" className="like-dislike" onClick={handleHeartClick}/>
          </div>
        </div>
      </div>
    </div>
  );
};