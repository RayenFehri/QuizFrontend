import React, { lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'; // Import du composant Navbar
import AddEmployee from './components/Employee/AddEmployee';
import { EditEmployee } from './components/Employee/EditEmployee';
import { EditManager } from './components/Manager/EditManager';
import AddManager from './components/Manager/AddManager';
import { ListManager } from './components/Manager/ListManager';
import ProfileEmployee from './components/Employee/ProfileEmployee';
import ProfileManager from './components/Manager/ProfileManager';
import { ListEmployees } from './components/Employee/ListEmployee';
import SendEmailComponent from './components/Email/SendEmail';
import { AuthProvider } from './services/Auth/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ListReport from './components/Pages/Reports/ListReport';
import ReportDetail from './components/Pages/Reports/ReportDetail';
import ProfileUserSignIn from './components/Pages/Login/ProfileUserSignIn';
import Quizes from './components/Quiz/ListQuiz';
import CreateQuiz from './components/Quiz/CreateQuiz';
import CreateCategory from './components/Category/CreateCategory';
import ListCategories from './components/Category/ListCategory';
import {EditCategory} from './components/Category/EditCategory';
import EditQuiz from './components/Quiz/EditQuiz';
import ChatBot from './components/ChatBot/chatBot';
// const ChatBot= lazy(() => import('./components/ChatBot/chatBot'));   // Import du composant ChatBot en lazy loading 
import CreateGroup from './components/Group/CreateGroup';
import EditGroup from './components/Group/EditGroup';
import ListGroup from './components/Group/ListGroup';
import QuestionQuiz from './components/QuestionQuiz/QuestionQuiz';
import Footer from './components/Footer/Footer';

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
      
      {shouldDisplayHeaderAndNavbar && (
        <>
          <Header />
          <Navbar />
        </>
      )}
      
        <Routes>
          <Route path="/login" element={<Login />} /> {/* it works */}
          <Route path="/" element={<Home />} />  {/* it works */}
          <Route path="/addEmployee" element={<AddEmployee />} />{/* it works */}
          <Route path="/listEmployees" element={<ListEmployees />} /> {/* it works */}
          <Route path="/editEmployee/:id" element={<EditEmployee />} /> {/* it works */}
          <Route path="/addManager" element={<AddManager />} /> {/* it works */}
          <Route path="/listManagers" element={<ListManager onTotalManagersChange={function (total: number): void {
          throw new Error('Function not implemented.');
        } } />} /> {/* it works */}
          <Route path="/editManager" element={<EditManager />} /> {/* it works */}
          {/* <Route path="/calendar" element={<Calendar />} /> */}
          <Route path="/profileEmployee/:id" element={<ProfileEmployee />} /> {/* it works */}
          <Route path="/profileManager" element={<ProfileManager />} /> {/* it works */}
          <Route path="/sendEmail" element={<SendEmailComponent />} /> {/* it works */}
          <Route path="/questionquiz/:idquiz" element={<QuestionQuiz/>} /> {/* it works */}
          <Route path="/creategroup" element={<CreateGroup/>} /> {/* it works */}
          <Route path="/editgroup/:idgroup" element={<EditGroup/>} /> {/* it works */}
          <Route path="/listgroup" element={<ListGroup/>} /> {/* it works */}
          <Route path="/chatbot" element={<ChatBot/>} /> {/* it works */}
          <Route path="/editcategory/:idcategory" element={<EditCategory/>} /> {/* it works */}
          <Route path="/editquiz/:idquiz" element={<EditQuiz/>} /> {/* it works */}
          <Route path="/listcategory" element={<ListCategories/>}/> {/* it works */}
          <Route path="/createcategory" element={<CreateCategory/>}/> {/* it works */}
          <Route  path="/createquiz" element={<CreateQuiz/>}/> {/* it works */}
          <Route path="/addEmployee" element={<AddEmployee/>} /> {/* it works */}
          <Route path="/listquiz" element={<Quizes/>} /> {/* it works */}
          <Route path="/listReport" element={<ListReport/>} /> {/* it works */}
          <Route path="/reportDetail" element={<ReportDetail/>} /> {/* it works */}
          <Route path="/myProfile" element={<ProfileUserSignIn />} /> {/* it works */}
        </Routes>
        <Footer />
    </>
  );
}

export default App;
