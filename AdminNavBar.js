import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './admin.css'

import AdminHome from './AdminHome';
import ViewUser from './ViewUsers';

export default function AdminNavBar() 
{
  return (
    <div>

    <nav>
     <ul>
     <Link to="/">Home</Link>
     <Link to="/viewusers">View Users</Link>
     </ul>
     </nav>

         <Routes>
         <Route path="/" Component={AdminHome} exact/>
         <Route path="/viewusers" Component={ViewUser} exact/>
        </Routes>

    </div>
  )
}