
const Footer = () => {
  return (
    <footer className=" text-dark py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Konsize. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
          Privacy Policy 
          </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
