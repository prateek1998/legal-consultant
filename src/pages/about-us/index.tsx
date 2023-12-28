import React from 'react';
import Layout from 'components/layout';
import Image from 'next/image';
import Link from 'next/link';
import mainLeaders from 'utils/main-leaders.json';
import teamMembers from 'utils/team-members.json';
import AnimateInView from 'components/animateInView';

const AboutUs = () => {
  return (
    <>
      <section className="flex items-center pt-24 pb-10 bg-stone-100 font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
          <div className="mb-10 text-center">
            <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
              About Us
            </span>
            <h1 className="w-full text-3xl font-bold capitalize dark:text-">
              <span className="border-b-4 px-5 border-blue-700 "> Meet Our Wonderful Team</span>
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            {mainLeaders.map((team, i) => (
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
                key={i}
                className="w-full px-4 mb-4 lg:w-1/3 md:w-1/2 lg:mb-0"
              >
                <div className="p-6 bg-white rounded shadow dark:bg-gray-700 group">
                  <div className="block mb-2">
                    <div className="relative overflow-hidden">
                      <div className="mb-5 overflow-hidden">
                        <Image
                          src={team.imgUrl}
                          width={800}
                          height={400}
                          className="object-cover w-full mx-auto transition-all rounded h-72 group-hover:scale-110"
                          alt="logo"
                        />
                      </div>
                      <div className="absolute flex flex-col top-4 right-4">
                        {team.fbUrl && (
                          <div className="flex items-center">
                            <Link
                              href={team.fbUrl}
                              target="_blank"
                              className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded group-hover:translate-x-0 wishlist hover:bg-blue-200 group"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="w-6 h-6 text-blue-800 bi bi-facebook dark:text-gray-400"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                              </svg>
                            </Link>
                          </div>
                        )}
                        {team.twitUrl && (
                          <div className="flex items-center">
                            <Link
                              href={team.twitUrl}
                              target="_blank"
                              className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded group-hover:translate-x-0 wishlist hover:bg-blue-200 group"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="w-6 h-6 text-blue-500 dark:text-gray-400 bi bi-twitter"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                              </svg>
                            </Link>
                          </div>
                        )}
                        {team.linkedinUrl && (
                          <div className="flex items-center">
                            <Link
                              href={team.linkedinUrl}
                              target="_blank"
                              className="relative flex items-center justify-center p-3 mb-3 transition-all translate-x-20 bg-white rounded group-hover:translate-x-0 wishlist hover:bg-blue-200 group"
                            >
                              <svg
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                                className="w-6 h-6 text-blue-800 bi bi-facebook dark:text-gray-400"
                              >
                                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                              </svg>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                    <h2 className="mb-2 text-xl font-bold dark:text-white">{team.name}</h2>
                    <p className="text-lg font-bold text-blue-500 dark:text-blue-300 ">
                      {team.title}
                    </p>
                    <p className="mb-4 text-sm text-gray-400 dark:text-gray-400">{team.msg}</p>
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>
      <section className="flex items-center pb-24 bg-stone-100 font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold capitalize dark:text-white">
              <span className="border-b-4 px-5 border-blue-700 ">Meet Our Team </span>
            </h1>
            <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-gray-500 mt-3 dark:text-gray-400">
              At Sethi & Associates Legal Consultant, We&apos;re known for our highly knowledgeable
              team who never shies away from a challenge. Our Associates are skilled researchers and
              confident in their abilities to tackle any legal situation you may face. Meet the team
              below and see why we&apos;re considered one of the top legal consultants.
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {teamMembers.map((team, i) => (
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
                key={i}
                className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row dark:bg-gray-800"
              >
                <div className="w-full overflow-hidden lg:w-2/4 h-100">
                  <Image
                    src={team.imgUrl}
                    width={800}
                    height={400}
                    className="object-cover transition-all hover:scale-110"
                    alt="logo"
                  />
                </div>
                <div className="relative flex self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
                  <div>
                    <h2 className="mb-2 text-xl font-bold dark:text-gray-300">{team.name}</h2>
                    <p className="mb-4 text-sm text-blue-500 dark:text-blue-400">Advocate</p>
                    <p className="mb-4 text-sm text-gray-400 dark:text-gray-400">{team.msg}</p>
                    {/* <div className="flex">
                    <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-6 h-6 bi bi-facebook "
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </span>
                    <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-6 h-6 bi bi-twitter"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </span>
                    <span className="inline-block mr-5 text-gray-700 dark:text-gray-400 hover:text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-6 h-6 bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                      </svg>
                    </span>
                  </div> */}
                  </div>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

AboutUs.Layout = Layout;

export default AboutUs;
