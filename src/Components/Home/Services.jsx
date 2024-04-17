import { CgWebsite } from 'react-icons/cg';
import { FaMobileAlt, FaGuitar } from 'react-icons/fa';
import { GrVirtualMachine } from 'react-icons/gr';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Services = () => {
  return (
    <div className="py-10 px-6 sm:px-16">
      <div className="flex items-center justify-center">
        <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 mr-4"></div>
        <h1 className="text-3xl font-bold text-center">What's We Do</h1>
        <div className="w-1/5 sm:w-1/4 border-t border-indigo-900 ml-4"></div>
      </div>{' '}
      <p className="text-center mt-3 text-sm sm:text-md lg:px-52">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi voluptate dolor tenetur fugit sed. Dignissimos expedita sed inventore delectus neque, ratione molestiae, omnis magnam optio deleniti est voluptates perferendis.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        <div className="p-6 text-sm rounded-lg bg-violet-200 flex shadow-lg items-center ">
          <div className=" w-32">
            <CgWebsite className="size-8" />
            <h3 className="font-bold mt-3">Website Developer</h3>
          </div>
          <p className="ml-5 sm:ml-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, fugit?</p>
          <FaArrowUpRightFromSquare className="size-6 text-slate-400" />
        </div>
        <div className="p-6 text-sm rounded-lg bg-violet-200 flex shadow-lg items-center ">
          <div className=" w-32">
            <FaMobileAlt className="size-8" />
            <h3 className="font-bold mt-3">Mobile Developer</h3>
          </div>
          <p className="ml-5 sm:ml-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, fugit?</p>
          <FaArrowUpRightFromSquare className="size-6 text-slate-400" />
        </div>
        <div className="p-6 text-sm rounded-lg bg-violet-200 flex shadow-lg items-center ">
          <div className=" w-32">
            <GrVirtualMachine className="size-8" />
            <h3 className="font-bold mt-3">Virtual Application </h3>
          </div>
          <p className="ml-5 sm:ml-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, fugit?</p>
          <FaArrowUpRightFromSquare className="size-6 text-slate-400" />
        </div>
        <div className="p-6 text-sm rounded-lg bg-violet-200 flex shadow-lg items-center ">
          <div className=" w-32">
            <FaGuitar className="size-8" />
            <h3 className="font-bold mt-3">Ngeband </h3>
          </div>
          <p className="ml-5 sm:ml-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, fugit?</p>
          <FaArrowUpRightFromSquare className="size-6 text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default Services;
