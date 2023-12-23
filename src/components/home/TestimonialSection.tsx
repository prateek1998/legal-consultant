import React from "react";
import { motion } from "framer-motion";
import Slider from "components/slider";

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
    name: "Dr.Ravi Malik",
    title: "Director of Malik Radix Health Care",
    msg: "Mr. Sethi helped me finish a long time case I’ve been trying to wrap up for years. He was completely understanding, professional and worked very diligently to the end and I’m so grateful! Highly recommend!!",
  },
  {
    name: "Dr.Ritesh Malik",
    title:
      "Founder of Innov8,  Founder & Trustee  Founder & Trustee Plaksha University",
    msg: "I extend my sincere gratitude for your exceptional support and expertise. Your unwavering dedication and strategic approach to my legal matters have made a significant impact. In navigating the complexities, your insights proved invaluable, providing clarity and assurance throughout. I appreciate the transparent communication and the personalized touch that set your firm apart. Thank you for going above and beyond, ensuring the best possible outcome. Your professionalism and commitment have made this experience manageable and have instilled confidence in the process.",
  },
  {
    name: "Sandeep",
    title: "Client",
    msg: " Sethi & associates is a very good law firm. Mr.jitendra sethi advocate and Mr.kesav sethi advocate are very good lawyers who is fighting my younger brother U/s. 302/34 case with great courage and gives me good advice, staff is also very good and helpful. Works well and everyone talks nicely. Just a few days ago my younger brother on the legal representation of Mr.Jitendra Sethi and Mr. Keshav Sethi came out of the jail on interim bail and I have a lot of confidence in them that they will help my brother to get the best legal advice and representation",
  },
  {
    name: "Saurabh Sawhney",
    title: "Partner, Zyrath overseas ",
    msg: "I am writing to extend my heartfelt appreciation for the exemplary legal services provided by your esteemed Firm. I commend your team for their responsiveness, proactive approach, and adept handling of complex legal matters, instilling confidence and allowing me to pursue professional and personal endeavours with tranquillity. Your team's commitment to upholding the highest ethical standards hasn't gone unnoticed; it's truly commendable.",
  },
  {
    name: "Himashu Sachdeva",
    title: "Client",
    msg: "I am immensely content with Sethi Associates, notably Jitender Sethiji and Keshav Sethiji. Their diligence secured multiple favorable judgments in both lower and high courts. Throughout, their support was not just professional but akin to family, handling the case exceptionally. Their unwavering faithfulness and trustworthiness make them a reliable choice for anyone seeking legal representation.",
  },
  {
    name: "Ravi@babu",
    title: "Client ",
    msg: "I am very thankful to Sethi and associates for helping me to contest my case. I am fully satisfied with service provided by them. I wish them best luck and will 100% recommend people to connect with them. Thank you",
  },
  {
    name: "Yogender Sahu",
    title: "Client",
    msg: ". I want to express my most sincere thanks for the most professional representation. You have stuck by me through the time in dealing with this very stressful case. I admire your composure, work ethic and most of all excellent representation. I was completely dazzled by your communication skills and courage at the court hearing.",
  },
  {
    name: "ANIL F JAGASIA",
    title: "NIMMI APPAREL INC",
    msg: "We have a strong business relationship with Mr JITENDER  SETHI of  Sethi & Associates New Delhi India   Mr Sethi and his associates have successfully represented us in various courts in India since 2016  His leadership farsightedness along with  30 plus years  of hands down working experience in the Indian Legal system  makes SETHI & ASSOCIATES  a clear choice for winners  We cherish our continued  relationship  and wish him & all his associates the very best. ",
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

const TestimonialSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="flex items-center justify-center  bg-gray-100  dark:bg-gray-800"
    >
      <div className="text-center mb-14">
        <h1 className="font-alike mb-4  text-3xl font-bold dark:text-white">
          <span className="border-b-4 px-4 border-blue-700">
            Client Testimonials
          </span>
        </h1>
        <div className="flex ">
          <Slider
          navigations={true}
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{ 769: { slidesPerView: 3 } }}
        >
            {testimonials.map((testimonial, index) => (
              <div key={index} className=" bg-white dark:bg-gray-700">
                  <div className="relative z-20 p-8  ">
            
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
              
              
              
              
              
              // {/* mb-8 lg:mx-14 rounded shadow dark:bg-gray-700"> */}
              //   <div className="relative z-20 p-8  ">
              //     <span className="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
              //       <svg
              //         xmlns="http://www.w3.org/2000/svg"
              //         width="30"
              //         height="30"
              //         fill="currentColor"
              //         className="bi bi-quote"
              //         viewBox="0 0 16 16"
              //       >
              //         <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              //       </svg>
              //     </span>
              //     <p className="mb-4 text-base leading-7 text-gray-400">
              //       {testimonial.msg}
              //     </p>
              //     <div className="flex items-center gap-x-4">
              //       <div className="info">
              //         <h2 className="text-lg font-bold text-black dark:text-white">
              //           {testimonial.name}
              //         </h2>
              //         <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
              //           {testimonial.title}
              //         </span>
              //       </div>
              //     </div>
              //   </div>
              // </div>
            ))}



        </Slider>
            
            
          </div>
    
      </div>
      
    </section>
  );
};

