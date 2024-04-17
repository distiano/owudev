import imgAbout from '../../assets/images/about.jpg';

const About = () => {
  return (
    <div className="py-10 px-6 sm:px-16">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-5 mt-5 sm:mt-0">Kodir: Wujudkan Impian Digital Anda</h2>

      <p className="text-center mt-3 text-sm sm:text-md lg:px-52">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi voluptate dolor tenetur fugit sed. Dignissimos expedita sed inventore delectus neque, ratione molestiae, omnis magnam optio deleniti est voluptates perferendis.
      </p>
      <div className="sm:grid grid-cols-3 mt-10">
        <div className="">
          <img src={imgAbout} alt="Tentang Kami" className="" style={{ width: '100%', height: '325px' }} data-wow-delay="0.2s" />
        </div>
        <div className="col-span-2 sm:pl-16">
          <div className="about-content mt-5 font-semibold fadeInRight" data-wow-delay="0.3s" style={{ textAlign: 'justify' }}>
            <div className="flex items-center">
              <h6 className="p-8 size-1 bg-black rounded-full flex items-center justify-center font-bold text-white text-2xl">1</h6>
              <p className="pl-10 text-sm sm:text-md">Kodir adalah tim web developer yang berbasis di Tembalang, Semarang. kami menggabungkan semangat dan pengetahuan kami untuk memberikan solusi digital yang inovatif dan bermanfaat.</p>
            </div>
            <div className="flex items-center mt-5">
              <h6 className="p-8 size-1 bg-gradient-to-r from-indigo-900 to-violet-500 rounded-full flex items-center justify-center font-bold text-white text-2xl">2</h6>
              <p className=" pl-10 text-sm sm:text-md">
                Kami memahami pentingnya kualitas dan inovasi dalam dunia pengembangan web. Tim Kodir berkomitmen untuk menghadirkan solusi yang tidak hanya berfungsi dengan baik, tetapi juga memberikan pengalaman yang memukau kepada
                pengguna. Dengan penggabungan pengetahuan akademis dan ketekunan kami, kami menciptakan solusi yang inovatif dan sesuai dengan perkembangan teknologi terbaru.
              </p>
            </div>
            <div className="flex items-center mt-5">
              <h6 className="p-8 size-1 bg-black rounded-full flex items-center justify-center font-bold text-white text-2xl">3</h6>
              <p className="pl-10 text-sm sm:text-md">
                Dengan kombinasi antara kreativitas dan teknologi, kami menghadirkan pengalaman web yang unik dan berfokus pada kebutuhan Anda. Tim kami, yang terdiri dari para developer yang berdedikasi, siap menjembatani visi Anda menjadi
                solusi yang sesuai.
              </p>
            </div>

            <p className="mt-5 text-sm sm:text-md">Mari bergabung dalam perjalanan digital bersama kami, dan mari bersama-sama menciptakan transformasi digital untuk bisnis Anda.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
