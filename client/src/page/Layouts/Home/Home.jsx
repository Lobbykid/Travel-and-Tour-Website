import React, {useEffect} from "react";
import "./Home.css";
import video from "../../../Assets/video.mp4";
import { FaGithub, FaMagnifyingGlassLocation } from "react-icons/fa6";
import { HiFilter } from "react-icons/hi";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";


import Aos from "aos";
import 'aos/dist/aos.css'
const Home = () => {
  useEffect(() =>{
      Aos.init({duration: 2000})
  },[])



  return (
    <section className="home">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">Xin chào quý khách</span>
            <h1 data-aos="fade-up" className="homeTitle"> Tìm kiếm khách sạn</h1>
          </div>

          <div data-aos="fade-up" className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Tìm kiếm: </label>
              <div className="input flex">
                <input type="text" placeholder="Vui lòng nhập tên..." />
                <FaMagnifyingGlassLocation  className="icon"/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Ngày đặt phòng: </label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Ngày trả phòng: </label>
              <div className="input flex">
                <input type="date" />
              </div>
            </div>

            <div className="searchOptions flex">
              <HiFilter className="icon"/>
              <span>
               Lọc theo thông tin
              </span>
            </div>



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
  );
};

export default Home;
