import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className=''>
            <nav className="navbar  navbar-expand-lg bg-body-secondary">
  <div className="container-fluid text-white">
    <NavLink className="navbar-brand fs-1 fst-italic fw-semibold text-black" href="#">chef<span className='text-warning'>B</span>ook</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='./'  className="nav-link active" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" >Blog</NavLink>
        </li>
        <li className='nav-item'> 
        <NavLink to='./login' className='nav-link '>Login</NavLink></li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" href="#">Favorite Recipes</NavLink></li>
            <li><NavLink className="dropdown-item" href="#">Regional Recipes</NavLink></li>
            <li></li>
            <li><NavLink className="dropdown-item" href="#">Most Liked Recipes</NavLink></li>
            
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Nav;