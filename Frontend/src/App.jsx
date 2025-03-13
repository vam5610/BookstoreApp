import React from 'react'
import {Route, Routes} from 'react-router-dom' 
import Home from './Home/Home'
import Courses from './Courses/courses'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Contactus from './Components/contactUs'


function App (){
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/course' element={<Courses/>} />
      <Route path='/contact' element={<Contactus />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup/>} />
      
    </Routes>
    </div>
    </>
    
  )
}

export default App