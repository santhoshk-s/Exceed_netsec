import React from "react";
import Slider from "react-slick";
import pic1 from "../images/pics/pic4.png"; // Replace with your image
import bg from "../images/pics/hol7.jpg"; // Replace with your image
import one from "../images/pics/one1.png";
import two from "../images/pics/two.png";
import mic from "../images/pics/mic.png";
import ba from "../images/pics/ba.png";
import three from "../images/pics/3.jpeg";
import four from "../images/pics/4.jpeg";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed:2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-arrow-next`}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-arrow-prev`}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
  }

  return (
    <div
      id="services"
      className="py-12 mb-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="font-qwitcher text-8xl text-rose-300 text-left px-6 md:px-12">
        Expert
      </h2>
      <h1 className="text-5xl font-bold text-left text-gray-800 mt-2 px-6 md:px-12">
        WE SPECIALIZE IN:
      </h1>
      <p className="text-lg text-left text-gray-600 mt-4 ml-10 md:px-7 max-w-3xl border-l-2 border-pink-400">
        At Exceed NetSec, we offer a range of top-notch IT solutions designed to
        meet the evolving needs of your business. Explore our services to
        discover how we can help secure your digital infrastructure.
      </p>
      <div className="mt-10 md:px-10 sm:px-1">
        <Slider {...settings}>
          <div>
            <ServiceCard title="Mail Security" link="/services/mail-security" img={one} />
          </div>
          <div>
            <ServiceCard title="Dual Firewall" link="/services/dual-firewall" img={two} />
          </div>
          <div>
            <ServiceCard
              title="MS Office Dynamics365"
              link="/services/cloud-security"
              img={mic}
            />
          </div>
          <div>
            <ServiceCard
              title="Ransomware Backups"
              link="/services/endpoint-protection"
              img={ba}
            />
          </div>
          <div>
            <ServiceCard
              title="Mail Archiving Solutions"
              link="/services/network-monitoring"
              img={three}
            />
          </div>
          <div>
            <ServiceCard
              title="Server High Availability"
              link="/services/data-encryption"
              img={four}
            />
          </div>
          {/* <div>
            <ServiceCard
              title="Disaster Recovery"
              link="/services/disaster-recovery"
            />
          </div> */}
          {/* <div>
            <ServiceCard
              title="Compliance Audits"
              link="/services/compliance-audits"
            />
          </div> */}
          {/* <div>
            <ServiceCard
              title="Compliance Audits"
              link="/services/compliance-audits"
            />
          </div> */}
          
        </Slider>
      </div>
    </div>
  );
};

// Service Card Component with Custom Styling
const ServiceCard = ({ title, link,img }) => {
  return (
    <div
      className="relative flex w-80 flex-col bg-white bg-clip-border text-gray-700 mt-10 mb-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ml-2"
      style={{
        borderRadius: "88% 6% 7% 6% / 52% 6% 7% 5%",
      }}
    >
      <img
        src={img}
        alt="imgg"
        className="relative mx-4 w-60 -mt-10 ml-10 h-52 overflow-hidden rounded-xl bg-clip-border text-white shadow-blue-gray-500/40 bg-gradient-to-r object-cover"
      />
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        {/* <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        </p> */}
      </div>
      <div className="p-6 pt-0">
        <a
          href={link}
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Services;
