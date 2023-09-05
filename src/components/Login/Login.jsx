import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config'
import { AuthContext } from '../../provider/Authprovider';

const Login = () => {
    const [error, setError] = useState(null)
    const [see , setSee] = useState(false)
    const navigate = useNavigate()

    const {user, signIn} = useContext(AuthContext)
    // Initialize Firebase Authentication and get a reference to the service
   
    const gitProvider = new GithubAuthProvider();

    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider)
        .then((result)=> {
            const user = result.user;
            console.log(user)
        })
        .catch((error)=> {
            
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    setError(errorMessage)
        })
    }
    const handleGithubSignin = () => {
        signInWithPopup(auth, gitProvider)
        .then((result) => {
            const user = result.user;
            console.log(user)
        })
        .catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            setError(errorMessage)

        })
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
         .then((result)=> {
            const user = result.user;
            console.log("current user",user);
            navigate("/")
            alert("Welcome to our site")
            form.reset();
         })
         .catch((error)=>

         {
            console.log(error.message)
         setError(error.message)
         }
         )


        
        
    }
    return (
        <div className='pb-5 d-flex flex-column bg-black justify-content-center align-items-center'>
            <h1 className='fs-2 m-5 text-white fst-italic'>Login Here !</h1>
            {
                    error?( <h1 className='text-center h6 text-danger pb-2'>You've entered wrong credentials !!!</h1> ):( <div className="
                    "></div> )
                }
            <div className="card p-lg-5 p-5 c1 bg-body-secondary">
                
                <form onSubmit={handleLogin}>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input placeholder='Enter email address' type="email"  name='email' className="form-control" id="inputEmail3" required/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        {
                            see?( <div className="d-flex justify-content-center align-items-center gap-1" >
                                <input name='password' placeholder='Enter password'  type="text" className="form-control" id="inputPassword3" required/> <div onClick={()=> setSee(!see)} className="" ><FontAwesomeIcon  className=' me-1 text-black' icon={faEye}/></div> 
                                </div>): (<div className="d-flex justify-content-center align-items-center gap-1">
                                <input name='password'  type="password" className="form-control" id="inputPassword3" required/> <div onClick={()=> setSee(!see)} className="" ><FontAwesomeIcon  className=' me-1 text-black ' icon={faEyeSlash}/></div> 
                                </div> )
                        } 
                        </div>
                    </div>
                    <Link className=' text-decoration-none'>Forgot password?</Link>
                    <br></br>
                    <input className="btn btn-primary mt-3 mb-3" type="submit" value="Login" />
                    
                    
                </form>
                <div className="d-flex flex-column justify-content-start ">
                        
                    <button onClick={handleGoogleSignin} className='ms-0 btn px-0 align-text-start'><img src="google.svg" alt=""/>  Google Sign-in</button>
                    <button onClick={handleGithubSignin} className=' ms-0 btn'><img src="github.svg" alt="" />  Github Sign-in</button>
                    <Link to='./register' className='btn '><FontAwesomeIcon className='me-1' icon={faUserPlus}/>  Register Now</Link>
                    </div>

            </div>
        </div>
    );
};

export default Login;