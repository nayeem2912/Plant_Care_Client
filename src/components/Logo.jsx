import React from 'react';

const Logo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-1.5' src="../../favicon.svg" alt="" />
            <h1 className='text-3xl  font-extrabold'>Plant <span className='text-[#0EA106]'>Care</span></h1>
        </div>
    );
};

export default Logo;