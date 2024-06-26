import Navbar from '../Components/Navbar/Navbar';
import Services from '../Components/Home/Services';
import Footer from '../Components/Footer/Footer';
import { useEffect } from 'react';
import Chat from '../Components/Chat/Chat';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="hero py-24 mb-12 text-center">
        <h1 className=" text-5xl font-bold pt-10">Our Services</h1>
      </div>
      <Services />
      <Chat />
      <Footer />
    </>
  );
};

export default ServicesPage;
