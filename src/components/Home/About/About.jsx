import React from 'react';
import "./About.css"
import { Link } from 'react-router-dom';

const About = () => {
    return (
            <div className="bg-black">
            
                <div className="d-flex justify-content-center align-items-center">
               <img className='w-75  gradient-overlay ' src="https://th.bing.com/th/id/OIP.bKM7F68j6c_DTmwc3As5xwHaEo?pid=ImgDet&rs=1" alt="" />
               </div>
             <Link to="/about" id='about' className='btn btn-outline-light'>About Us</Link>
            </div>
            
        
    );
};

export default About;