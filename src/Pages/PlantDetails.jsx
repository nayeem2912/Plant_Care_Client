import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
  const {plantName, category, care, health, watering, lastDate, nextDate, description, photo} = useLoaderData()
  
    return (
        <div className='w-11/12 mx-auto  mt-10  '>
        
<div className='flex flex-row justify-center items-center'>
<div className="card flex flex-col md:flex-row  my-11 card-side bg-base-300 shadow-sm">
  <figure>
    <img className='p-4 w-80 h-96  '
      src={photo}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h1 className='text-2xl font-bold'>{plantName}</h1>
     <p className=''>Category:  <span className='text-lg font-semibold'>{category}</span></p>
      <p className='font-semibold'>Care Level:  <span className='text-lg font-semibold'>{care}</span></p>
      <p className='font-semibold'>Health Status:  <span className='text-lg font-semibold'>{health}</span></p>
      <p className='font-semibold'>Watering Frequency:  <span className='text-lg font-semibold'>{watering}</span>	</p>
      <p className='font-semibold'>Last Watered:  <span className='text-lg font-semibold'>{lastDate}</span> </p>
      <p className='font-semibold'>Next Watering :  <span className='text-lg font-semibold'>{nextDate}</span> </p>
      <p className='font-semibold'>Description :  <span className='text-lg font-semibold'>{description}</span> </p>
   
  </div>
</div>
</div>
        </div>
    );
};

export default PlantDetails;