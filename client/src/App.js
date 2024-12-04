// App.js
import React from 'react';
import { Routes, Route } from "react-router-dom";
import './app.css';
import Layout from './page/Layouts/Layout';
import Contact from "./page/contact.js";
import Location from './page/Location.js';
import ArticleList from "./page/ArticleList.js";
import Article from './page/Article.js';
import Main from './page/Layouts/Main/Main.jsx';
import HotelList from './page/HotelList.js';
import Blog from './page/Blog.js';
import Login from './page/Auth/Login.js';
import Register from './page/Auth/Register.js';
import ScrollToTop from "react-scroll-to-top";
import ScrollToTopIcon from './page/SVG.js';
import HomePage from './page/Layouts/HomePage.js';
import Dashboard from './page/Users/Dashboard.js';
import AdminDashboard from './page/Admin/AdminDashboard.js';
const App = () => {
  return (
    <>
      <ScrollToTop smooth>
        <ScrollToTopIcon />
      </ScrollToTop>

      <Routes>
        {/* Định nghĩa Route cho các trang có Layout chung */}
        <Route 
          element={<Layout />} 
        >
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/hotelList" element={<HotelList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article" element={<ArticleList />} />
          <Route path="/article/:id" element={<Article />} />
        </Route>
        <Route 
          element={<HomePage />} 
        >
           <Route path="/" element={<Main />} />
        </Route>
        {/* Route riêng cho trang đăng nhập, không nằm trong Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/dashboard" element={<Dashboard />}/>

        <Route path="/dashboardAdmin" element={<AdminDashboard />}/>

        
      </Routes>
    </>
  );
};

export default App;
