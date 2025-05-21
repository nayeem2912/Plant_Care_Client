import React from 'react';

const PlantDetails = () => {
    return (
        <div className='w-11/12 mx-auto  mt-10  '>
        
<div className='flex flex-row justify-center items-center'>
<div className="card flex flex-col md:flex-row  my-11 card-side bg-green-200 shadow-sm">
  <figure>
    <img className='p-4 w-80 h-96  '
      src="/assets/Sansevieria.jpg"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h1 className='text-2xl font-bold'>Aloe Vera</h1>
     <p className=''>Category: <span className='text-lg font-semibold'>Succulent</span></p>
      <p className='font-semibold'>Care Level: <span className='text-lg font-semibold'>Easy</span></p>
      <p className='font-semibold'>Health Status: <span className='text-lg font-semibold'>Healthy</span></p>
      <p className='font-semibold'>Watering Frequency: <span className='text-lg font-semibold'>Every 2 weeks</span>	</p>
      <p className='font-semibold'>Last Watered:<span className='text-lg font-semibold'>2025-05-29</span> </p>
      <p className='font-semibold'>Next Watering : <span className='text-lg font-semibold'>2025-05-29</span> </p>
      <p className='font-semibold'>Description : <span className='text-lg font-semibold'>Medicinal plant, thick green leaves</span> </p>
   
  </div>
</div>
</div>
        </div>
    );
};

export default PlantDetails;