import { FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';
import background from '../../assets/images/bg.jpg';
import hero from '../../assets/images/hero.png';

const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div className="relative isolate px-6 lg:px-16 flex items-center hero min-h-screen bg-gray-800 bg-opacity-25 ">
        <div className="absolute end-0 bottom-0 float-end hidden sm:flex">
          <img src={hero} alt="" />
        </div>
        <div className="mt-12 max-w-3xl sm:bg-gray-800 sm:bg-opacity-25 sm:backdrop-blur-lg p-8 rounded-lg text-white">
          <div className="hidden mt-8 sm:mb-8 sm:flex">
            <div className="relative rounded-full px-3 text-sm leading-6  ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center sm:text-start">
            <h1 className="text-4xl font-bold tracking-tight">Make your digital dreams come true</h1>
            <p className="mt-6 text-lg leading-8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div className="mt-10 flex items-center justify-center sm:justify-normal gap-x-6">
              <a
                href="#"
                className="rounded-lg bg-gradient-to-r from-indigo-900 to-violet-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="justify-center sm:justify-start flex mt-10">
            <h6 className="text-sm font-semibold text-gray-300">Find Us:</h6>
            <div className="bg-slate-500 bg-opacity-50 p-1 rounded-lg mx-2">
              <FaWhatsapp style={{ color: '#25D366' }} />
            </div>
            <div className="bg-slate-500 bg-opacity-50 p-1 rounded-lg mx-2">
              <FaInstagram style={{ color: '#c32aa3' }} />
            </div>
            <div className="bg-slate-500 bg-opacity-50 p-1 rounded-lg mx-2">
              <FaGithub style={{ color: 'black' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
