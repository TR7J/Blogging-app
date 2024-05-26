/*  import './App.css'; 
import Navigation from './components/navigation bar/navigation' */
/* import MainBlogs from './components/main-blogs/main-blogs' 
import NewNavigation from './components/newnavigation/newnavigation'; 
import NewMainBlogs from './components/new-main-blogs/newmainblogs'; */
import React from 'react';
/* import { BrowserRouter, Route, Routes } from 'react-router-dom'; */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import CreateNew from './pages/CreateNew/CreateNew';
import Profile from './pages/Profile';
import Authentication from './pages/authentication/authentication';
import SignUp from './pages/authentication/signup';
import Footer from './components/footer/footer';
import DataScience from './pages/datascience';

function App() {
  return (
    <>
      <BrowserRouter basename='/Blogging-app'> 
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/CreateNew' element={<CreateNew/>}/>
            <Route path='/Profile' element={<Profile/>}/>
            <Route exact path='/Authentication' element={<Authentication/>}/>
            <Route path='/Signup' element={<SignUp/>}/>
            <Route path='/DataScience' element={<DataScience/>}/>
        </Routes>
        <Footer/> 
      </BrowserRouter> 
      
    </>
  );
}

export default App;
         