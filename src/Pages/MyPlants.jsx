import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthContext';



const MyPlants = () => {
     const {user} = use(AuthContext);
   
     const [userData, setUserData] = useState([]);
    //  const [remainingPLant, setRemainingPlant] = useState(userData)
    

     useEffect(() => {
      if(user?.email){
         fetch(`https://mango-server-green.vercel.app/plants/by-user?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setUserData(data);
      })
      }  
     }, [user])



    const handleDelete = id =>{

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

     fetch(`https://mango-server-green.vercel.app/plants/${id}`,{
                    method: 'DELETE'
                } )
     .then(res => res.json())
     .then(data => {
      if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Plant has been deleted.",
                                icon: "success"
                            });
                          }
     })


      const remainingPlants = userData.filter(p => p._id !== id);
     setUserData(remainingPlants);
    
  }
});
    }
    return (
        <div className='w-11/12 mx-auto mt-10 mb-28'>
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
        <th>Last Watered Date</th>
        <th>Watering Frequency</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      userData.map((plant, index) =>  <tr key={plant._id}>
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
        <td>{plant.lastDate}</td>
        <td>{plant.watering}</td>
        
         <th className="tooltip" data-tip=" Update Your Package">
            <Link to={`/dashboard/updatePlant/${plant._id}`}>
<button className="btn bg-[#0EA106] text-white btn-square  btn-md"><MdModeEditOutline  size={25}/></button>
            </Link>
          
        </th>

        <th className="tooltip" data-tip="Delete Your Package">
            <button onClick={() => handleDelete(plant._id)} className="btn bg-red-700 text-white btn-square  btn-md"><RiDeleteBinLine size={25}/></button>
        </th>
         
      </tr>)
     }
    
      
      
      
    </tbody>
    
    
  </table>
</div>
            
        </div>
    );
};

export default MyPlants;