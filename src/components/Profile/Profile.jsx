import React, { useContext } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faEdit, faRegistered } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form"
import { getAuth, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Profile = () => {
    const {user} = useContext(AuthContext)




    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const location = useLocation()
      const from  = location.state?.from?.pathname || "/"
    const auth= getAuth() 
      const onSubmit = (data) => {
        const {displayName, photoURL, email, password, phoneNumber} = data;
        updateProfile(auth.currentUser, {
          displayName: displayName ,
           photoURL: photoURL

        })
        .then((result) => {
              // Profile updated!
              const user = result;
              // ...
        }).catch((error) => {
              // An error occurred
              console.log(error.message);
              // ...
            });

        navigate(from, {replace: true})

        
       
        

        
      }



    return (
        <div className='d-flex justify-content-center align-items-center p-5 m-2'>
            <div className="d-flex gap-5">
                <img src={user.photoURL} alt="" />
                <div className="">
                <h2>{user.displayName}</h2>
                <p>{user.email}</p>
                <Link to="/reset-password" className=' text-decoration-none text-black-50'>Reset Password <FontAwesomeIcon icon={faArrowCircleRight}/></Link>
                </div>
                <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn p-0 h-25'><FontAwesomeIcon icon={faEdit}/> Edit</button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Profile </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                      <form className='p-3 form d-flex flex-column gap-3' onSubmit={handleSubmit(onSubmit)}>
                      
                      
                      <div className="">
                        <small>Name</small>
                      <input className='form-control' defaultValue={user.displayName} {...register("displayName")} />
                      </div>
                      <div className="">
                        <small>PhotoUrl</small>
                      <input className='form-control' defaultValue={user.photoURL} {...register("photoURL", { required: true })} />
                      </div>
                      

      {/* include validation with required or other standard HTML validation rules */}
      
      <div className="">
        <small>Password</small>
      <input type='password' className='form-control' defaultValue={user.password} {...register("password", { required: true })} />
      </div>
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}

      
    
      
      
        
        <button type="submit" className="btn btn-primary w-25">Save changes</button>
      
      </form>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Profile;