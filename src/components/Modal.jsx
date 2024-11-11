"use client";
import { useState } from "react";

const CarouselModal = ({ slides, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-3/4 h-3/4 bg-white rounded-lg overflow-hidden shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl w-10 h-10 flex justify-center items-center text-zinc-900 hover:text-white rounded-full px-2 py-1 hover:bg-zinc-600 z-50"
        >
          X
        </button>
        <div className="relative w-full h-full">
          <div className="relative overflow-hidden h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{ zIndex: index === currentIndex ? 1 : 0 }}
              >
                <img
                  src={slide}
                  className="block w-full h-full object-cover"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              &#10094;
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              &#10095;
              <span className="sr-only">Next</span>
            </span>
          </button>

          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselModal;
