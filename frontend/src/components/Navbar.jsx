
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
    
  return (
    <div className='sticky top-0 z-50 flex p-5 items-center bg-[#0f172a] text-[#fff]' >
      <div className='basis-1/6 logo'>
        INNOV8X
      </div>
      <div className='flex  basis-1/6 space-x-4  '>
        <select className="  bg-[#0f172a] text-[#fff] hover:underline cursor-pointer">
    <option value="">Research</option>        
    <option value="">Overview</option>        
    <option value="">Index</option>        
        </select>
        <select className="  bg-[#0f172a] text-[#fff] hover:underline cursor-pointer">
    <option value="">Products</option>        
    <option value="">Overview</option>        
    <option value="">Index</option>        
    </select>
    <select className="  bg-[#0f172a] text-[#fff]  hover:underline cursor-pointer">
    <option value="">Developer</option>        
    <option value="">Overview</option>        
    <option value="">Index</option>        
    </select>

    <p className='hover:border-b cursor-pointer'>Safety</p>

    <select className="  bg-[#0f172a] text-[#fff] hover:underline cursor-pointer ">
    <option value="">Company</option>        
    <option value="">Overview</option>        
    <option value="">Index</option>        
    </select>
      </div>
      <div className='flex  basis-2/3 justify-end items-center space-x-4'>
        <p className='hover:border-b cursor-pointer'>Search</p>
        <div className='flex'>
        <p className='hover:border-b cursor-pointer'>Log in</p>
       <h4 className='mt-1'> <FiArrowUpRight/></h4>
        </div>
        <div className='flex border p-2 hover:bg-[#fff] hover:text-[#0f172a] cursor-pointer'>
        <p>Sign up</p> 
        <h4 className='mt-1'><FiArrowUpRight/></h4>

        </div>
      </div>
    </div>
  )
}

export default Navbar
