import gambar from '../../assets/images/ppp.jpg';
import './home.css';
import portofolio from '../../assets/data/portofolio';
import { Link } from 'react-router-dom';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import video1 from '../../assets/video/barraconsultant.mp4';
import video2 from '../../assets/video/entermanagement.mp4';
import video3 from '../../assets/video/rakevfurniture.mp4';
import video4 from '../../assets/video/video2.mp4';

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
        <div className="h-38  ">
          {/* <Link to={`/portofolio/${portofolio.id}`}> */}
          <div className="relative group">
            <video autoPlay muted loop className="rounded-md">
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>{' '}
          </div>
          {/* </Link> */}
          <div className="text-center">
            <h4 className=" sm:text-xl font-semibold mt-3">Company Profile - The Barra Consultant</h4>
          </div>
        </div>
        <div className="h-38  ">
          {/* <Link to={`/portofolio/${portofolio.id}`}> */}
          <div className="relative group">
            <video autoPlay muted loop className="rounded-md">
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>{' '}
          </div>
          {/* </Link> */}
          <div className="text-center">
            <h4 className=" sm:text-xl font-semibold mt-3">Company Profile - Enter Management</h4>
          </div>
        </div>
        <div className="h-38  ">
          {/* <Link to={`/portofolio/${portofolio.id}`}> */}
          <div className="relative group">
            <video autoPlay muted loop className="rounded-md">
              <source src={video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>{' '}
          </div>
          {/* </Link> */}
          <div className="text-center">
            <h4 className=" sm:text-xl font-semibold mt-3">Company Profile - Rakev Furniture</h4>
          </div>
        </div>
        <div className="h-38  ">
          {/* <Link to={`/portofolio/${portofolio.id}`}> */}
          <div className="relative group">
            <video autoPlay muted loop className="rounded-md">
              <source src={video4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>{' '}
          </div>
          {/* </Link> */}
          <div className="text-center">
            <h4 className=" sm:text-xl font-semibold mt-3">KLF Project Manager</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to="/portofolio"
          className="text-center flex items-center justify-center gap-4 bg-blue-500 py-3 rounded-2xl text-sm font-bold text-white w-36 sm:w-56 hover:bg-blue-800 transition duration-300 ease-in-out"
          style={{ boxShadow: ' 4px 4px 4px 0px #00000040' }}
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default Portofolio;
