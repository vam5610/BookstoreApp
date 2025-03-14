import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { useAuth } from '../Context/AuthProvider';

function Login() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    };
    await axios.post("http://localhost:4000/user/login", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success('Login Success! Redirecting you...');
          localStorage.setItem("User", JSON.stringify(res.data.user));
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 2000);
        }
      }).catch((err) => {
        console.log("Error: ", err);
        toast.error("Error: " + (err.response?.data?.message || "Something went wrong"));
      });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center"
         style={{ backgroundImage: "url('/login_image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Login Form Overlaid on Fullscreen Background */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
        <div className="w-full sm:max-w-lg px-8 py-12 sm:px-16 bg-opacity-90 bg-yellow-50 text-white backdrop-blur-md rounded-xl shadow-lg space-y-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-700 mb-4">Welcome Back</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-6 py-3 mt-2 border border-gray-500 bg-white text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 shadow-md transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-400" 
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
                className="w-full px-6 py-3 mt-2 border border-gray-500 bg-white text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 shadow-md transition-all duration-300 ease-in-out hover:ring-2 hover:ring-blue-400" 
                placeholder="********"
                {...register("password", { required: true })} 
              />
            </div>
            <div className="flex items-center mb-6">
              <input type="checkbox" id="terms" className="mr-2"/>
              <label htmlFor="terms" className="text-sm text-gray-700">I agree to the <a href="#" className="text-gray-700 hover:underline">Terms and Conditions</a></label>
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-700">
            Don't have an account? <Link to="/signup"><span className='text-gray-700 hover:underline'>Signup</span></Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
