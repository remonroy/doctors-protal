import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
// import './AppoinmentForm.css';
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')

const AppoinmentForm = ({modalIsOpen,closeModal,book,date}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service=book.subject;
        data.date=date.toDateString();
        data.created=(new Date()).toDateString();
        fetch("https://quiet-ocean-01238.herokuapp.com/addAppoinment",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=>res.json)
        .then(success=>{
            if (success) {
                closeModal()
                alert('Data send successfuly.......!')
            }
        })
       
    };
    return (
        <div>
            
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
    
            <h2  className="text-center" style={{color:'#10CFE2'}}>{book.subject}</h2>
                <p className="text-center">{date.toDateString()}</p>
                <form className="p-5" style={{width:"550px"}} onSubmit={handleSubmit(onSubmit)}>
                
                    <input className="form-control" placeholder="Yor name" {...register("name")} />
                    
                    <br/>
                    <input className="form-control" placeholder="Your phone" {...register("phone")} />
                    <br/>
                    <input className="form-control" placeholder="Your Email" {...register("email")} />
                    <br/>
                    <div className="row mb-5">
                        <div className="col-md-4 ">
                        <select {...register("gender")} className="form-control">
                            <option value="">select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        </div>
                        <div className="col-md-4">
                            <input className="form-control" {...register("age")} placeholder="Your age" type="text"/>
                        </div>
                        <div className="col-md-4">
                        <input className="form-control" {...register("wight")} placeholder="Your weight" type="text"/>
                        </div>
                    </div>
                   <div className="text-right">
                        <button className="btn btn-primary" type="submit">Submit</button>
                   </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppoinmentForm;