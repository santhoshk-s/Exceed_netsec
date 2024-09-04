import React from 'react';
import { IoClose } from 'react-icons/io5';

const ContactModal = ({ isOpen, onClose, contact }) => {
  if (!isOpen || !contact) return null;

  return (
    <div
      id="contact-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="relative p-4 w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900 text-center">Contact Details</h3>
          <button
            type="button"
            className="text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2"
            onClick={onClose}
          >
            <IoClose className="w-6 h-6" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 space-y-4">
          <p><strong>First Name:</strong> {contact.firstname}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Company:</strong> {contact.companyname}</p>
          <p><strong>Message:</strong> {contact.message}</p>
        </div>
        <div className="flex items-center justify-end p-4 border-t">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
