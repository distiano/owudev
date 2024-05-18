import imgAbout from '../../assets/images/ppp.png';
import { FaComputer, FaUsers, FaLightbulb } from 'react-icons/fa6';

import { useEffect } from 'react';

const About = () => {
  return (
    <div className="py-10 px-6 sm:px-16 ">
      {/* data-aos="fade-up" data-aos-duration="3000" */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-5 mt-5 sm:mt-0">Owudev: Partner Solusi Digital Anda</h2>
      <p className="text-center mt-3 text-gray-600 text-sm  lg:px-52">
        Kami adalah tim yang bersemangat dalam menciptakan solusi digital yang inovatif. Dengan gabungan kreativitas dan keahlian teknis, kami telah berhasil menghasilkan produk-produk yang memukau.{' '}
      </p>
      <div className=" mt-10 text-gray-600 lg:grid grid-cols-2 mb-10 items-center">
        <div className="flex justify-center order-1 sm:order-2">
          <img src={imgAbout} className="size-80 sm:size-auto" alt="" />
        </div>
        <div className=" fadeInRight  order-2 sm:order-1 mt-5 md:mt-0" data-wow-delay="0.3s">
          <div className="flex items-start md:items-center gap-5">
            <div className="text-2xl bg-black px-5 py-3 size-12 rounded-2xl text-white flex items-center justify-center font-bold">1</div>
            <p className=" text-sm sm:text-base ">Owudev adalah tim web developer yang berbasis di Jepara, Jawa Tengah. Kami menggabungkan semangat dan pengetahuan kami untuk memberikan solusi digital yang inovatif dan bermanfaat.</p>
          </div>
          <div className="flex items-start md:items-center mt-5 gap-5">
            <div className="text-2xl bg-blue-500 px-5 py-3 size-12 rounded-2xl text-white flex items-center justify-center font-bold">2</div>
            <p className=" text-sm sm:text-base ">
              Kami memahami pentingnya kualitas dan inovasi dalam dunia pengembangan web. Owudev berkomitmen untuk menghadirkan solusi yang tidak hanya berfungsi dengan baik, tetapi juga memberikan pengalaman yang memukau kepada pengguna.
              Dengan penggabungan pengetahuan akademik dan ketekunan kami, kami menciptakan solusi yang inovatif dan sesuai dengan perkembangan teknologi terbaru.
            </p>
          </div>
          <div className="flex items-start md:items-center mt-5 gap-5">
            <div className="text-2xl bg-black px-5 py-3 size-12 rounded-2xl text-white flex items-center justify-center font-bold">3</div>
            <p className=" text-sm sm:text-base ">
              Dengan kombinasi antara kreativitas dan teknologi, kami menghadirkan pengalaman web yang unik dan berfokus pada kebutuhan Anda. Tim kami yang terdiri dari para developer yang berdedikasi, siap menjembatani visi Anda menjadi
              solusi yang sesuai.
            </p>
          </div>
          <p className="mt-5 text-sm sm:text-base">Mari menjadi partner dalam perjalanan digital bersama kami untuk menciptakan transformasi digital bagi bisnis Anda.</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 mt-10 sm:mt-0">
        <div className="p-5 rounded-2xl" style={{ boxShadow: ' 1px 4px 4px 4px #00000040' }}>
          <div className="flex items-center gap-5">
            <div className="bg-blue-500 size-12 rounded-2xl text-white flex items-center justify-center">
              <FaComputer className="size-7" />
            </div>
            <h5 className="font-bold">Pengembangan Digital</h5>
          </div>
          <p className="text-gray-600 text-sm mt-3">Seorang programmer di tim kami bertanggung jawab untuk merancang dan mengembangkan website serta aplikasi yang memenuhi kebutuhan klien kami Untuk memastikan performa yang signifikan.</p>
        </div>
        <div className="p-5 rounded-2xl" style={{ boxShadow: ' 1px 4px 4px 4px #00000040' }}>
          <div className="flex items-center gap-5">
            <div className="bg-blue-500 size-12 rounded-2xl text-white flex items-center justify-center">
              <FaUsers className="size-7" />
            </div>
            <h5 className="font-bold">Kolaborasi Tim</h5>
          </div>
          <p className="text-gray-600 text-sm mt-3">Kami mengutamakan kolaborasi dalam tim. Seorang programmer berkolaborasi dengan tim desain, pengembang front-end, dan anggota tim lainnya untuk mencapai kebutuhan klien.</p>
        </div>
        <div className="p-5 rounded-2xl" style={{ boxShadow: ' 1px 4px 4px 4px #00000040' }}>
          <div className="flex items-center gap-5">
            <div className="bg-blue-500 size-12 rounded-2xl text-white flex items-center justify-center">
              <FaLightbulb className="size-7" />
            </div>
            <h5 className="font-bold">Inovasi dan Pemecahan Masalah</h5>
          </div>
          <p className="text-gray-600 text-sm mt-3">Kami mengedepankan inovasi dan kreativitas dalam setiap proyek yang kami kerjakan. Seorang programmer juga harus memiliki kemampuan untuk memecahkan masalah dengan cepat dan efisien.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
