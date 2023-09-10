import React, { useEffect, useState } from 'react';

const FavoriteRecipes = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [rec, setRec] = useState([])
    const [r, setR] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/chefdetails')
        .then(res=>res.json())
        .then(data=> setData(data))
        setLoading(false)

        
     
    }, [])
    useEffect(()=>{
        
        
        data.map(item=> setRec(item.recipes)  );
        rec.map(item=> setR(item))
    }, [])

    console.log(rec);
    console.log(r);


    

    const storedIds = JSON.parse(localStorage.getItem('selectedElementIds')) || []; 
    return (
        <div>
            {
                storedIds.map(item=> {
                    if(item == r.recipe_id){
                        <div className="">
                            {r.title}
                        </div>
                    }
                })
            }
            
        </div>
    );
};

export default FavoriteRecipes;