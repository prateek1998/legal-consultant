import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'components/slider';
import Header from 'components/layout/Header';
import SubHeader from 'components/layout/SubHeader';
import heroList from 'utils/hero.json';

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

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute z-20 w-full top-0">
        <SubHeader />
        <Header isDefault={true} defaultRoute={false} />
      </div>
      <Slider navigations={false} slidesPerView={1} spaceBetween={0} effect="fade" delay={3000}>
        {heroList &&
          heroList.map((slide, index) => (
            <div
              key={index}
              className="relative max-h-screen h-[calc(100vh_-_56px)] lg:h-[calc(100vh)] w-screen"
            >
              <Image
                className="absolute z-10 w-full h-full object-cover"
                width={1920}
                height={1080}
                alt={'slide-' + index}
                src={slide.fileUrl}
                loading="lazy"
              />
              <div className="absolute z-20 w-full h-full bg-primary-1000/30 backdrop-brightness-75" />
              <div className="container absolute z-20 px-2 sm:px-7 mx-auto flex flex-wrap items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl bg-opacity-30 sm:py-6 bg-blend-saturation">
                <div className="lg:w-2/5 w-full textShadow tracking-wide">
                  <h2 className="title-font font-alike font-medium mb-3 text-4xl lg:text-5xl text-white capitalize">
                    <span className=" border-b-2 border-white"> {slide.title}</span>
                  </h2>
                  <h2 className="text-white text-5xl md:text-7xl font-bold capitalize font-alike sm:pb-1">
                    Focused on Client Based Law firm
                  </h2>
                </div>
              </div>
            </div>
          ))}
      </Slider>
      {/* <motion.div
          className="lg:w-2/5 w-full textShadow tracking-wide"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
        </motion.div> */}
      <div>
        <Link
          href="#about"
          className="bottom-5 lg:bottom-10 left-1/2 -translate-x-1/2 absolute z-10 flex flex-col items-center"
        >
          <div className="relative w-12 h-12 rounded-full border-2 bg-transparent flex items-center justify-center">
            <motion.svg
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v14m6-6l-6 6m-6-6l6 6"
              />
            </motion.svg>
          </div>
          <p className="text-white mt-2 md:text-sm lg:text-base">Scroll to Explore</p>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
