import Navbar from '../Components/Navbar/Navbar';
import gambar from '../assets/images/ppp.jpg';
import portofolio from '../assets/data/portofolio';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const PortofolioPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-indigo-900 to-violet-500 d py-24 mb-12 text-center">
        <h1 className="text-white text-5xl font-bold pt-10">Our Portofolio</h1>
      </div>
      <div className="flex items-center justify-center pt-10 px-6 sm:px-16">
        <div className="w-1/6 sm:w-1/4 border-t border-indigo-900 mr-4"></div>
        <h1 className="text-3xl font-bold text-center">What's We Build</h1>
        <div className="w-1/6 sm:w-1/4 border-t border-indigo-900 ml-4"></div>
      </div>{' '}
      <p className="text-center mt-3 text-sm sm:text-md lg:px-52 px-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi voluptate dolor tenetur fugit sed. Dignissimos expedita sed inventore delectus neque, ratione molestiae, omnis magnam optio deleniti est voluptates perferendis.
      </p>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16 py-10 px-6 sm:px-24">
        {portofolio.map((portofolio, index) => (
          <div className="relative group" key={index}>
            <Link to={`/portofolio/${portofolio.id}`}>
              <div className="relative">
                <img className="rounded-md" src={portofolio.image} alt="" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg shadow-xl">
                  <div href="#" className="flex items-center rounded-sm text-sm sm:text-md px-10 py-2 bg-slate-300 text-gray-600 font-bold hover:bg-slate-400 hover:text-gray-300">
                    View
                    <FaArrowRightToBracket className="ml-1" />
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-bold mt-3">{portofolio.judul}</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla ullam adipisci praesentium iure fugiat dolore?</p>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default PortofolioPage;
