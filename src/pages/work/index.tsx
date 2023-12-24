import React from 'react';
import Layout from 'components/layout';
import Link from 'next/link';
import orders from 'utils/orders.json';

const Work = () => {
  return (
    <>
      <section className="flex itsems-center pt-24 pb-10 bg-stone-100 font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
          <div className="mb-10 text-center">
            <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
              Work
            </span>
            <h1 className="w-full text-3xl font-bold capitalize dark:text-">
              <span className="border-b-4 px-5 border-blue-700 "> Our Recent Work</span>
            </h1>
          </div>
          <div className="grid pt-4 grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {orders.map((order, index) => (
              <div
                key={index}
                className="w-full border-2 border-blue-200 p-4 text-white transition-all bg-primary-700 rounded-lg hover:bg-primary-600 hover:shadow-lg"
              >
                <p className="text-left text-white pb-4"> 0{order.id}</p>
                <h2 className="my-3 text-2xl font-bold dark:text-gray-300">{order.title}</h2>
                <p className="mb-3 leading-loose text-grsay-500 text-slate-200">
                  {order.subTitle}{' '}
                </p>
                <div className=" mt-4">
                  <Link
                    href={order.fileUrl}
                    className="w-full flex items-center justify-center px-4 py-2 text-center text-gray-900 bg-blue-300 rounded-md dark:bg-gray-700 dark:text-white dark:hover:bg-gray-900 hover:bg-blue-400"
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
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

Work.Layout = Layout;

export default Work;
