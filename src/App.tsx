import React from 'react';
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
import EditCategory from './components/Category/EditCategory';
import EditQuiz from './components/Quiz/EditQuiz';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Navbar />
      
        <Routes>
          <Route path="/editcategory" element={<EditCategory/>} />
          <Route path="/editquiz" element={<EditQuiz/>} />
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
