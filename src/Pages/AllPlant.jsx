import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlant = () => {
  const plants = useLoaderData();
  console.log(plants)
    return (
         <div className='w-11/12 mx-auto mt-10 mb-28'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          No
        </th>
        <th>Plants Name</th>
        <th>Category</th>
        <th>Health Status</th>
        <th>watering frequency</th>
        <th>Care Level</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

      {
        plants.map((plant, index) => <tr key={plant._id}>
        <th>
         {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
           
            <div>
              <div className="font-bold">{plant.plantName}</div>
              
            </div>
          </div>
        </td>
        <td>
         {plant.category}
        </td>
        <td>{plant.health}</td>
        <td>
          {plant.watering}
        </td>
       <td>
        {plant.care}
       </td>
        <th>
          <Link to='/plantDetails'>
          <button className="btn text-white bg-[#0EA106] btn-sm">Plant Details</button></Link>
        </th>
      </tr> )
      }
      
      
     
      
      
    </tbody>
    
    
  </table>
</div>
            
        </div>
    );
};

export default AllPlant;