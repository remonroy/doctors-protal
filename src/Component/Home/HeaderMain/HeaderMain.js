import React from 'react';
import chair from '../../../images/chair.png';
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Your new smile <br/> starts hear</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nisi odit rerum molestiae reiciendis repudiandae?</p>
                {/* <a href className="btn btn-primary">Get appionment</a> */}
                <a href="http://localhost:3000/appoinment" className="btn btn-primary">Get appionment</a>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;