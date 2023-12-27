import React from 'react';
import Slider from 'components/slider';
import researchWorks from 'utils/research.json';
import Link from 'next/link';

const ResearchSection: React.FC = () => {
  return (
    <section className="body-font bg-gray-100 dark:bg-gray-800 px-4 mb-6 mt-6 py-5">
      <div className="text-center mb-14">
        <h1 className="font-alike mb-4 mt-10 text-3xl font-bold dark:text-white">
          <span className="border-b-4 px-4 border-blue-700">Research Works</span>
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
          {researchWorks.map((research, i) => {
            return (
              <div key={i} className="p-8 bg-white rounded shadow dark:bg-gray-700">
                <h2 className="my-3 text-2xl font-bold dark:text-gray-300">{research.title}</h2>
                <p className="mb-4 leading-relaxed dark:text-gray-400 text-blueGray-400">
                  {research.subTitle}{' '}
                </p>
                <div className=" mt-4">
                  <Link
                    target="_blank"
                    href={research.fileUrl}
                    className="w-full flex items-center justify-center px-4 py-2 text-center bg-primary-700 text-white rounded-md dark:bg-blue-500 dark:hover:bg-gray-900 hover:bg-blue-500"
                  >
                    Know More
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        className="ml-2 bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ResearchSection;
