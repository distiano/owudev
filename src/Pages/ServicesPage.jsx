import Navbar from '../Components/Navbar/Navbar';
import Services from '../Components/Home/Services';
import Footer from '../Components/Footer/Footer';

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-indigo-900 to-violet-500 d py-24 mb-12 text-center">
        <h1 className="text-white text-5xl font-bold pt-10">Our Services</h1>
      </div>
      <Services />
      <Footer />
    </>
  );
};

export default ServicesPage;