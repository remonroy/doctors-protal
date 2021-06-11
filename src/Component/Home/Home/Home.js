import React from 'react';
import AppointMent from '../AppointMent/AppointMent';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import Doctor from '../Doctor/Doctor';
import Exceptional from '../Exceptional/Exceptional';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header'
import Services from '../Services/Services';
import TestiMonial from '../TestiMonial/TestiMonial';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Exceptional></Exceptional>
            <AppointMent></AppointMent>
            <TestiMonial></TestiMonial>
            <Blog></Blog>
            <Doctor></Doctor>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;