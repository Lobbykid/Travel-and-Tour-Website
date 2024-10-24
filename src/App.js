import React from 'react';
import { Routes, Route } from "react-router-dom";
import './app.css';
import Navbar from './page/Layouts/Navbar/Navbar';
import Main from './page/Layouts/Main/Main';
import Footer from './page/Layouts/Footer/Footer';
import Home from './page/Layouts/Home/Home';
import Contact from "./page/contact.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        {/* Các route khác */}
      </Routes>
   
    </>
  );
};

export default App;
