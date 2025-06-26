import axios from 'axios';
import React, { useEffect, useState }  from 'react';
import { Link } from 'react-router';



const AllPlant = () => {

   const [search , setSearch]= useState("");
   const [allPlant, setAllPlant] = useState([]);

   useEffect(() => {
    axios(`https://mango-server-green.vercel.app/plants?searchParams=${search}`)
    .then(data => setAllPlant(data.data))
  }, [search])

  //  const handleChange = (e) => {
  //   const type = e.target.value;
  //   setSortOption(type);

  //   let sorted = [...plants];

  //   if (type === "nextDate") {
  //     sorted.sort((a, b) => new Date(a.nextDate) - new Date(b.nextDate));
  //   }

  //   setSortPlants(sorted);
  // };
  

 
  
   
    return (
         <div className='w-11/12 mx-auto mt-10 mb-28'>
          
         <div className='flex justify-center items-center  my-4'>
          <div className='text-center '>
                <label className="input w-80 bg-gray-50 text-gray-800">
  <svg className="h-[1em]   opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input 
  onChange={(e) => setSearch(e.target.value)}
  type="search"
   className="grow" 
   placeholder="Search" />
</label>
            </div>
          {/* <select  value={sortOption} onChange={handleChange} defaultValue="Sort By" className="select font-semibold bg-gray-100">
  <option disabled={true}>Sort By</option>
   <option  value="">All Plants</option>
  <option value="nextDate">Next Watering Date</option>
</select> */}
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
        allPlant.map((plant, index) => <tr key={plant._id}>
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