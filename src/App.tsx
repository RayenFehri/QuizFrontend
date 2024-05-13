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
import SendEmailComponent from './components/Email/SendEmail';
import { AuthProvider, useAuth } from './Services/Auth/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CreateCategory from './components/Pages/Category/CreateCategory';
import { EditCategory } from './components/Pages/Category/EditCategory';
import ListCategories from './components/Pages/Category/ListCategory';
import ChatBot from './components/Pages/ChatBot.tsx/ChatBot';
import CreateGroup from './components/Pages/Group/CreateGroup';
import EditGroup from './components/Pages/Group/EditGroup';
import CreateQuiz from './components/Pages/Quiz/AddQuiz';
import EditQuiz from './components/Pages/Quiz/EditQuiz';
import Quizes from './components/Pages/Quiz/ListQuiz';
import ListReport from './components/Pages/Reports/ListReport';
import ReportDetail from './components/Pages/Reports/ReportDetail';
import ProfileUserSignIn from './components/Pages/Login/ProfileUserSignIn';
import SendQuizComponent from './components/Email/SendQuiz';
import ListGroup from './components/Pages/Group/ListGroup';
import QuestionQuiz from './components/Pages/QuestionsQuiz/QuestionQuiz';

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
  const { isAuthenticated } = useAuth(); // Assuming useAuth provides information about authentication status

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
        <Route path="/login" element={<Login />} />
        <Route  path="/" element={<Home />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/listEmployees" element={<ListEmployees />} />
          <Route path="/editEmployee/:id" element={<EditEmployee />} />
          <Route path="/addManager" element={<AddManager />} />
          <Route path="/listManagers" element={<ListManager onTotalManagersChange={function (total: number): void {
          throw new Error('Function not implemented.');
        } } />} />
          <Route path="/editManager" element={<EditManager />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profileEmployee/:id" element={<ProfileEmployee />} />
          <Route path="/profileManager/:id" element={<ProfileManager />} />
          {/* <Route path="/questionQuiz" element={<QuestionQuiz />} /> */}
          <Route path="/sendEmail" element={<SendEmailComponent />} />
          <Route path="/creategroup" element={<CreateGroup/>} />
          <Route path="/editgroup" element={<EditGroup/>} />
          <Route path="/listgroup" element={<ListGroup/>} />
          <Route path="/chatbot" element={<ChatBot/>} />
          <Route path="/editcategory/:idcategory" element={<EditCategory/>} />
          <Route path="/editquiz/:idquiz" element={<EditQuiz/>} />
          <Route path="/listcategory" element={<ListCategories/>}/>
          <Route path="/createcategory" element={<CreateCategory/>}/>
          <Route  path="/createquiz" element={<CreateQuiz/>}/>
          <Route path="/questionquiz/:idquiz" element={<QuestionQuiz/>} />
          <Route path="/listquiz" element={<Quizes/>} />
          <Route path="/listReport" element={<ListReport/>} />
          <Route path="/reportDetail/:id" element={<ReportDetail/>} />
          <Route path="/myProfile" element={<ProfileUserSignIn />} />
          <Route path="/sendQuiz" element={<SendQuizComponent />} />



 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
