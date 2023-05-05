import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='pb-5 d-flex flex-column bg-black justify-content-center align-items-center'>
            <h1 className='fs-2 m-5 text-white fst-italic'>Login Here !</h1>
            <div className="card p-lg-5 p-5 c1 bg-body-secondary">
                <form>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <Link>Forgot password?</Link>

                    <br></br>
                    <button type="submit" class="btn btn-primary mt-3">Login</button>
                </form>

            </div>
        </div>
    );
};

export default Login;