import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"



const Footer = ()=>{
    return (
        <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="#" className="text-white font-semibold text-lg">
                innov8X
              </a>
              <div className="ml-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
                <a href="#" className="text-gray-400 hover:text-white ml-4">
                  Blog
                </a>
                <a href="#" className="text-gray-400 hover:text-white ml-4">
                  Careers
                </a>
                <a href="#" className="text-gray-400 hover:text-white ml-4">
                  Charter
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <hr className="my-8 border-gray-700" />
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} innov8X. All rights reserved.
          </p>
        </div>
      </footer>
    )
}

export default Footer