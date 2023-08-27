import React from 'react';

const Blog = () => {
    return (
        <div className=' text-center flex-row justify-content-center bg-black' >
            <div className=" m-auto pt-5 pb-5 accordion accordion-flush w-50 flex-column" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      1. The differences between uncontrolled and controlled components
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <span className=' text-bg-success'>Controlled Components:</span> <br />
A controlled component is a form element whose value is controlled by the state of the application. In other words, the value of the form element is bound to a state variable, and any changes to the value are managed by updating the state. This approach allows you to have full control over the data and validation associated with the form elements. Controlled components are commonly used in React applications. <br />
<span className=' text-bg-success'>Controlled Components:</span> <br />
An uncontrolled component is a form element whose value is managed by the DOM itself. In this case, React doesn't control the value of the element directly; instead, you interact with the DOM to get or set the value of the form element. Uncontrolled components are generally used when you need to integrate with non-React code or when you want to take advantage of the native browser behavior for form elements.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      2. How to validate React props using PropTypes?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      1. Install the prop-types package using npm or yarn. <br />
2. Import PropTypes from prop-types and define propTypes as a static property of your component. <br />
3. Use PropTypes to specify the expected types and validation rules for each prop. <br />
4. You can use various prop types like string, number, array, func, etc. <br />
5. Optionally, set default prop values using the defaultProps object. <br />
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      3. The difference between nodejs and express js
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      Node.js is the underlying runtime environment that allows JavaScript to be executed on the server side, while Express.js is a web application framework that simplifies building web applications and APIs using Node.js. You can think of Express.js as a layer built on top of Node.js, providing additional features and abstractions to streamline web development.


      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      4. What is a custom hook, and why will you create a custom hook?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      A custom hook in React is a JavaScript function that encapsulates a specific piece of functionality, logic, or behavior, and can be reused across multiple components. Custom hooks are a powerful way to abstract and share stateful logic without duplicating code. They follow the naming convention of starting with the word "use" .

      </div>
    </div>
  </div>
  
</div>
            
        </div>
    );
};

export default Blog;