import React, { useEffect, useState } from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import ChefCard from './ChefCard/ChefCard';

const Home = () => {
    const [data , setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        async function fetchData() {
          try {
            const response = await fetch('http://localhost:5000/chefdetails');
            const jsonData = await response.json();
            setData(jsonData);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, [])
    return (
        <div className='' >
            <div className="bg-black p-3">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner  " id='banner'>
                    <div className="carousel-item active">
                    <img src="img1.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="img2.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="img3.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            
            </div>
            {
              loading?(
                <div className="bg-black text-white spinner p-5  ">
                  <FontAwesomeIcon className='me-1 w-100 fa-spin-pulse h6 p-5' icon={faSpinner}/>
                </div>
              ): (
                <div className="home bg-black w-100 p-5">
                {
                        data.map(chefData=> <ChefCard key={chefData.id} chefData={chefData}></ChefCard>)
                    }
                
                </div>
              )
            }
            
        </div>
    );
};

export default Home;