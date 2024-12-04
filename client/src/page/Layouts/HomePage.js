import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import Home from "./Home/Home";
import { Outlet } from "react-router-dom";


const HomePage = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      {/* Meta tags */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      {/* Header */}
      
      <Navbar />
      <Home />

    

      <main >
        <Toaster />
        <Outlet /> 
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Giá trị mặc định cho props
HomePage.defaultProps = {
  title: "V-Travel - Chào mừng bạn",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Techinfoyt",
};

export default HomePage;
