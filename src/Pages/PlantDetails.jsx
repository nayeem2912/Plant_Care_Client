import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const PlantDetails = () => {
   const {user} = use(AuthContext)

  const {plantName, category, care, health, watering, lastDate, nextDate, description, photo} = useLoaderData()

  
  
    return (      
         <div className="max-w-4xl my-10 mx-auto p-6  bg-base-100 shadow-lg rounded-xl">
      <div className="flex flex-col md:flex-row gap-6">
        
        <div className="w-full md:w-1/2">
          <img
            src={photo}
            alt=""
            className="rounded-xl w-full h-64 object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 space-y-2">
          <h2 className="text-3xl font-bold text-green-700">{plantName}</h2>
          <p><span className="font-semibold">Category:</span> {category}</p>
          <p><span className="font-semibold">Care Level:</span> {care}</p>
          <p><span className="font-semibold">Watering Frequency:</span> {watering}</p>
          <p><span className="font-semibold">Last Watered:</span> {lastDate}</p>
          <p><span className="font-semibold">Next Watering:</span> {nextDate}</p>
          <p><span className="font-semibold">Health Status:</span> {health}</p>
          <p><span className="font-semibold">Added by:</span> {user?.displayName} </p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-1">Description</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
    );
};

export default PlantDetails;