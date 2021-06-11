import React from 'react';
import BlogInfo from '../BlogInfo/BlogInfo';
import imagess from '../../../images/Ellipse 1.png'
import './Blog.css'
const blogData=[
    {
        name:"Dr,Caudio",
        date:"22,augest 2021",
        discription:"2 Times of brush in a day can Keep you healthy..",
        img:imagess,
        letter:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit."
    },
    {    
        name:"Dr,Caudio",
        date:"22,augest 2021",
        discription:"2 Times of brush in a day can Keep you healthy..",
        img:imagess,
        letter:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit."
    }
]
const Blog = () => {
    return (
        <section>
            <div className="text-center  mb-5">
                <p style={{color:"#1CC7C1"}}>Our Blog</p>
                <h1>From Our Blog News</h1>
            </div>
            <div className="row margin">
                <div className=" col-md-4 background offset-md-1" >
                    <h1>Remon roy</h1>
                    <p>22 Augst 2021</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit.</p>
                </div>
                <div className="col-md-8">
                    <div className="row  offset-md-1">
                        {
                            blogData.map(bg=><BlogInfo bg={bg}></BlogInfo>)
                        }
                        
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default Blog;