import React from 'react';

const RecipeCard = ({recipe}) => {
const {picture, title, ingredients, cookingMethod, rating } = recipe;
console.log(recipe);
    return (
      <div className="card w-75 d-flex flex-column justify-content-center align-items-center mt-5" >
      <img src={picture} className="card-img-top h-25 w-1/6 w-75 p-2" alt="..."/>
      <div className=" d-flex flex-column justify-content-center align-items-center p-0 m-0">
        <h5 className="card-title p-2">{title}</h5>
        <p className="card-text text-align w-75"> <span className=' text-capitalize text-danger'>Ingredients:</span> <br/> {ingredients}</p>
        <p className="card-text w-75"> <span className=' text-capitalize text-danger'>Cooking Method:</span> <br/>  {cookingMethod}</p>
        <p className="card-text">Ratings: {rating}</p>
      </div>
    </div>
    );
};

export default RecipeCard;