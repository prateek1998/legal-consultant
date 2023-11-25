import HeroSection from "components/home/HeroSection";
import Layout from "components/layout"
import Image from "next/image";

function Home() {
  return (
    <main>
      <HeroSection/>
      
            {/* <h2 className="h-screen bg-yellow-50">hello pradteek</h2>
            <h2 className="h-screen bg-pink-50">hello pradteek</h2>
            <h2 className="h-screen bg-orange-200">hello pradteek</h2> */}
    </main>
    
// {/* <>
//       <Image
//         className="absolute z-10 w-full h-full object-cover"
//         width={1920}
//         height={1080}
//         alt={'slide-d'}
//         src="/assets/images/bg/IMG_2838.jpg"

//         // https://assets.awwwards.com/awards/sites_of_the_day/2023/11/toysforjoy-1.jpg"
//         loading="lazy"
//       />
//       <h2 className="h-screen bg-red-200">hello pradteek</h2>
//       <h2 className="h-screen bg-red-700">hello pradteek</h2>
//       <h2 className="h-screen bg-orange-200">hello pradteek</h2>
//       </> */}
  )
}

Home.Layout = Layout;

export default Home