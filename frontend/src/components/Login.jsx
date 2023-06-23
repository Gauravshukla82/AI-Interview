import React, { useState } from 'react'
import { FaApple, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white px-8 pt-6 pb-8 mb-4">
      <h1 className='text-2xl font-bold mb-6 text-center'>Welcome back</h1>

          <fieldset className="shadow appearance-none border rounded w-full mb-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <legend className="block text-gray-700 text-sm font-semibold" style={{ color: '#10A37F' }} htmlFor="email">
              Email address
            </legend>
            <input
              className="focus:outline-none"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </fieldset>
          <fieldset className="shadow appearance-none border rounded w-full mb-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <legend className="block text-gray-700 text-sm font-semibold" style={{ color: '#10A37F' }} htmlFor="password">
              Password
            </legend>
            <input
              className="focus:outline-none"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </fieldset>
          <div className="flex items-center justify-center">
            <button
              className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              style={{ backgroundColor: '#10A37F' }}
            >
              Login
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm">
              Don't have an account?{' '}
              <a
                className=""
                href="#signup"
                style={{ color: '#10A37F' }}
              >
                Sign up
              </a>
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
  )
}

export default Login