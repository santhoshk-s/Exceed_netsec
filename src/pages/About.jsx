import React, { useEffect } from "react";
import itservice from "../images/it & services.jpeg";
import cater from "../images/cater.png";
import Missions from "./OurMissions";
function About() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Missions />
      <div className="relative overflow-hidden  pt-16 pb-32 space-y-24 bg-white">
        <div className="relative " data-aos="fade-up">
          <h2 className="text-center mb-5 text-5xl  text-dark  sm:text-[40px]/[48px] md:text-center block font-extrabold  underline  decoration-[#79df13] underline-offset-8">
            OUR EXPERTISE
          </h2>
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 bg-gray-100 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0  ">

              <div>
                <div className="mt-6  bg-white/30">
                  <h2 className="text-3xl font-bold tracking-tight text-dark">
                    Exceed NetSec cater
                  </h2>
                  <p className="mt-4 text-lg  text-justify">
                  Exceed NetSec’s IT Professional services offer an unparalleled level of personal service, allowing you to focus on growing your business. Our support infrastructure is a highly efficient and automated platform that accelerates issue resolution and keeps both your systems and your team running smoothly.
                 </p>
                  {/* <div className="mt-6">


                <div >
                

                    <div className="mt-6  bg-white/30">
                        <h2 className="text-3xl font-bold tracking-tight text-dark">
                        Exceed NetSec cater 
                        </h2>
                        <p className="mt-4 text-lg ">
                        Exceed NetSec caters to all information technology needs, project management, and consulting for various industries and businesses in healthcare, construction, manufacturing, hospitality, banking, automobiles, etc. By using our consulting and optimization services for your information technology requirements, you free up internal resources, lower your operating costs, and raise your operating efficiency.
                        </p>
                        {/* <div className="mt-6">

                            <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a>
                        </div> */}
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl  shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src={cater}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative" data-aos="fade-up">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 bg-gray-100">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">

              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-dark">
                    Exceed NetSec IT Professional Services
                  </h2>
                  <p className="mt-4 text-lg text-dark text-justify">
                  Exceed NetSec IT Professional services offer you an unprecedented, personal level of service while freeing your resources to focus on growing your business. Our support infrastructure is a highly efficient and automated platform that speeds up issue resolution and keeps your systems and your people moving.
                  </p>
                  {/* <div className="mt-6">

                <div>
                   
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-dark">
                        Exceed NetSec IT professional Services
                        </h2>
                        <p className="mt-4 text-lg text-dark">
                        Exceed NetSec IT professional services offer you an unprecedented, personal level of service while freeing your resources to focus on growing your business. Our support infrastructure is a highly efficient and automated platform that speeds issue resolution and keeps your systems and your people moving.
                        </p>
                        {/* <div className="mt-6">

                            <a className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/login">
                                Learn More
                            </a>
                        </div> */}
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  alt="Inbox user interface"
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  style={{ color: "transparent" }}
                  src={itservice}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
