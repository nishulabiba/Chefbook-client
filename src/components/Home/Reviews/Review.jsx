import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Review = ({data}) => {
    const storedLike = JSON.parse(localStorage.getItem('likeStored')) || [];


    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    const [like , setLike] = useState(false)


    const {email, feedback, rating, _id} = data;
    useEffect(()=>{
        if(storedLike.includes(_id)){
            setLike(true)
        }
    },[])
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;
        const stars = [];
        
        for (let i = 0; i < fullStars; i++) {
          stars.push( 
            <span key={i} className=' text-orange-500'>&#9733;</span> 
          )
          
        }

        // if (hasHalfStar) {
        //   stars.push(<span key={fullStars}>&#189;</span>);
        // }
    
        return stars;
      };

      const handleLike=(id) =>{
        toast.success(`Liked ${email}'s review`)
        const storedLike = JSON.parse(localStorage.getItem('likeStored')) || [];

        if(!storedLike.includes(id)) { 
          storedLike.push(id)
        }
      
        localStorage.setItem('likeStored', JSON.stringify(storedLike));
        setLike(!like)
      }
      const removeLike=(id)=>{
        toast.warn("Removed Like! ")
        const storedLike = JSON.parse(localStorage.getItem('likeStored')) || [];
        const updated = storedLike.filter(item=> item!=id)
        localStorage.setItem('likeStored', JSON.stringify(updated));

        setLike(!like)

      }
    
    return (
        <div className='card w-100  d-flex flex-column p-2 mb-4 '>
            <p className='pt-0 text-secondary align-text-top'>From <small>{email}</small> </p>
            <p className=' card p-3 text-secondary '> {feedback}</p>
            <div className="d-flex justify-content-between">
            {
                like?(<p onClick={()=>removeLike(_id)} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Unlike!" className='h5 ps-1 text-primary'><FontAwesomeIcon icon={faThumbsUp}/></p>):(
                    <p data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Like!" onClick={()=>handleLike(_id)} className='h5 ps-1 text-secondary'><FontAwesomeIcon icon={faThumbsUp}/></p>
                )
            }
            
            <p className=' text-warning'> <small className='text-secondary'>Rating</small> {renderStars(rating)}/5</p>
            </div>
            
        </div>
    );
};

export default Review;