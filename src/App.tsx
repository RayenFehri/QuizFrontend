import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'; // Import du composant Navbar
import AddEmployee from './components/Employee/Employee';
import Quizes from './components/Quiz/ListQuiz';
import CreateQuiz from './components/Quiz/CreateQuiz';
import CreateCategory from './components/Category/CreateCategory';
import ListCategories from './components/Category/ListCategory';
import {EditCategory} from './components/Category/EditCategory';
import EditQuiz from './components/Quiz/EditQuiz';
import ChatBot from './components/ChatBot/chatBot';
// const ChatBot= lazy(() => import('./components/ChatBot/chatBot'));
import CreateGroup from './components/Group/CreateGroup';
import EditGroup from './components/Group/EditGroup';
import ListGroup from './components/Group/ListGroup';
import QuestionQuiz from './components/QuestionQuiz/QuestionQuiz';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Navbar />
      
        <Routes>
        <Route path="/questionquiz/:idquiz" element={<QuestionQuiz/>} />

          <Route path="/creategroup" element={<CreateGroup/>} />
          <Route path="/editgroup" element={<EditGroup/>} />
          <Route path="/listgroup" element={<ListGroup/>} />
          <Route path="/chatbot" element={<ChatBot/>} />
          <Route path="/editcategory/:idcategory" element={<EditCategory/>} />
          <Route path="/editquiz/:idquiz" element={<EditQuiz/>} />
          <Route path="/listcategory" element={<ListCategories/>}/>
          <Route path="/createcategory" element={<CreateCategory/>}/>
          <Route  path="/createquiz" element={<CreateQuiz/>}/>
          <Route path="/addEmployee" element={<AddEmployee/>} />
          <Route path="/listquiz" element={<Quizes/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
