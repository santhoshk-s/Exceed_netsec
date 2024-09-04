import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createServiceCard } from '../store/serviceCard/serviceCard';

function ServiceCardCreateForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [form, setForm] = useState({
    heading: '',
    description: '',
    // image: null,
    imageurl: '', // Changed to default to empty string
  });
  const { loading, error } = useSelector((state) => state.serviceCard.createServiceCard);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    
    if (name === 'imageurl') {
      setImageUrl(value); // Update imageUrl state for URL input changes
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      
      reader.readAsDataURL(file);
  
      setForm({
        ...form,
        image: file,
        imageurl: '', // Clear imageurl when a file is selected
      });
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', form.heading);
    formData.append('description', form.description);
    formData.append('imageurl', form.imageurl);

    dispatch(createServiceCard(formData));
    setForm({
      heading: '',
      description: '',
      imageurl: '', 
    });
  };

  const clearImage = () => {
    setForm({ ...form, image: null });
    setImageUrl('');
  };

  return (
    <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-xl shadow">
          <div className="relative h-[20rem] object-cover rounded-t-xl bg-[url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Uploaded"
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl"
              />
            )}
            <div className="absolute top-0 end-0 p-4">
              <button
                type="button"
                onClick={clearImage}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              >
                Delete
              </button>
            </div>
          </div>

          <div className="pt-0 p-4 sm:pt-0 sm:p-7">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="sr-only">Product photo</label>
                <div className="grid sm:flex sm:items-center sm:gap-x-5"></div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-project-name"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Service Card Title
                </label>
                <input
                  id="af-submit-app-project-name"
                  name="heading"
                  type="text"
                  value={form.heading}
                  onChange={handleInputChange}
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none -900"
                  placeholder="Service Card Title"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-image-url"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Image URL
                </label>
                <input
                  id="af-submit-app-image-url"
                  name="imageurl"
                  type="text"
                  value={form.imageurl}
                  onChange={handleInputChange}
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none -900"
                  placeholder="Image URL"
                />
              </div>

              {/* Uncomment this if you want to keep the file upload option */}
              {/* <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-upload-images"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Upload your Image
                </label>
                <label
                  htmlFor="af-submit-app-upload-images"
                  className="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                >
                  <input
                    id="af-submit-app-upload-images"
                    name="image"
                    type="file"
                    className="sr-only"
                    onChange={handleImageChange}
                  />
                  <svg
                    className="size-10 mx-auto text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                    />
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                  </svg>
                  <span className="mt-2 block text-sm text-gray-800">
                    Browse your device or{' '}
                    <span className="group-hover:text-blue-700 text-blue-600">
                      drag 'n drop
                    </span>
                  </span>
                  <span className="mt-1 block text-xs text-gray-500">
                    Maximum file size is 2 MB
                  </span>
                </label>
              </div> */}

              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-description"
                  className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                >
                  Description
                </label>
                <textarea
                  id="af-submit-app-description"
                  name="description"
                  value={form.description}
                  onChange={handleInputChange}
                  className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  rows="6"
                  placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."
                ></textarea>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-3 text-sm font-medium text-center text-white rounded-md border border-transparent bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none transition dark:focus:ring-offset-gray-800"
              >
                 Create Card
              </button>
            </div>

            {error && <p className="text-red-500 mt-3">{error}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default ServiceCardCreateForm;
