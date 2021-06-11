import React, { useContext, useEffect, useState } from 'react';
import AppoinmentInfo from '../AppoinmentInfo/AppoinmentInfo';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { userContext } from '../../../App';

const coloring={
    backgroundColor:"#F4FDFB",
    height:"100%"
}

const Dashbord = () => {
    const [dateData,setDatedata]=useState(new Date())
    const [appoinmentDatedata,setAppoinmentDatedata]=useState({})
    const[loggedInuser,setLoggedInuser]=useContext(userContext)
    const handleChange=data=>{
        setDatedata(data);
        const time=data.toDateString()
        fetch("http://localhost:4500/appoinmentsBuydate",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({time,email:loggedInuser.email})
        })
        .then(res=>res.json())
        .then(appoinmentDate=>{
            console.log(appoinmentDate);
            setAppoinmentDatedata(appoinmentDate)
        })
    }
   
    return (
        <section>
            <div style={coloring} className="row">
               
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="d-flex justify-content-center col-md-4">
                        <Calendar
                            onChange={handleChange}
                            value={new Date()}
                        />
                    </div>
                    { appoinmentDatedata.length ?
                        <div className="col-md-6">
                            <AppoinmentInfo appoinmentDatedata={appoinmentDatedata}></AppoinmentInfo>
                        </div>
                        :
                        <div className=" col-md-5 mt-5 text-center ">
                            <p>No data avaible....!</p>
                        </div>

                    }
            </div>
        </section>
    );
};

export default Dashbord;