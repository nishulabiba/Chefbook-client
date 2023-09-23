import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../provider/Authprovider';

const EmailVerification = () => {
    const [err, setErr] = useState(null)
    const {user} = useContext(AuthContext)

    const handleResetPass=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

        
        const auth = getAuth()
        if(user){
            sendPasswordResetEmail(auth, user.email)
                .then((w) => {
                    // Password reset email sent!
                    if(w== undefined){
                            toast.success("Email has been sent!!")
                        }
                    
                    // ..
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    setErr(errorMessage)
                    if(error){
                        toast.error("Sorry!! We couldn't find your account.")
                    }
                    
                    
                    
                    // ..
                });
            
        }
        sendPasswordResetEmail(auth, email)
        .then((w) => {
            // Password reset email sent!
            console.log(w);
            
                
                   
                if(w== undefined){
                    toast.success("Email has been sent!!")
                }
            
            // ..
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            setErr(errorMessage)
            if(error){
                toast.error("Sorry!! We couldn't find your account.")
            }
            
            
            // ..
          });
          form.reset()
    }
    return (
        <div className="d-flex justify-content-center align-items-center m-5">
            <div className="card w-50 p-5 ">
            <h4><FontAwesomeIcon icon={faEnvelope}/> Reset Password through email! </h4>
            <form onSubmit={handleResetPass}>
                {
                    err?(<p className=' mt-3 text-danger'>Sorry! we couldn't find your account.</p>):( <div className=""> </div> )
                }
                {
                    user?(
                        <input value={user.email} className='form-control mt-2' type="email" name="email" id="" />
                    ):(
                        <input placeholder='Enter your email address' className='form-control mt-2' type="email" name="email" id="" />
                    )
                }
                <br /> 
                <input className='btn btn-primary' type="submit" value="Send" />
                <ToastContainer/>
            </form>
        </div>
        </div>
       
    );
};

export default EmailVerification;