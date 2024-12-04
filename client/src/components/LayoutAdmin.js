import React from 'react';
import AddLocation from '../page/Admin/AddLocation';
import HotelManagement from '../page/Admin/HotelManagement';
const LayoutAdmin = ({ activeMenu }) => {
    return (
        <div className="content">
            {activeMenu === 'dashboard' && <h1>Welcome to the Dashboard</h1>}
            {activeMenu === 'users' && <h1> <AddLocation/></h1>}
            {activeMenu === 'settings' && <h1><HotelManagement/></h1>}
            {activeMenu === 'reports' && <h1>Reports</h1>}
        </div>
    );
};

export default LayoutAdmin;
