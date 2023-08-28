import React from 'react';
import { useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className=' d-flex gap-0 mt-5 mt-lg-0  flex-lg-row flex-column justify-content-center align-items-center'>
          <img className='w-50 w-lg-50' src="https://th.bing.com/th/id/R.ef26932c068862660b99dfa43eeff3d3?rik=aA4bC714KKwU9w&riu=http%3a%2f%2fdemo.auburnforest.com%2fhtml%2fentropy%2fentropy%2fimages%2fresource%2ferror.png&ehk=MFPf32MLKO6KWTXsA0%2bLUNjX%2fc2r4rLRgRvbZCf04ns%3d&risl=&pid=ImgRaw&r=0" alt="" />
      <div className="mt-lg-5 text-center">
      <h1 className='mt-lg-5 m pt-lg-5  h1'>Oops!</h1>
      <p className='h3'>Sorry, an unexpected error has occurred.</p>
      <p className='text-center text-danger-emphasis'>
        <i>{error.statusText || error.message }</i>
      </p>
      </div>
    </div>
    );
};

export default ErrorPage;