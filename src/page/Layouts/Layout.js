import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
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


      {/* Nội dung chính */}
      <Home />

      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Giá trị mặc định cho props
Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Techinfoyt",
};

export default Layout;
