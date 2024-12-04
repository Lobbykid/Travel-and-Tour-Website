import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const [user, setUser] = useState(null);
    
    const navigate = useNavigate(); // Khởi tạo navigate

    // Lấy thông tin người dùng từ localStorage khi component được render
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser && savedUser !== 'undefined') {
            try {
                const parsedUser = JSON.parse(savedUser);
                setUser(parsedUser);
            } catch (error) {
                console.error("Lỗi khi phân tích JSON từ localStorage:", error);
                setUser(null); // Xử lý lỗi nếu có
            }
        } else {
            setUser(null); // Nếu không có dữ liệu hợp lệ, đặt user là null
        }
    }, []);
    const handleProfileClick = () => {
        console.log("Current user role:", user?.role); // Kiểm tra giá trị role
        
        // Điều hướng dựa trên role của người dùng
        if (user?.role === "admin") {
            navigate('/dashboardAdmin'); // Điều hướng tới trang adminDashboard nếu role = admin
        } else if (user?.role === "user") {
            navigate('/dashboard'); // Điều hướng tới trang dashboard nếu role = user
        } else {
            navigate('/'); // Điều hướng mặc định
        }
    };
    

    const handleLogoutClick = () => {
        handleLogout(); // Thực hiện logout và điều hướng về trang login
        navigate('/');
    };

    const showNav = () => {
        setActive('navBar activeNavBar');
    };

    const removeNavBar = () => {
        setActive('navBar');
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <section className='navBarSection'>
            <header className='header flex'>
                <div className='logoDiv'>
                    <a href='#' className='logo flex'>
                        <h1>
                            <MdOutlineTravelExplore className='icon' />
                            <Link className='icon' to="/">Travel.</Link>
                        </h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className='navLists flex'>
                        <li className='navItems'>
                            <a href='#' className='navLink'>GIỚI THIỆU</a>
                        </li>
                        <li className='navItems'>
                            <Link className='navLink' to="/hotelList">KHÁCH SẠN</Link>
                        </li>
                        <li className='navItems'>
                            <Link className='navLink' to="/article">TIN TỨC</Link>
                        </li>
                        <li className='navItems'>
                            <Link className='navLink' to="/location">ĐỊA ĐIỂM</Link>
                        </li>
                        <li className='navItems'>
                            <Link className='navLink' to="/contact">LIÊN HỆ</Link>
                        </li>

                        {!user ? (
                            <button className='btn'>
                                <Link className='navLink' to="/register">TẠO TÀI KHOẢN</Link>
                            </button>
                        ) : null}

                        <div onClick={removeNavBar} className='closeNavbar'>
                            <AiFillCloseCircle className='icon' />
                        </div>

                        {user ? (
                            <>
                                <div className='navItems'>
                                    <button
                                        className='navLink'
                                        onClick={handleProfileClick} // Sử dụng hàm này để điều hướng
                                    >
                                        Xin chào, {user.name}
                                    </button>
                                </div>
                                <div className='navItems'>
                                    <button className='btn logoutBtn' onClick={handleLogoutClick}>Đăng Xuất</button>
                                </div>
                            </>
                        ) : (
                            <li className='navItems'>
                                <button className='navLink' onClick={() => navigate("/login")}>
                                    <FaUser className='icon-nav' />Đăng Nhập
                                </button>
                            </li>
                        )}
                    </ul>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className='icon' />
                </div>
            </header>
        </section>
    );
};

export default Navbar;
