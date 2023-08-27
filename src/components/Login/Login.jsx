import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config'

const Login = () => {
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
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

        })
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        form.reset();
    }
    return (
        <div className='pb-5 d-flex flex-column bg-black justify-content-center align-items-center'>
            <h1 className='fs-2 m-5 text-white fst-italic'>Login Here !</h1>
            <div className="card p-lg-5 p-5 c1 bg-body-secondary">
                <form onSubmit={handleLogin}>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" name='email' className="form-control" id="inputEmail3" required/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" name='password' className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <Link>Forgot password?</Link>
                    <br></br>
                    <input className="btn btn-primary mt-3 mb-3" type="submit" value="Login" />
                    <br/>
                    <div className="d-flex flex-column ">
                        
                    <button onClick={handleGoogleSignin} className='btn px-0 align-text-start'><img src="google.svg" alt=""/> Google Sign-in</button>
                    <button onClick={handleGithubSignin} className='btn'><img src="github.svg" alt="" /> Github Sign-in</button>
                    <Link to='./register'><button className='btn ms-0'><FontAwesomeIcon className='me-1' icon={faUserPlus}/> Register Now</button></Link>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;