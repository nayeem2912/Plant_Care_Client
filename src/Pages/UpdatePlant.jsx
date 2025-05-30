import { format } from 'date-fns';
import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePlant = () => {

  const {plantName, category, care, health, watering, lastDate, nextDate, _id, email, name,  description, photo} = useLoaderData();

    const handleUpdate = e =>{
      e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedPlant= Object.fromEntries(formData.entries());
        

        fetch(`https://mango-server-green.vercel.app/plants/${_id}`, {
              method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(updatedPlant)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
               Swal.fire({
  title: "Plant updated successfully!",
  icon: "success",
  draggable: true
});
            }
        })




    }
    return (
        <div>
              <div className='w-11/12 mx-auto '>
                       <div className='text-center mt-10 space-y-4 mb-16'>
                           <p className='font-semibold text-[#0EA106] text-xl'>Keep your plant information accurate and up to date. Use this form to edit your plant’s name, type, description, care instructions, availability, and other important details.</p>
                           <p className='text-xl font-semibold'>Date:    {format(new Date(),"PPPP . pp",)}</p>
                       </div>
                        <div className='mt-10 mb-28'>
                <form onSubmit={handleUpdate} className='space-y-5' >
                <div className='grid grid-cols-1  md:grid-cols-2 gap-6 '>
                    <fieldset className="fieldset bg-base-200 border border-base-200 rounded-box p-4">
  <label className="label font-bold text-lg">Plant Name</label>
  <input type="text" name='plantName' defaultValue={plantName} className="input w-full" placeholder="Enter Plant Name" />

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Image</label>
  <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Enter Plant Image" />

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Email</label>
  <input type="email" name='email' defaultValue={email} className="input w-full" placeholder="Enter Your Email" />

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Name</label>
  <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Enter Your Name" />

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                      <label className="label font-bold text-lg">Category</label>
  <select name='category' defaultValue={category} className="select w-full">
  <option  disabled={true}>Enter Plant Category</option>
  <option value="Succulent">Succulent</option>
  <option value="Fern">Fern</option>
  <option value="Flowering">Flowering</option>
  <option value="Herb">Herb</option>
  <option value="Cactus">Cactus</option>
  <option value="Indoor">Indoor</option>
  <option value="Outdoor">Outdoor</option>
  <option value="Air-purifying">Air Purifying</option>
  <option value="Bonsai">Bonsai</option>
  <option value="Climber">Climber</option>
  <option value="Foliage">Foliage</option>
  <option value="Aquatic">Aquatic</option>
</select>

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Care Level</label>
 <select name='care' defaultValue={care} className="select w-full">
  <option  disabled={true}>Enter Plant Care Level</option>
   <option value="Very-easy">Very Easy (low maintenance)</option>
  <option value="Easy">Easy</option>
  <option value="Moderate">Moderate</option>
  <option value="Challenging">Challenging</option>
  <option value="Difficult">Difficult (high maintenance)</option>
  <option value="Expert">Expert Only</option>
</select>

</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Health Status</label>
   <select name='watering' defaultValue={health} className="select w-full">
  <option  disabled={true}>Enter Plant Health Status </option>
    <option value="Healthy">Healthy</option>
  <option value="Thriving">Thriving</option>
  <option value="New-growth">Showing New Growth</option>
  <option value="Minor-issues">Minor Issues (e.g., yellow leaves)</option>
  <option value="Recovering">Recovering from Stress</option>
  <option value="Needs-care">Needs Attention</option>
  <option value="Pest-affected">Pest-Affected</option>
  <option value="Diseased">Diseased</option>
  <option value="Dormant">Dormant (not actively growing)</option>
</select>
  </fieldset>


  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Watering Frequency </label>
  <select name='watering' defaultValue={watering} className="select w-full">
  <option  disabled={true}>Enter Plant Watering Frequency </option>
    <option value="Every day">Every day</option>
  <option value="Every-2-days">Every 2 days</option>
  <option value="Every-3-days">Every 3 days</option>
  <option value="Twice-a-week">Twice a week</option>
  <option value="Once a week">Once a week</option>
  <option value="Every-10-days">Every 10 days</option>
  <option value="Every 2 weeks">Every 2 weeks</option>
  <option value="Once a month">Once a month</option>
  <option value="Rarely">Rarely (every 1–2 months)</option>
</select>

</fieldset>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Last Watered Date</label>
  <input type="date" defaultValue={lastDate} name='last-watering-date' className="input w-full" placeholder="Enter Photo URL" />
  </fieldset>


  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Next Watering Date </label>
  <input type="date" defaultValue={nextDate} name='next-watering-date' className="input w-full" placeholder="Enter Photo URL" />
  </fieldset>


  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Description</label>
  <input type="text" defaultValue={description} name='description' className="input w-full" placeholder="Enter Plant Details" />
  </fieldset>
                   
                </div>
                

  <input type="submit" className='btn w-full' value="Update Plant Details" />
            </form>
            </div>
           
                      
                   </div>
        </div>
    );
};

export default UpdatePlant;