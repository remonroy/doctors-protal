import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const DoctorInfo = ({dt,image}) => {
    
    return (
        <div className="col-md-4 text-center">
         {/* <h1 className="text-center">{image.file}</h1>    */}
        <img style={{height:"200px"}} src={dt.img} alt="" className="img-fluid"/>
        <h2>{dt.name}</h2>
        <p> <FontAwesomeIcon style={{height:'20px'}} className="mt-2 font-icon" icon={dt.icons} />{dt.phone}</p>
        </div>
    );
};

export default DoctorInfo;