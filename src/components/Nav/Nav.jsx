import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';
import { Button } from 'bootstrap';

const Nav = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogout=()=>{

    logOut();

  }
    return (
        <div className=''>
          
            <nav className="navbar  navbar-expand-lg bg-body-secondary">
  <div className="container-fluid text-white">
    <NavLink to="/" className="navbar-brand fs-1 fst-italic fw-semibold text-black me-5" href="#">chef<span className='text-warning'>B</span>ook</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-lg-flex  " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex justify-content-center align-items-center gap-4">
        <li className="nav-item">
          <NavLink to='./'  className="nav-link btn btn-outline-secondary " aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blog" className="nav-link btn btn-outline-secondary" >Blog</NavLink>
        </li>
        
       {
        user?( <div className="">
          <NavLink to="/favorite_recipes" className="nav-link btn btn-outline-secondary">Favorite Recipes</NavLink>
        </div> ): ( <li className="nav-item dropdown">
        <button className="nav-link dropdown-toggle btn btn-outline-secondary" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
        </button>
        <ul className="dropdown-menu">
          <li><NavLink to="/favorite_recipes"  className="dropdown-item" >Favorite Recipes</NavLink></li>
          <li><NavLink className="dropdown-item" >Most Liked Recipes</NavLink></li>
          
        </ul>
      </li>)
       }
        
      </ul>

      {
          user?(<div className='nav-item'> 
          <button onClick={handleLogout}  className='text-black btn btn-outline-secondary px-3 py-2 align-end  '>Log Out</button>
          </div>): ( <div className='nav-item'> 
          <NavLink to='./login' className='text-black btn btn-outline-secondary px-3 py-2  '>Login</NavLink>
          </div> )
        }
      
      
      
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Nav;