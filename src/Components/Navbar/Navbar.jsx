import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo owudev2.png';
import logo2 from '../../assets/images/logoremovebg3.png';
import './navbar.css';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Portofolio', href: '/portofolio' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (href) => location.pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white' : ''}`} style={{ transition: 'background-color 0.3s ease' }}>
      <nav className="flex items-center justify-between p-3 lg:px-8 shadow" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="">
            <span className="sr-only">Your Company</span>
            <div className=" font-bold text-blue-500">
              <img src={logo} className="h-7 md:h-10 size-full " alt="" />
            </div>{' '}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className={`h-6 w-6 ${isScrolled ? 'text-black' : 'text-gray-700'} `} aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 ">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className={`text-sm font-bold underline-animation ${isActive(item.href) ? 'active text-blue-700' : 'text-gray-900'} hover:text-blue-700 transition duration-300 ease-in-out`}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden opacity-0 lg:flex lg:flex-1 lg:justify-end ">
          <Link to="#" className="bg-blue-500 px-3 py-2 rounded-2xl w-48 text-sm font-semibold leading-6 text-white text-center hover:bg-blue-800 transition duration-300 ease-in-out">
            Order Now <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  ${isActive(item.href) ? 'text-blue-500' : 'text-gray-900'} hover:text-blue-500 transition duration-300 ease-in-out`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
