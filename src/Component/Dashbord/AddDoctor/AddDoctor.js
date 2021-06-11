import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
const coloring={
    backgroundColor:"#F4FDFB",
    height:"100%"
}
const AddDoctor = () => {
    const [info,setInfo]=useState({})
    const [file,setFile]=useState(null)

    const handleBlur=(e)=>{
        const newInfo={...info}
        newInfo[e.target.name]=e.target.value
        setInfo(newInfo)
        
    }
    const handleImage=(e)=>{
        const newFIle=e.target.files[0]
        setFile(newFIle)
    }
    const handleSubmit=(e)=>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('http://localhost:4500/addDoctor', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
        e.preventDefault();
    }
    return (
        <section style={coloring} className="container-fluid row">
            <div  className="col-md-2">
                <Sidebar></Sidebar>
            </div>
           
            <div className="col-md-10 p-2 pr-5" >
                <h5 className="text-brand">Add a Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={handleBlur}  type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onChange={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleImage} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;