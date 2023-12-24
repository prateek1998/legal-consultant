import React from 'react'
import Layout from 'components/layout';

const Work = () => {
  return (
        <>
          <section className="flex items-center pt-24 pb-10 bg-stone-100 font-poppins dark:bg-gray-800 ">
            <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
              <div className="mb-10 text-center">
                <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
                  Work 
                </span>
                <h1 className="text-3xl font-bold capitalize dark:text-white">
                  {' '}
                  Our Recent Work
                </h1>
              </div>
            </div>
          </section>
        </>
      
  )
}

Work.Layout = Layout;


export default Work