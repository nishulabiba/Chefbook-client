import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    return (
        <div className='pb-5 d-flex flex-column bg-black justify-content-center align-items-center'>
            <h1 className='fs-2 m-5 text-white fst-italic'>Login Here !</h1>
            <div className="card p-lg-5 p-5 c1 bg-body-secondary">
                <form>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <Link>Forgot password?</Link>
                    <br></br>
                    <button type="submit" className="btn btn-primary mt-3 mb-3">Login</button>
                    <br/>
                    <div className="d-flex flex-column ">
                        
                    <button className='btn px-0 align-text-start'><img src="google.svg" alt=""/> Google Sign-in</button>
                    <button className='btn'><img src="github.svg" alt="" /> Github Sign-in</button>
                    <Link to='./register'><button className='btn ms-0'><FontAwesomeIcon className='me-1' icon={faUserPlus}/> Register Now</button></Link>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;