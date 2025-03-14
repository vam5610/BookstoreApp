import React from 'react'
import { Link } from 'react-router-dom'

function Aboutus() {
  return (
    <>
    <div className="min-h-screen w-full flex items-center justify-center p-10">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Image */}
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/people-watching-movie-home_23-2148563913.jpg?t=st=1741942297~exp=1741945897~hmac=91fb75b86ec1e3f54cbe6ff94e251a7b464e52b32a91aaacbcd243d9618d4a15&w=1380"
            alt="Bookstore"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900">About Our BookStore</h2>
          <p className="mt-4 text-gray-700">
            Welcome to **Book Haven**, your ultimate online bookstore! We offer a
            wide range of books, from bestsellers to classics, with a seamless
            shopping experience.
          </p>

          <ul className="mt-4 space-y-2 text-gray-600">
            <li>📚 Thousands of books from various genres</li>
            <li>🚚 Fast & Free Delivery</li>
            <li>💳 Secure Payment Options</li>
            <li>⭐ Customer Reviews & Recommendations</li>
            <li>🎁 Special Discounts & Offers</li>
          </ul>

          <Link to="/course">
          <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-600 transition-all">
            Explore Books
          </button></Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Aboutus