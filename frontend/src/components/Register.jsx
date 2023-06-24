import axios from "axios";
import React, { useState } from "react";
import { FaMicrosoft, FaApple, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regData = {
      email,
      password,
    };

    axios
      .post(`https://giddy-shirt-eel.cyclic.app/auth/signup`, regData)
      .then((res) => {
        toast({
          position: "top",
          title: `${res.data.msg}`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });
        console.log(res.data);

        console.log(res.data.msg);
      })
      .catch((err) => {
        toast({
          position: "top",
          title: `${err.response.data.error}`,
          status: "error",
          duration: 1000,
          isClosable: true,
        });
        console.log(err.response);

        setEmail("");
        setPassword("");
      });

  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Create your account
          </h1>

          <fieldset className="shadow appearance-none border border-[#10A37F] rounded w-full mb-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <legend
              className="block text-gray-700 text-sm font-semibold text-[#10A37F]"
              htmlFor="email"
            >
              Email address
            </legend>
            <input
              className="focus:outline-none"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </fieldset>
          <fieldset className="shadow appearance-none border border-[#10A37F] rounded w-full mb-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <legend
              className="block text-gray-700 text-sm font-semibold text-[#10A37F]"
              htmlFor="password"
            >
              Password
            </legend>
            <input
              className="focus:outline-none"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </fieldset>
          <div className="flex items-center justify-center">
            <button
              className="text-[#ffff] font-bold py-2 px-4 rounded bg-[#10A37F] focus:outline-none focus:shadow-outline"
              type="submit"
              // style={{ backgroundColor: '#10A37F'}}
            >
              Sign up
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account?{" "}
              <NavLink to="/signin" style={{ color: "#10A37F" }}>
                Login
              </NavLink>
            </p>
          </div>
          <div className="flex items-center justify-center text-sm text-center mt-4">
            <hr className="border-gray-300 flex-grow mx-2" />
            <p className="text-gray-500 text-sm mx-2">OR</p>
            <hr className="border-gray-300 flex-grow mx-2" />
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-center border mb-3">
              <FcGoogle className="mr-2" />
              <button className="py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                Google
              </button>
            </div>
            <div className="flex items-center justify-center border mb-3">
              <FaGithub className="mr-2" />
              <button className="py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                Github
              </button>
            </div>
            <div className="flex items-center justify-center border mb-3">
              <FaApple className="mr-2" />
              <button className="py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                Apple
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
