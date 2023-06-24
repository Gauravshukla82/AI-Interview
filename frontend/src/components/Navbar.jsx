
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const toast = useToast();
  const token = Cookies.get("token");
  // Check if the user is logged in based on the presence of the token
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("token"));
  
  
  const handleLogout = () => {
    const tokenObj = { token };
  
    axios
      .post(`https://giddy-shirt-eel.cyclic.app/auth/logout`, tokenObj)
      .then((res) => {
        toast({
          position: "top",
          title: `${res.data.msg}`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });
  
        // Remove token from cookies
        Cookies.remove("token");
  
        // Update the isLoggedIn state to false
        setIsLoggedIn(false);
  
        console.log("token", res.data.token);
        console.log(res.data);
      })
      .catch((err) => {
        toast({
          position: "top",
          title: `${err.response.data.msg}`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
        console.log(err.response.data.msg);
      });
  };
  
  
  return (
<div className="sticky top-0 z-50 flex p-5 items-center bg-[#080629] text-white">
      <div className="basis-1/6 logo">INNOV8X</div>
      <div className="flex basis-1/6 space-x-4">
        <select className="bg-[#080629] text-white hover:underline cursor-pointer">
          <option value="">Research</option>
          <option value="">Overview</option>
          <option value="">Index</option>
        </select>
        <select className="bg-[#080629] text-white hover:underline cursor-pointer">
          <option value="">Products</option>
          <option value="">Overview</option>
          <option value="">Index</option>
        </select>
        <select className="bg-[#080629] text-white hover:underline cursor-pointer">
          <option value="">Developer</option>
          <option value="">Overview</option>
          <option value="">Index</option>
        </select>

        <p className="hover:border-b cursor-pointer">Safety</p>

        <select className="bg-[#080629] text-white hover:underline cursor-pointer">
          <option value="">Company</option>
          <option value="">Overview</option>
          <option value="">Index</option>
        </select>
      </div>
      <div className="flex basis-2/3 justify-end items-center space-x-4">
        <p className="hover:border-b cursor-pointer">Search</p>
        <div className="flex">
          {/* Check if user is logged in */}
          {isLoggedIn ? (
            <div className="flex items-center justify-center">
              <p onClick={handleLogout} className="cursor-pointer mr-4">
                Logout
              </p>
              {/* <div className="flex p-2 hover:bg-white hover:text-stone-950 cursor-pointer"> */}
                <p>Profile</p>
                {/* <p className="mt-1">
                  <FiArrowUpRight />
                </p>
              </div> */}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <p className="cursor-pointer mr-4"><NavLink to="/signin">Login</NavLink></p>
              <div className="flex p-2 hover:bg-white hover:text-stone-950 cursor-pointer">
                <p><NavLink to="/signup">Sign up</NavLink></p>
                <p className="mt-1">
                  <FiArrowUpRight />
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
