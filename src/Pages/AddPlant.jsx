import { format } from 'date-fns';
import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthContext';

const AddPlant = () => {
    const {user} = use(AuthContext)

  const handleAdd = e =>{
    e.preventDefault();
    const form = e.target ;
     const formData = new FormData(form);
     const newPlant = Object.fromEntries(formData.entries());
    


     fetch('https://mango-server-green.vercel.app/plants',{
             method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPlant)
         })
     .then(res => res.json())
     .then(data => {
       if(data.insertedId){
             Swal.fire({
  title: "Add New Plant Successfully!",
  icon: "success",
  draggable: true
});

form.reset();
       }
     })


  }
    return (
        <div className='w-11/12 mx-auto '>
            <div className='text-center mt-10 space-y-4 mb-16'>
                <p className='font-semibold text-[#0EA106] text-xl'>Fill out the form below to add a new plant to your collection. Include its name, type, photo, and care details to start tracking its growth and health right away.</p>
                <p className='text-xl font-semibold'>Date:    {format(new Date(),"PPPP . pp",)}</p>
            </div>
            <div className='mt-10 mb-28'>
                <form onSubmit={handleAdd} className='space-y-5' >
                <div className='grid grid-cols-1  md:grid-cols-2 gap-6 '>
                    <fieldset className="fieldset bg-base-200 border border-base-200 rounded-box p-4">
  <label className="label font-bold text-lg">Plant Name</label>
  <input type="text" name='plantName' className="input w-full" placeholder="Enter Plant Name" required />

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Image</label>
  <input type="text" name='photo' className="input w-full" placeholder="Enter Plant Image" required />

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Email</label>
  <input type="email" name='email' value={user ? `${user?.email}`: " "} readOnly className="input w-full" placeholder="Enter Your Email" />

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Name</label>
  <input type="text" name='name' value={user ? `${user?.displayName}`: " "} readOnly className="input w-full" placeholder="Enter Your Name" />

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                      <label className="label font-bold text-lg">Category</label>
  <select name='category' defaultValue="Enter Plant Category" className="select w-full" required>
  <option  disabled={true}>Enter Plant Category</option>
  <option value="Succulent">Succulent</option>
  <option value="Fern">Fern</option>
  <option value="Flowering">Flowering</option>
  <option value="Herb">Herb</option>
  <option value="Cactus">Cactus</option>
  <option value="Indoor">Indoor</option>
  <option value="Outdoor">Outdoor</option>
  <option value="Air-Purifying">Air Purifying</option>
  <option value="Bonsai">Bonsai</option>
  <option value="Climber">Climber</option>
  <option value="Foliage">Foliage</option>
  <option value="Aquatic">Aquatic</option>
</select>

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Care Level</label>
 <select name='care' defaultValue="Enter Plant Care Level" className="select w-full" required>
  <option  disabled={true}>Enter Plant Care Level</option>
   <option value="very-easy">Very Easy (low maintenance)</option>
  <option value="Easy">Easy</option>
  <option value="Moderate">Moderate</option>
  <option value="Challenging">Challenging</option>
  <option value="Difficult">Difficult (high maintenance)</option>
  <option value="Expert">Expert Only</option>
</select>

</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Health Status</label>
   <select name='health' defaultValue="Enter Plant Health Status" className="select w-full" required>
  <option  disabled={true}>Enter Plant Health Status </option>
    <option value="Healthy">Healthy</option>
  <option value="Thriving">Thriving</option>
  <option value="Showing New Growth">Showing New Growth</option>
  <option value="Minor Issues">Minor Issues (e.g., yellow leaves)</option>
  <option value="Recovering from Stress">Recovering from Stress</option>
  <option value="Needs Attention">Needs Attention</option>
  <option value="Pest-Affected">Pest-Affected</option>
  <option value="Diseased">Diseased</option>
  <option value="Dormant">Dormant (not actively growing)</option>
</select>
  </fieldset>


  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Watering Frequency </label>
  <select name='watering' defaultValue="Enter Plant Watering Frequency" className="select w-full" required>
  <option  disabled={true}>Enter Plant Watering Frequency </option>
    <option value="Every day">Every day</option>
  <option value="Every-2-days">Every 2 days</option>
  <option value="Every-3-days">Every 3 days</option>
  <option value="Twice-a-week">Twice a week</option>
  <option value="Weekly">Once a week</option>
  <option value="Every-10-days">Every 10 days</option>
  <option value="Every 2 weeks">Every 2 weeks</option>
  <option value="Once a month">Once a month</option>
  <option value="Rarely">Rarely (every 1–2 months)</option>
</select>

</fieldset>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Last Watered Date</label>
  <input type="date" name='lastDate' className="input w-full" placeholder="Enter Photo URL" required />
  </fieldset>


  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Next Watering Date </label>
  <input type="date" name='nextDate' className="input w-full" placeholder="Enter Photo URL" required />
  </fieldset>


  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Description</label>
  <input type="text" name='description' className="input w-full" placeholder="Enter Plant Details" required />
  </fieldset>
                   
                </div>
                

  <input type="submit" className='btn w-full' value="Add New Plant" />
            </form>
            </div>
           
        </div>
    );
};

export default AddPlant;