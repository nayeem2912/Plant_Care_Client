import React, { use } from 'react';
import { NavLink } from 'react-router';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { AuthContext } from '../Provider/AuthContext';
import toast from 'daisyui/components/toast';
import Swal from 'sweetalert2';


const Navbar = () => {
  const {user, logOut} = use(AuthContext)

  const handleLogOut = () => {
    
       logOut()
       .then(()=>{
           Swal.fire({
  title: "Logout successful!",
  icon: "success",
  draggable: true
});
       })
       .catch(error =>{
         toast(error)
       })
  }
    return (
        <div className='bg-base-100 shadow-sm' >
           <div className="navbar  w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="mr-2 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/' >Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/allPlant' >All Plants</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/addPlant' >Add Plant </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/myPlant' >My Plants</NavLink>
            </li>
      </ul>
    </div>
    
      <a data-tooltip-id="my-tooltip-2" className=" font-bold text-3xl">Plant <span className='text-[#0EA106]'>Care</span> </a>
      <ReactTooltip
        id="my-tooltip-2"
        place="bottom"
        variant="info"
        content="Thank you for visiting our website!"
      />
   
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/' >Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/allPlant' >All Plants</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/addPlant' >Add Plant </NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/myPlant' >My Plants</NavLink>
            </li>
    </ul>
  </div>
  <div className="navbar-end">

  {
    user ? (<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
       
        <li><a onClick={handleLogOut} className='font-bold text-red-500'>Logout</a></li>
      </ul>
    </div>) : (<div> <NavLink to='/register'> <button data-tooltip-id="my-tooltip-1" className="btn bg-[#0EA106] text-white">Register</button></NavLink>
    <ReactTooltip
                        id="my-tooltip-1"
                        place="bottom"
                        variant="info"
                        content="Register Now"
                      /> 

          <NavLink to='/login'> <button data-tooltip-id="my-tooltip-3" className="btn bg-[#0EA106] text-white">Login</button> </NavLink>
          <ReactTooltip
                        id="my-tooltip-3"
                        place="bottom"
                        variant="info"
                        content="Login Now"
                      />  </div>)
}
   
  </div>
</div>
        </div>
    );
};

export default Navbar;