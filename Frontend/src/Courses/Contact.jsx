import React from 'react'
import Navbar from '../Components/Navbar'
import Course from '../Components/Course'
import Footer from '../Components/Footer'
import Contactus from '../Components/contactUs'

function Contact() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <Contactus />
    </div>
    <Footer />
    </>
  )
}

export default Contact