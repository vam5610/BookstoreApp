import React from 'react'

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
      <div className='order-2 md:order-1 w-full md:w-1/2 mt-32'>
        <div className='flex flex-col gap-7'>
        <h1 className='text-4xl font-bold' >Hello, Welcome here to learn something <span className='text-pink-500'>new everyday!!!!!</span> </h1>
        <p className='text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <label className="input validator border-none">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  <input type="email" placeholder="mail@site.com" required/>
</label>
<div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button className="btn btn-secondary mt-6">Join now</button>
        
      </div>
      <div className='order-1 w-full md:w-1/2'>
      <img src="book.png" className='w-92 h-92' alt="" />
      
      </div>
    </div>
    </>
  )
}

export default Banner