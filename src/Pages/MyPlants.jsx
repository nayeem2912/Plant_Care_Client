import React from 'react';
import { Link } from 'react-router';

import Swal from 'sweetalert2';


const MyPlants = () => {

    const handleDelete = () =>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your Plant has been deleted.",
      icon: "success"
    });
  }
});
    }
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
        <th>Last Watered Date</th>
        <th>Watering Frequency</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          1
        </th>
        <td>
          <div className="flex items-center gap-3">
           
            <div>
              <div className="font-bold">Hart Hagerty</div>
              
            </div>
          </div>
        </td>
        <td> 
            Carroll Group
        </td>
        <td>Purple</td>
        <th></th>
        <th></th>
        <th>
          <button className="btn py-6 btn-md  text-white bg-[#0EA106] ">Update Plant</button>
          
          
             <button   onClick={handleDelete} className="btn py-6 text-white bg-[#0EA106] btn-md">Delete Plant</button>
             
            
          
        </th>
         
      </tr>
      {/* row 2 */}
      <tr>
        <th>
         2
        </th>
        <td>
          <div className="flex items-center gap-3">
           
            <div>
              <div className="font-bold">Brice Swyre</div>
              
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          
        </td>
        <td>Red</td>
        <th></th>
        <th></th>
        <th>
          <Link to='/updatePlant/:id'>
         <button className="btn py-6 btn-md  text-white bg-[#0EA106] ">Update Plant</button></Link>
          <button onClick={handleDelete} className="btn py-6 text-white bg-[#0EA106] btn-md">Delete Plant</button>
        </th>
      </tr>
      
      
    </tbody>
    
    
  </table>
</div>
            
        </div>
    );
};

export default MyPlants;