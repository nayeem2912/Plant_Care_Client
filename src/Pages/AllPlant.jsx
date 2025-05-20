import React from 'react';

const AllPlant = () => {
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
          Zemlak, Daniel and Leannon
          
        </td>
        <td>Purple</td>
        <th>
            
        </th>
        <th>
          <button className="btn text-white bg-[#0EA106] btn-sm">Plant Details</button>
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
        <th>

        </th>
        <th>
          <button className="btn text-white bg-[#0EA106] btn-sm">Plant Details</button>
        </th>
      </tr>
      
      
    </tbody>
    
    
  </table>
</div>
            
        </div>
    );
};

export default AllPlant;