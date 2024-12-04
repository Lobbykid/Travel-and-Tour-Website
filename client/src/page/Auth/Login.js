// Login.js
import './styles/Login.css'; // Import file CSS 
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/auth/login', values);
        if (response.status === 201) {
            // Lưu token và thông tin người dùng vào localStorage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user)); // Lưu thông tin người dùng

            // Điều hướng về trang chính sau khi đăng nhập
            navigate('/');
        }
    } catch (err) {
        console.log('Lỗi khi gọi API:', err.message);
    }
};


  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChanges}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              name="password"         
              onChange={handleChanges}
              required
            />
          </div>
          <button type="submit" className="login-button">Đăng nhập</button>
        </form>
        <p className="signup-link">
          Chưa có tài khoản?  <Link className='navLink' to="/register">Đăng ký</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
