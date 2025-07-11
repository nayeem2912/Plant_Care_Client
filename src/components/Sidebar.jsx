import { use, useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { IoHomeOutline } from "react-icons/io5";

import { Link,  NavLink } from 'react-router'
import { AuthContext } from '../Provider/AuthContext'
import Logo from './Logo'
const Sidebar = () => {
  const { logOut } = use(AuthContext)
  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 '>
            <Link to='/'>
             <Logo></Logo>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full  md:flex  shadow-lg rounded-lg justify-center items-center  mx-auto'>
              <Link to='/'>
                <Logo></Logo>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
                 
            
            <button
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          ><NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/dashboard/allPlant' >All PLant </NavLink>
            
          </button>
            <button
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          ><NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/dashboard/addPlant' >Add Plant </NavLink>
            
          </button>

            <button
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
         <NavLink className={({isActive}) =>(isActive? 'text-[#0EA106] font-semibold text-xl underline':'text-xl')} to='/dashboard/myPlant' >My Plants</NavLink>
            
          </button>
              
              
            </nav>
          </div>
        </div>

        <div>
          <hr />
        <Link to='/'>
          <button
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <IoHomeOutline className='w-5 h-5' />

            <span className='mx-4 font-medium'>Home</span>
          </button>
          </Link>
          <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
