import imgClient1 from '../../assets/images/client1.png';
import imgClient2 from '../../assets/images/client2.png';
import imgClient3 from '../../assets/images/client3.png';
import imgClient4 from '../../assets/images/client4.png';
3;
const Client = () => {
  return (
    <div className="py-10  ">
      <div className="">
        <div className="flex items-center justify-center ">
          <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 mr-4"></div>
          <h1 className="text-3xl font-bold text-center">Client Kami</h1>
          <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 ml-4"></div>
        </div>
        <p className="text-center mt-3 text-sm sm:text-md lg:px-52 text-gray-600">Kepercayaan pelanggan adalah kebanggaan kami. Para pelanggan mempercayakan pengembangan website bersama kami. Kini saatnya anda menjadi bagian dari kami. </p>
      </div>
      <marquee behavior="" direction="left"></marquee>
      <div className="flex justify-center gap-5 sm:gap-10">
        <img src={imgClient1} className="h-16 sm:h-28" alt="" />
        <img src={imgClient2} className="h-16 sm:h-28" alt="" />
        <img src={imgClient3} className="h-16 sm:h-28" alt="" />
        <img src={imgClient4} className="h-16 sm:h-28" alt="" />
      </div>
    </div>
  );
};

export default Client;
