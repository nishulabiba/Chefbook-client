import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        const f = event.target;
        const name = f.name.value;
        const email =f.email.value;
        const password = f.password.value;
        const url = f.url.value;


        console.log(name, url);
        f.reset();
    }
    return (
        <div className='d-flex justify-content-center pt-5 bg-black'>
            <div className="card p-lg-5 p-5 c1 bg-body-secondary">
                <form onSubmit={handleRegister}>
                        <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                        <input type="Text" name='name' className="form-control" id="name" required/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" name='email' className="form-control" id="inputEmail3" required/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input name='password'  type="password" className="form-control" id="inputPassword3" required/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputText" className="col-sm-2 col-form-label">Photo URL</label>
                        <div className="col-sm-10">
                        <input type="link" name='url' className="form-control" id="inputText" required/>
                        </div>
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary mt-3 mb-3">Register</button>
                    <br/>
                </form>

            </div>
        </div>
    );
};

export default Register;