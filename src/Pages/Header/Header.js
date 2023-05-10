import { useState } from "react";
import {Link} from "react-router-dom";
import { Transition } from "@headlessui/react";

//import images
import img_banner_logo from './../util/img/logo_header.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center flex">
            <a href="/">
              <img
                className="h-7 w-auto animate-bounce"
                src={img_banner_logo}
			   alt="logo image"
              />
            </a>
			
			<div className="hidden md:block">
				<div className="ml-10 flex items-baseline space-x-4">
				  <Link to="/course" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">
					Course
				  </Link>

				  <Link to="/parent" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">
					Parent
				  </Link>

				  <Link to="/school" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">
					School
				  </Link>
				  
				  <Link to="/consultant" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">
					Consultant
				  </Link>
				  
				  <Link to="/liveclass" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">
					Live class
				  </Link>
				  
				  <Link to="/store" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">
					Store
				  </Link>
          <Link to="/route" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">
					Route
				  </Link>
				  
				</div>
			</div>
			
			<div className="absolute right-0 hidden md:block ">
				<div className="ml-10 flex items-baseline space-x-4">
				 
				  <Link to="/login" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">
					Login
				  </Link>
				  
				  <Link to="/help" className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-bold">
					Help
				  </Link>

				</div>
			  </div>
		  
          </div>
          

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        {(ref) => (
          <div className="md:hidden bg-white-100" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-bold">
                Home
              </a>

              <Link to="/course" className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-bold">
                Course
              </Link>

              <a href="/parent" className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-bold">
                Parent
              </a>

			<a href="/school" className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-bold">
                School
              </a>
			  
              <a href="/consultant" className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-bold">
                Consultant
              </a>

              <a href="/Tutoring" className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-bold">
                Tutoring
              </a>
			 
			<a href="/login" className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-bold">
                Login
              </a>
			 
			<a href="/help" className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-bold">
                Hellp
              </a>
			 
			 
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
}

export default Header;

