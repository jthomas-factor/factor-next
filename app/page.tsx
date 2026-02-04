import About from '@/components/About';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Clients />
      <Services />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
