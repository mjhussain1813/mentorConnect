import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Landing from '../screen/Landing';
import VerifyUser from '../components/VerifyUser';
import NotFound from '../components/NotFound';
import Home from '../components/Home/Home';


const AppRouter = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/auth'>
        {/* <Route index element={<Auth/>} /> */}
        <Route path='login' element={<Login/>} />
        <Route path="signUp" element={<Signup/>} />
        <Route path='verify/:verificationToken' element={<VerifyUser/>} />
      </Route>
      <Route path="home" element={<Home/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </Router>
);

export default AppRouter;
