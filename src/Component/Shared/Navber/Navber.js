import React from 'react';
import {Link} from "react-router-dom";
const Navber = () => {
    return (
       
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item ms-5">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item ms-5">
                    <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item ms-5">
                    {/* <Link to="/dashbord">Dashbord</Link> */}
                    <a class="nav-link" href="/dashbord">Dashbord</a>
                    </li>
                    <li class="nav-item ms-5">
                    <a class="nav-link text-white" href="#">Admin</a>
                    </li>
                    <li class="nav-item ms-5">
                    <a class="nav-link text-white" href="#">Blog</a>
                    </li>
                    <li class="nav-item ms-5">
                    <a class="nav-link text-white" href="#">Contact us</a>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navber;