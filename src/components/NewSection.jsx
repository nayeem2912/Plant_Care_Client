import React from 'react';
import NewPlantCard from './NewPlantCard';
import { useLoaderData } from 'react-router';

const NewSection = () => {
    const data = useLoaderData();
    
    return (
        <div className='mt-8 mb-8 w-11/12   mx-auto'>
            <div className='text-center space-y-4'>
                <h1 className='text-3xl text-[#0EA106] font-bold text-center mb-4'>New Plants</h1>
                <p className="text-center text-gray-600 mb-6">Meet your newest leafy friends! Set up care schedules and keep them happy and healthy from day one.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ' >
                {
                    data.map(plant =>  <NewPlantCard key={plant._id} plant={ plant}></NewPlantCard> )
                }
            
            </div>
            
        </div>
    );
};

export default NewSection;