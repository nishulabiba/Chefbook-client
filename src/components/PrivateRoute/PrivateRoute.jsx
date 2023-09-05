import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { Navigate, Route, BrowserRouter as Router, Routes, redirect, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const from = location.state?.from?.pathname || "/from"
    
    const {user , loading} = useContext(AuthContext)
    if(loading)
    {

     return <div className="bg-black text-white spinner p-1 ">
     <FontAwesomeIcon className='me-1 w-100 fa-spin-pulse h6 p-1' icon={faSpinner}/>
   </div>

    }
    if (user) {
        return children;
      }
    return < Navigate to='/login' state={{ from :location}} replace></Navigate>
}

export default PrivateRoute;