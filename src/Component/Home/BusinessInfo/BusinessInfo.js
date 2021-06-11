import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import { faClock,faMapMarker,faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
const businessData=[
    {
        title:"Opening hours",
        discription:"Lorem ipsum dolor sit amet",
        icons:faClock,
        background:"primary"
    },
    {
        title:"Visit our location",
        discription:"Lorem ipsum dolor sit amet",
        icons:faMapMarker,
        background:"dark"
    },
    {
        title:"Contact us",
        discription:"Lorem ipsum dolor sit amet",
        icons:faPhoneVolume,
        background:"primary"
    },
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row ">
                {
                    businessData.map(info=><CardInfo info={info}></CardInfo>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;