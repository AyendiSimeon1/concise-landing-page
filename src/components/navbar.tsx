
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="mr-2"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#4A90E2" />
            <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <span className="text-xl font-bold text-navy-900">Consize</span>
      </div>
      <div className="flex items-center space-x-8">
        <Link to='/request-quote'>
          <button className='px-4 py-2 font-semibold text-white bg-navy-900 rounded-m hover:bg-navy-900'>
            Request A Quote
          </button>
        </Link>
      </div>
    </nav>
  );
};



export default Navbar;