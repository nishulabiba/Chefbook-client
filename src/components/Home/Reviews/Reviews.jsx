import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [visibleData, setVisibleData] = useState(false);
    useEffect(()=> {
        async function fetchData() {
            try {
              const response = await fetch('http://localhost:5000/reviews');
              const jsonData = await response.json();
              setReviews(jsonData)
    
  
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
      
          fetchData();
        }
    , [] );
    const handleSeeMore = () => {
      setVisibleData(!visibleData); // Show all data
    };
    return (
        
          <div className=" p-5 d-flex justify-content-center align-items-center flex-column gap-3 bg-black">
            <h3 className='display-6 font-monospace text-white'>Here are some!!</h3>
            {visibleData?( <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
              {
                reviews.map((data)=> <Review key={data._id} data={data}></Review>)
                
              } <button onClick={handleSeeMore} className="btn btn-primary w-25 ">See Less</button>
            </div> ):(<div className="d-flex flex-column gap-3 align-items-center justify-content-center">{
              
            reviews.slice(0, 2).map((data)=> <Review key={data._id} data={data}></Review>)
            }
            <button onClick={handleSeeMore} className="btn btn-primary w-25 ">See More</button>

            </div> )

            }
          </div>
        
    );
};

export default Reviews;