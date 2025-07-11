import React, { use, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { AuthContext } from '../Provider/AuthContext';
import toast from 'daisyui/components/toast';
import Swal from 'sweetalert2';
import Logo from './Logo';


const Navbar = () => {
  const {user, logOut} = use(AuthContext)
   const [isDark, setIsDark] = useState(
    localStorage.getItem("isDark") === "true"
  );
   useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);
  const handleChange = () => {
    setIsDark(!isDark);
  };

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
        <div className='bg-base-100  z-50 sticky top-0 shadow-sm' >
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
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/dashboard' >DashBoard</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/blog' >Blogs</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/contact' >Contact Us</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/about' >About Us</NavLink>
            </li>
      </ul>
    </div>
    
      <a data-tooltip-id="my-tooltip-2" className=" "><Logo></Logo> </a>
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
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/dashboard' >DashBoard</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/blog' >Blogs</NavLink>
            </li>

             <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/contact' >Contact</NavLink>
            </li>
             <li>
                <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/about' >About Us</NavLink>
            </li>
    </ul>
  </div>
  <div className="navbar-end space-x-3">

    <label   className="swap swap-rotate">

  <input type="checkbox" onChange={handleChange}
          checked={isDark} className="theme-controller" value="dark" />

 
  <svg
    className="swap-off h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  
  <svg
    className="swap-on h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>

  {
    user ? (<div  className="dropdown dropdown-end">
      <div data-tooltip-id="my-tooltip-6" tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt={user.photoURL}
            src={user.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
         <p className='font-medium'>{user.displayName}</p>
                 <p className='font-medium'>{user.email}</p>
        </li>
       
        <li><a onClick={handleLogOut} className='font-bold text-red-500'>Logout</a></li>
      </ul>
      <ReactTooltip
                        id="my-tooltip-6"
                        place="bottom"
                        variant="info"
                        content={user.displayName}
                      />
    </div>) : (<div>  

          <NavLink to='/login'> <button data-tooltip-id="my-tooltip-3" className="btn btn-xs sm:btn-sm md:btn-md  bg-[#0EA106] text-white">Login</button> </NavLink>
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