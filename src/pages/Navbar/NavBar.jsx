import React, { useState, useEffect } from 'react';


// import logo from '../../images/exceedednetseclogo.png'
import logo from '../../images/EXCEED LOGO.png'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './nav.css'
const NavBar = () => {
    
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
    }
const handleClose=()=>{
    setisOpen(!true)
}

    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className="bg-white border-gray-200 py-2.5  top-0 sticky z-50">
        <div className="flex flex-wrap items-center justify-between  justify-self-stretch max-w-screen-xl px-4 mx-auto">
            <Link to="/" className="flex items-center">
                <img src={logo} className="  mr-3 sm:h-[4rem] h-[30px]" alt=" Logo"/>
                
            </Link>
            <div className="flex items-center lg:order-2">
                <div className="hidden mt-2 mr-4 sm:inline-block">
                    <span></span>
                </div>
    
                {/* <NavLink to="/loginpage" >
                   <p className="text-slate-900 text-md font-bold hover:text-white bg-[#67f529] hover:bg-[#000000] focus:ring-4 focus:ring-purple-300  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none ">Login</p></NavLink> */}
                <button 
                onClick={handleClick}
                data-collapse-toggle={isOpen?"mobile-menu-2":""} type="button"
                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="mobile-menu-2" aria-expanded={isOpen?"true":"false"}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                    </svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div  className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isOpen ? '' : 'hidden'}`} id="mobile-menu">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-center sm:text-none">
            <li>
                <NavLink
                    to="/"
                    onClick={handleClose}
                    className={({ isActive }) =>
                        `block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                            isActive ? 'text-[#67f529] underline decoration-4  underline-offset-8 d decoration-[#67f529]' : 'text-gray-700'
                        }`
                    }
                    aria-current="page"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    onClick={handleClose}
                    className={({ isActive }) =>
                        `block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                            isActive ? 'text-[#67f529] underline decoration-4  underline-offset-8 d decoration-[#67f529]' : 'text-gray-700'
                        }`
                    }
                >
                    About us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/services"
                    onClick={handleClose}
                    className={({ isActive }) =>
                        `block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                            isActive ? 'text-[#67f529] underline decoration-4  underline-offset-8 d decoration-[#67f529]' : 'text-gray-700'
                        }`
                    }
                >
                  Services
                </NavLink>
            </li>
            {/* <li>
                <NavLink
                    to="/security"
                    onClick={handleClose}
                    className={({ isActive }) =>
                        `block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                            isActive ? 'text-[#67f529] underline decoration-4  underline-offset-8 d decoration-[#67f529]' : 'text-gray-700'
                        }`
                    }
                >
                    Solutions
                </NavLink>
            </li> */}
            <li>
                <NavLink
                    to="/help"
                    onClick={handleClose}
                    className={({ isActive }) =>
                        `block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:p-0 ${
                            isActive ? 'text-[#67f529] underline decoration-4  underline-offset-8 d decoration-[#67f529]' : 'text-gray-700'
                        }`
                    }
                >
                    Contact Us
                </NavLink>
            </li>
           
        </ul>
            </div>
        </div>
    </nav>

    )
    
}


export default NavBar;
