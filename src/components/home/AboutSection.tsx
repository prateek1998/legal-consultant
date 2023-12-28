import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimateInView from 'components/animateInView';
import Counter from 'components/counter';

const AboutSection = () => {
  return (
    <section id="about" className="lg:mt-10 font-poppins dark:bg-gray-800">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="lg:max-w-md flex flex-col">
              <AnimateInView
                className="px-4 pl-4 mb-6 border-l-4 border-blue-500"
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 0,
                      duration: 0.9,
                    },
                  },
                }}
                initial="hidden"
              >
                <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                  Who we are?
                </span>
                <h1 className="font-alike mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                  About Us
                </h1>
              </AnimateInView>
              <AnimateInView
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 0,
                      duration: 0.9,
                      ease: 'easeInOut',
                    },
                  },
                }}
                initial="hidden"
              >
                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  Sethi & Associates Legal Consultants understands how confused you may be feeling,
                  and We are here to protect your rights and to fight in your corner. You don’t have
                  to suffer in silence if the law is on your side.Sethi & Associates Legal
                  Consultant will provide you with an initial consultation to see if and how We can
                  serve your interests. Legal cases can be complicated and intimidating. We will
                  guide you through every step of your case, keeping you right up to date, making
                  sure you understand exactly what is going on, and advising you on every decision
                  that needs to be made. Sethi & Associates Legal Consultant keeps you involved and
                  at the very center of Our attention. We are here to serve you and are proud to
                  have been protecting the rights of the people since 35 years now.
                </p>
                <Link
                  href={'/about-us'}
                  className="w-40 mx-auto text-center bg-primary-700  hover:bg-blue-600 text-white font-bold py-3 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                >
                  Know More
                </Link>
              </AnimateInView>
            </div>
          </div>
          <AnimateInView
            variants={{
              hidden: { opacity: 0 },
              show: {
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0,
                  duration: 0.9,
                },
              },
            }}
            initial="hidden"
            className="w-full mb-10 lg:w-1/2 lg:mb-0 "
          >
            <Image
              src="/assets/images/aboutpic.jpg"
              alt=""
              width={850}
              height={550}
              className="relative object-cover h-full rounded"
            />
          </AnimateInView>
        </div>
      </div>
      <div className="relative py-10 bg-center bg-no-repeat bg-cover bg-blue-900">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60 "></div>
        <div className="relative z-10 justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0">
          <div className="flex items-center justify-evenly py-4 -mx-3">
            <div className="w-full px-4 lg:mb-0 md:w-1/4 lg:w-2/12">
              <h2 className="pb-2 text-5xl font-bold text-white">
                <Counter end={98} /> {' %'}
              </h2>
              <div className="w-16 mb-4 border-b-2 border-gray-300 "></div>
              <p className="text-base font-normal  leading-4 text-gray-300 lg:w-64">
                Clients Satisfaction
              </p>
            </div>
            <div className="w-full px-4 lg:mb-0 md:w-1/4 lg:w-2/12">
              <h2 className="pb-2 text-5xl font-bold text-white">
                <Counter end={35} /> {' +'}
              </h2>
              <div className="w-16 mb-4 border-b-2 border-gray-300 "></div>
              <p className="text-base font-normal leading-4 text-gray-300 lg:w-64">
                Years Practice
              </p>
            </div>
            {/* <div className="w-full px-4 lg:mb-0 md:w-1/4 lg:w-2/12">
              <h2 className="pb-2 text-5xl font-bold text-white">20+ </h2>
              <div className="w-16 mb-4 border-b-2 border-gray-300 "></div>
              <p className="text-base font-normal leading-4 text-gray-300 lg:w-64">
                Different Industries
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
