import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import Navbar from '../Components/Navbar/Navbar';
import gambar from '../assets/images/ppp.jpg';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import portofolio from '../assets/data/portofolio';
import Footer from '../Components/Footer/Footer';

const DetailPortofolio = () => {
  const { id } = useParams();

  const portoDetail = portofolio.find((portofolio) => portofolio.id.toString() === id);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-indigo-900 to-violet-500 d py-24 mb-12 text-center">
        <h1 className="text-white text-5xl font-bold pt-10">Our Portfolio</h1>
      </div>
      <div className="px-6 sm:px-16 py-10">
        <div className="mb-16">
          <h2 className="text-4xl font-bold">{portoDetail.judul}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, corrupti laboriosam! Aliquam explicabo, eum hic culpa iste quisquam sequi natus!</p>
          <button href="" className="flex items-center mt-3 text-lg float-end ">
            Demo
            <span>
              <FaArrowUpRightFromSquare className="text-gray-600 ml-3" />
            </span>
          </button>
        </div>
        <Swiper
          slidesPerView={2}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          <SwiperSlide>
            <img src={gambar} id="halaman-login" alt="" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gambar} id="halaman-register" alt="" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gambar} alt="" className="rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gambar} alt="" className="rounded-lg" />
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev opacity-50 p-10 rounded-full bg-slate-600 text-white hover:opacity-80 transition-opacity duration-300"></div>
            <div className="swiper-button-next opacity-50 p-10 rounded-full bg-slate-600 text-white hover:opacity-80 transition-opacity duration-300"></div>
          </div>
        </Swiper>
        <div className="login mt-10">
          <h3 className="text-3xl font-bold">Halaman Login</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illo ipsum vero aut ea odit, asperiores autem corrupti natus iure!</p>
        </div>
        <div className="register mt-10">
          <h3 className="text-3xl font-bold">Halaman Register</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illo ipsum vero aut ea odit, asperiores autem corrupti natus iure!</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPortofolio;
