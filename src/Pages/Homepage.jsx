import Footer from '../Components/Footer/Footer';
import About from '../Components/Home/About';
import Hero from '../Components/Home/Hero';
import Portofolio from '../Components/Home/Portofolio';
import Services from '../Components/Home/Services';
import Navbar from '../Components/Navbar/Navbar';
import gambar from '../assets/images/aaa.png';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <img src={gambar} alt="" />
      </div>
      <div className="pt-10 flex items-center justify-center ">
        <div className="w-1/4 border-t border-indigo-900 mr-4"></div>
        <h1 className="text-3xl font-bold text-center">About Us</h1>
        <div className="w-1/4 border-t border-indigo-900 ml-4"></div>
      </div>{' '}
      <About />
      <Services />
      <Portofolio />
      <Footer />
    </>
  );
};

export default Homepage;