// Layout.js
import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom"; // Import Outlet từ react-router-dom
import video from "../../Assets/video.mp4";
import { FaGithub,  } from "react-icons/fa6";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
const Layout = ({ title, description, keywords, author }) => {
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
      <section className="home">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">Xin chào quý khách</span>
            <h1 data-aos="fade-up" className="homeTitle"> Chào mừng quý khách đến với V-Travel</h1>
          </div>
          <div data-aos="fade-up"  className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className="icon"/>
              <FiInstagram className="icon" />
              <CiMail className="icon" />
              <FaGithub className="icon"/>
            </div>
            <div className="leftIcons">
              <BsListTask className="icon" />
              <TbApps className="icon" />
            </div>
          </div>
        </div>
      
    </section>

      {/* Nội dung chính */}
      <main>
        <Toaster />
        <Outlet /> {/* Sử dụng Outlet để render nội dung các trang con */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Giá trị mặc định cho props
Layout.defaultProps = {
  title: "V-Travel - Đặt phòng ngay",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Techinfoyt",
};

export default Layout;
