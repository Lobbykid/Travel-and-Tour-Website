import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [values, setValues] = useState({
      name: '',
      email: '',
      password: ''
  })
  const navigate = useNavigate()

  const handleChanges = (e) => {
      setValues({...values, [e.target.name]:e.target.value})
  }
  const [message, setMessage] = useState('');

  const handleSumbit = async (e) => {
    e.preventDefault();
  
    if (values.password !== values.confirmPassword) {
      setMessage('Mật khẩu và xác thực mật khẩu không khớp!');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8080/auth/register', {
        name: values.name,
        email: values.email,
        password: values.password,
      });
  
      if (response.status === 201) {
        setMessage('Đăng ký thành công!');
        setTimeout(() => navigate('/login'), 2000); // Chuyển trang sau 2 giây
      }
    } catch (err) {
      setMessage('Đăng ký thất bại! Vui lòng thử lại.');
    }
  };
   
    return (
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Đăng Ký</h2>
          <form onSubmit={handleSumbit}>
          <div className="input-group">
              <label htmlFor="name">Tên tài khoản</label>
              <input
                type="name"
                name="name"              
                onChange={handleChanges}
                required
              />
            </div>
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
            <div className="input-group">
              <label htmlFor="password">Xác Thực Mật khẩu</label>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChanges}
                required
              />
            </div>
            <button type="submit" className="login-button">Đăng Ký</button>
          </form>
          <p className="signup-link">
            Bạn đã có tài khoản? <Link className='navLink' to="/login">Đăng nhập</Link>
          </p>
        </div>
      </div>
    );
  };

export default Register
