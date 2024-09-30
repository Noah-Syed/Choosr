import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import { SearchPage } from './pages/SearchPage';
import { SwipePage } from './pages/SwipePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { WaitingPage } from './pages/Testing'
import { SocketContext } from './App';
import React, { useContext } from 'react';



export const PageRoutes = () => {

    const { isFirstUser, redirectToSwipe, cardStack } = useContext(SocketContext);

    return(
      <Router>
        <Routes>
         
          //We want only the first user to be shown the search page
          <Route path="/" element={isFirstUser ? <SearchPage /> : <WaitingPage />} />
          
          <Route path="/swipe" element={<SwipePage />} />

          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </Router>
    );

}
