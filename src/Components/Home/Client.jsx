import imgClient1 from '../../assets/images/Logo-Kabupaten-Pekalongan-removebg-preview.png';
import imgClient2 from '../../assets/images/bkipm-removebg-preview.png';
import imgClient3 from '../../assets/images/farmhill-group.png';
import imgClient4 from '../../assets/images/karimlogo.png';
import imgClient5 from '../../assets/images/sman12tangsel-removebg-preview.png';
import imgClient6 from '../../assets/images/logo_kabupaten_pemalang-removebg-preview.png';
import imgClient7 from '../../assets/images/logo-djpb-removebg-preview.png';
import imgClient8 from '../../assets/images/WhatsApp_Image_2024-05-07_at_03.27.06-removebg-preview.png';
import imgClient9 from '../../assets/images/klflogo (3).png';
import imgClient10 from '../../assets/images/Logo Andana White.png';
import imgClient11 from '../../assets/images/BadanKarantinaIndonesia-logo.png';
3;
const Client = () => {
  return (
    <div className="py-10 px-6 sm:px-16 ">
      <div className="">
        <div className="flex items-center justify-center ">
          <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 mr-4"></div>
          <h1 className="text-3xl font-bold text-center">Client Kami</h1>
          <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 ml-4"></div>
        </div>
        <p className="text-center mt-3 text-sm sm:text-md lg:px-52 text-gray-600">Kepercayaan pelanggan adalah kebanggaan kami, para klien mempercayakan pengembangan website bersama kami, kini saatnya Anda mengembangkan bisnis Anda.</p>
      </div>
      <marquee behavior="" direction="left">
        {' '}
      </marquee>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10 px-12">
        <img src={imgClient2} className="h-10 md:h-20 " alt="" />
        <img src={imgClient3} className="h-10 md:h-12" alt="" />
        <img src={imgClient1} className="h-10 md:h-16 " alt="" />
        <img src={imgClient4} className="h-10 md:h-16 " alt="" />
        <img src={imgClient5} className="h-10 md:h-16 " alt="" />
        <img src={imgClient6} className="h-10 md:h-16 " alt="" />
        <img src={imgClient7} className="h-10 md:h-16 " alt="" />
        <img src={imgClient8} className="h-10 md:h-16 " alt="" />
        <img src={imgClient9} className="h-10 md:h-20 " alt="" />
        <img src={imgClient10} className="h-10 md:h-16 " alt="" />
        <img src={imgClient11} className="h-10 md:h-16 " alt="" />
      </div>
    </div>
  );
};

export default Client;
