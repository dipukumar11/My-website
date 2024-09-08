import React from 'react';

const Footer = () => {
    return (
        <div className=''>
           <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <div>
        <h1 className='font-bold text-3xl'>Dipu Kumar Biswas</h1>
    </div>
    <p className=' w-[250px]'>
    Welcome to my portfolio! With a strong background in digital marketing, website development, and graphic design, I help businesses grow and build their brand identity through creative and effective strategies.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
 
</footer>
<div className='bg-gray-500 p-4'>
    <p className='text-red-500 text-center font-bold'>© 2024 dipu kumar™. All Rights Reserved.</p>
</div>


            
        </div>
    );
};

export default Footer;