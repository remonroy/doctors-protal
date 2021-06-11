import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navber from '../../Shared/Navber/Navber';
import './Header.css'
const Header = () => {
    return (
        <div className="headerContainer">
            <Navber></Navber>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;