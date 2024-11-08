"use client";
import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed flex bottom-3 right-3 rounded-full hover:bg-zinc-200 transition duration-300 max-md:font-bold space-x-2 max-md:aspect-square shadow-black group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="650"
          height="650"
          fill="none"
          viewBox="0 0 650 650"
          className="w-8 h-8 md:w-12 md:h-12 lg:w-10 lg:h-10"
        >
          <g clipPath="url(#clip0_0_1)">
            <circle cx="325" cy="325" r="325" fill="#000"></circle>
            <circle
              cx="325"
              cy="325"
              r="300"
              className="fill-white transition-all ease-in-out duration-300 group-hover:fill-zinc-200"
            ></circle>
            <path
              fill="#000"
              stroke="#000"
              d="M184.5 422 155 397.5 325.5 229l170 168.5-25 24.5-145-139z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_0_1">
              <path fill="#fff" d="M0 0h650v650H0z"></path>
            </clipPath>
          </defs>
        </svg>
      </button>
    )
  );
}

export default ScrollToTopButton;
