import dynamic from 'next/dynamic';
import Layout from 'components/layout';
import HeroSection from 'components/home/HeroSection';
import ResearchSection from 'components/home/ResearchSection';
const AboutSection = dynamic(() => import('components/home/AboutSection'));
const ServiceSection = dynamic(() => import('components/home/ServiceSection'));
const OrderSection = dynamic(() => import('components/home/OrderCaseSection'));
const TestimonialSection = dynamic(() => import('components/home/TestimonialSection'));

function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <OrderSection />
      <ResearchSection />
      <TestimonialSection />
    </main>
  );
}

Home.Layout = Layout;

export default Home;
