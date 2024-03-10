import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Support from './Support';
import './style.css';
import Registration from '../user/Registration';
import UserLogin from '../user/UserLogin';
import WeatherCheck from './WeatherCheck';
// import Suggestions from './Suggestions';
import AdminLogin from './../admin/AdminLogin';

export default function MainNavBar() {
  return (
    <div>
       <h1 style={{ color: '#3498DB', margin: '0', textAlign: 'center', fontSize: '32px', fontWeight: 'bold' }}>ClimaCast</h1>
      <nav>
        <div className="logo-container">
        </div>
        <ul>
         
            <Link to="/home">Home</Link>
            <Link to="/weathercheck">Check Weather</Link>
            <Link to="/userlogin">Login</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/adminlogin">Admin Login</Link>
            <Link to="/support">Support</Link>
            {/* <Link to="/suggestions">Suggestions</Link> */}
            
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} exact />
        <Route path="/weathercheck" element={<WeatherCheck />} exact />
        <Route path="/userlogin" element={<UserLogin />} exact />
        <Route path="/registration" element={<Registration />} exact />
        <Route path="/adminlogin" element={<AdminLogin/>} exact />
        <Route path="/support" element={<Support />} exact />
        {/* <Route path="/suggestions" element={<Suggestions />} exact /> */}
      </Routes>
    </div>
  );
}
