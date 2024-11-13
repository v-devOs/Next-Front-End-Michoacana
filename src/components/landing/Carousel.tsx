'use client';

import Image from 'next/image';
import React, { ReactNode, useState } from 'react';

interface Props {
  images: string[],
  children?: ReactNode,
}

export const Carousel = ({ images, children }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto">
      <div className="relative overflow-hidden shadow-lg w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
        {images.map((img, index) => (

          children ? (
            <div
              key={index}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className={`absolute flex items-center justify-center top-0 left-0 w-full h-full transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              {children}
            </div>
          ) : (
            <Image
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className={"object - cover w-full h-full transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}"}
            />
          )
        ))}
      </div>

      {/* Botón anterior */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-pink-500 text-white rounded-full p-2 hover:bg-pink-400 transition-colors"
      >
        ◀
      </button>

      {/* Botón siguiente */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-pink-500 text-white rounded-full p-2 hover:bg-pink-400 transition-colors"
      >
        ▶
      </button>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-pink-500' : 'bg-pink-200'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};
