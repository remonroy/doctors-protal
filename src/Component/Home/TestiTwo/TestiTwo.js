import React from 'react';
import './TestiTwo.css';
import Remon from '../../../images/rogdhong.jpg'
const TestiTwo = ({tst}) => {
    return (
        <div className="bordering col-md-3">
            <p>{tst.discription}</p>
            <div className="imaging">
                <img  src={tst.img} alt=""/>
            </div>
            <div className="rightSite">
                <h5>{tst.name}</h5>
                <p>{tst.adders}</p>
            </div>
        </div>
    );
};

export default TestiTwo;