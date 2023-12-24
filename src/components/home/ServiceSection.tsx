import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

const services = [
  {
    id: 1,
    data: 'CRIMINAL LAW',
    logo: 'build.svg',
  },
  {
    id: 2,
    data: 'CIVIL LAW',
    logo: 'group.svg',
  },
  {
    id: 3,
    data: 'TRADEMARK & COPYRIGHT',
    logo: 'order.svg',
  },
  {
    id: 4,
    data: 'CORPORATE & COMPANY LAWS ',
    logo: 'build.svg',
  },
  {
    id: 5,
    data: 'ARBITRATION',
    logo: 'legal.svg',
  },
  {
    id: 6,
    data: 'MATRIMONIAL DISPUTES',
    logo: 'build.svg',
  },
  {
    id: 7,
    data: 'PMLA',
    logo: 'police.svg',
  },
  {
    id: 8,
    data: 'NI ACT',
    logo: 'order-paper.svg',
  },
  {
    id: 9,
    data: 'EOW',
    logo: 'jail.svg',
  },
];

const ServiceSection = () => {
  return (
    <section
      id="practice-areas"
      className="flex items-center justify-center bg-white  dark:bg-gray-800"
    >
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <h1 className="font-alike md:w-2/5 mb-8 text-4xl font-bold leading-relaxed text-left dark:text-white">
          We make your life easier by solving legal problems like
        </h1>
        <div className="grid pt-4 grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full border-2 border-blue-200 p-4 text-center transition-all bg-primary-700 rounded-lg hover:bg-primary-600 hover:shadow-lg"
            >
              <p className="text-left text-white -400 pb-4"> 0{service.id}</p>
              <img className="mx-auto mb-3" src={`assets/logos/${service.logo}`} />
              <h3 className="mb-4 text-2xl capitalize font-semibold text-white">{service.data}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
