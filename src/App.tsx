import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (

    <>
     <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} /> 
        <Route path='/nav' element={<Navbar/>} />
    </Routes>

    </Router>
    </>
  );
}

export default App;
