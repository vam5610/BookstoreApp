import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 bg-cover bg-center">
      <div className="w-full sm:max-w-lg px-8 py-12 sm:px-16 bg-opacity-80 bg-white backdrop-blur-md rounded-xl shadow-lg space-y-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full px-6 py-3 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-400" 
              placeholder="Your Full Name"
              {...register("name", { required: true })} 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-6 py-3 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-400" 
              placeholder="you@example.com"
              {...register("email", { required: true })} 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="w-full px-6 py-3 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-400" 
              placeholder="********"
              {...register("password", { required: true })} 
            />
          </div>

          <div className="flex items-center mb-6">
            <input type="checkbox" id="terms" className="mr-2"/>
            <label htmlFor="terms" className="text-sm text-gray-600">I agree to the <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a></label>
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <Link to="/login"><span className='text-blue-500 hover:underline'>Login</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
