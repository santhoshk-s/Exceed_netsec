import React, { useRef } from "react";
import CountUp from "react-countup";
import img from "../images/Web-developer.svg";
import intro from "../images/intro.png";

const Intro = () => {
  const countUpRef = useRef(null);

  return (
    <>
      <section className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 mt-[60px]">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;">
            <div className="relative" data-aos="fade-right drop-shadow-2xl">
              <img
                className="relative w-full xl:max-w-xl xl:mx-auto rounded-lg xl:ms-6 2xl:origin-bottom 2xl:scale-110"
                style={{ borderRadius: '69% 31% 70% 30% / 43% 89% 11% 57%' }}
                src={intro}
                alt=""
              />
            </div>
            <div className="ml-7">
              <h2 className="mb-5 text-4xl text-black sm:text-[40px]/[48px] border-gray-700 font-extrabold ">
                Products and Advanced IT Technology
              </h2>

              <p
                className="max-w-lg mt-3 text-xl leading-relaxed text-black md:mt-8 text-center"
                style={{
                  fontFamily: "'Encode Sans Semi Condensed', sans-serif",
                  textAlign: 'justify',
                  fontStyle: 'Light 100',
                  fontWeight:100,
                }}
              >
                Our Team Offers you an unprecedented, personal level of service while freeing up your resources to focus on growing your 
                <span className="font-bold text-black underline  decoration-[#79df13] underline-offset-8 ml-2">Business.</span> 
                {/* Our support infrastructure is a 
                highly efficient and automated platform that speeds up issue resolution and keeps your systems 
                and people moving.*/} We take responsibility for building custom software solutions that automate your 
                 business processes and improve <span className="font-bold text-black underline decoration-[#79df13] underline-offset-8">Efficiency.</span>
              </p>

              {/* Counters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 text-center w-[89%] ">
                <div>
                  <h2 className="uppercase font-bold text-[50px] leading-snug text-[#79df13]">
                    <CountUp
                      end={150}
                      duration={20}
                      separator=" "
                      suffix=" +"
                      ref={countUpRef}
                      onEnd={() => console.log("Completed Projects Counter Ended!")}
                      onStart={() => console.log("Completed Projects Counter Started!")}
                    />
                  </h2>
                  <h3 className="uppercase font-bold text-[20px] leading-snug text-[#072ac8]">
                    Completed <br /> Projects
                  </h3>
                </div>

                <div>
                  <h2 className="uppercase font-bold text-[50px] leading-snug text-[#79df13]">
                    <CountUp
                      end={91}
                      duration={30}
                      separator=" "
                      suffix=" +"
                      ref={countUpRef}
                      onEnd={() => console.log("Happy Clients Counter Ended!")}
                      onStart={() => console.log("Happy Clients Counter Started!")}
                    />
                  </h2>
                  <h3 className="uppercase font-bold text-[20px] leading-snug text-[#072ac8]">
                    Happy <br /> Clients
                  </h3>
                </div>

                <div>
                  <h2 className="uppercase font-bold text-[50px] leading-snug text-[#79df13]">
                    <CountUp
                      end={110}
                      duration={25}
                      separator=" "
                      suffix=" +"
                      ref={countUpRef}
                      onEnd={() => console.log("Customer Service Counter Ended!")}
                      onStart={() => console.log("Customer Service Counter Started!")}
                    />
                  </h2>
                  <h3 className="uppercase font-bold text-[20px] leading-snug text-[#072ac8]">
                    Customer <br />
                    Service
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
