import React from 'react';
import images from '../../../images/quote.png'
import './BlogInfo.css'
const BlogInfo = ({bg}) => {
    return (
        <div className='col-md-6 mb-5'>
           <div style={{overflow:'hidden'}}>
            <div className="imaging">
                    <img  src={bg.img} alt=""/>
                </div>
                <div className="rightSite">
                    <h5>{bg.name}</h5>
                    <p>{bg.date}</p>
                </div>
           </div>
           <h4>{bg.discription}</h4>
            <p>{bg.letter}</p>
        </div>
       
    );
};

export default BlogInfo;