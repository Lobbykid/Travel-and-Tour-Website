import React, {useState} from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { IoIosCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";


const Navbar = () => {
    const[active , setActive] = useState('navBar') 
  
  const showNav = ()=>{
    setActive('navBar activeNavBar')
  }
  const removeNavBar = ()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
        <header className='header flex'>
            <div className='logoDiv'>
                <a href='#' className='logo flex'>
                    <h1> <MdOutlineTravelExplore className='icon'/>  <Link className='icon' to="/"> Travel. </Link> </h1>
                </a>
            </div>
            
            <div className={active}>
                <ul className='navLists flex'>
                    <li className='navItems'>
                        <a href='#' className='navLink'>GIỚI THIỆU</a>
                    </li>
                    <li className='navItems'>
                        <a href='#' className='navLink'>KHÁCH SẠN</a>
                    </li>
                    <li className='navItems'>
                        <a href='#' className='navLink'>TIN TỨC</a>
                    </li>
                    <li className='navItems'>
                        <a href='#' className='navLink'>TOUR</a>
                    </li>
                    <li className='navItems'>
                         <Link className='navLink' to="/contact">LIÊN HỆ</Link>
                    </li>
                  
                    <button className='btn'>
                        <a href='#'>BOOK NOW</a>
                    </button>               
                    <div onClick={removeNavBar}
                    className='closeNavbar'>
                        <AiFillCloseCircle className='icon'/>
                    </div>
                    <div className="navbar-right d-flex">
                    <li className='navItems'>                       
                         <a href='#' className='navLink'> <IoIosCart className='icon-nav' />
                        GIỎ HÀNG</a>
                    </li>
                    <li className='navItems'>                       
                         <a href='#' className='navLink'> <FaUser className='icon-nav' />
                        ĐĂNG NHẬP/ĐÂNG KÝ</a>
                    </li>
                    </div>
                </ul>     
            </div>

            <div onClick={showNav}
            className="toggleNavbar">
                <TbGridDots className='icon'/>
            </div>
        </header>
    </section>
  )
}

export default Navbar;
