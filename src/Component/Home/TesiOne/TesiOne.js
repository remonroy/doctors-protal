import React from 'react';
import Kotetion from '../../../images/quote.png'
const TesiOne = () => {
    return (
        <div className="row mt-5 offset-md-1">
            <div className="col-md-4">
                <p>Testimonial</p>
                <h2>What,s Your Patients <br/>Says</h2>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <img style={{height:'200px'}} src={Kotetion} alt="" className="img-fluid"/>
            </div>
        </div>
    );
};

export default TesiOne;