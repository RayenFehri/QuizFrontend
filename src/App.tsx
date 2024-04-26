import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import AddEmployee from './components/Pages/Employee/AddEmployee';
import { EditEmployee } from './components/Pages/Employee/EditEmployee';
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
import { AuthProvider } from './Services/Auth/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const excludedPaths = ['/login', '/profileEmployee/:id', '/profileManager'];
  const shouldDisplayHeaderAndNavbar = !excludedPaths.includes(location.pathname);

  return (
    <>
        
          <Header />
          <Navbar />
       

      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<PrivateRoute   />}> */}
          <Route  path="/home" element={<Home />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/listEmployees" element={<ListEmployees />} />
          <Route path="/editEmployee/:id" element={<EditEmployee />} />
          <Route path="/addManager" element={<AddManager />} />
          <Route path="/listManagers" element={<ListManager />} />
          <Route path="/editManager" element={<EditManager />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profileEmployee/:id" element={<ProfileEmployee />} />
          <Route path="/profileManager" element={<ProfileManager />} />
          <Route path="/questionQuiz" element={<QuestionQuiz />} />
          <Route path="/sendEmail" element={<SendEmailComponent />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
