import React, { useState } from 'react';
import AdminMenu from '../../components/AdminMenu';

import './AdminDashboard.css';
import LayoutAdmin from '../../components/LayoutAdmin';

const AdminDashboard = () => {
    const [activeMenu, setActiveMenu] = useState('dashboard');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <div className="admin-dashboard">
            <AdminMenu onMenuClick={handleMenuClick} />
            <LayoutAdmin activeMenu={activeMenu} />
        </div>
    );
};

export default AdminDashboard;
