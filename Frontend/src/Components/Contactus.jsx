import React from "react";

function Contactus() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r  to-purple-600 p-10">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="p-10 flex flex-col justify-center bg-gray-900 text-white">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-gray-300">
            Have questions or want to work with us? Fill out the form, and we'll
            get back to you as soon as possible!
          </p>
          <div className="mt-6">
            <p className="text-lg font-semibold">📍 Location:</p>
            <p className="text-gray-400">123, React Street, JS City</p>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">📧 Email:</p>
            <p className="text-gray-400">contact@yourcompany.com</p>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">📞 Phone:</p>
            <p className="text-gray-400">+1 234 567 890</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Send Message <span className="text-black">🚀</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
