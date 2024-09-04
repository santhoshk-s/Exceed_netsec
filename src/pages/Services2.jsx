import React from 'react';
import bg from '../images/pics/pic4.png'; // Make sure the path to your image is correct
import { FaShieldAlt, FaLock, FaUserShield, FaLaptopCode, FaNetworkWired, FaShieldVirus } from 'react-icons/fa'; // Example icons from react-icons

const servicesData = [
  {
    icon: <FaShieldAlt size={40} />,
    heading: 'Network Security',
    text: 'Protect your network from unauthorized access and cyber threats.',
  },
  {
    icon: <FaLock size={40} />,
    heading: 'Data Encryption',
    text: 'Secure your data with advanced encryption techniques.',
  },
  {
    icon: <FaUserShield size={40} />,
    heading: 'Identity Protection',
    text: 'Ensure the protection of personal and corporate identities.',
  },
  {
    icon: <FaLaptopCode size={40} />,
    heading: 'Threat Monitoring',
    text: '24/7 monitoring for potential cyber threats and vulnerabilities.',
  },
  {
    icon: <FaNetworkWired size={40} />,
    heading: 'Network Audits',
    text: 'Comprehensive audits to ensure network security compliance.',
  },
  {
    icon: <FaShieldVirus size={40} />,
    heading: 'Malware Protection',
    text: 'Advanced protection against malware, viruses, and other threats.',
  },
];

const Services2 = () => {
  return (
    <div
      id="services2"
      className="py-12 mb-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.75)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col justify-center items-center container mx-auto px-4 text-center text-white">
        <p className="text-8xl mb-4 font-qwitcher text-pink-400">Services</p>
        <h2 className="text-5xl font-bold mb-8">We Protect Your Business From Cyber Attacks</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className=" text-white p-6 rounded-xl shadow-lg flex flex-col items-center "
              style={{
                backgroundColor: '#34CC67'
              }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.heading}</h3>
              <p className="text-center mb-4">{service.text}</p>
              <button className="mt-auto bg-white text-black py-2 px-4 rounded hover:bg-blue-600">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services2;
