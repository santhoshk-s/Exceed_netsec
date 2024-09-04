import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBannerContent } from "../store/banner/bannerSlice";

const Cta = () => {
  const dispatch = useDispatch();

  const { banner } = useSelector((state) => state.banner.getBanner);
  // get banner content
  useEffect(() => {
    dispatch(getBannerContent());
  }, [dispatch, banner]);

  return (
    <>
      <div
        className="w-full flex items-center justify-center text-white cta"
        id="testiminols"
      >
        <div className="mx-8 w-full h-[25rem] text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">
          <div className="w-full flex flex-col lg:flex-row lg:justify-around">
            {/* <div className="mb-4">
                        <p className='text-2xl md:text-4xl font-bold mb-4'>Are you ready to scale your business?</p>
                        <p className="text-lg md:text-2xl">Get in touch and let us build something amazing <span className='font-black'>together!</span></p>
                    </div> */}
            <div className="mb-4">
              <p className="text-2xl md:text-4xl font-bold mb-4">
                {banner && banner[0]?.title
                  ? banner[0].title
                  : "Are you ready to scale your business?"}
              </p>
              <p className="text-lg md:text-2xl">
                {banner && banner.subtitle
                  ? banner.subtitle
                  : "Get in touch and let us build something amazing together!"}
              </p>
            </div>

            <div className="w-full lg:w-72 pt-6 lg:mx-12">
              <Link
                to="/contact"
                className="bg-transparent border hover:bg-[#67f529] hover:border-white text-white hover:text-slate-900 text-bold justify-center text-center rounded-lg px-10 py-3 flex items-center group"
              >
                Send a message
                <svg
                  className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="relative mx-auto my-10 flex max-w-md flex-col justify-between  px-10 lg:max-w-screen-lg lg:flex-row shadow-orange-50 mb-10">
        <div class="bg-slate-100 absolute left-0 h-full w-full lg:w-5/6 rounded-md border border-blue-200"></div>
        <div class="relative py-10 ">
          <span class="rounded-full bg-blue-200 px-2 py-1 text-xs text-blue-500">
            NEW
          </span>
          <h2 class="text-slate-900 text-3xl font-bold lg:text-5xl">
            Purpose-Build for Businesses{" "}
          </h2>
          <p class="text-slate-700 mt-4 max-w-lg">
            Exceeeded Netsec is Different . We designed our products from the
            ground up to be automated , lightweight , and easy to use , so you
            don't have to dedicate tons of resources to cybersecurity alone.{" "}
            <span className="font-extrabold">
              That's part of how Exceeded Netsec helps business grow and thrive.
            </span>
          </p>
        </div>
        <div class="relative h-72 lg:w-72">
          <div class="bg-slate-50 shadow-slate-200 absolute h-56 w-56 translate-x-6 translate-y-6 rounded-2xl shadow-lg backdrop-blur-lg lg:h-60 lg:w-60"></div>
          <div class="shadow-slate-200 absolute flex h-56 w-56 translate-x-3 translate-y-3 flex-col items-center justify-center rounded-2xl bg-white shadow backdrop-blur-lg lg:h-60 lg:w-60">
            <div class="flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 border-dashed">
              <p class="text-center text-5xl font-bold text-[#79df13] lg:text-6xl">
                30+
              </p>
              <span class="text-center text-xs uppercase leading-4 text-blue-500">
                Superior <br />
                Solutions
              </span>
            </div>
          </div>
        </div>
      </div>

      <section class="relative overflow-hidden bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div class="absolute h-72 w-72 scale-125 -right-8 -bottom-10">
          <div class="absolute h-60 w-60 rounded-2xl border-4 border-blue-600"></div>
          <div class="absolute h-60 w-60 translate-x-3 translate-y-3 rounded-2xl border-4 border-blue-600"></div>
          <div class="absolute h-60 w-60 translate-x-6 translate-y-6 rounded-2xl border-4 border-blue-600"></div>
        </div>

        <div class="mx-auto px-4 sm:px-6 lg:px-8">
          <div class="sm:text-center">
            <h2 class="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl xl:text-5xl">
              Key Benefits <br class="sm:hidden" />
              of Secure Networking
            </h2>
            <hr class="mt-4 h-1.5 w-32 border-none bg-blue-600 sm:mx-auto sm:mt-8" />
          </div>

          <div class="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
            <div class="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
              <p class="relative text-5xl font-black text-[#79df13]">2x</p>
              <p class="relative mt-5 text-gray-600">
                Increase in productivity of security and network teams{" "}
              </p>
            </div>

            <div class="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
              <p class="relative text-5xl font-black text-[#79df13]">218%</p>
              <p class="relative mt-5 text-gray-600">
                Return on investment <br /> Prevention on security infratructure
              </p>
            </div>

            <div class="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
              <p class="relative m-0 text-5xl font-black text-[#79df13]">63+</p>
              <p class="relative mt-5 text-gray-600">
                Empowering Success for Over 63+ Thriving Clients Worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
