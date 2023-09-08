import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard/RecipeCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const ViewDetails = () => {
    const {id} = useParams();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetch(`http://localhost:5000/chefdetails/${id}`)
        .then(res=>res.json())
        .then(data=> setData(data))
        setLoading(false)
     
    }, [])
    
    console.log(data);

    const {recipes, name, likes, picture, description, yearsOfExperience, numOfRecipes } = data;


    return (
        
            loading?(
                <div className="bg-black text-white spinner p-1 ">
                  <FontAwesomeIcon className='me-1 w-100 fa-spin-pulse h6 p-1 text-danger' icon={faSpinner}/>
                </div>
            ):(
            <div className=' d-flex flex-column m-5'>
            <div className="d-flex gap-5 justify-content-center align-items-center">

                <img className='ms-5 w-lg-25 w-75 ' src={picture} alt="" />
                <div className="d-flex flex-column mt-5 mt-lg-0">
                    <h1>{name}</h1>
                    <p className='w-75  '>{description}</p>
                    <div className="d-flex gap-5 ">
                        <p> <FontAwesomeIcon className='' icon={faThumbsUp}/> {likes}</p>
                        <p> Number of Recipes: {numOfRecipes}</p>
                        <p> Experience: {yearsOfExperience} years</p>
                    </div>
                </div>

            </div>











           <div className="d-flex flex-lg-row flex-column gap-lg-5 gap-2 ">
           {
                recipes?.map(item=> <RecipeCard recipe={item} key={item.recipe_id}></RecipeCard>)
            }
           </div>

            
        </div>
            )
        
    );
};

export default ViewDetails;