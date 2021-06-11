import React from 'react';
import TesiOne from '../TesiOne/TesiOne';
import TestiTwo from '../TestiTwo/TestiTwo';
import eliseOne from '../../../images/Ellipse 1.png'
import eliseTwo from '../../../images/Ellipse 2.png'
import eliseThree from '../../../images/Ellipse 3.png'
import Remon from '../../../images/rogdhong.jpg'
const testiData =[
    {
        name:'Wison Herry',
        adders:'Calefoniea',
        discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed omnis culpa nesciunt placeat mollitia magni. Beatae quisquam, nulla facere laudantium a veritatis iusto. Quo, aut non fuga inventore ipsum repellat.',
        img:eliseOne,
    },
    {
        name:'Wison Herry',
        adders:'Calefoniea',
        discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed omnis culpa nesciunt placeat mollitia magni. Beatae quisquam, nulla facere laudantium a veritatis iusto. Quo, aut non fuga inventore ipsum repellat.',
        img:eliseTwo,
    },
    {
        name:'Wison Herry',
        adders:'Calefoniea',
        discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed omnis culpa nesciunt placeat mollitia magni. Beatae quisquam, nulla facere laudantium a veritatis iusto. Quo, aut non fuga inventore ipsum repellat.',
        img:eliseThree,
    },
    {
        name:'Remon roy',
        adders:'Calefoniea',
        discription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed omnis culpa nesciunt placeat mollitia magni. Beatae quisquam, nulla facere laudantium a veritatis iusto. Quo, aut non fuga inventore ipsum repellat.',
        img:Remon,
    }
]
const TestiMonial = () => {
    return (
        <section>
            <TesiOne></TesiOne>
            <div className="d-flex justify-content-center ">
                <div className="w-75 row mb-5">
                    {
                        testiData.map(tst=><TestiTwo tst={tst}></TestiTwo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default TestiMonial;