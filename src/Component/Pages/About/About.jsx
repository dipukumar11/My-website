import React from 'react';
import pic from '../../../assets/my pic.png'
const About = () => {
    return (
        <div className='lg:flex justify-around mt-9 '>
            <div className='p-5'>
              
                <h1 className='text-5xl font-bold mb-3'>Dipu Kumar Biswas</h1>
                <h4 className='text-xl font-bold mb-3'> Digital Marketer | Website Developer | Graphic Designer</h4>

                <p className='mb-5 lg:w-[600px] '>Welcome to my portfolio! With a strong background in digital marketing, website development, and graphic design, I help businesses grow and build their brand identity through creative and effective strategies.</p>

                <h1 className='lg:text-5xl text-2xl font-extrabold mb-3'>About Me</h1>

                <p className='lg:w-[600px]'>I hold a Diploma in Agriculture and have also studied SSC General Electrical Works. My diverse academic background has equipped me with a unique perspective, blending technical, creative, and analytical skills. Over the years, I’ve honed my craft in the digital space, helping businesses and individuals establish and grow their online presence.</p>
            </div>

            <div className=' rounded-full backdrop-blur-xl  '>
                <img className=' border rounded-full border-red-600  lg:w-[300px] bg-white' src={pic} alt="" />
            </div>
            
        </div>
    );
};

export default About;