"use client";

import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      onClick={scrollTop}
      className="w-10 cursor-pointer bg-[#182934] h-10 text-white flex items-center justify-center rounded-md hover:bg-opacity-80 transition-opacity"
    >
      <MdKeyboardArrowUp size={24} />
      <span className="sr-only">Back to top</span>
    </button>
  );
};

export default ScrollToTop;
