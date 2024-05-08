import { CgWebsite } from 'react-icons/cg';
import { FaMobileAlt, FaGuitar, FaRegCheckCircle } from 'react-icons/fa';
import { GrVirtualMachine } from 'react-icons/gr';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import imgAbout from '../../assets/images/gambar3.png';
import paket1 from '../../assets/images/compro.png';
import { Link } from 'react-router-dom';
import html from '../../assets/images/tools/html.png';
import css from '../../assets/images/tools/css.png';
import js from '../../assets/images/tools/javascript.png';
import tailwind from '../../assets/images/tools/tailwind.png';
import reactjs from '../../assets/images/tools/reactjs.png';
import nextjs from '../../assets/images/tools/nextjs.png';
import expressjs from '../../assets/images/tools/expressjs.png';
import laravel from '../../assets/images/tools/laravel.png';
import codeigniter from '../../assets/images/tools/codeigniter.png';
import firebase from '../../assets/images/tools/firebase (2).png';
import mongodb from '../../assets/images/tools/mongodb.png';
import mysql from '../../assets/images/tools/mysql.png';

const Services = () => {
  return (
    <div className="py-10 px-6 sm:px-16 background-content" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(115, 217, 255, 0.5) 50%, rgba(255, 255, 255, 0.5) 100%)' }}>
      <div className="flex items-center justify-center">
        <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 mr-4"></div>
        <h1 className="text-3xl font-bold text-center">Produk Kami</h1>
        <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 ml-4"></div>
      </div>{' '}
      <p className="text-center mt-3 text-sm sm:text-md lg:px-52 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi voluptate dolor tenetur fugit sed. Dignissimos expedita sed inventore delectus neque, ratione molestiae, omnis magnam optio deleniti est voluptates perferendis.
      </p>
      <div className="mt-10 grid lg:grid-cols-2 gap-6">
        <div className="p-6 text-sm rounded-lg bg-blue-200 flex gap-5 shadow-lg justify-between items-center ">
          <div className="">
            <CgWebsite className="size-8" />
            <h3 className="font-bold mt-3">Website Developer</h3>
          </div>
          <div>
            <p className="text-gray-600">
              Layanan ini mencakup pengembangan dan pembuatan situs web yang responsif dan menarik. Kami menggunakan teknologi terbaru untuk memastikan situs web Anda memiliki tampilan yang kreatif, fungsional, dan sesuai dengan kebutuhan
              bisnis Anda.
            </p>
          </div>
          <div className="hidden lg:flex">
            <FaArrowUpRightFromSquare className="size-6 text-slate-400" />
          </div>
        </div>
        <div className="p-6 text-sm rounded-lg bg-blue-200 flex gap-5 shadow-lg justify-between items-center ">
          <div className="">
            <FaMobileAlt className="size-8" />
            <h3 className="font-bold mt-3">Mobile Developer</h3>
          </div>
          <div>
            <p className="text-gray-600">
              Layanan kami mencakup pengembangan aplikasi mobile inovatif untuk platform iOS dan Android, dengan fokus pada pengalaman pengguna yang unggul dan kinerja optimal, kami membantu Anda menghadirkan aplikasi yang memenuhi
              kebutuhan Anda dan mencapai tujuan bisnis Anda.
            </p>
          </div>
          <div className="hidden lg:flex">
            <FaArrowUpRightFromSquare className="size-6 text-slate-400" />
          </div>
        </div>
        <div className="p-6 text-sm rounded-lg bg-blue-200 flex gap-5 shadow-lg justify-between items-center ">
          <div className="">
            <GrVirtualMachine className="size-8" />
            <h3 className="font-bold mt-3">Virtual Application</h3>
          </div>
          <div>
            <p className="text-gray-600">
              Solusi pembuatan virtual showroom kami memungkinkan Anda memamerkan produk dalam lingkungan 3D yang realistis, memberikan pengalaman interaktif kepada pelanggan tanpa perlu datang ke lokasi fisik, dengan teknologi canggih
              untuk menciptakan presentasi produk yang memukau.
            </p>
          </div>
          <div className="hidden lg:flex">
            <FaArrowUpRightFromSquare className="size-6 text-slate-400" />
          </div>
        </div>
        <div className="p-6 text-sm rounded-lg bg-blue-200 flex gap-5 shadow-lg justify-between items-center ">
          <div className="">
            <FaGuitar className="size-8" />
            <h3 className="font-bold mt-3">Game Developer</h3>
          </div>
          <div>
            <p className="text-gray-600">Kami mengembangkan game menarik untuk berbagai platform, dari PC hingga perangkat mobile, dengan desain kreatif, gameplay adiktif, dan grafis memukau, menciptakan pengalaman game tak terlupakan.</p>
          </div>
          <div className="hidden lg:flex">
            <FaArrowUpRightFromSquare className="size-6 text-slate-400" />
          </div>
        </div>
      </div>
      {/* Tools */}
      <div className="flex flex-wrap pt-10 gap-5 justify-center">
        <img src={html} className="h-16" alt="" />
        <img src={css} className="h-16" alt="" />
        <img src={js} className="h-16" alt="" />
        <img src={reactjs} className="h-16" alt="" />
        <img src={nextjs} className="h-16" alt="" />
        <img src={expressjs} className="h-16" alt="" />
        <img src={tailwind} className="h-16" alt="" />
        <img src={laravel} className="h-16" alt="" />
        <img src={codeigniter} className="h-16" alt="" />
        <img src={firebase} className="h-16" alt="" />
        <img src={mongodb} className="h-16" alt="" />
        <img src={mysql} className="h-16" alt="" />
      </div>
      {/* Produk Layanan */}
      <div className="py-16">
        <div className="flex items-center justify-center ">
          <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 mr-4"></div>
          <h1 className="text-3xl font-bold text-center">Layanan Kami</h1>
          <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 ml-4"></div>
        </div>
        <p className="text-center mt-3 text-sm sm:text-md lg:px-52 text-gray-600">
          Kami menyediakan berbagai jenis kategori website yang bisa Anda pilih sesuai kebutuhan bisnis Anda. Masing-masing kategori website memiliki perbedaan dari fasilitas, harga, desain, fitur, dan fungsi.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-12 xl:gap-4">
        <div className="p-5 text-center rounded-2xl bg-white md:hover:scale-105 transition-transform duration-300" style={{ boxShadow: '1px 4px 4px 4px #00000040' }}>
          <h6 className="text-base text-gray-600">Paket Website</h6>
          <h4 className="text-xl font-bold mb-2">Company Profile</h4>
          <small className="text-xs text-gray-600">Profil bisnis perusahaan, UMKM</small>
          <div className="flex justify-center">
            <img src={paket1} alt="" />
          </div>
          <p className="text-sm font-bold">Start From : </p>
          <div className="flex gap-2 justify-center items-center mt-3">
            <h6 className="font-bold text-sm line-through">Rp 1.000.000</h6>
            <h6 className="bg-red-500 text-sm text-white px-5 py-1 rounded-2xl font-bold">Diskon 15%</h6>
          </div>
          <h3 className="text-blue-500 text-3xl font-bold mt-3">Rp 850.000</h3>
          <div className=" mt-5 ">
            <div className="flex justify-between items-center mt-2 ">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Gratis Domain</p>
              </div>
              <p className="text-xs font-semibold">.com / .id / dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">SSL/HTTPS</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Hosting</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>

            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Web</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Responsive</p>
              </div>
              <p className="text-xs font-semibold">Ya</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center ">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Fitur Chat Whatsapp</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Bandwidth</p>
              </div>
              <p className="text-xs font-semibold">100 GB</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Support</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Garansi</p>
              </div>
              <p className="text-xs font-semibold">1 Tahun</p>
            </div>
          </div>
          <p className="text-blue-500 text-xs mt-3 font-semibold">Perpanjangan Mulai</p>
          <h3 className="text-blue-500 text-2xl font-bold mt-3">Rp 300 Ribu/Tahun</h3>
          <button className="mt-4 bg-blue-500 text-white w-56 h-11 rounded-2xl font-bold hover:bg-blue-800 transition duration-300 ease-in-out">Pilih Paket</button>
        </div>
        <div className="p-5 text-center rounded-2xl bg-white md:hover:scale-105 transition-transform duration-300" style={{ boxShadow: '1px 4px 4px 4px #00000040' }}>
          <h6 className="text-base text-gray-600">Paket Website</h6>
          <h4 className="text-xl font-bold mb-2">E-Commerce</h4>
          <small className="text-xs text-gray-600">Toko online, Katalog</small>
          <div className="flex justify-center">
            <img src={paket1} alt="" />
          </div>
          <p className="text-sm font-bold">Start From : </p>
          <div className="flex gap-2 justify-center items-center mt-3">
            <h6 className="font-bold text-sm line-through">Rp 2.000.000</h6>
            <h6 className="bg-red-500 text-sm text-white px-5 py-1 rounded-2xl font-bold">Diskon 20%</h6>
          </div>
          <h3 className="text-blue-500 text-3xl font-bold mt-3">Rp 1.500.000</h3>
          <div className=" mt-5 ">
            <div className="flex justify-between items-center mt-2 ">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Gratis Domain</p>
              </div>
              <p className="text-xs font-semibold">.com / .id / dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">SSL/HTTPS</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Hosting</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>

            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Web</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Responsive</p>
              </div>
              <p className="text-xs font-semibold">Ya</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center ">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Fitur Chat Whatsapp</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Bandwidth</p>
              </div>
              <p className="text-xs font-semibold">100 GB</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Support</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Garansi</p>
              </div>
              <p className="text-xs font-semibold">1 Tahun</p>
            </div>
          </div>
          <p className="text-blue-500 text-xs mt-3 font-semibold">Perpanjangan Mulai</p>
          <h3 className="text-blue-500 text-2xl font-bold mt-3">Rp 300 Ribu/Tahun</h3>
          <button className="mt-4 bg-blue-500 text-white w-56 h-11 rounded-2xl font-bold hover:bg-blue-800 transition duration-300 ease-in-out">Pilih Paket</button>
        </div>
        <div className="p-5 text-center rounded-2xl bg-white md:hover:scale-105 transition-transform duration-300" style={{ boxShadow: '1px 4px 4px 4px #00000040' }}>
          <h6 className="text-base text-gray-600">Paket Website</h6>
          <h4 className="text-xl font-bold mb-2">Virtual Showroom</h4>
          <small className="text-xs text-gray-600">3D Virtual Showroom</small>
          <div className="flex justify-center">
            <img src={paket1} alt="" />
          </div>
          <p className="text-sm font-bold">Start From : </p>
          <div className="flex gap-2 justify-center items-center mt-3">
            <h6 className="font-bold text-sm line-through">Rp 3.150.000</h6>
            <h6 className="bg-red-500 text-sm text-white px-5 py-1 rounded-2xl font-bold">Diskon 25%</h6>
          </div>
          <h3 className="text-blue-500 text-3xl font-bold mt-3">Rp 2.500.000</h3>
          <div className=" mt-5 ">
            <div className="flex justify-between items-center mt-2 ">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Gratis Domain</p>
              </div>
              <p className="text-xs font-semibold">.com / .id / dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">SSL/HTTPS</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Hosting</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>

            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">3D Modelling</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Responsive</p>
              </div>
              <p className="text-xs font-semibold">Ya</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center ">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Fitur Chat Whatsapp</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Bandwidth</p>
              </div>
              <p className="text-xs font-semibold">Unlimited</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Support</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Garansi</p>
              </div>
              <p className="text-xs font-semibold">1 Tahun</p>
            </div>
          </div>
          <p className="text-blue-500 text-xs mt-3 font-semibold">Perpanjangan Mulai</p>
          <h3 className="text-blue-500 text-2xl font-bold mt-3">Rp 500 Ribu/Tahun</h3>
          <button className="mt-4 bg-blue-500 text-white w-56 h-11 rounded-2xl font-bold hover:bg-blue-800 transition duration-300 ease-in-out">Pilih Paket</button>
        </div>
        <div className="p-5 text-center rounded-2xl bg-white md:hover:scale-105 transition-transform duration-300" style={{ boxShadow: '1px 4px 4px 4px #00000040' }}>
          <h6 className="text-base text-gray-600">Paket Website</h6>
          <h4 className="text-xl font-bold mb-2">Custom</h4>
          <small className="text-xs text-gray-600">Website Custom</small>
          <div className="flex justify-center">
            <img src={paket1} alt="" />
          </div>
          <p className="text-sm font-bold">Start From : </p>
          <div className="flex gap-2 justify-center items-center mt-3">
            <h6 className="font-bold text-sm line-through">Rp 5.200.000</h6>
            <h6 className="bg-red-500 text-sm text-white px-5 py-1 rounded-2xl font-bold">Diskon 30%</h6>
          </div>
          <h3 className="text-blue-500 text-3xl font-bold mt-3">Rp 4.000.000</h3>
          <div className=" mt-5 ">
            <div className="flex justify-between items-center mt-2 ">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Gratis Domain</p>
              </div>
              <p className="text-xs font-semibold">.com / .id / dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">SSL/HTTPS</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Hosting</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>

            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Web</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Responsive</p>
              </div>
              <p className="text-xs font-semibold">Ya</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center ">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Fitur Chat Whatsapp</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Bandwidth</p>
              </div>
              <p className="text-xs font-semibold">Unlimited</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Support</p>
              </div>
              <p className="text-xs font-semibold">Gratis</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Garansi</p>
              </div>
              <p className="text-xs font-semibold">1 Tahun</p>
            </div>
          </div>
          <p className="text-blue-500 text-xs mt-3 font-semibold">Perpanjangan Mulai</p>
          <h3 className="text-blue-500 text-2xl font-bold mt-3">Rp 1 Juta/Tahun</h3>
          <button className="mt-4 bg-blue-500 text-white w-56 h-11 rounded-2xl font-bold hover:bg-blue-800 transition duration-300 ease-in-out">Pilih Paket</button>
        </div>
      </div>
      {/* KelebiihN */}
      <div className="py-16">
        <div className="flex items-center justify-center ">
          <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 mr-4"></div>
          <h1 className="text-3xl font-bold text-center">Kelebihan Kami</h1>
          <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 ml-4"></div>
        </div>
        <p className="text-center mt-3 text-sm sm:text-md lg:px-52 text-gray-600">
          Kami menyediakan berbagai jenis kategori website yang bisa Anda pilih sesuai kebutuhan Anda. Masing-masing kategori website memiliki perbedaan dari fasilitas, harga, desain, fitur dan fungsi.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-10 xl:gap-0 items-center">
        <div>
          <img src={imgAbout} className="size-auto" alt="" />
        </div>
        <div>
          <div className="mt-10">
            <h1 className="text-2xl font-bold">Desain Responsif dan Menarik</h1>
            <p className="text-gray-600 mt-3">Kami menyediakan desain website yang responsif dan menarik, sehingga situs Anda terlihat hebat dan berfungsi sempurna di semua perangkat.</p>
          </div>
          <div className="mt-7">
            <h1 className="text-2xl font-bold">DDOS/SQL Injection Protection</h1>
            <p className="text-gray-600 mt-3">Situs web Anda dilindungi dari serangan DDoS dan SQL Injection, memastikan keamanan dan ketersediaan yang tinggi.</p>
          </div>
          <div className="mt-7">
            <h1 className="text-2xl font-bold">UI/UX Mudah Digunakan</h1>
            <p className="text-gray-600 mt-3">Antarmuka pengguna yang intuitif dan pengalaman pengguna yang mudah digunakan memastikan pengunjung situs dapat menavigasi dengan lancar dan efisien.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
