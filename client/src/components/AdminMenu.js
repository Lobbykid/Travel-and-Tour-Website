import React from 'react';

const AdminMenu = ({ onMenuClick }) => {
    return (
        <div className="sidebar">
            <h2>Menu Admin</h2>
            <ul>
                <li onClick={() => onMenuClick('dashboard')}>Dashboard</li>
                <li onClick={() => onMenuClick('users')}>Quản lý địa chỉ</li>
                <li onClick={() => onMenuClick('settings')}>Quản lý khách sạn</li>
                <li onClick={() => onMenuClick('reports')}>Reports</li>
            </ul>
        </div>
    );
};

export default AdminMenu;
