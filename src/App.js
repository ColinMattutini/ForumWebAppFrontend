import logo from './logo.svg';
import './App.css';
import React from 'react';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import CookingPage from './Pages/CookingPage';
import FitnessPage from './Pages/FitnessPage';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path ="/*" element={<MainPage/>} />
        <Route exact path ="" element={<MainPage/>} />
        <Route exact path ="/Cooking" element={<CookingPage/>} />
        <Route exact path ="/Fitness" element={<FitnessPage />} />
      </Routes>
    </div>
  );
}

export default App;
