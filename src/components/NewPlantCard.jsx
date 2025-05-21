import React from 'react';

const NewPlantCard = ({plant}) => {
    const {photo, plantName, description} = plant || {}
    return (
        <div className=''>
    <div className="card  bg-base-100 card-xl  shadow-sm">
  <div className="card-body">
  <div className='flex justify-center'>
    <img className='w-50 h-50 rounded-xl ' src={photo} alt="" />
    </div>
    <h2 className="font-bold text-[#0EA106] text-center text-2xl">{plantName}</h2>
    <p className=' text-center font-medium'>{description}</p>

    <button className="btn bg-[#0EA106] text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Plant Details</button>

  </div>
</div>

        </div>
    );
};

export default NewPlantCard;