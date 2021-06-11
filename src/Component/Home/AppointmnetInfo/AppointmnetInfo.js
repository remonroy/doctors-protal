import React from 'react';
import doctors from '../../../images/doctor.png'
import './AppointmnetInfo.css'
const AppointmnetInfo = () => {
    return (
        <div className="row d-flex align-items-center text-white">
            <div className="col-md-5">
                <img src={doctors} alt="" className="transleting img-fluid"/>
            </div>
            <div className=" style col-md-7">
                <small className="">APPOINMNET</small>
                <h2>Make An AppointMent Today</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur fuga unde incidunt nisi cumque. Doloribus.</p>
                <button className="btn btn-primary">Lorad More</button>
            </div>
        </div>
    );
};

export default AppointmnetInfo;