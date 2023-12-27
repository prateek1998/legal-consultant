import React from 'react';
import Link from 'next/link';
import AnimateInView from 'components/animateInView';

let topOrders = [
  {
    id: 1,
    fileUrl: 'https://drive.google.com/file/d/1Yr8TUUdgeG6QB44WX_XtK_cSnoZQiOYj/view',
    title: 'Akhilesh Arya Cases',
    subTitle:
      'Appeal under Cr.P.C & POCSO Act, Section 6: Appellant convicted but sentence upto life imprisonment reduced due to mitigating factors—no brutality, clean record, family support—released after 11+ years served.',
  },
  {
    id: 2,
    fileUrl: 'https://drive.google.com/file/d/1Ww07oGtDfUmtTgTgQsF-R03lskD_pSll/view?usp=sharing',
    title: 'Landlord-Tenant Dispute',
    subTitle: 'Interim relief  under O39 R10 of CPC in favour of the Landlord. ',
  },
  {
    id: 3,
    fileUrl: 'https://drive.google.com/file/d/1R61SIop-hEqdJZU-ORt0k3RgYFTbQrFK/view?usp=sharing',
    title: 'Landlord-Tenant Dispute',
    subTitle:
      'Decree passed under Order 12 Rule 06 CPC in favour of Landlord for possession of the disputed property',
  },
];

const OrderSection: React.FC = () => {
  return (
    <section className="body-font bg-gray-100 dark:bg-gray-800 px-4 mb-6 mt-6 py-5">
      <div className="text-center mb-14">
        <h1 className="font-alike mb-4 mt-10 text-3xl font-bold dark:text-white">
          <span className="border-b-4 px-4 border-blue-700">Our Recent Cases</span>
        </h1>
      </div>
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap justify-center mb-6 -mx-3">
          {topOrders.map((order) => (
            <AnimateInView
              key={order.id}
              className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3"
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
              <div className="p-8 bg-white rounded shadow dark:bg-gray-700">
                <h2 className="my-3 text-2xl font-bold dark:text-gray-300">{order.title}</h2>
                <p className="mb-4 leading-relaxed dark:text-gray-400 text-blueGray-400">
                  {order.subTitle}{' '}
                </p>
                <div className=" mt-4">
                  <Link
                    target="_blank"
                    href={order.fileUrl}
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
            </AnimateInView>
          ))}
        </div>
        <div className="text-center">
          <Link
            className="inline-block px-8 py-4 text-md font-medium leading-none text-white bg-primary-700 rounded dark:bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-600"
            href="/work"
          >
            View More Cases
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
