import { format } from 'date-fns';
import React from 'react';
import Swal from 'sweetalert2';

const AddPlant = () => {
  const handleAdd = e =>{
    e.preventDefault();
    Swal.fire({
  title: "Add New Plant Successfully!",
  icon: "success",
  draggable: true
});
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
  <input type="text" name='name' className="input w-full" placeholder="Enter Plant Name" />

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Image</label>
  <input type="text" name='photo' className="input w-full" placeholder="Enter Plant Image" />

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Email</label>
  <input type="email" name='email' className="input w-full" placeholder="Enter Your Email" />

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Name</label>
  <input type="text" name='name' className="input w-full" placeholder="Enter Your Name" />

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                      <label className="label font-bold text-lg">Category</label>
  <select name='category' defaultValue="Enter Plant Category" className="select w-full">
  <option  disabled={true}>Enter Plant Category</option>
  <option value="succulent">Succulent</option>
  <option value="fern">Fern</option>
  <option value="flowering">Flowering</option>
  <option value="herb">Herb</option>
  <option value="cactus">Cactus</option>
  <option value="indoor">Indoor</option>
  <option value="outdoor">Outdoor</option>
  <option value="air-purifying">Air Purifying</option>
  <option value="bonsai">Bonsai</option>
  <option value="climber">Climber</option>
  <option value="foliage">Foliage</option>
  <option value="aquatic">Aquatic</option>
</select>

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Care Level</label>
 <select name='care' defaultValue="Enter Plant Care Level" className="select w-full">
  <option  disabled={true}>Enter Plant Care Level</option>
   <option value="very-easy">Very Easy (low maintenance)</option>
  <option value="easy">Easy</option>
  <option value="moderate">Moderate</option>
  <option value="challenging">Challenging</option>
  <option value="difficult">Difficult (high maintenance)</option>
  <option value="expert">Expert Only</option>
</select>

</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Health Status</label>
   <select name='watering' defaultValue="Enter Plant Health Status" className="select w-full">
  <option  disabled={true}>Enter Plant Health Status </option>
    <option value="healthy">Healthy</option>
  <option value="thriving">Thriving</option>
  <option value="new-growth">Showing New Growth</option>
  <option value="minor-issues">Minor Issues (e.g., yellow leaves)</option>
  <option value="recovering">Recovering from Stress</option>
  <option value="needs-care">Needs Attention</option>
  <option value="pest-affected">Pest-Affected</option>
  <option value="diseased">Diseased</option>
  <option value="dormant">Dormant (not actively growing)</option>
</select>
  </fieldset>


  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Watering Frequency </label>
  <select name='watering' defaultValue="Enter Plant Watering Frequency" className="select w-full">
  <option  disabled={true}>Enter Plant Watering Frequency </option>
    <option value="daily">Every day</option>
  <option value="every-2-days">Every 2 days</option>
  <option value="every-3-days">Every 3 days</option>
  <option value="twice-a-week">Twice a week</option>
  <option value="weekly">Once a week</option>
  <option value="every-10-days">Every 10 days</option>
  <option value="fortnightly">Every 2 weeks</option>
  <option value="monthly">Once a month</option>
  <option value="rarely">Rarely (every 1–2 months)</option>
</select>

</fieldset>
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Last Watered Date</label>
  <input type="date" name='last-watering-date' className="input w-full" placeholder="Enter Photo URL" />
  </fieldset>


  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Next Watering Date </label>
  <input type="date" name='next-watering-date' className="input w-full" placeholder="Enter Photo URL" />
  </fieldset>


  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Description</label>
  <input type="text" name='description' className="input w-full" placeholder="Enter Plant Details" />
  </fieldset>
                   
                </div>
                

  <input type="submit" className='btn w-full' value="Add New Plant" />
            </form>
            </div>
           
        </div>
    );
};

export default AddPlant;