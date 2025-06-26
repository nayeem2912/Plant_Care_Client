import React from 'react';
import { Link } from 'react-router';

const NewPlantCard = ({plant}) => {
    const {photo, plantName, index,description, _id} = plant || {}
    return (
         <div
            key={index}
            className="card bg-base-100 shadow-md"
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          >
            <figure>
              <img className="w-full h-[120px] md:h-[160px] lg:h-[200px] object-cover rounded" src={photo} alt="" />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold">{plantName}</h3>
              <p className="text-sm text-gray-600">{description}</p>
              <Link  to={`/plantDetails/${_id}`}>
              <button className="btn w-full btn-sm btn-outline hover:text-white hover:bg-[#0EA106] mt-2">
                View Details
              </button>
              </Link>
            </div>
          </div>
    );
};

export default NewPlantCard;