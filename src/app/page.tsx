import React from 'react';
import Link from 'next/link';
import { FaAngleRight, FaSearch } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section
      className="py-12 md:py-24 relative z-0"
      style={{
        backgroundImage: 'url("/learn.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div className="container mx-auto px-6 md:px-4 relative z-10" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left" style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Effortlessly Generate Your Schemes of Work
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6 md:mb-8 opacity-80">
              Simplify your lesson planning and save valuable time. Our intuitive Teacher&apos; Aid helps you create comprehensive schemes of work tailored to different classes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-x-4">
              <Link
                href="/classes"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 w-full sm:w-auto"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Column: Optional Image/Illustration */}
          <div className="hidden text-left md:flex justify-center">
            <div className="flex flex-col gap-4">
              {/* Search Bar */}
              <div className="w-full max-w-md">
                <form className="flex items-center bg-yellow-100 rounded-xl shadow-md py-1 px-2 w-full">
                  <input
                    type="text"
                    placeholder="Search for resources..."
                    className="flex-1 focus:ring-0 text-gray-700 placeholder:text-gray-400 outline-none border-none px-2 text-xl"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-5 py-2.5 flex items-center transition-colors duration-200"
                  >
                    <FaSearch className="mr-2" />
                    Search
                  </button>
                </form>
              </div>
              <h1 className='font-bold text-4xl text-indigo-400'>Choose Class</h1>
              <Link href="/classes" className='text-2xl flex flex-row hover:text-amber-200'>Junior Secondary <span className='flex justify-center items-center text-center'><FaAngleRight /></span></Link>
              <Link href="/classes" className='text-2xl flex flex-row hover:text-amber-200'>Senior Secondary <span className='flex justify-center items-center text-center'><FaAngleRight /></span></Link>
            </div>
          </div>
        </div>
      </div>
      {/* Optional: Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
    </section>
  );
};

export default HeroSection;
