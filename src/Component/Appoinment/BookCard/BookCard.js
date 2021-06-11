import React, { useState } from 'react';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';

const BookCard = ({book,date}) => {
    const [modalIsOpen,setIsOpen] =useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 style={{color:'#10CFE2'}} className="card-title text-brand">{book.subject}</h5>
                    <h6>{book.visitingHour}</h6>
                    <p>{book.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-primary text-uppercase">Book Appointment</button>
                    <AppoinmentForm date={date} modalIsOpen={modalIsOpen} closeModal={closeModal} book={book}></AppoinmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookCard;