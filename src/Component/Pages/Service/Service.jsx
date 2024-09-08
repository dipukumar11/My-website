import React, { useEffect, useState } from 'react';
import Displyservice from './Displyservice';

const Service = () => {
    const [offer, setOffer] = useState([])
    useEffect(()=>{
        fetch('/public/servis.json')
        .then(response => response.json())
        .then(data => setOffer(data))
    },[])
    return (
        <div className='mt-12'>
            <div className='w-50% m-auto text-center mb-9'>
                <h1 className='text-3xl font-bold mb-3 '>What We <span className='text-orange-600 '> Offer</span></h1>
                <p className='text-xl font-bold' >We provide multiple services from website design <br />and development to digital marketing and advertising.</p>
            </div>
         
       <div className='lg:flex md:flex gap-4'>
       {
            offer.map(servis =><Displyservice key={servis.id} servis={servis}></Displyservice>)
         }
       </div>

            
        </div>
    );
};

export default Service;