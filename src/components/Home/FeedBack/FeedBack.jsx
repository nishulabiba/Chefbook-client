import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/Authprovider';
import { toast } from 'react-toastify';

const FeedBack = () => {
    const {user} = useContext(AuthContext)
   
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

     const handleSubmission=(data) =>

      {
        console.log(data);
        fetch('http://localhost:5000/upload', {
            method: 'POST',
            headers: {"Content-Type" : "application/json" },
            body: JSON.stringify(data)
          })
            .then(response => response.json())
            .then(response =>{ console.log(response)

                if(response.acknowledged){
                    toast.success("Thanks for giving valuable opinion")
                }
              
      
            })
            
            .catch(err => console.error(err));
        
      }
    
      return (
       <div className=" bg-black d-flex flex-column align-items-center justify-content-center py-3">
        <h3 className='display-5 font-monospace pb-2'>Give us your valuable opinion!</h3>
         <div className="card w-50 p-5 border-5">
        <form onSubmit={handleSubmit(handleSubmission)} className='d-flex flex-column gap-3'>
          < input type='email' value={user?.email}  placeholder='Enter email' className='form-control' {...register('email', { required: true })} />
          <input placeholder='Give a feedback' className='form-control pb-5' {...register('feedback', { required: true })} />
          <input type='number' max={5} placeholder='Give rating out of 5' className='form-control' {...register('rating', { required: true })} />
          {errors.email && <p>email is required.</p>}
          {errors.rating && <p>Rate out of 5</p>}

          {/* <input {...register('age', { pattern: /\d+/ })} />
          {errors.age && <p>Please enter number for age.</p>} */}
          {
            user?(
                <input  className='btn btn-primary w-25 px-0' type="submit" />
            ): 
            <div className="">
            <Link  to="/login" className='btn btn-primary w-25 px-0'> Submit </Link>
            
            </div>
          }
        </form>
        </div>
       </div>
      );
    }


export default FeedBack;