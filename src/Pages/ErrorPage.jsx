import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
             
      {/* <div className='flex flex-col justify-center items-center space-y-20 mt-10'>
        <img className='w-80 shadow-2xl rounded-2xl ' src='/assets/New folder/404.gif' alt="" />
        <div className='space-y-6 text-center'>
        <p className='font-extrabold text-4xl text-[#0EA106]'>404 - Page Not Found </p>
        <p className='font-medium text-2xl'>Oophs! The page you're looking for doesn't exist.</p>

        <Link to='/'>
        <button className="btn rounded-full btn-xs sm:btn-sm md:btn-md text-[#FFFFFF] lg:my-5 bg-[#0EA106]  xl:btn-xl">Go Back Home</button>
        </Link>
        </div>
      </div> */}
       
       <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
            <Link to='/'>
        <button className="btn rounded-full btn-xs sm:btn-sm md:btn-md text-[#FFFFFF] lg:my-5 bg-[#0EA106]  xl:btn-xl">Back to homepage</button>
        </Link>
			
		</div>
	</div>
</section>
           
        </div>
    );
};

export default ErrorPage;