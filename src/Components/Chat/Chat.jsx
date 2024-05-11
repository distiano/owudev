import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Chat = () => {
  return (
    <div className="fixed bottom-6 right-6">
      <Link to="#">
        <button className=" flex items-center justify-center gap-3 bg-[#25d366] px-5 py-3 rounded-2xl  font-semibold  text-white hover:bg-[#128c7e] transition duration-300 ease-in-out">
          Contact
          <span>
            <FaWhatsapp className="size-5" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Chat;
