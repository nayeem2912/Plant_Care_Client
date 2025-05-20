import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
             
      <div className='flex flex-col justify-center items-center space-y-20 mt-10'>
        <img className='w-80 shadow-2xl rounded-2xl ' src='/assets/New folder/404.gif' alt="" />
        <div className='space-y-6 text-center'>
        <p className='font-extrabold text-4xl text-[#0EA106]'>404 - Page Not Found </p>
        <p className='font-medium text-2xl'>Oophs! The page you're looking for doesn't exist.</p>

        <Link to='/'>
        <button className="btn rounded-full btn-xs sm:btn-sm md:btn-md text-[#FFFFFF] lg:my-5 bg-[#0EA106]  xl:btn-xl">Go Back Home</button>
        </Link>
        </div>
      </div>
        </div>
    );
};

export default ErrorPage;