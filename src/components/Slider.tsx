"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";


const data = [
  {
    id: 1,
    title: "Savor the Spices of India",
    image: "/temporary/butter_chicken.jpg",
  },
  {
    id: 2,
    title: "Home Delivery Across India",
    image: "/temporary/nobles.jpeg",
  },
  {
    id: 3,
    title: "Delight Your Taste Buds with Indian Flavors",
    image: "/temporary/ingrid.jpg",
  },
];


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-5xl py-10 px-10">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;