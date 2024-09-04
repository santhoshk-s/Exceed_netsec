import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch,useSelector } from 'react-redux';
import { sendSalesMessage, resetSalesState } from '../store/sales/salesSlice';
import bg from '../images/contactus.jpg'
import bg2 from '../images/contactus2.jpg'

const Sales = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [firstname, setFirstName] = useState("");;
  const [email, setEmail] = useState("");
  const [companyname, setcompanyname] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [captchaValue, setCaptchaValue] = useState(null);


  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  useEffect(() => {
    if (success) { 
      clearInput();
      dispatch(resetSalesState());
    }

    if (error) {
      Notiflix.Report.failure("Error", error.message || "Something went wrong.", "Okay");
    }
  }, [success, error, dispatch]);
  const clearErrors = () => {
    setErrors([]);
  };

  const clearInput = () => {
    setFirstName('');
    setcompanyname('');
    setEmail('');
    setPhone('');
    setMessage('');
    setCaptchaValue(null);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue || !firstname || !email || !message || !phone) {
      Notiflix.Report.failure("Fill the all field", "Please complete the CAPTCHA", "Okay");
      return;
    }

    dispatch(sendSalesMessage({
      firstname,
      email,
      phone,
      message,
      companyname,
      captcha: captchaValue,
    }));
    clearInput()
  };

  return (
    <>
      <div id='contact' className="flex justify-center items-center h-screen w-full  bg-no-repeat"  style={{ backgroundImage: `url(${bg2})` }}>
        <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
          <form onSubmit={handleSubmit}>
            <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
              <h1 className="font-bold text-center lg:text-left text-blue-400 uppercase text-4xl">
               Sales Enquiry
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <div>
                  <input
                    name="first_name"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Your Name*"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.firstname}</p>
                  )}
                </div>


                <div>
                  <input
                    name="email"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    name="conpanyname"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    value={companyname}
                    placeholder="CompanyName"
                    onChange={(e) => setcompanyname(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    name="phone_number"
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number"
                    placeholder="Phone*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={clearErrors}
                  />
                  {errors && (
                    <p className="text-red-500 text-sm">
                      {errors.phone_number}
                    </p>
                  )}
                </div>

               
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={clearErrors}
                ></textarea>
                {errors && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="my-4">
                <ReCAPTCHA
                  sitekey="6Lc3XBAqAAAAADy6xbXt9Qa-RjFyrB6VtZYkXj6z"
                  onChange={handleCaptchaChange}
                />
              </div>
              <div className="my-2 w-1/2 lg:w-2/4">
              <button
                  type="submit"
                  id="submitBtn"
                  className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </div>
          </form>
          <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-400 rounded-2xl hidden md:block">
            <div className="flex flex-col text-white">
              <div className="flex my-4 w-2/3 lg:w-3/4">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Office Address</h2>
                  <p className="text-gray-100">Dubai, UAE</p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>

                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-100">Tel: +971 4 294 5438</p>
                  <p className="text-gray-100">Mob: +971 555 696 711</p>

                  <div className='mt-5'>
                    <h2 className="text-2xl">Send an E-mail</h2>
                    <a href='mailto:info@exceednetsec.com' className="text-gray-100">info@exceednetsec.com</a>
                    <a href='mailto:info@exceedme.com' className="text-gray-100"> info@exceedme.com</a>
                  </div>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'>
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/exceed-netsec-computer-llc/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'>
                    <circle cx="4.983" cy="5.009" r="2.188"></circle>
                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sales;
