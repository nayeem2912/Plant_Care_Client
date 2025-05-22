import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';

import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthContext';



const MyPlants = () => {
     const {user} = use(AuthContext);
   
     const [userData, setUserData] = useState([]);
    //  const [remainingPLant, setRemainingPlant] = useState(userData)
    

     useEffect(() => {
      if(user?.email){
         fetch(`http://localhost:3000/plants/by-user?email=${user.email}`)
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

     fetch(`http://localhost:3000/plants/${id}`,{
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
      console.log(remainingPlants)
     setUserData(remainingPlants);
    
  }
});
    }
    return (
        <div className='w-11/12 mx-auto mt-10 mb-28'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='bg-green-400'>
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
        <th>
          <Link to={`/updatePlant/${plant._id}`}>
         <button className="btn py-6 btn-md  text-white bg-[#0EA106] ">Update Plant</button></Link>
          
             <button   onClick={() => handleDelete(plant._id)} className="btn py-6 text-white bg-[#0EA106] btn-md">Delete Plant</button>
             
            
          
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