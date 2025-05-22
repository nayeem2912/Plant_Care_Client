import React from 'react';

const TipsSection = () => {
    return (
       <div>

      <div className='mt-10 mb-24 w-11/12 mx-auto'>

            <div className='text-center space-y-4'>
                <h1 className='text-3xl text-[#0EA106] font-bold'>Plant Care Pitfalls</h1>
                <p className='text-lg font-semibold'>  Mastering plant care means knowing what not to do. These common mistakes can stunt your plant's growth—learn how to avoid them.</p>
            </div>
            <div className='grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <div className="card  bg-base-300 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-50 h-50 rounded-xl' src="/assets/overwatering.jpg" alt="" />
    </div>
    <h2 className="font-bold text-center text-2xl text-[#0EA106]">Over-watering</h2>
    <p className='text-center font-medium'>Drowning your plant is easier than you think. Learn how to check soil moisture before watering.</p>

  </div>
</div>

<div className="card  bg-base-300 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-50 h-50 rounded-xl' src="/assets/no sunlight.jpg" alt="" />
    </div>
    <h2 className="font-bold text-center text-[#0EA106] text-2xl">Not Enough Light</h2>
    <p className=' text-center font-medium'> Find the right spot for your plant based on its light needs—shade lovers and sun seekers need different homes.</p>

  </div>
</div>

<div className="card  bg-base-300 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-50 h-50 rounded-xl' src="/assets/no dranage.jpg" alt="" />
    </div>
    <h2 className="font-bold text-center text-2xl text-[#0EA106]">No Drainage</h2>
    <p className=' text-center font-medium'>Poor drainage can lead to root rot. Make sure your pots let excess water escape.</p>

  </div>
</div>





            </div>
           </div>

       </div>
    );
};

export default TipsSection;