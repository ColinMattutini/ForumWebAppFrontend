import logo from './logo.svg';
import './App.css';
import React from 'react';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path ="/*" element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;
