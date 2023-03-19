import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';

function App() {
    return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path= 'contact'element={<Contact />} />
              <Route path= 'store'element={<OurStore />} />
              <Route path= 'blogs'element={<Blogs />} />
              <Route path= 'blog/:id'element={<SingleBlog />} />
              <Route path= 'compare-product'element={<CompareProduct />} />
              <Route path= 'wishlist'element={<Wishlist />} />
              <Route path= 'login'element={<Login />} />
              <Route path= 'sign-up'element={<SignUp />} />
              <Route path= 'forgot-password'element={<ForgotPassword />} />
              <Route path= 'reset-password'element={<ResetPassword />} />
            </Route>
          </Routes>
        </Router>
      </>
    );
  }


export default App;
