import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navber from '../../Shared/Navber/Navber';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import BookAppoinment from '../BookAppoinment/BookAppoinment';

const Appoinment = () => {
    const [dateData,setDatedata]=useState(new Date())
    const handleChange=data=>{
        setDatedata(data);
    }
    return (
        <div>
            <Navber></Navber>
            <AppoinmentHeader handleChange={handleChange}></AppoinmentHeader>
            <BookAppoinment date={dateData}></BookAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;