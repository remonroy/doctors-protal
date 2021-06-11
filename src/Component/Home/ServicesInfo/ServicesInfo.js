import React from 'react';

const ServicesInfo = ({services}) => {
    return (
        <div className="text-center col-md-4 mb-5">
            <img src={services.image} className="mt-5" alt=""/>
            <h4 className="mt-3 mb-3">{services.title}</h4>
            <p>{services.description}</p>
        </div>
    );
};

export default ServicesInfo;