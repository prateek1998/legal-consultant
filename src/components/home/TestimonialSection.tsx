import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Slider from 'components/slider';
import testimonials from 'utils/testimonials.json';
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const TestimonialSection: React.FC = () => {
  return (
    <section className="body-font bg-gray-100 dark:bg-gray-800 px-4 mb-6 mt-6 py-5">
      <div className="text-center mb-14">
        <h1 className="font-alike mb-4 mt-10 text-3xl font-bold dark:text-white">
          <span className="border-b-4 px-4 border-blue-700">Client Testimonials</span>
        </h1>
      </div>
      <div className="lg:px-2">
        <Slider
          navigations={false}
          spaceBetween={25}
          breakpoints={{
            769: { slidesPerView: 3, centeredSlides: false },
          }}
        >
          {testimonials.map((testimonial, i) => {
            return (
              <div key={i} className="bg-white lg:mx-auto rounded shadow dark:bg-gray-700">
                <div className="relative z-10 p-8">
                  <span className="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-quote"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                    </svg>
                  </span>
                  <p className="mb-4 text-base leading-7 text-gray-400">{testimonial.msg}</p>
                  <div className="flex items-center gap-x-4">
                    <div className="info">
                      <h2 className="text-lg font-bold text-black dark:text-white">
                        {testimonial.name}
                      </h2>
                      <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
                        {testimonial.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
