import { FaInstagram, FaWhatsapp, FaGithub, FaRegPaperPlane } from 'react-icons/fa';
import hero from '../../assets/images/Young people working in a team.png';
import { IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="relative isolate px-6 lg:px-16 flex items-center  min-h-screen">
        <div className="grid sm:grid-cols-2 gap-10 items-center">
          <div className="sm:mt-12 rounded-lg order-2 sm:order-1">
            {/* <div className="hidden mt-8 sm:mb-8 sm:flex">
              <div className="relative rounded-full px-3 text-sm leading-6  ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div> */}
            <div className="text-center sm:text-start">
              <h1 className="text-4xl font-bold tracking-tight">Partner Solusi Digital Anda</h1>
              <p className="mt-6 text-base sm:text-lg leading-8 text-grey-600">
                Kami berfokus untuk menciptakan dampak positif bagi partner dengan menggunakan produk digital kami. Kami memahami bahwa setiap bisnis memiliki kebutuhan digital yang berbeda, itu sebabnya kami menyesuaikan produk kami agar
                sesusai dengan kebutuhan Anda.
              </p>
              <div className="mt-10 flex items-center justify-center sm:justify-normal gap-x-6">
                <Link
                  href="#about"
                  className="text-center flex items-center justify-center gap-4 bg-blue-500 py-3 rounded-2xl text-sm font-bold text-white w-36 sm:w-56 hover:bg-blue-800 transition duration-300 ease-in-out"
                  style={{ boxShadow: ' 4px 4px 4px 0px #00000040' }}
                >
                  <FaRegPaperPlane />
                  Get started
                </Link>
                <Link
                  to="/portofolio"
                  className="flex items-center justify-center gap-4 text-sm text-center bg-white py-2.5 w-40 sm:w-48 rounded-2xl font-semibold leading-6 hover:bg-slate-300 transition duration-300 ease-in-out"
                  style={{ boxShadow: ' 4px 4px 4px 0px #00000040' }}
                >
                  <IoIosArrowDropright className="size-5" />
                  Lihat Portofolio
                </Link>
              </div>
            </div>
            <div className="justify-center items-center sm:justify-start flex gap-3 mt-10">
              <h6 className="text-sm font-semibold ">Ikuti Kami:</h6>
              <Link to="https://wa.me/6285236704913">
                <FaWhatsapp className="size-5" style={{ color: '#25D366' }} />
              </Link>
              <Link to="https://www.instagram.com/owudev/">
                <FaInstagram className="size-5" style={{ color: '#c32aa3' }} />
              </Link>
              <Link to="https://github.com/rakeWangsa">
                <FaGithub className="size-5" style={{ color: 'black' }} />
              </Link>
            </div>
          </div>
          <div className="order-1 sm:order-2 flex justify-center mt-10 sm:mt-0">
            <img src={hero} className="h-64 sm:h-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
