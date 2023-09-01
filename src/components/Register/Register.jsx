import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeDropper, faEyeSlash, faEyedropper } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    const {user, createUser} = useContext( AuthContext)
    const [error, setError] = useState(null)
    const [see, setSee] = useState(false)
    const navigate = useNavigate()
    const handleRegister = event => {
        event.preventDefault();
        const f = event.target; 
        const name = f.name.value;
        const email =f.email.value;
        const password = f.password.value;
        if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError( "Password not valid!")
            alert("Password invalid !!! Give 8 characters")
            return ;
          }
        const url = f.url.value;
        createUser( email, password)
        .then((result)=>{
          const user = result.user;

          console.log(user)
          
          navigate('/')

          
          })
        .catch(error=>{
            console.log(error) 
        
      })


        console.log(name, url);
        f.reset();
    }

    const handleSee =()=>{
        setSee(!see)
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
                            {
                                error?( <small className=' text-danger'>Enter password with 8 characters! </small> ): ( <div className=""></div>
                                    )
                            }
                        {
                            see?( <div className="d-flex justify-content-center align-items-center gap-1" >
                                <input name='password'  type="text" className="form-control" id="inputPassword3" required/> <div onClick={handleSee} className="" ><FontAwesomeIcon  className=' me-1 text-black' icon={faEyeSlash}/></div> 
                                </div>): (<div className="d-flex justify-content-center align-items-center gap-1">
                                <input name='password'  type="password" className="form-control" id="inputPassword3" required/> <div onClick={handleSee} className="" ><FontAwesomeIcon  className=' me-1 text-black' icon={faEye}/></div> 
                                </div> )
                        } 
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