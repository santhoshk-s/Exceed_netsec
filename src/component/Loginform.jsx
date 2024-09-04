import React, { useEffect, useState, useRef } from "react";
import {
  CheckIcon,
  UserIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../store/api/userApiSlice";
import { setCredentials } from "../store/features/authSlice";
import { useFormik } from "formik";

import { useSelector, useDispatch } from "react-redux";
import { adminSchema } from "./components/schemas/index";
import "./error.css";
import Logo from '../images/EXCEED LOGO.png'

function Loginform() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/Admindashboard";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  const onSubmit = async (values, action) => {
    try {
      const res = await dispatch(
        loginUser({ email: values.email, password: values.password })
      ).unwrap();
      console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      console.log(err);
    }
  };

  //HIDE AND SHOW [PASSWORD]
  const [Hide, setHide] = useState(false);
  const handleShow = () => {
    setHide(!Hide);
  };
  const { values, handleBlur, handleChange, errors, handleSubmit, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: adminSchema,
      onSubmit,
    });
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const container = useRef(null);

 

  return (
    <>
      <section className="bg-gray-50  w-full h-full overflow-hidden">
        
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  relative top-5 md:top-0 md:bottom-14 ">
            <div className="p-4 space-y-4 md:space-y-6 sm:p-8">
            <img 
              src={Logo}
              className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center"/>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Email
                  </label>
                  <div className="inline-block justify-end relative top-8 float-right right-3">
                    <UserIcon className="w-5 h-5 text-green-500  " />
                  </div>

                  <input
                    type="text"
                    name="email"
                    className={
                      errors.email && touched.email
                      ? "input-error px-4 py-2 block bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-[#67f529] focus:border-[#67f529] border-2 w-full border-gray-300  focus:outline-none "
                        : "px-4 py-2 block bg-gray-50  sm:text-sm rounded-lg focus:ring-[#67f529] focus:border-[#67f529] border-2 w-full border-gray-300  focus:outline-none "
                    }
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    autoComplete="off"
                  />
                  {errors.email && touched.email && (
                    <span className="text-red-500 py-1 pb-1">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Password
                  </label>
                  <div className="inline-block justify-end relative top-8 float-right right-3">
                    {Hide ? (
                      <EyeIcon
                        className="w-5 h-5  text-red-500 hover:pulse-ping"
                        onClick={handleShow}
                      />
                    ) : (
                      <EyeSlashIcon
                        className="w-5 h-5 text-green-500"
                        onClick={handleShow}
                      />
                    )}
                  </div>

                  <input
                    type={Hide ? "text" : "password"}
                    name="password"
                    className={
                      errors.password && touched.password
                        ? "input-error px-4 py-2 block bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-[#67f529] focus:border-[#67f529] border-2 w-full border-gray-300  focus:outline-none "
                        : "px-4 py-2 block bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-[#67f529] focus:border-[#67f529] border-2 w-full border-gray-300  focus:outline-none "
                    }
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    autoComplete="off"
                  />
                  {errors.password && touched.password && (
                    <span className="text-red-500 py-1 pb-1">
                      {errors.password}
                    </span>
                  )}
                </div>
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 "
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="/h"
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div> */}

                <button
                  type="submit"
                  className="w-full relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#67f529] rounded-full shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#67f529] group-hover:translate-x-0 ease">
                    <CheckIcon className="w-8 h-8" />
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-[#000000] transition-all duration-300 transform group-hover:translate-x-full ease">
                    Login
                  </span>
                  <span className="relative invisible">Login</span>
                </button>
                {/* <p className="text-sm font-light text-[#000000] ">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="text-lg  text-indigo-500  underline-offset-2 underline font-medium text-primary-600 hover:underline "
                  >
                    Sign up
                  </Link>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Loginform;
