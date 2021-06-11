import React from 'react';
import maskGroup from '../../../images/Mask.png'
const Exceptional = () => {
    return (
        <section className="row d-flex align-items-center mb-5">
            <div className="col-md-4 offset-md-1 ">
                <img src={maskGroup} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h1>Exceptional Dental Care,<br/> On Yours Terms</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, qui modi exercitationem odio neque maxime minima, doloremque vel accusantium quia asperiores ipsa nesciunt....</p>
                <button className="btn btn-primary">learn More</button>
            </div>
        </section>
    );
};

export default Exceptional;