import gambar from '../../assets/images/ppp.jpg';
import './home.css';
import portofolio from '../../assets/data/portofolio';
import { Link } from 'react-router-dom';
import { FaArrowRightToBracket } from 'react-icons/fa6';

const Portofolio = () => {
  return (
    <div className=" px-6 py-10 lg:px-16 ">
      <div className="flex items-center justify-center ">
        <div className="w-1/4 border-t border-indigo-900 mr-4"></div>
        <h1 className="text-3xl font-bold text-center">Portofolio</h1>
        <div className="w-1/4 border-t border-indigo-900 ml-4"></div>
      </div>{' '}
      <p className="text-center mt-3 text-sm sm:text-md lg:px-52 text-gray-600">Beberapa portofilo website dan aplikasi klien yang telah kami kerjakan.</p>
      <div className="grid  gap-4 sm:grid-cols-2 lg:grid-cols-2 sm:gap-10 mt-10">
        {portofolio.map((portofolio, index) => (
          <div className="h-38  " key={index}>
            {/* <Link to={`/portofolio/${portofolio.id}`}> */}
            <div className="relative group">
              <video autoPlay muted loop className="rounded-md">
                <source src={portofolio.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>{' '}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg shadow-xl">
                <div className="">
                  {/* <div href="#" className="flex items-center rounded-md text-sm sm:text-md px-4 py-2 bg-slate-300 text-gray-600 font-bold hover:bg-slate-400 hover:text-gray-300">
                      View
                      <FaArrowRightToBracket className="ml-1" />
                    </div> */}
                  {/* <div className="absolute bottom-0 left-0 w-full bg-white py-2 px-4  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-sm  font-semibold">{portofolio.judul}</h3>
                  </div> */}
                </div>
              </div>
            </div>
            {/* </Link> */}
            <div className="text-center">
              <h4 className=" sm:text-xl font-semibold mt-3">{portofolio.judul}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/portofolio" className="flex items-center justify-center w-32 rounded-lg text-sm sm:text-md px-4 py-2 bg-blue-500 text-white hover:bg-blue-700 hover:text-white">
          View More
          <FaArrowRightToBracket className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Portofolio;
