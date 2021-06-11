import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CardInfo.css'
const CardInfo = ({info}) => {
    return (
        <div className=" col-md-4 text-white card-padding">
            <div className={`d-flex justify-content-center card-container  ${info.background}`}>
                <div className="mx-3">
                    <FontAwesomeIcon className="mt-2 font-icon" icon={info.icons} />
                </div>
                <div>
                    <h5 className="mt-1">{info.title}</h5>
                    <small>{info.discription}</small>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;