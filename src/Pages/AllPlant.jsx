import React, { useState }  from 'react';
import { Link, useLoaderData } from 'react-router';



const AllPlant = () => {
  const plants = useLoaderData();
   const [sortPlants, setSortPlants] = useState(plants);
  const [sortOption, setSortOption] = useState("");

   const handleChange = (e) => {
    const type = e.target.value;
    setSortOption(type);

    let sorted = [...plants];

    if (type === "nextDate") {
      sorted.sort((a, b) => new Date(a.nextDate) - new Date(b.nextDate));
    }

    setSortPlants(sorted);
  };
  

 
  
   
    return (
         <div className='w-11/12 mx-auto mt-10 mb-28'>
          
         <div className='flex justify-center items-center  my-4'>
          <select  value={sortOption} onChange={handleChange} defaultValue="Sort By" className="select font-semibold bg-green-600">
  <option disabled={true}>Sort By</option>
   <option  value="">All Plants</option>
  <option value="nextDate">Next Watering Date</option>
</select>
         </div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead >
      <tr>
        <th>
          No
        </th>
        <th>Plants Name</th>
        <th>Category</th>
        <th>Health Status</th>
        <th>Care Level</th>
        <th>watering frequency</th>
        <th>Next Watering Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

      {
        sortPlants.map((plant, index) => <tr key={plant._id}>
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
        {plant.care}
       </td>
        <td>
          {plant.watering}
        </td>
       <td>
        {plant.nextDate}
       </td>
        <th>
          <Link to={`/plantDetails/${plant._id}`}>
          <button  className="btn text-white bg-[#0EA106] btn-sm">Plant Details</button></Link>
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