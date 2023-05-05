import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className=''>
            <nav className="navbar  navbar-expand-lg bg-body-secondary">
  <div className="container-fluid text-white">
    <Link className="navbar-brand fs-1 fst-italic fw-semibold text-black" href="#">chef<span className='text-warning'>B</span>ook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='./' className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Blog</Link>
        </li>
        <li className='nav-item'> 
        <Link to='./login' className='nav-link '>Login</Link></li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Favorite Recipes</Link></li>
            <li><Link className="dropdown-item" href="#">Regional Recipes</Link></li>
            <li></li>
            <li><Link className="dropdown-item" href="#">Most Liked Recipes</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Nav;