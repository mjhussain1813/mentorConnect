import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from '../component/Login';
import Signup from '../component/Signup';


const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signUp" element={<Signup/>} />
    </Routes>
  </Router>
);

export default AppRouter;
