import { CgWebsite } from 'react-icons/cg';
import { FaMobileAlt, FaGuitar, FaRegCheckCircle } from 'react-icons/fa';
import { GrVirtualMachine } from 'react-icons/gr';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import imgAbout from '../../assets/images/ppp.png';
import paket1 from '../../assets/images/imgpaket1.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="py-10 px-6 sm:px-16 background-content" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(115, 217, 255, 0.5) 50%, rgba(255, 255, 255, 0.5) 100%)' }}>
      <div className="flex items-center justify-center">
        <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 mr-4"></div>
        <h1 className="text-3xl font-bold text-center">What's We Do</h1>
        <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 ml-4"></div>
      </div>{' '}
      <p className="text-center mt-3 text-sm sm:text-md lg:px-52 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi voluptate dolor tenetur fugit sed. Dignissimos expedita sed inventore delectus neque, ratione molestiae, omnis magnam optio deleniti est voluptates perferendis.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        <div className="p-6 text-sm rounded-lg bg-blue-200 flex gap-5 shadow-lg justify-between items-center ">
          <div className="">
            <CgWebsite className="size-8" />
            <h3 className="font-bold mt-3">Website Developer</h3>
          </div>
          <div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit! Enim, fugit maiores eius illo hic ratione nam voluptas at voluptates assumenda, tempore iusto quisquam sunt unde cumque molestiae labore?
            </p>
          </div>
          <div>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit! Enim, fugit maiores eius illo hic ratione nam voluptas at voluptates assumenda, tempore iusto quisquam sunt unde cumque molestiae labore?
            </p>
          </div>
          <div>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit! Enim, fugit maiores eius illo hic ratione nam voluptas at voluptates assumenda, tempore iusto quisquam sunt unde cumque molestiae labore?
            </p>
          </div>
          <div>
            <FaArrowUpRightFromSquare className="size-6 text-slate-400" />
          </div>
        </div>
        <div className="p-6 text-sm rounded-lg bg-blue-200 flex gap-5 shadow-lg justify-between items-center ">
          <div className="">
            <FaGuitar className="size-8" />
            <h3 className="font-bold mt-3">Ngeband</h3>
          </div>
          <div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, impedit! Enim, fugit maiores eius illo hic ratione nam voluptas at voluptates assumenda, tempore iusto quisquam sunt unde cumque molestiae labore?
            </p>
          </div>
          <div>
            <FaArrowUpRightFromSquare className="size-6 text-slate-400" />
          </div>
        </div>
      </div>
      {/* Produk Layanan */}
      <div className="py-16">
        <div className="flex items-center justify-center ">
          <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 mr-4"></div>
          <h1 className="text-3xl font-bold text-center">Produk Layanan Kami</h1>
          <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 ml-4"></div>
        </div>
        <p className="text-center mt-3 text-sm sm:text-md lg:px-52 text-gray-600">
          Kami menyediakan berbagai jenis kategori website yang bisa Anda pilih sesuai kebutuhan Anda. Masing-masing kategori website memiliki perbedaan dari fasilitas, harga, desain, fitur dan fungsi.
        </p>
      </div>
      <div className="grid sm:grid-cols-4 gap-4">
        <div className="p-5 text-center rounded-2xl bg-white" style={{ boxShadow: '1px 4px 4px 4px #00000040' }}>
          <h6 className="text-base text-gray-600">Paket Website</h6>
          <h4 className="text-xl font-bold mb-2">Company Profile</h4>
          <small className="text-xs text-gray-600">Profile bisnis perusahaan, UMKM</small>
          <div className="flex justify-center">
            <img src={paket1} alt="" />
          </div>
          <p className="text-sm font-bold">Start From : </p>
          <div className="flex gap-2 justify-center items-center mt-3">
            <h6 className="font-bold text-sm line-through">Rp 1.500.000</h6>
            <h6 className="bg-red-500 text-sm text-white px-5 py-1 rounded-2xl font-bold">Diskon 25%</h6>
          </div>
          <h3 className="text-blue-500 text-4xl font-bold mt-3">Rp 1 Juta</h3>
          <div className=" mt-5 ">
            <div className="flex justify-between items-center mt-2 ">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Free Domain</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">SSL/HTTPS</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Hosting</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Responsive</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Logo</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Fitur Chat Whatsapp</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Bandwidth</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Support</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Garansi</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
          </div>
          <Link to="" className="flex items-center gap-1 text-xs text-gray-600 justify-center mt-3 font-semibold">
            Fitur Selengkapnya{' '}
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </Link>
          <p className="text-blue-500 text-xs mt-3 font-semibold">Perpanjangan Mulai</p>
          <h3 className="text-blue-500 text-2xl font-bold mt-3">Rp 400rb/tahun</h3>
          <button className="mt-4 bg-blue-500 text-white w-56 h-11 rounded-2xl font-bold">Pilih Paket</button>
        </div>
        <div className="p-5 text-center rounded-2xl bg-white" style={{ boxShadow: '1px 4px 4px 4px #00000040' }}>
          <h6 className="text-base text-gray-600">Paket Website</h6>
          <h4 className="text-xl font-bold mb-2">Company Profile</h4>
          <small className="text-xs text-gray-600">Profile bisnis perusahaan, UMKM</small>
          <div className="flex justify-center">
            <img src={paket1} alt="" />
          </div>
          <p className="text-sm font-bold">Start From : </p>
          <div className="flex gap-2 justify-center items-center mt-3">
            <h6 className="font-bold text-sm line-through">Rp 1.500.000</h6>
            <h6 className="bg-red-500 text-sm text-white px-5 py-1 rounded-2xl font-bold">Diskon 25%</h6>
          </div>
          <h3 className="text-blue-500 text-4xl font-bold mt-3">Rp 1 Juta</h3>
          <div className=" mt-5 ">
            <div className="flex justify-between items-center mt-2 ">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Free Domain</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">SSL/HTTPS</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Hosting</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Responsive</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Logo</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Fitur Chat Whatsapp</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Bandwidth</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Support</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Garansi</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
          </div>
          <Link to="" className="flex items-center gap-1 text-xs text-gray-600 justify-center mt-3 font-semibold">
            Fitur Selengkapnya{' '}
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </Link>
          <p className="text-blue-500 text-xs mt-3 font-semibold">Perpanjangan Mulai</p>
          <h3 className="text-blue-500 text-2xl font-bold mt-3">Rp 400rb/tahun</h3>
          <button className="mt-4 bg-blue-500 text-white w-56 h-11 rounded-2xl font-bold">Pilih Paket</button>
        </div>
        <div className="p-5 text-center rounded-2xl bg-white" style={{ boxShadow: '1px 4px 4px 4px #00000040' }}>
          <h6 className="text-base text-gray-600">Paket Website</h6>
          <h4 className="text-xl font-bold mb-2">Company Profile</h4>
          <small className="text-xs text-gray-600">Profile bisnis perusahaan, UMKM</small>
          <div className="flex justify-center">
            <img src={paket1} alt="" />
          </div>
          <p className="text-sm font-bold">Start From : </p>
          <div className="flex gap-2 justify-center items-center mt-3">
            <h6 className="font-bold text-sm line-through">Rp 1.500.000</h6>
            <h6 className="bg-red-500 text-sm text-white px-5 py-1 rounded-2xl font-bold">Diskon 25%</h6>
          </div>
          <h3 className="text-blue-500 text-4xl font-bold mt-3">Rp 1 Juta</h3>
          <div className=" mt-5 ">
            <div className="flex justify-between items-center mt-2 ">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Free Domain</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">SSL/HTTPS</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Hosting</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Responsive</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Logo</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Fitur Chat Whatsapp</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Bandwidth</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Support</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Garansi</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
          </div>
          <Link to="" className="flex items-center gap-1 text-xs text-gray-600 justify-center mt-3 font-semibold">
            Fitur Selengkapnya{' '}
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </Link>
          <p className="text-blue-500 text-xs mt-3 font-semibold">Perpanjangan Mulai</p>
          <h3 className="text-blue-500 text-2xl font-bold mt-3">Rp 400rb/tahun</h3>
          <button className="mt-4 bg-blue-500 text-white w-56 h-11 rounded-2xl font-bold">Pilih Paket</button>
        </div>
        <div className="p-5 text-center rounded-2xl bg-white" style={{ boxShadow: '1px 4px 4px 4px #00000040' }}>
          <h6 className="text-base text-gray-600">Paket Website</h6>
          <h4 className="text-xl font-bold mb-2">Company Profile</h4>
          <small className="text-xs text-gray-600">Profile bisnis perusahaan, UMKM</small>
          <div className="flex justify-center">
            <img src={paket1} alt="" />
          </div>
          <p className="text-sm font-bold">Start From : </p>
          <div className="flex gap-2 justify-center items-center mt-3">
            <h6 className="font-bold text-sm line-through">Rp 1.500.000</h6>
            <h6 className="bg-red-500 text-sm text-white px-5 py-1 rounded-2xl font-bold">Diskon 25%</h6>
          </div>
          <h3 className="text-blue-500 text-4xl font-bold mt-3">Rp 1 Juta</h3>
          <div className=" mt-5 ">
            <div className="flex justify-between items-center mt-2 ">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Free Domain</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">SSL/HTTPS</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Hosting</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Responsive</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Desain Logo</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Fitur Chat Whatsapp</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Bandwidth</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Support</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-3 items-center">
                <FaRegCheckCircle className="text-blue-500" /> <p className="text-xs text-gray-600 font-semibold">Garansi</p>
              </div>
              <p className="text-xs font-semibold">.com/ .my.id/ dll</p>
            </div>
          </div>
          <Link to="" className="flex items-center gap-1 text-xs text-gray-600 justify-center mt-3 font-semibold">
            Fitur Selengkapnya{' '}
            <span>
              <MdOutlineKeyboardArrowDown />
            </span>
          </Link>
          <p className="text-blue-500 text-xs mt-3 font-semibold">Perpanjangan Mulai</p>
          <h3 className="text-blue-500 text-2xl font-bold mt-3">Rp 400rb/tahun</h3>
          <button className="mt-4 bg-blue-500 text-white w-56 h-11 rounded-2xl font-bold">Pilih Paket</button>
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
      <div className="grid sm:grid-cols-2 items-center">
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
