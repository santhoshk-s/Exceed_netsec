import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaGithub } from "react-icons/fa6";
import { notification } from "antd";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { CgProfile } from "react-icons/cg";
import { MdCreateNewFolder } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { SiSpringsecurity } from "react-icons/si";
import { PiUserListBold } from "react-icons/pi";
import { RiMapPinUserFill } from "react-icons/ri";
import Logo from "../images/EXCEED LOGO.png";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;
  const { userInfo } = useSelector((state) => state.auth);
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <div className="avatar">
            <div className=" ring ring-primary ring-offset-base-100 bg-white rounded-md ring-offset-2 cursor-pointer">
              <img src={Logo} className="text-center" />
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>
            <ul className="mt-3">
             

           
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("messages") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/Admindashboard"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("messages")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                  onClick={(e) => {
                    if (!userInfo.isAdmin) {
                      e.preventDefault();
                      notification.error({
                        message: "Access Denied",
                        description:
                          "You do not have permission to access this page.",
                      });
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                     
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 w-full rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                       Home
                      </span>
                    </div>
                    {/* Badge */}
                   
                  </div>
                </NavLink>
              </li>
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("messages") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="service-cards"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("service-cards")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                  onClick={(e) => {
                    if (!userInfo.isAdmin) {
                      e.preventDefault();
                      notification.error({
                        message: "Access Denied",
                        description:
                          "You do not have permission to access this page.",
                      });
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                     
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 w-full rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Page Management
                      </span>
                    </div>
                   
                  </div>
                </NavLink>
              </li>
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("messages") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="contactus"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("contactus")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                  onClick={(e) => {
                    if (!userInfo.isAdmin) {
                      e.preventDefault();
                      notification.error({
                        message: "Access Denied",
                        description:
                          "You do not have permission to access this page.",
                      });
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                     
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 w-full rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                 Contact Enquiry Data
                      </span>
                    </div>
                   
                  </div>
                </NavLink>
              </li>
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("messages") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="sales"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("contactus")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                  onClick={(e) => {
                    if (!userInfo.isAdmin) {
                      e.preventDefault();
                      notification.error({
                        message: "Access Denied",
                        description:
                          "You do not have permission to access this page.",
                      });
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                     
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 w-full rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                 Sales Enquiry Data
                      </span>
                    </div>
                   
                  </div>
                </NavLink>
              </li>
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("messages") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="help"
                  className={`block text-slate-200 truncate transition duration-150 ${
                    pathname.includes("contactus")
                      ? "hover:text-slate-200"
                      : "hover:text-white"
                  }`}
                  onClick={(e) => {
                    if (!userInfo.isAdmin) {
                      e.preventDefault();
                      notification.error({
                        message: "Access Denied",
                        description:
                          "You do not have permission to access this page.",
                      });
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                     
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 w-full rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Help Enquiry Data
                      </span>
                    </div>
                   
                  </div>
                </NavLink>
              </li>
             
     
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
