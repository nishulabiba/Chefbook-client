import { faHeart, faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const RecipeCard = ({recipe}) => {
  const [heart, setHeart] = useState(true) 
const {recipe_id, picture, title, ingredients, cookingMethod, rating } = recipe;

useEffect(()=>{

  const storedIds = JSON.parse(localStorage.getItem('selectedElementIds')) || [];  
  if(storedIds.includes(recipe_id)) {

    setHeart(false)
  }

}, [])

const handleFavorite =(id)=>{
  
  const storedIds = JSON.parse(localStorage.getItem('selectedElementIds')) || [];

  if(!storedIds.includes(id)) {
    storedIds.push(id)
  }
  console.log(storedIds);

  localStorage.setItem('selectedElementIds', JSON.stringify(storedIds));
  setHeart(!heart)
}

const removeFavorite=(id)=>{

  const storedIds = JSON.parse(localStorage.getItem('selectedElementIds')) || [];
  const updated = storedIds.filter(item=> item!=id)
  localStorage.setItem('selectedElementIds', JSON.stringify(updated));
  setHeart(!heart)


}
    return (
      <div className="card w-100 w-lg-75 d-flex flex-column justify-content-center align-items-center mt-5" >
      <img src={picture} className="card-img-top h-25 w-1/6 w-75 p-2" alt="..."/>
      <div className=" d-flex flex-column justify-content-center align-items-center p-0 m-0">
        <h5 className="card-title p-2">{title}</h5>
        <p className="card-text text-align w-75"> <span className=' text-capitalize text-danger'>Ingredients:</span> <br/> {ingredients}</p>
        <p className="card-text w-75"> <span className=' text-capitalize text-danger'>Cooking Method:</span> <br/>  {cookingMethod}</p>
        <p className="card-text">Ratings: {rating}/5</p>
        {
          heart?(
            <div className=""><span>Add to favorites</span>
              <button onClick={()=>handleFavorite(recipe_id)} className='btn p-0 '> <svg  className=" ms-3" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg></button>
            </div>
          ):(
         <div className="">
          <span className='me-3'>Remove favorite</span>
              <button onClick={()=>removeFavorite(recipe_id) } className='btn p-0 text-danger '> <FontAwesomeIcon icon={faHeart}/></button>
         </div> )
        }
      </div>
    </div>
    );
};

export default RecipeCard;