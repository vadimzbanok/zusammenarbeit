import { Link } from 'react-router-dom';
import logo from "../../public/images/Online-shop-black.png";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 text-center">
      <div className="max-w-screen-lg mx-auto px-6 py-8 grid md:grid-cols-3 sm:grid-cols-1 gap-6 text-center">
        <div className="flex justify-center">
           <a href="#"><img className="h-40" src={logo} alt="Logo" /></a>
        </div>
        
        <div>
          <h3 className="text-black font-bold uppercase text-sm mb-2">Policies</h3>
          <Link to="/privacy" className="block hover:text-indigo-600 no-underline">Privacy Policy</Link>
          <a href="/#" className="block hover:text-indigo-600 no-underline">Conditions</a>
        </div>
        
        <div>
          <h3 className="text-black font-bold uppercase text-sm mb-2">Contact Us</h3>
          <p>Berlin, Hauptstraße 25, DCI Quarters</p>
          <p>contact@shopify.com</p>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <div className="flex flex-col items-center space-y-4 max-w-screen-lg mx-auto px-6">
          <p className="text-sm">© Copyright 2020. All Rights Reserved.</p>
          <div className="flex space-x-4 justify-center">
            <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600">
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
