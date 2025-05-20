import React from 'react';
import NewPlantCard from './NewPlantCard';

const NewSection = () => {
    return (
        <div className='mt-20 mb-24 w-11/12   mx-auto'>
            <div className='text-center space-y-4'>
                <h1 className='text-3xl text-[#0EA106] font-bold'>New Plants</h1>
                <p className='text-lg font-semibold'>Meet your newest leafy friends! Set up care schedules and keep them happy and healthy from day one.</p>
            </div>
            <div className='mt-20' >
            <NewPlantCard></NewPlantCard>
            </div>
            
        </div>
    );
};

export default NewSection;