import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import CookingPage from './Pages/CookingPage';
import FitnessPage from './Pages/FitnessPage';
import ProgrammingPage from './Pages/Programming';
import PaintingPage from './Pages/PaintingPage';
import ProfilePage from './Pages/ProfilePage';


function App() {

  return (
    <div>
      
      <Routes>
        <Route exact path ="/*" element={<MainPage/>} />
        <Route exact path ="/Cooking" element={<CookingPage/>} />
        <Route exact path ="/Fitness" element={<FitnessPage />} />
        <Route exact path ="/Programming" element={<ProgrammingPage />} />
        <Route exact path ="/Painting" element={<PaintingPage />} />
        <Route exact path ="/Profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
