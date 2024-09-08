import React from 'react';
import pic from '../../../assets/5031659.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="max-w-[95%] m-auto mt-6 bg-[url('/src/assets/bright_squares.png')] rounded-2xl p-16  ">
            <div className=' lg:flex justify-around'>
 
                <div>
                    <h1 className='font-bold mb-3 text-4xl p-4 text-green-500'>How to benefit with my work</h1>
                    <p className='lg:w-[90%] text-[17px] font-bold text-blue-500 m-auto'>As a skilled professional in digital marketing, website development, and graphic design, I help businesses elevate their online presence and achieve measurable growth. My expertise in digital marketing enables me to craft customized strategies that increase brand visibility, drive traffic, and boost customer engagement. Through targeted SEO, social media management, and paid advertising campaigns, I ensure businesses connect with their ideal audience and achieve high conversion rates</p>
                </div>

                <div>
                    <img className='rounded-xl' src={pic} alt="" />

                </div>

            </div>

        
            <div className='flex gap-6  text-center'>
                <button className='btn bg-orange-500 font-bold text-white' ><Link to={'/service'}>Learn More..</Link></button>
                <button className='btn btn-outline btn-secondary font-bold'>Lets Talk</button>

            </div>

           
            
        </div>
    );
};

export default Hero;
