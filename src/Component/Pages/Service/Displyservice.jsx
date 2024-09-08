import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLocalPhone } from "react-icons/md";


const Displyservice = ({servis}) => {
    console.log(servis)

    const {title, description,img} = servis;
    return (
        <div  className='w-[95%] m-auto'>
           <div className="card bg-base-100  h-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl w-[250px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions">
       
      <button  className="btn font-bold text-md btn-accent">
      <MdOutlineLocalPhone></MdOutlineLocalPhone>
        <Link to={'/contact'}>Contact Me</Link> 
        </button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Displyservice;