import React, { useEffect, useState } from 'react';
import doctors from '../../../images/doctor-sm.png'
import {faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import DoctorInfo from '../DoctorInfo/DoctorInfo';
const doctorData=[
    {
        img:doctors,
        name:"Dcotros",
        phone:"0172222222",
        icons:faPhoneVolume,
    },
    {
        img:doctors,
        phone:"0172222222",
        name:"Dcotros",
        icons:faPhoneVolume,
    },
    {
        img:doctors,
        phone:"0172222222",
        name:"Dcotros",
        icons:faPhoneVolume,
    }
]

const Doctor = () => {
    const [image,setImage]=useState([])
    useEffect(()=>{
        fetch("https://quiet-ocean-01238.herokuapp.com/doctor")
        .then(res=>res.json())
        .then(data=>{
            console.log(data[0].file);
            setImage(data[0])
        })
    },[])
    return (
        <section>
            
            <div className="text-center  mt-5">
                <p style={{color:"#1CC7C1"}}>Our Blog</p>
                <h1>From Our Blog News</h1>
            </div>
            <div className="">
            <div className="row offset-md-0.50 mt-5">
                {
                    doctorData.map(dt=><DoctorInfo image={image} dt={dt}></DoctorInfo>)
                }
            </div>
            </div>
        </section>
    );
};

export default Doctor;