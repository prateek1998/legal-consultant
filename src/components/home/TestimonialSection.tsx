import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

const testimonials = [
  {
    name: "Akhilesh Arya",
    title: "Client",
    msg: "Advocate Keshav Sethi's remarkable performance in my case was truly extraordinary. His legal prowess and dedication turned what seemed impossible into a victorious reality. Mr.Sethi's strategic brilliance and attention to detail are unmatched, making him an exceptional advocate who delivered outstanding results. I highly recommend the services of Sethi and Associates",
  },
  {
    name: "Aditya Aggarwal",
    title: "Aditya Builders & Associations",
    msg: "A great testimonial can boost your brand’s image. Click to edit and add your own.",
  },
  {
    name: "Himashu Sachdeva",
    title: "Client",
    msg: "I am immensely content with Sethi Associates, notably Jitender Sethiji and Keshav Sethiji. Their diligence secured multiple favorable judgments in both lower and high courts. Throughout, their support was not just professional but akin to family, handling the case exceptionally. Their unwavering faithfulness and trustworthiness make them a reliable choice for anyone seeking legal representation.",
  },
  {
    name: "Dr.Ravi Malik",
    title: "Director of Malik Radix Health Care",
    msg: "Testimonials provide a sense of what it's like to work with you or use your products. Change the text and add your own.",
  },
  {
    name: "Dr.Ritesh Malik",
    title: "Founder of Innov8,  Founder & Trustee  Founder & Trustee Plaksha University",
    msg: "A great testimonial can boost your brand’s image. Click to edit and add your own.",
  },
  {
    name: "Lisa Driver",
    title: "MI",
    msg: "Have customers review you and share what they had to say. Click to edit and add their testimonial.",
  },
  // {name: 'Aditya Aggarwal',
  // title:'Aditya Builders & Associations;
  // msg: "A great testimonial can boost your brand’s image. Click to edit and add your own."
  // },
  // {name: 'Himashu Sachdeva',
  // title:'Client;
  // msg: "I am immensely content with Sethi Associates, notably Jitender Sethiji and Keshav Sethiji. Their diligence secured multiple favorable judgments in both lower and high courts. Throughout, their support was not just professional but akin to family, handling the case exceptionally. Their unwavering faithfulness and trustworthiness make them a reliable choice for anyone seeking legal representation."
  // }
];

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="flex items-center justify-center  bg-gray-100  dark:bg-gray-800"
    >
      {/* <div className="px-4 py-20 mx-auto max-w-7xl">
        <h1 className="w-2/5 mb-8 text-4xl font-bold leading-relaxed text-left dark:text-white">
          We make your life easier by solving legal problems like
        </h1>
        <div className="grid pt-4 grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div className="w-full border-2 border-blue-200 p-4 text-center transition-all bg-primary-700 rounded-lg hover:bg-primary-600 hover:shadow-lg">
              <p className="text-left text-white -400 pb-4"> 0{service.id}</p>
              <img className="mx-auto mb-3" src={`assets/logos/${service.logo}`} />
              <h3 className="mb-4 text-2xl capitalize font-semibold text-white">
                {service.data}
              </h3>
            </div>
          ))}
        </div>
      </div> */}
      {/* <section className="flex items-center bg-gray-100 lg:h-screen dark:bg-gray-800"> */}
      <div className="p-4 mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h1 className="font-alike mb-4 text-3xl font-bold dark:text-white">
            {" "}
            Testimonials{" "}
          </h1>
          {/* <p className="max-w-xl mx-auto text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quam nostrum harum non in at
                    eaque quibusdam eum ratione.
                </p> */}
        </div>
        <div className="flex ">
          <div className="grid grid-cols-1 gap-4 lg:gap-4 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div className="mb-8 bg-white rounded shadow dark:bg-gray-700">
                <div className="relative z-20 p-8 -mt-14 ">
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
                  <p className="mb-4 text-base leading-7 text-gray-400">
                    {testimonial.msg}
                  </p>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
