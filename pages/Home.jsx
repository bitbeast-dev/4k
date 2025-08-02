import React from "react";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/obj (5).jpg",
      title: "Creative Solutions",
      subtitle: "Bringing ideas to life",
    },
    {
      image: "/obj (2).jpg",
      title: "Digital Innovation",
      subtitle: "Technology meets design",
    },

    {
      image: "/obj (6).jpg",
      title: "Strategic Growth",
      subtitle: "Building tomorrow today",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative justify-center overflow-hidden md:h-full h-150"
    >
      <div
        className=" full h-150  overflow-hidden "
        aria-label="Slideshow of company event highlights"
      >
        <div className="relative w-full min-h-screen overflow-hidden">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        <div className="absolute inset-0 flex flex-col mt-88  text-white p-6 z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in">
            {slides[currentSlide].title}
          </h3>
          <p className="text-lg md:text-xl font-light opacity-90">
            {slides[currentSlide].subtitle}
          </p>
          <div className="">
            <button className="bg-[#223559] w-42 h-15 border  border-white rounded-4xl mt-5 hover:cursor-pointer flex items-center  p-7">
              Shop Now{" "}
              <span className="ml-2">
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#223559] ${
                index === currentSlide ? "bg-[#223559] w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
