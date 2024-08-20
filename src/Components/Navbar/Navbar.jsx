import React, {useState} from 'react'
import './Navbar.css'

import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

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
                    <h1> <MdOutlineTravelExplore className='icon'/> Travel. </h1>
                </a>
            </div>

            <div className={active}>
                <ul className='navLists flex'>
                   
                    <li className='navItems'>
                        <a href='#' className='navLink' >Home</a>
                    </li>
                    <li className='navItems'>
                        <a href='#' className='navLink'>Packages</a>
                    </li>
                    <li className='navItems'>
                        <a href='#' className='navLink'>Shop</a>
                    </li>
                    <li className='navItems'>
                        <a href='#' className='navLink'>About</a>
                    </li>
                    <li className='navItems'>
                        <a href='#' className='navLink'>Pages</a>
                    </li>
                    <li className='navItems'>
                        <a href='#' className='navLink'>News</a>
                    </li>

                    <button className='btn'>
                        <a href='#'>BOOK NOW</a>
                    </button>

                    <div onClick={removeNavBar}
                    className='closeNavbar'>
                        <AiFillCloseCircle className='icon'/>
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

export default Navbar
