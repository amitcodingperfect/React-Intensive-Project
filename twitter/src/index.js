import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/js/bootstrap";
import reportWebVitals from './reportWebVitals';
import Profile from './components/Pages/Profile/Profile';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Pages/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginOption from './components/LoginOption/LoginOption';
import Signup from './components/Signup/Signup';
import SignupOption from './components/SignupOption';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <React.StrictMode>
  <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route  path="/profile" element={<Profile/>}></Route>
  <Route  path="/login" element={<LoginOption/>}></Route>
  <Route  path="/Signup" element={<Signup/>}></Route>
  <Route  path="/SignupOption" element={<SignupOption/>}></Route>
  
  </Routes>
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
