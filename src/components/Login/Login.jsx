import React, { useContext, useState } from 'react';
import "./Login.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faHandPointDown, faSadCry, faSadTear, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithCredential, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config'
import { AuthContext } from '../../provider/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Alert } from 'react-bootstrap';
import { FirebaseError } from 'firebase/app';

const Login = () => {
    const [error, setError] = useState(null)
    const [see , setSee] = useState(false)
    const [success, setSuccess] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const {user, signIn} = useContext(AuthContext)
    // Initialize Firebase Authentication and get a reference to the service
   
    

    const handleGoogleSignin = () => {
        const providerG = new GoogleAuthProvider();
        const googleAuth = getAuth();
        signInWithPopup(googleAuth, providerG)
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
        if(!error){
            navigate(from, {replace: true})
        }
    }
    const handleGithubSignin = () => {
        const credential = GithubAuthProvider.credential(token)
        const gitProvider = new GithubAuthProvider();
        const gitAuth = getAuth();
        signInWithCredential(gitAuth, credential)
        .then((result) => {
            const user = result.user;
            console.log(user)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            setError(errorMessage)

        })
    if(!error){
        navigate(from, {replace: true})
    }
        
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
            
           if(user){
             toast.success("Welcome to ChefBooks")
             navigate(from, {replace: true})
            
           }
            
            
         })
        .catch((error)=>

         {
            console.log(error.message)
         setError(error.message)
         if(error){
            toast.success(`User Not Found!!!!`)
        }
         }

         )
        
        form.reset();


        
        
    }

    
    return (
        <div className='pb-5 d-flex flex-column bg-black justify-content-center align-items-center'>
            <h1 className='fs-2 m-5 text-white fst-italic'>Login Here !</h1>
            {
                    error?( <h1 className='text-center h6 text-danger pb-2'>You've entered wrong credentials !!! Check your password again!  <span>   </span>
                    <FontAwesomeIcon icon={faHandPointDown}/>
                    </h1> ):( <div className="
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
                    <Link to="/reset-password"  className='  p-0 text-decoration-none'>Forgot password?</Link>
                       
                                            
                    <br></br>
                    <input className="btn btn-primary mt-3 mb-3" type="submit" value="Login" />
                    <ToastContainer/>
                    
                    
                    
                </form>
                <div className="d-flex flex-column justify-content-start ">
                        
                    <button onClick={handleGoogleSignin} className='ms-0 btn px-0 align-text-start'><img className="image" src="google.svg" alt=""/>  Google Sign-in</button>
                    <button onClick={handleGithubSignin} className='ms-0 btn'><img className='image ' src="github.svg" alt="" />  Github Sign-in</button>
                    <Link to='./register' className='btn '><FontAwesomeIcon className='me-1' icon={faUserPlus}/>  Register Now</Link>
                    </div>

            </div>
        </div>
    );
};

export default Login;