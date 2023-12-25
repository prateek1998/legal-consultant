import React from 'react';
import services from 'utils/services.json';
import AnimateInView from 'components/animateInView';

const ServiceSection = () => {
  return (
    <section
      id="practice-areas"
      className="flex items-center justify-center bg-white  dark:bg-gray-800"
    >
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <h1 className="font-alike md:w-2/5 mb-8 text-4xl font-bold leading-relaxed text-left text-gray-700 md:text-5xl dark:text-gray-300">
          <span className="border-b-4 px-2 border-blue-700 ">Our Practice Areas</span>
        </h1>
        <div className="grid pt-4 grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimateInView
              variants={{
                hidden: { opacity: 0 },
                show: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.15,
                    duration: 0.9,
                    ease: 'easeInOut',
                  },
                },
              }}
              initial="hidden"
              key={index}
              className="w-full border-2 border-blue-200 p-4 text-center transition-all bg-primary-700 rounded-lg hover:bg-primary-600 hover:shadow-lg"
            >
              <p className="text-left text-white -400 pb-4"> 0{service.id}</p>
              <img className="mx-auto mb-3" src={`assets/logos/${service.logo}`} />
              <h3 className="mb-4 text-2xl capitalize font-semibold text-white">{service.data}</h3>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
