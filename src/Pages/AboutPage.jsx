import Footer from '../Components/Footer/Footer';
import About from '../Components/Home/About';
import Navbar from '../Components/Navbar/Navbar';
import gambar from '../assets/images/rake.png';
import gambar2 from '../assets/images/ito.jpeg';
import gambar3 from '../assets/images/idan.png';
import { FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { useEffect } from 'react';
import Chat from '../Components/Chat/Chat';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="hero d py-24 mb-12 text-center">
        <h1 className=" text-5xl font-bold pt-10">About Us</h1>
      </div>
      <About />
      <div className="py-6">
        <div className="">
          <div className="flex items-center justify-center ">
            <div className="w-1/4 border-t border-indigo-900 mr-4"></div>
            <h1 className="text-3xl font-bold text-center">Our Team</h1>
            <div className="w-1/4 border-t border-indigo-900 ml-4"></div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-16 px-12 sm:px-16">
            <div className="relative h-80 flex flex-col justify-center items-center border border-slate-400 shadow-lg rounded-lg group">
              <div className=" front-face text-center">
                <img className="w-36 h-36 rounded-full mb-4" src={gambar} alt="" />
                <h4 className="font-bold">Rake Wangsa</h4>
                <p>Back-End Developer</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full p-8 text-center back-face transform rotate-y-180 ">
                <h2 className="font-bold mb-5">About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, commodi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi iste natus explicabo aperiam, fugiat libero.</p>
                <div className="flex justify-center mt-5">
                  <div className="bg-slate-200 p-1 rounded-lg mx-2">
                    <FaWhatsapp className="size-6" style={{ color: '#25D366' }} />
                  </div>
                  <div className="bg-slate-200 p-1 rounded-lg mx-2">
                    <FaInstagram className="size-6" style={{ color: '#c32aa3' }} />
                  </div>
                  <div className="bg-slate-200 p-1 rounded-lg mx-2">
                    <FaGithub className="size-6" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 flex flex-col justify-center items-center border border-slate-400 shadow-md rounded-lg group">
              <div className=" front-face text-center">
                <img className="w-36 h-36 rounded-full mb-4 object-cover" src={gambar2} alt="" />
                <h4 className="font-bold">Ito Distiano</h4>
                <p>Front-End Developer</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full p-8 text-center back-face transform rotate-y-180">
                <h2 className="font-bold mb-5">About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, commodi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi iste natus explicabo aperiam, fugiat libero.</p>
                <div className="flex justify-center mt-5">
                  <div className="bg-slate-200 p-1 rounded-lg mx-2">
                    <FaWhatsapp className="size-6" style={{ color: '#25D366' }} />
                  </div>
                  <div className="bg-slate-200 p-1 rounded-lg mx-2">
                    <FaInstagram className="size-6" style={{ color: '#c32aa3' }} />
                  </div>
                  <div className="bg-slate-200 p-1 rounded-lg mx-2">
                    <FaGithub className="size-6" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" relative h-80 flex flex-col justify-center items-center border border-slate-400 shadow-md rounded-lg group">
              <div className=" front-face text-center ">
                <img className="w-36 h-36 rounded-full mb-4 object-cover" src={gambar3} alt="" />
                <h4 className="font-bold">Wildan Hafiz</h4>
                <p>Marketing</p>
              </div>
              <div className="absolute top-0 left-0 w-full h-full p-8 text-center back-face transform rotate-y-180">
                <h2 className="font-bold mb-5">About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, commodi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi iste natus explicabo aperiam, fugiat libero.</p>
                <div className="flex justify-center mt-5">
                  <div className="bg-slate-200 p-1 rounded-lg mx-2">
                    <FaWhatsapp className="size-6" style={{ color: '#25D366' }} />
                  </div>
                  <div className="bg-slate-200 p-1 rounded-lg mx-2">
                    <FaInstagram className="size-6" style={{ color: '#c32aa3' }} />
                  </div>
                  <div className="bg-slate-200 p-1 rounded-lg mx-2">
                    <FaGithub className="size-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chat />
      <Footer />
    </>
  );
};

export default AboutPage;
