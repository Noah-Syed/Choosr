import React from 'react';
import noMatch from '../images/nomatch.png';

export const NoMatchPage = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#5a0404'
        }}>
            <img src={noMatch} alt="No Match" 
            style={{ maxWidth: '90%', height: '90%' }} />
        </div>
    );
};
