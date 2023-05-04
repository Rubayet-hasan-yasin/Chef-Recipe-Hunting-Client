import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center text-5xl text-gray-700 font-extrabold'>Question and Answer</h2>


            <h1 className='text-4xl font-semibold my-6'>
                <span className='font-extrabold'>1.</span> The differences between uncontrolled and controlled components?
            </h1>
            <p className='text-lg my-5'>
                Uncontrolled components are form elements like input fields and text areas that store their own state internally, without relying on React state.
                With controlled components, the form data is managed by React state. The input fields are linked to state variables, and the values of the fields are updated by setState().
            </p>
            <hr />



            <h1 className='text-4xl font-semibold my-6'>
                <span className='font-extrabold'>2.</span> How to validate React props using PropTypes?
            </h1>
            <p className='text-lg my-5'>
                We can use PropTypes to validate any data we are receiving from props. If you haven't installed PropTypes yet, then install fast. In your component file, import PropTypes. define the expected data types of your props using propTypes. React will automatically validate your component's props at runtime and log any errors to the console if they don't match the expected data types.
            </p>
            <hr />



            <h1 className='text-4xl font-semibold my-6'>
                <span className='font-extrabold'>3.</span> The difference between nodejs and express js.
            </h1>
            <p className='text-lg my-5'>
                Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript code on the server-side.Express.js is a lightweight and flexible web framework for Node.js that provides a set of tools for building web applications and APIs. It simplifies the development process by providing a set of features. Node.js is a runtime environment, Express.js is a framework.
            </p>
            <hr />



            <h1 className='text-4xl font-semibold my-6'>
                <span className='font-extrabold'>4.</span> What is a custom hook, and why will you create a custom hook?
            </h1>
            <p className='text-lg my-5'>
                A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. The main reason to write a custom hook is for code reusability. This helps to reduce duplication of code and makes your code more modular. This can improve code organization and make your code easier to understand.
            </p>
            <hr />
        </div>
    );
};

export default Blogs;