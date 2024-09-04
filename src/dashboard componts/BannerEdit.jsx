import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bannerEditMessages, getBannerContent } from "../store/banner/bannerSlice";

function BannerEdit() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    imageUrl: "",
  });

  //! get banner content
  useEffect(() => {
    dispatch(getBannerContent());
  }, [dispatch]);

  const { banner, error } = useSelector((state) => state.banner.getBanner);

  useEffect(() => {
    if (banner.length > 0) {
      setForm({
        title: banner[0].title,
        subtitle: banner[0].subtitle,
        imageUrl: banner[0].image,
      });
    }
  }, [banner]);

  //! upload banner content
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bannerEditMessages(form));
    console.log(form);
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto text-center mt-16 pb-2">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 border-t-4 border-b-4 border-purple-600 py-4">
          Banner Edit
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="ml-auo space-y-4">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={form.title}
          onChange={handleInputChange}
          className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
        />
        <textarea
          placeholder="Subtitle"
          rows="6"
          name="subtitle"
          value={form.subtitle}
          onChange={handleInputChange}
          className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
        ></textarea>
        <input
          type="text"
          placeholder="Image URL"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleInputChange}
          className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
        />
        <button
          type="submit"
          className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default BannerEdit;
