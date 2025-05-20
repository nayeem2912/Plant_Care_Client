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
  <input type="text" name='category' className="input w-full" placeholder="Enter Plant category" />

</fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Care Level</label>
  <input type="text" name='care' className="input w-full" placeholder="Enter Plant Care Level" />

</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Health Status</label>
  <input type="text" name='health' className="input w-full" placeholder="Enter Plant Health Status" />
  </fieldset>

  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label font-bold text-lg">Watering Frequency </label>
  <input type="text" name='water' className="input w-full" placeholder="Enter Watering Frequency " />
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