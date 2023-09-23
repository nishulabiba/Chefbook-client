import React, { useEffect } from 'react';
import "./Recipes.css"
import { faHeart, faHeartBroken, faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({item1}) => {
    const {cookingMethod} = item1
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/fav_recipe"
    useEffect(()=>{
        AOS.init();
    },[])
    

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;
    
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
          stars.push(<span key={i} className=' text-orange-500'>&#9733;</span>);
        }
        if (hasHalfStar) {
          stars.push(<span key={fullStars}>&#189;</span>);
        }
    
        return stars;
      };

    const storedIds = JSON.parse(localStorage.getItem('selectedElementIds')) || []; 
    const removeFavorite=(id)=>{
        toast.success(`${item1.title} is removed from favorites successfully!!!!`)

        const updated = storedIds.filter(item=> item!=id)
        localStorage.setItem('selectedElementIds', JSON.stringify(updated));
        navigate(from, {replace: true})
        
      
      
      }
    if(storedIds.includes(item1.recipe_id)) {
        return (
            <div className="d-flex justify-content-center align-items-center p-3">
                <div data-aos="fade-up-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="800" className="card w-75 h-25 d-flex flex-row justify-content-around align-items-center gap-2">
                <div className="d-flex flex-column justify-content-center align-items-center">
                <img className='p-2' src={item1.picture} alt="" />
                <h5>{item1.title}</h5>
                </div>
                <div className="d-flex flex-column">
                    <h5 className='text-danger'>Ingredients:</h5>
                <div className="">
                {
                    item1.ingredients.map((i, index)=> <div key={index}><small>{i}</small></div> )
                }
                </div>
                </div>
                <div className="d-flex flex-column gap-5">
                <h5 className='text-danger'> Rating:
                    <span className='text-warning'>{renderStars(item1.rating)}</span>
                </h5>
                <div className="">
                    <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    View Cooking Method
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Cooking Method</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                            <p>{cookingMethod}</p>
                        </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div onClick={()=>removeFavorite(item1.recipe_id) } className='btn text-danger  d-flex justify-content-center align-items-center gap-3'>
                    <p className=' pt-2 text-black-50'> Remove Favorite</p>
                <FontAwesomeIcon  className='p-0' icon={faHeartBroken}/>
                </div>
                <ToastContainer/>
                
            </div>
            </div>
        
            )

        
      }
    else return;
   
};

export default Recipes;