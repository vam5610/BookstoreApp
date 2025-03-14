import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom' 
import Home from './Home/Home'
import Courses from './Courses/courses'
import Signup from './Components/Signup'
import Login from './Components/Login'
import toast, { Toaster } from 'react-hot-toast';
import Aboutus from './Components/Aboutus'
import Contact from './Courses/Contact'
import About from './Courses/About'
import { useAuth } from './Context/AuthProvider'

function App (){

  const [authUser,setAuthuser]= useAuth();

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/course' element={authUser?<Courses/>:<Navigate to="/login"/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup/>} />
      
      
    </Routes>
    <Toaster />
    </div>
    </>
    
  )
}

export default App