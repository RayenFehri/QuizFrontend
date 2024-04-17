import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'; // Import du composant Navbar
import AddEmployee from './components/Pages/Employee/AddEmployee';
import {EditEmployee} from './components/Pages/Employee/EditEmployee';
import { EditManager } from './components/Pages/Manager/EditManager';
import AddManager from './components/Pages/Manager/AddManager';
import { ListManager } from './components/Pages/Manager/ListManager';
import Calendar from './components/Pages/Calendar/Calendar';
import Footer from './components/Footer/Footer';
import ProfileEmployee from './components/Pages/Employee/ProfileEmployee';
import ProfileManager from './components/Pages/Manager/ProfileManager';
import { ListEmployees } from './components/Pages/Employee/ListEmployees';
import QuestionQuiz from './components/Pages/Quiz/QuestionQuiz';
import SendEmailComponent from './components/Email/SendEmail';

function App() {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const excludedPaths = ['/login', '/profileEmployee','/profileManager',];
  const shouldDisplayHeaderAndNavbar = !excludedPaths.includes(location.pathname);

  return (
    <>
      {/* Conditionally render Header and Navbar based on the path */}
      {shouldDisplayHeaderAndNavbar && (
        <>
          <Header />
          <Navbar />
        </>
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path='/addEmployee' element={<AddEmployee/>} />
        <Route path="/listEmployees" element={<ListEmployees/>} />
        <Route path="/editEmployee/:id" element={<EditEmployee />} />
        <Route path='/addManager' element={<AddManager/>} />
        <Route path='/listManagers' element={<ListManager/>} />
        <Route path='/editManager' element={<EditManager/>} />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path="/profileEmployee/:id" element={<ProfileEmployee/>} />
        <Route path="/profileManager" element={<ProfileManager/>} />
        <Route path="/questionQuiz" element={<QuestionQuiz/>} />
        <Route path="/sendEmail" element={<SendEmailComponent/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;


