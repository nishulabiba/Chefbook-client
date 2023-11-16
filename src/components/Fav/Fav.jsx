import React, { useEffect, useState } from 'react';
import Recipes from '../Recipes/Recipes';
import { faHandsClapping, faHeart, faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Fav = () => {
    const [data, setData]= useState([])
    useEffect(()=>{
        AOS.init();
    },[])
useEffect(()=>{
    const dataLoader = async () =>{

        const loadData = await fetch("https://chefserver-green.vercel.app/chefdetails")
        const data = await loadData.json()
        setData(data)

        

    }
    dataLoader();
}, [])
    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1 data-aos="zoom-out-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className=' display-4 font-monospace p-3'>Your favorite recipes are here! <FontAwesomeIcon icon={faHandsClapping}/> </h1>
            <div className="w-100">
            {
                data.map(item=>
                    item.recipes.map(item1=>
                        <Recipes key={item1.recipe_id} item1={item1}></Recipes>
                        ))
            }
            </div>
            
        </div>
    );
};

export default Fav;