export default TestimonialSection;


// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Slider from "components/slider";

// const textVariants = {
//   initial: {
//     x: -500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
//   scrollButton: {
//     opacity: 0,
//     y: 10,
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//     },
//   },
// };

// const testimonials = [
//   {
//     name: "Akhilesh Arya",
//     title: "Client",
//     msg: "Advocate Keshav Sethi's remarkable performance in my case was truly extraordinary. His legal prowess and dedication turned what seemed impossible into a victorious reality. Mr.Sethi's strategic brilliance and attention to detail are unmatched, making him an exceptional advocate who delivered outstanding results. I highly recommend the services of Sethi and Associates",
//   },
//   {
//     name: "Dr.Ravi Malik",
//     title: "Director of Malik Radix Health Care",
//     msg: "Mr. Sethi helped me finish a long time case I’ve been trying to wrap up for years. He was completely understanding, professional and worked very diligently to the end and I’m so grateful! Highly recommend!!",
//   },
//   {
//     name: "Dr.Ritesh Malik",
//     title: "Founder of Innov8,  Founder & Trustee  Founder & Trustee Plaksha University",
//     msg: "I extend my sincere gratitude for your exceptional support and expertise. Your unwavering dedication and strategic approach to my legal matters have made a significant impact. In navigating the complexities, your insights proved invaluable, providing clarity and assurance throughout. I appreciate the transparent communication and the personalized touch that set your firm apart. Thank you for going above and beyond, ensuring the best possible outcome. Your professionalism and commitment have made this experience manageable and have instilled confidence in the process.",
//   },
//   {
//     name: "Sandeep",
//     title: "Client",
//     msg: " Sethi & associates is a very good law firm. Mr.jitendra sethi advocate and Mr.kesav sethi advocate are very good lawyers who is fighting my younger brother U/s. 302/34 case with great courage and gives me good advice, staff is also very good and helpful. Works well and everyone talks nicely. Just a few days ago my younger brother on the legal representation of Mr.Jitendra Sethi and Mr. Keshav Sethi came out of the jail on interim bail and I have a lot of confidence in them that they will help my brother to get the best legal advice and representation",
//   },
//   {
//     name: "Saurabh Sawhney",
//     title: "Partner, Zyrath overseas ",
//     msg: "I am writing to extend my heartfelt appreciation for the exemplary legal services provided by your esteemed Firm. I commend your team for their responsiveness, proactive approach, and adept handling of complex legal matters, instilling confidence and allowing me to pursue professional and personal endeavours with tranquillity. Your team's commitment to upholding the highest ethical standards hasn't gone unnoticed; it's truly commendable."
//   },
//   {
//     name: "Himashu Sachdeva",
//     title: "Client",
//     msg: "I am immensely content with Sethi Associates, notably Jitender Sethiji and Keshav Sethiji. Their diligence secured multiple favorable judgments in both lower and high courts. Throughout, their support was not just professional but akin to family, handling the case exceptionally. Their unwavering faithfulness and trustworthiness make them a reliable choice for anyone seeking legal representation.",
//   },
//   {
//     name: "Ravi@babu",
//     title: "Client ",
//     msg: "I am very thankful to Sethi and associates for helping me to contest my case. I am fully satisfied with service provided by them. I wish them best luck and will 100% recommend people to connect with them. Thank you"
//   },
//   {
//     name: "Yogender Sahu",
//     title: "Client",
//     msg: ". I want to express my most sincere thanks for the most professional representation. You have stuck by me through the time in dealing with this very stressful case. I admire your composure, work ethic and most of all excellent representation. I was completely dazzled by your communication skills and courage at the court hearing.",
//   },
//   {
//     name: "ANIL F JAGASIA",
//     title: "NIMMI APPAREL INC",
//     msg: "We have a strong business relationship with Mr JITENDER  SETHI of  Sethi & Associates New Delhi India   Mr Sethi and his associates have successfully represented us in various courts in India since 2016  His leadership farsightedness along with  30 plus years  of hands down working experience in the Indian Legal system  makes SETHI & ASSOCIATES  a clear choice for winners  We cherish our continued  relationship  and wish him & all his associates the very best. ",
//   },


