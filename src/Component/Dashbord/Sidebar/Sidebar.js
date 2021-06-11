import React from 'react';
import {Link} from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="text-center">
            <h1>Site bar</h1>
            <ul style={{listStyle:"none"}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashbord">Dashbord</Link>
                </li>
                <li>
                    <Link to="/addDoctor">Add Doctor</Link>
                </li>
                
            </ul>
        </div>
    );
};

export default Sidebar;