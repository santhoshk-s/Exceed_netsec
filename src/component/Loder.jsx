import React from "react";
import "./styles/loader2.css";
const Loder = () => {
  return (
    <>
      <div className="flex gap-1">
        <div className="loader"></div>
        <h6 className="dark:text-white text-blue-500">   ...Loading</h6>
      </div>
    </>
  );
};

export default Loder;