//   // {name: 'Aditya Aggarwal',
//   // title:'Aditya Builders & Associations;
//   // msg: "A great testimonial can boost your brand’s image. Click to edit and add your own."
//   // },
//   // {name: 'Himashu Sachdeva',
//   // title:'Client;
//   // msg: "I am immensely content with Sethi Associates, notably Jitender Sethiji and Keshav Sethiji. Their diligence secured multiple favorable judgments in both lower and high courts. Throughout, their support was not just professional but akin to family, handling the case exceptionally. Their unwavering faithfulness and trustworthiness make them a reliable choice for anyone seeking legal representation."
//   // }
// ];

// const TestimonialSection: React.FC = () => {

//   return (
//     <section
//       id="testimonials"
//       className="flex items-center justify-center  bg-gray-100  dark:bg-gray-800"
//     >
//       {/* <section className="flex items-center bg-gray-100 lg:h-screen dark:bg-gray-800"> */}
//       <div className="p-4 mt-10 mx-auto max-w-7xl">
//         <div className="text-center mb-14">
//           <h1 className="font-alike mb-4  text-3xl font-bold dark:text-white">
//             <span className="border-b-4 px-4 border-blue-700">Client Testimonials</span>
//           </h1>
//         </div>
//         <div className="flex ">
//           <Slider
//           navigations={true}
//           slidesPerView={1}
//           spaceBetween={0}
//           breakpoints={{ 769: { slidesPerView: 3 } }}
//         >
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="mb-8 bg-white lg:mx-14 rounded shadow dark:bg-gray-700">
//                 <div className="relative z-20 p-8  ">
//                   <span className="inline-block p-3 mb-3 text-xs text-white bg-blue-500 rounded-full">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="30"
//                       height="30"
//                       fill="currentColor"
//                       className="bi bi-quote"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
//                     </svg>
//                   </span>
//                   <p className="mb-4 text-base leading-7 text-gray-400">
//                     {testimonial.msg}
//                   </p>
//                   <div className="flex items-center gap-x-4">
//                     <div className="info">
//                       <h2 className="text-lg font-bold text-black dark:text-white">
//                         {testimonial.name}
//                       </h2>
//                       <span className="block text-xs font-semibold text-blue-500 uppercase dark:text-blue-300">
//                         {testimonial.title}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}



//         </Slider>
            
            
//           {/* </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;
