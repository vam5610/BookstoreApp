import React, { useEffect, useState } from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Cards from './Cards';
import { data } from 'react-router-dom';
function FreeBook() {
  const [book,setBook]= useState([]);
  useEffect(()=>{

    const getBook=async()=>{
      const res= await axios.get("http://localhost:4000/book");
      const data= res.data.filter((data)=>data.category==="Free")
      
      setBook(data);
    };
    getBook();

  },[])
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
    <h1 className='font-bold text-lg'>Free offered Courses</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
    
   </div>
   <div>
   <Slider {...settings}>
        {book.map((item)=>(
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
   </div>
   </div>
   </>
  )
}

export default FreeBook