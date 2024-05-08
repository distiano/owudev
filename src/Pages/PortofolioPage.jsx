import Navbar from '../Components/Navbar/Navbar';
import gambar from '../assets/images/ppp.jpg';
import portofolio from '../assets/data/portofolio';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import video1 from '../assets/video/video1.mp4';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const PortofolioPage = () => {
  return (
    <>
      <Navbar />
      <div className="hero py-24 mb-12 text-center">
        <h1 className=" text-5xl font-bold pt-10">Our Portfolio</h1>
      </div>
      {/* <div className="flex items-center justify-center pt-10 px-6 sm:px-16">
        <div className="w-1/6 sm:w-1/4 border-t border-indigo-900 mr-4"></div>
        <h1 className="text-3xl font-bold text-center">What We Build</h1>
        <div className="w-1/6 sm:w-1/4 border-t border-indigo-900 ml-4"></div>
      </div>{' '} */}
      <p className="text-center mt-3 text-sm sm:text-md lg:px-52 px-6">Beberapa portofilo website dan aplikasi klien yang telah kami kerjakan.</p>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16 py-10 px-6 lg:px-24">
        {portofolio.map((item, index) => (
          <div className="relative group" key={index}>
            {/* <Link to={`/portofolio/${portofolio.id}`}> */}
            <Swiper spaceBetween={0} loop={true} slidesPerView={1} autoplay={{ delay: 2000 }} modules={[Autoplay]}>
              {item.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative">
                    <img src={image} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <h2 className="text-xl font-bold mt-3">{item.judul}</h2>
            {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla ullam adipisci praesentium iure fugiat dolore?</p> */}
            {/* </Link> */}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default PortofolioPage;

{
  /* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg shadow-xl">
   <div href="#" className="flex items-center rounded-sm text-sm sm:text-md px-10 py-2 bg-slate-300 text-gray-600 font-bold hover:bg-slate-400 hover:text-gray-300">
     View
     <FaArrowRightToBracket className="ml-1" />
   </div>
 </div> */
}
