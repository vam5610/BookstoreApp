import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
  
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>We are delighted to have you <span className='text-pink-500'> here!!</span></h1>
        <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit cumque voluptate iusto, quam eius tenetur qui, nesciunt modi quas necessitatibus voluptates quibusdam tempora ullam sit voluptas ipsa nostrum quod reiciendis ab numquam unde? Delectus aliquid perferendis beatae. Perspiciatis, voluptate alias vel tempora fuga ipsum qui nobis maxime facilis adipisci dicta?</p> 
        <Link to="/"><button className='bg-pink-500 rounded-md duration-300 px-4 py-2 mt-7 hover:bg-pink-700'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4' >
      {
        list.map((item)=>(
          <Cards item={item} key={item.id} />
        ))
    }
    </div>

    </div>
    
    </>
  )
}

export default Course