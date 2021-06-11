import React from 'react';
import dental from '../../../images/dental.png';
import tooth from '../../../images/tooth (1).png';
import cavidi from '../../../images/cavidi.png'
import ServicesInfo from '../ServicesInfo/ServicesInfo';
const servicesData=[
    {
        image:dental,
        title:'Fluoride Tretment',
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolore.'
    },
    {
        image:tooth,
        title:'Fluoride Tretment',
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolore.'
    },
    {
        image:cavidi,
        title:'Fluoride Tretment',
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, dolore.'
    },
]

const Services = () => {
   
    return (
        <section>
            <div className="text-center mb-5">
                <p style={{color:"#1CC7C1"}}>Our services</p>
                <h1>Service With Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row ">
                    {
                        servicesData.map(services=><ServicesInfo services={services}></ServicesInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;