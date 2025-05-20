import React from 'react';

const EasyGrowPlant = () => {
    return (
        <div>
              <div className='mt-10 mb-24 w-11/12 mx-auto'>

            <div className='text-center space-y-4'>
                <h1 className='text-3xl text-[#0EA106] font-bold'>Easy-Grow Stars</h1>
                <p className='text-lg font-semibold'> Just starting out? These reliable, beginner-friendly plants are beautiful, tough, and hard to kill.</p>
            </div>
            <div className='grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <div className="card  bg-base-100 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-50 h-50 rounded-xl ' src="/assets/Sansevieria.jpg" alt="" />
    </div>
    <h2 className="font-bold text-center text-[#0EA106] text-2xl">Snake Plant</h2>
    <p className=' text-center font-medium'>Thrives on neglect. Needs little water and tolerates low light.</p>

  </div>
</div>

<div className="card  bg-base-100 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-50 h-50 rounded-xl ' src="/assets/zz plant.jpg" alt="" />
    </div>
    <h2 className="font-bold text-[#0EA106] text-center text-2xl">ZZ Plant</h2>
    <p className=' text-center font-medium'>Nearly indestructible, this glossy-leaved beauty grows in almost any indoor environment.</p>

  </div>
</div>

<div className="card  bg-base-100 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-50 h-50 rounded-xl ' src="/assets/spider-plant.jpg" alt="" />
    </div>
    <h2 className="font-bold text-center text-[#0EA106] text-2xl">Spider Plant</h2>
    <p className=' text-center font-medium'>Great for beginners and air purification—plus, it multiplies easily!</p>

  </div>
</div>





            </div>
           </div>
        </div>
    );
};

export default EasyGrowPlant;