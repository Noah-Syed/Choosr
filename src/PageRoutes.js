import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import { SearchPage } from './pages/SearchPage';
import { SwipePage } from './pages/SwipePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { WaitingPage } from './pages/WaitingPage'
import { SocketContext } from './App';
import React, { useContext } from 'react';
import { MatchPage } from './pages/MatchPage';
import { NoMatchPage } from './pages/NoMatchPage';



export const PageRoutes = () => {

    const { isFirstUser, redirectToSwipe, cardStack, socket } = useContext(SocketContext);

    return(
      <Router>
        <Routes>
         
          //We want only the first user to be shown the search page
          <Route path="/" element={isFirstUser ? <SearchPage /> : <WaitingPage />} />
          
          <Route path="/swipe" element={<SwipePage socket={socket} />} />

          <Route path="*" element={<NotFoundPage />} />

          <Route path="/match" element={<MatchPage />} />

          <Route path="/nomatch" element={<NoMatchPage />} />

        </Routes>
      </Router>
    );

}
