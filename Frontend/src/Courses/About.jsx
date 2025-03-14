import React from 'react'
import Navbar from '../Components/Navbar'
import Course from '../Components/Course'
import Footer from '../Components/Footer'
import Contactus from '../Components/contactUs'
import Aboutus from '../Components/Aboutus'

function About() {
  return (
    <>
    <Navbar />
    <div className='min-h-screen'>
    <Aboutus />
    </div>
    <Footer />
    </>
  )
}

export default About
