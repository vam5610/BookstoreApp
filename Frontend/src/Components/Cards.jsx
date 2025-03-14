import React from 'react'

function Cards({item}) {
  
  return (
    <>
    <div className='mt-4 p-2 my-7'>
    <div className="card bg-base-100 w-92 p-3 shadow-xl hover:scale-y-105 duration-200 dark:bg-slate-900 dark:text-white border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}</div>
      <div className="badge badge-outline hover:bg-pink-400 duration-200 hover:text-white px-2 py-1 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards